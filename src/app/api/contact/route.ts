import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

interface ContactFormData {
  name: string;
  email?: string;
  phone: string;
  company?: string;
  service?: string;
  message: string;
}

// Create reusable transporter
const createTransporter = () => {
  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
};

// Helper to render table rows safely
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

    // Required fields
    if (!body.name || !body.phone || !body.message) {
      return NextResponse.json(
        { error: "Name, phone number, and message are required" },
        { status: 400 }
      );
    }

    // Phone validation
    const phoneDigits = body.phone.replace(/\D/g, "");
    if (phoneDigits.length < 10) {
      return NextResponse.json(
        { error: "Please enter a valid phone number" },
        { status: 400 }
      );
    }

    // Email validation (optional)
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

    // Send Email
    try {
      const transporter = createTransporter();

      const mailOptions = {
        from: `"Navi Logistics" <${process.env.EMAIL_USER}>`,
        to: "akcs1618@gmail.com",
        subject: `📩 New Contact Request – ${body.name}`,
        ...(body.email && { replyTo: body.email }),
        html: `
        <div style="background:#f4f6f8;padding:30px 0;font-family:Arial,Helvetica,sans-serif;">
          <table width="100%" cellspacing="0" cellpadding="0">
            <tr>
              <td align="center">

                <table width="600" cellspacing="0" cellpadding="0"
                  style="background:#ffffff;border-radius:12px;overflow:hidden;
                  box-shadow:0 8px 24px rgba(0,0,0,0.08);">

                  <!-- Header -->
                  <tr>
                    <td style="background:linear-gradient(135deg,#1a365d,#2b6cb0);
                      padding:24px;color:#ffffff;">
                      <h1 style="margin:0;font-size:22px;font-weight:600;">
                        📩 New Contact Form Submission
                      </h1>
                      <p style="margin:6px 0 0;font-size:14px;opacity:0.9;">
                        Navi Logistics Website
                      </p>
                    </td>
                  </tr>

                  <!-- Content -->
                  <tr>
                    <td style="padding:24px;">
                      <p style="font-size:15px;color:#2d3748;margin-top:0;">
                        A new inquiry has been received. Details are below:
                      </p>

                      <table width="100%" cellpadding="0" cellspacing="0"
                        style="margin-top:16px;border-collapse:collapse;">
                        ${renderRow("👤 Name", body.name)}
                        ${renderRow("📞 Phone", body.phone)}
                        ${renderRow("✉️ Email", body.email || "Not provided")}
                        ${renderRow("🏢 Company", body.company || "Not provided")}
                        ${renderRow("🛠 Service", body.service || "Not specified")}
                      </table>

                      <div style="margin-top:24px;">
                        <h3 style="margin-bottom:10px;font-size:16px;color:#1a365d;">
                          📝 Message
                        </h3>
                        <div style="background:#f7fafc;border-left:4px solid #2b6cb0;
                          padding:16px;border-radius:6px;color:#2d3748;line-height:1.6;">
                          ${body.message.replace(/\n/g, "<br>")}
                        </div>
                      </div>

                      ${
                        body.email
                          ? `<p style="margin-top:20px;font-size:13px;color:#38a169;">
                              ✔ You can reply directly to this email to contact the sender.
                            </p>`
                          : ""
                      }
                    </td>
                  </tr>

                  <!-- Footer -->
                  <tr>
                    <td style="background:#f8fafc;padding:16px;text-align:center;
                      font-size:12px;color:#718096;">
                      <p style="margin:0;">
                        Received on ${new Date().toLocaleString("en-IN", {
                          timeZone: "Asia/Kolkata",
                        })}
                      </p>
                      <p style="margin:6px 0 0;">
                        © ${new Date().getFullYear()} Navi Logistics
                      </p>
                    </td>
                  </tr>

                </table>

              </td>
            </tr>
          </table>
        </div>
        `,
      };

      await transporter.sendMail(mailOptions);
      console.log("Email sent successfully");
    } catch (emailError) {
      console.error("Email sending failed:", emailError);
    }

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
      { error: "Failed to process your request. Please try again later." },
      { status: 500 }
    );
  }
}
