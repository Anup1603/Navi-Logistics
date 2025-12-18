import { NextRequest, NextResponse } from "next/server";

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  service?: string;
  message: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();

    // Validate required fields
    if (!body.name || !body.email || !body.message) {
      return NextResponse.json(
        { error: "Name, email, and message are required" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // In production, you would integrate with an email service here.
    // Options include:
    // 1. Resend (https://resend.com)
    // 2. SendGrid (https://sendgrid.com)
    // 3. Nodemailer with SMTP
    // 4. AWS SES
    
    // Example with Resend (after installing: npm install resend):
    // 
    // import { Resend } from 'resend';
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // 
    // await resend.emails.send({
    //   from: 'Sharma Logistic <noreply@sharmalogistic.com>',
    //   to: ['your-email@example.com'],
    //   subject: `New Contact Form Submission from ${body.name}`,
    //   html: `
    //     <h2>New Contact Form Submission</h2>
    //     <p><strong>Name:</strong> ${body.name}</p>
    //     <p><strong>Email:</strong> ${body.email}</p>
    //     <p><strong>Phone:</strong> ${body.phone || 'Not provided'}</p>
    //     <p><strong>Company:</strong> ${body.company || 'Not provided'}</p>
    //     <p><strong>Service:</strong> ${body.service || 'Not specified'}</p>
    //     <p><strong>Message:</strong></p>
    //     <p>${body.message}</p>
    //   `,
    // });

    // For now, we'll log the submission and return success
    console.log("Contact form submission received:", {
      name: body.name,
      email: body.email,
      phone: body.phone,
      company: body.company,
      service: body.service,
      message: body.message,
      timestamp: new Date().toISOString(),
    });

    // Return success response
    return NextResponse.json(
      { 
        success: true, 
        message: "Thank you for your message. We will get back to you soon!" 
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
