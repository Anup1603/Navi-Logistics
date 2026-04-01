import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import type SMTPTransport from "nodemailer/lib/smtp-transport";
import { siteData } from "@/content/siteData";

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

interface ContactFormData {
  name: string;
  email?: string;
  phone: string;
  company?: string;
  service?: string;
  message: string;
}

interface MailerConfig {
  sender: string;
  senderName: string;
  recipient: string;
  transport: SMTPTransport.Options;
}

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */

/**
 * Escapes HTML special characters in user-supplied strings to prevent
 * injection when building the HTML email body.
 */
const escapeHtml = (value: string): string =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

/**
 * Parses a string env var into a boolean, with a caller-supplied fallback
 * when the variable is undefined.
 */
const parseBoolean = (value: string | undefined, fallback: boolean): boolean => {
  if (value === undefined) return fallback;
  return value.trim().toLowerCase() === "true";
};

/**
 * Determines the preferred SMTP auth method.
 * An explicit `SMTP_AUTH_METHOD` env var takes precedence; otherwise
 * Zoho hosts default to `LOGIN`.
 */
const getPreferredAuthMethod = (host: string): string | undefined => {
  const explicitMethod = process.env.SMTP_AUTH_METHOD?.trim();
  if (explicitMethod) return explicitMethod.toUpperCase();
  return /zoho/i.test(host) ? "LOGIN" : undefined;
};

/* ------------------------------------------------------------------ */
/*  Mailer configuration                                               */
/* ------------------------------------------------------------------ */

/**
 * Builds the Nodemailer transport options and identity settings from
 * environment variables.
 *
 * @throws {Error} When required SMTP credentials (`SMTP_USER`, `SMTP_PASS`,
 *   `SMTP_HOST`) are missing.
 */
const getMailerConfig = (): MailerConfig => {
  const smtpUser = process.env.SMTP_USER?.trim();
  const smtpPass = process.env.SMTP_PASS?.trim();
  const smtpHost = process.env.SMTP_HOST?.trim();

  if (!smtpUser || !smtpPass) {
    throw new Error(
      "SMTP_USER and SMTP_PASS environment variables must be set. " +
        "See .env.example for the expected format."
    );
  }

  if (!smtpHost) {
    throw new Error(
      "SMTP_HOST environment variable must be set (e.g. smtppro.zoho.in). " +
        "See .env.example for the expected format."
    );
  }

  const sender = process.env.EMAIL_FROM?.trim() || smtpUser;
  const senderName = process.env.EMAIL_FROM_NAME?.trim() || "Navi Logistics";
  const recipient =
    process.env.EMAIL_TO?.trim() || siteData.company.inquiryRecipientEmail;

  const parsedPort = Number(process.env.SMTP_PORT?.trim() || "465");
  const smtpPort = Number.isFinite(parsedPort) ? parsedPort : 465;
  const smtpSecure = parseBoolean(process.env.SMTP_SECURE, smtpPort === 465);
  const authMethod = getPreferredAuthMethod(smtpHost);

  return {
    sender,
    senderName,
    recipient,
    transport: {
      host: smtpHost,
      port: smtpPort,
      secure: smtpSecure,
      ...(authMethod && { authMethod }),
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
      // Connection timeout: 10 seconds.  Zoho is usually fast, but
      // this prevents the request from hanging indefinitely.
      connectionTimeout: 10_000,
      greetingTimeout: 10_000,
      socketTimeout: 15_000,
    },
  };
};

/* ------------------------------------------------------------------ */
/*  HTML email builder                                                 */
/* ------------------------------------------------------------------ */

const renderRow = (label: string, value: string): string => `
  <tr>
    <td style="padding:14px 0 8px;font-size:12px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:#6b7280;width:170px;vertical-align:top;border-bottom:1px solid #e5e7eb;">
      ${label}
    </td>
    <td style="padding:14px 0 8px;font-size:15px;line-height:1.6;color:#111827;border-bottom:1px solid #e5e7eb;">
      ${value}
    </td>
  </tr>
`;

const formatTimestamp = (): string =>
  new Date().toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
    dateStyle: "medium",
    timeStyle: "short",
  });

