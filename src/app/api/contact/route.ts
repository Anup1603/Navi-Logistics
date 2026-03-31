import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import type SMTPTransport from "nodemailer/lib/smtp-transport";
import { siteData } from "@/content/siteData";

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

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

const parseBoolean = (value: string | undefined, fallback: boolean) => {
  if (value === undefined) {
    return fallback;
  }

  return value.trim().toLowerCase() === "true";
};

const getPreferredAuthMethod = (host: string) => {
  const explicitMethod = process.env.SMTP_AUTH_METHOD?.trim();

  if (explicitMethod) {
    return explicitMethod.toUpperCase();
  }

  return /zoho/i.test(host) ? "LOGIN" : undefined;
};

const getMailerConfig = (): MailerConfig => {
  const smtpUser =
    process.env.SMTP_USER?.trim() || process.env.EMAIL_USER?.trim();
  const smtpPass =
    process.env.SMTP_PASS?.trim() || process.env.EMAIL_PASS?.trim();

  if (!smtpUser || !smtpPass) {
    throw new Error("Email credentials are not configured");
  }

  const sender = process.env.EMAIL_FROM?.trim() || smtpUser;
  const senderName = process.env.EMAIL_FROM_NAME?.trim() || "Navi Logistics";
  const recipient =
    process.env.EMAIL_TO?.trim() || siteData.company.inquiryRecipientEmail;
  const smtpHost = process.env.SMTP_HOST?.trim();

  if (!smtpHost) {
    return {
      sender,
      senderName,
      recipient,
      transport: {
        service: "gmail",
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
      },
    };
  }

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
    },
  };
};

const renderRow = (label: string, value: string) => `
  <tr>
    <td style="padding:10px 0;font-weight:600;color:#4a5568;width:150px;">
      ${label}
    </td>
    <td style="padding:10px 0;color:#2d3748;">
      ${value}
    </td>
  </tr>
`;

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();

    if (!body.name || !body.phone || !body.message) {
      return NextResponse.json(
        { error: "Name, phone number, and message are required" },
        { status: 400 }
      );
    }

    const phoneDigits = body.phone.replace(/\D/g, "");
    if (phoneDigits.length < 10) {
      return NextResponse.json(
        { error: "Please enter a valid phone number" },
        { status: 400 }
      );
    }

    if (body.email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(body.email)) {
        return NextResponse.json(
          { error: "Invalid email format" },
          { status: 400 }
        );
      }
    }

    console.log("Contact form submission received:", {
      ...body,
      timestamp: new Date().toISOString(),
    });

    const mailerConfig = getMailerConfig();
    const transporter = nodemailer.createTransport(mailerConfig.transport);
    const safeName = escapeHtml(body.name);
    const safePhone = escapeHtml(body.phone);
    const safeEmail = body.email ? escapeHtml(body.email) : "Not provided";
    const safeCompany = body.company ? escapeHtml(body.company) : "Not provided";
    const safeService = body.service ? escapeHtml(body.service) : "Not specified";
    const safeMessage = escapeHtml(body.message).replace(/\n/g, "<br>");

    await transporter.sendMail({
      from: `"${mailerConfig.senderName}" <${mailerConfig.sender}>`,
      to: mailerConfig.recipient,
      subject: `New Contact Request - ${body.name}`,
      ...(body.email && { replyTo: body.email }),
      text: [
        "New contact form submission",
        `Name: ${body.name}`,
        `Phone: ${body.phone}`,
        `Email: ${body.email || "Not provided"}`,
        `Company: ${body.company || "Not provided"}`,
        `Service: ${body.service || "Not specified"}`,
        "",
        "Message:",
        body.message,
      ].join("\n"),
      html: `
        <div style="background:#f4f6f8;padding:30px 0;font-family:Arial,Helvetica,sans-serif;">
          <table width="100%" cellspacing="0" cellpadding="0">
            <tr>
              <td align="center">
                <table
                  width="600"
                  cellspacing="0"
                  cellpadding="0"
                  style="background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 8px 24px rgba(0,0,0,0.08);"
                >
                  <tr>
                    <td
                      style="background:linear-gradient(135deg,#1a365d,#2b6cb0);padding:24px;color:#ffffff;"
                    >
                      <h1 style="margin:0;font-size:22px;font-weight:600;">
                        New Contact Form Submission
                      </h1>
                      <p style="margin:6px 0 0;font-size:14px;opacity:0.9;">
                        Navi Logistics Website
                      </p>
                    </td>
                  </tr>

                  <tr>
                    <td style="padding:24px;">
                      <p style="font-size:15px;color:#2d3748;margin-top:0;">
                        A new inquiry has been received. Details are below:
                      </p>

                      <table
                        width="100%"
                        cellpadding="0"
                        cellspacing="0"
                        style="margin-top:16px;border-collapse:collapse;"
                      >
                        ${renderRow("Name", safeName)}
                        ${renderRow("Phone", safePhone)}
                        ${renderRow("Email", safeEmail)}
                        ${renderRow("Company", safeCompany)}
                        ${renderRow("Service", safeService)}
                      </table>

                      <div style="margin-top:24px;">
                        <h3 style="margin-bottom:10px;font-size:16px;color:#1a365d;">
                          Message
                        </h3>
                        <div
                          style="background:#f7fafc;border-left:4px solid #2b6cb0;padding:16px;border-radius:6px;color:#2d3748;line-height:1.6;"
                        >
                          ${safeMessage}
                        </div>
                      </div>

                      ${
                        body.email
                          ? `<p style="margin-top:20px;font-size:13px;color:#38a169;">
                              You can reply directly to this email to contact the sender.
                            </p>`
                          : ""
                      }
                    </td>
                  </tr>

                  <tr>
                    <td
                      style="background:#f8fafc;padding:16px;text-align:center;font-size:12px;color:#718096;"
                    >
                      <p style="margin:0;">
                        Received on ${new Date().toLocaleString("en-IN", {
                          timeZone: "Asia/Kolkata",
                        })}
                      </p>
                      <p style="margin:6px 0 0;">
                        Copyright ${new Date().getFullYear()} Navi Logistics
                      </p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </div>
      `,
    });

    console.log("Email sent successfully");

    return NextResponse.json(
      {
        success: true,
        message: "Thank you for your message. We will get back to you soon!",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      {
        error:
          "We could not deliver your message right now. Please try again later.",
      },
      { status: 500 }
    );
  }
}
