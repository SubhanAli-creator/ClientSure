import { type NextRequest, NextResponse } from "next/server"
// @ts-ignore
import nodemailer from "nodemailer"



// Create transporter for sending emails
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || "smtp.gmail.com",
  port: Number.parseInt(process.env.SMTP_PORT || "587"),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, service, message } = body

    // Validate required fields
    if (!name || !email || !service || !message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 })
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 })
    }

    // Email content
    const mailOptions = {
      from: process.env.SMTP_FROM || "noreply@clientsure.com",
      to: process.env.CONTACT_EMAIL || "hello@clientsure.com",
      subject: `New Contact Form Submission - ${service}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb;">New Contact Form Submission</h2>
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Service:</strong> ${service}</p>
            <p><strong>Message:</strong></p>
            <p style="background-color: white; padding: 15px; border-radius: 4px; border-left: 4px solid #2563eb;">
              ${message.replace(/\n/g, "<br>")}
            </p>
          </div>
          <p style="color: #64748b; font-size: 14px;">
            This message was sent from the ClientSure contact form.
          </p>
        </div>
      `,
    }

    // Send confirmation email to user
    const userMailOptions = {
      from: process.env.SMTP_FROM || "noreply@clientsure.com",
      to: email,
      subject: "Thank you for contacting ClientSure",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb;">Thank You for Contacting ClientSure</h2>
          <p>Dear ${name},</p>
          <p>Thank you for reaching out to us regarding <strong>${service}</strong>. We have received your message and will get back to you within 24 hours.</p>
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0;">Your Message:</h3>
            <p>${message.replace(/\n/g, "<br>")}</p>
          </div>
          <p>If you have any urgent questions, please don't hesitate to call us at +1 (555) 123-4567.</p>
          <p>Best regards,<br>The ClientSure Team</p>
        </div>
      `,
    }

    // Send both emails
    await Promise.all([transporter.sendMail(mailOptions), transporter.sendMail(userMailOptions)])

    return NextResponse.json({ message: "Email sent successfully" }, { status: 200 })
  } catch (error) {
    console.error("Error sending email:", error)
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
  }
}