const getServiceLabel = (service: string | undefined): string => {
  if (!service?.trim()) {
    return "General Inquiry";
  }

  const normalizedService = service.trim();
  const matchedOption = siteData.contactPage.serviceOptions.find(
    (option) => option.value === normalizedService
  );

  if (matchedOption) {
    return matchedOption.label;
  }

  return normalizedService
    .split("-")
    .map((segment) => segment.charAt(0).toUpperCase() + segment.slice(1))
    .join(" ");
};

const getAbsoluteAssetUrl = (path: string): string =>
  encodeURI(`${siteData.seo.siteUrl}${path}`);

const renderHighlightCard = (label: string, value: string): string => `
  <td style="padding:0 6px 12px;">
    <table
      width="100%"
      cellspacing="0"
      cellpadding="0"
      style="background:#ffffff;border:1px solid #d7e3f0;border-radius:14px;"
    >
      <tr>
        <td style="padding:16px 16px 14px;">
          <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:#1d4ed8;">
            ${label}
          </div>
          <div style="margin-top:6px;font-size:15px;font-weight:600;line-height:1.5;color:#0f172a;">
            ${value}
          </div>
        </td>
      </tr>
    </table>
  </td>
`;

/**
 * Builds the full HTML email body from the (already-sanitised) form data.
 */
const buildEmailHtml = (
  safeName: string,
  safePhone: string,
  safeEmail: string,
  safeCompany: string,
  safeService: string,
  safeMessage: string,
  hasEmail: boolean,
  safeReceivedAt: string
): string => `
  <div style="display:none;max-height:0;overflow:hidden;opacity:0;color:transparent;">
    New website inquiry from ${safeName}. Service: ${safeService}. Phone: ${safePhone}.
  </div>

  <div style="background:#edf2f7;padding:32px 12px;font-family:Arial,Helvetica,sans-serif;">
    <table width="100%" cellspacing="0" cellpadding="0" role="presentation">
      <tr>
        <td align="center">
          <table
            width="640"
            cellspacing="0"
            cellpadding="0"
            role="presentation"
            style="width:100%;max-width:640px;background:#ffffff;border-radius:24px;overflow:hidden;box-shadow:0 18px 50px rgba(15,23,42,0.12);"
          >
            <tr>
              <td style="height:6px;background:#f59e0b;font-size:0;line-height:0;">&nbsp;</td>
            </tr>

            <tr>
              <td style="background:#0f2747;padding:28px 28px 18px;color:#ffffff;">
                <table width="100%" cellspacing="0" cellpadding="0" role="presentation">
                  <tr>
                    <td valign="top">
                      <table cellspacing="0" cellpadding="0" role="presentation">
                        <tr>
                          <td style="padding-right:14px;" valign="middle">
                            <img
                              src="${getAbsoluteAssetUrl(siteData.brand.circularLogo)}"
                              alt="${siteData.brand.name}"
                              width="56"
                              height="56"
                              style="display:block;border:0;border-radius:50%;background:#ffffff;padding:4px;"
                            />
                          </td>
                          <td valign="middle">
                            <div style="font-size:11px;font-weight:700;letter-spacing:0.16em;text-transform:uppercase;color:#fbbf24;">
                              New Website Lead
                            </div>
                            <div style="margin-top:6px;font-size:24px;font-weight:700;line-height:1.2;color:#ffffff;">
                              Contact Form Inquiry Received
                            </div>
                            <div style="margin-top:6px;font-size:14px;line-height:1.6;color:#dbe7f5;">
                              ${siteData.brand.name} • ${siteData.brand.tagline}
                            </div>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <tr>
              <td
                style="background:#0f2747;padding:0 22px 22px;"
              >
                <table width="100%" cellspacing="0" cellpadding="0" role="presentation">
                  <tr>
                    ${renderHighlightCard("Contact", safeName)}
                    ${renderHighlightCard("Service", safeService)}
                    ${renderHighlightCard("Received", safeReceivedAt)}
                  </tr>
                </table>
              </td>
            </tr>

            <tr>
              <td style="padding:30px 28px 12px;">
                <table
                  width="100%"
                  cellspacing="0"
                  cellpadding="0"
                  role="presentation"
                  style="background:#f8fafc;border:1px solid #dbe4f0;border-radius:18px;"
                >
                  <tr>
                    <td style="padding:18px 20px;">
                      <div style="font-size:12px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:#b45309;">
                        Lead Summary
                      </div>
                      <div style="margin-top:8px;font-size:16px;line-height:1.7;color:#1f2937;">
                        A new enquiry has been submitted through the website contact form. Review the request details below and follow up while the lead is still warm.
                      </div>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <tr>
              <td style="padding:0 28px 10px;">
                <table
                  width="100%"
                  cellpadding="0"
                  cellspacing="0"
                  role="presentation"
                  style="border-collapse:collapse;"
                >
                  ${renderRow("Name", safeName)}
                  ${renderRow("Phone", safePhone)}
                  ${renderRow("Email", safeEmail)}
                  ${renderRow("Company", safeCompany)}
                  ${renderRow("Service", safeService)}
                  ${renderRow("Received At", safeReceivedAt)}
                </table>
              </td>
            </tr>

            <tr>
              <td style="padding:14px 28px 0;">
                <table
                  width="100%"
                  cellspacing="0"
                  cellpadding="0"
                  role="presentation"
                  style="background:#fffaf0;border:1px solid #f2d6a2;border-radius:18px;"
                >
                  <tr>
                    <td style="padding:22px 22px 10px;">
                      <div style="font-size:12px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:#b45309;">
                        Customer Message
                      </div>
                      <div style="margin-top:10px;font-size:16px;line-height:1.8;color:#1f2937;">
                        ${safeMessage}
                      </div>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <tr>
              <td style="padding:18px 28px 6px;">
                ${
                  hasEmail
                    ? `<table
                        width="100%"
                        cellspacing="0"
                        cellpadding="0"
                        role="presentation"
                        style="background:#ecfdf3;border:1px solid #b7ebcd;border-radius:16px;"
                      >
                        <tr>
                          <td style="padding:16px 18px;font-size:14px;line-height:1.7;color:#166534;">
                            Reply directly to this email to respond to the sender at ${safeEmail}.
                          </td>
                        </tr>
                      </table>`
                    : ""
                }
              </td>
            </tr>

            <tr>
              <td style="padding:18px 28px 28px;">
                <table
                  width="100%"
                  cellspacing="0"
                  cellpadding="0"
                  role="presentation"
                  style="background:#f8fafc;border:1px solid #e5e7eb;border-radius:18px;"
                >
                  <tr>
                    <td style="padding:18px 20px;">
                      <div style="font-size:12px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:#0f2747;">
                        Company Contact
                      </div>
                      <div style="margin-top:8px;font-size:14px;line-height:1.8;color:#4b5563;">
                        ${siteData.company.phonePrimary} • ${siteData.company.email}<br />
                        ${siteData.company.addressLine1}, ${siteData.company.addressLine2}
                      </div>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <tr>
              <td style="background:#eef2f7;padding:18px 24px;text-align:center;">
                <div style="font-size:12px;line-height:1.7;color:#6b7280;">
                  This notification was generated from the ${siteData.brand.name} website contact form.<br />
                  &copy; ${new Date().getFullYear()} ${siteData.brand.name}. All rights reserved.
                </div>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </div>
`;

/* ------------------------------------------------------------------ */
/*  Validation helpers                                                 */
/* ------------------------------------------------------------------ */

const PHONE_MIN_DIGITS = 10;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const NAME_MAX_LENGTH = 200;
const MESSAGE_MAX_LENGTH = 5000;

/**
 * Validates the contact form payload and returns the first validation
 * error message, or `null` if everything looks good.
 */
const validateFormData = (body: ContactFormData): string | null => {
  if (!body.name?.trim() || !body.phone?.trim() || !body.message?.trim()) {
    return "Name, phone number, and message are required.";
  }

  if (body.name.trim().length > NAME_MAX_LENGTH) {
    return `Name must be ${NAME_MAX_LENGTH} characters or fewer.`;
  }

  if (body.message.trim().length > MESSAGE_MAX_LENGTH) {
    return `Message must be ${MESSAGE_MAX_LENGTH} characters or fewer.`;
  }

  const phoneDigits = body.phone.replace(/\D/g, "");
  if (phoneDigits.length < PHONE_MIN_DIGITS) {
    return "Please enter a valid phone number (at least 10 digits).";
  }

  if (body.email && !EMAIL_REGEX.test(body.email)) {
    return "Please enter a valid email address.";
  }

  return null;
};

/* ------------------------------------------------------------------ */
/*  Route handler                                                      */
/* ------------------------------------------------------------------ */

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();

    /* ---------- Input validation ---------- */
    const validationError = validateFormData(body);
    if (validationError) {
      return NextResponse.json({ error: validationError }, { status: 400 });
    }

    // console.log("[Contact] Form submission received:", {
    //   name: body.name,
    //   phone: body.phone,
    //   email: body.email || "(not provided)",
    //   service: body.service || "(not selected)",
    //   timestamp: new Date().toISOString(),
    // });

    /* ---------- Build transporter & email ---------- */
    const mailerConfig = getMailerConfig();
    const transporter = nodemailer.createTransport(mailerConfig.transport);

    // Verify SMTP connection before attempting to send.
    // Catches auth / network errors early with a clear log message.
    try {
      await transporter.verify();
      // console.log("[Contact] SMTP connection verified successfully.");
    } catch (verifyError) {
      console.error("[Contact] SMTP connection verification failed:", verifyError);
      return NextResponse.json(
        {
          error:
            "Our mail service is temporarily unavailable. Please try again in a few minutes or contact us directly at " +
            siteData.company.email +
            ".",
        },
        { status: 503 }
      );
    }

    /* ---------- Sanitise inputs ---------- */
    const receivedAt = formatTimestamp();
    const serviceLabel = getServiceLabel(body.service?.trim());
    const safeName = escapeHtml(body.name.trim());
    const safePhone = escapeHtml(body.phone.trim());
    const safeEmail = body.email ? escapeHtml(body.email.trim()) : "Not provided";
    const safeCompany = body.company
      ? escapeHtml(body.company.trim())
      : "Not provided";
    const safeService = escapeHtml(serviceLabel);
    const safeMessage = escapeHtml(body.message.trim()).replace(/\n/g, "<br>");
    const safeReceivedAt = escapeHtml(receivedAt);

    /* ---------- Send the email ---------- */
    const info = await transporter.sendMail({
      from: `"${mailerConfig.senderName}" <${mailerConfig.sender}>`,
      to: mailerConfig.recipient,
      subject: `New Contact Request - ${body.name.trim()}`,
      ...(body.email && { replyTo: body.email.trim() }),
      text: [
        "New contact form submission",
        `Name: ${body.name.trim()}`,
        `Phone: ${body.phone.trim()}`,
        `Email: ${body.email?.trim() || "Not provided"}`,
        `Company: ${body.company?.trim() || "Not provided"}`,
        `Service: ${serviceLabel}`,
        `Received At: ${receivedAt}`,
        "",
        "Message:",
        body.message.trim(),
      ].join("\n"),
      html: buildEmailHtml(
        safeName,
        safePhone,
        safeEmail,
        safeCompany,
        safeService,
        safeMessage,
        Boolean(body.email),
        safeReceivedAt
      ),
    });

    // console.log("[Contact] Email sent successfully. Message ID:", info.messageId);

    return NextResponse.json(
      {
        success: true,
        message: "Thank you for your message. We will get back to you soon!",
      },
      { status: 200 }
    );
  } catch (error: unknown) {
    // Log a structured error so debugging is easier in production.
    const errMessage =
      error instanceof Error ? error.message : "Unknown error";
    const errCode =
      error instanceof Error && "code" in error
        ? (error as Error & { code: string }).code
        : undefined;

    console.error("[Contact] Failed to process contact form:", {
      message: errMessage,
      code: errCode,
      timestamp: new Date().toISOString(),
    });

    // Surface a friendlier message for known SMTP issues.
    if (errCode === "EAUTH") {
      return NextResponse.json(
        {
          error:
            "Mail authentication failed. Please verify SMTP_HOST matches your Zoho data center and SMTP_PASS is an app password, or contact us directly at " +
            siteData.company.email +
            ".",
        },
        { status: 503 }
      );
    }

    if (errCode === "ESOCKET" || errCode === "ECONNECTION" || errCode === "ETIMEDOUT") {
      return NextResponse.json(
        {
          error:
            "Could not reach the mail server. Please try again in a moment or call us at " +
            siteData.company.phonePrimary +
            ".",
        },
        { status: 503 }
      );
    }

    return NextResponse.json(
      {
        error:
          "We could not deliver your message right now. Please try again later or contact us at " +
          siteData.company.email +
          ".",
      },
      { status: 500 }
    );
  }
}
