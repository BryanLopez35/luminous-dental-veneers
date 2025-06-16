import { type NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

// Create transporter for Hostinger SMTP
const transporter = nodemailer.createTransport({
  host: "smtp.hostinger.com",
  port: 465,
  secure: true, // true for 465 (SSL), false for other ports
  auth: {
    user: process.env.HOSTINGER_EMAIL,
    pass: process.env.HOSTINGER_PASSWORD,
  },
})

// Business notification email HTML template
const renderBusinessEmail = (data: {
  name: string
  email: string
  phone: string
  preferredTime: string
  timestamp: string
}) => {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>New Veneer Consultation Request</title>
      </head>
      <body style="background-color: #f6f9fc; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Ubuntu, sans-serif; margin: 0; padding: 0;">
        <div style="background-color: #ffffff; margin: 0 auto; max-width: 600px;">
          <div style="background-color: #2563eb; padding: 32px 24px; text-align: center;">
            <div style="display: inline-block;">
              <span style="font-size: 32px; color: white; margin-right: 12px;">✨</span>
              <span style="font-size: 24px; font-weight: bold; color: white;">Luminous Dental LV</span>
            </div>
          </div>
          
          <div style="padding: 24px;">
            <h1 style="color: #1f2937; font-size: 28px; font-weight: bold; margin: 0 0 24px; text-align: center;">New Consultation Request</h1>
            <p style="color: #6b7280; font-size: 16px; line-height: 24px; margin: 0 0 16px;">You have received a new veneer consultation request from your website.</p>
            
            <div style="background-color: #f9fafb; border: 1px solid #e5e7eb; border-radius: 8px; padding: 24px; margin: 24px 0;">
              <h2 style="color: #374151; font-size: 20px; font-weight: 600; margin: 0 0 16px;">Patient Information</h2>
              <hr style="border-color: #e5e7eb; margin: 16px 0;">
              <p style="color: #374151; font-size: 16px; line-height: 24px; margin: 0 0 12px;"><strong>Name:</strong> ${data.name}</p>
              <p style="color: #374151; font-size: 16px; line-height: 24px; margin: 0 0 12px;"><strong>Email:</strong> <a href="mailto:${data.email}" style="color: #2563eb; text-decoration: underline;">${data.email}</a></p>
              <p style="color: #374151; font-size: 16px; line-height: 24px; margin: 0 0 12px;"><strong>Phone:</strong> <a href="tel:${data.phone}" style="color: #2563eb; text-decoration: underline;">${data.phone}</a></p>
              <p style="color: #374151; font-size: 16px; line-height: 24px; margin: 0 0 12px;"><strong>Preferred Time:</strong> ${data.preferredTime || "Not specified"}</p>
              <p style="color: #374151; font-size: 16px; line-height: 24px; margin: 0 0 12px;"><strong>Submitted:</strong> ${data.timestamp}</p>
            </div>
            
            <div style="margin: 32px 0;">
              <p style="color: #6b7280; font-size: 16px; line-height: 24px; margin: 0 0 16px;"><strong>Next Steps:</strong></p>
              <p style="color: #6b7280; font-size: 16px; line-height: 24px; margin: 0 0 16px;">• Contact the patient within 24 hours</p>
              <p style="color: #6b7280; font-size: 16px; line-height: 24px; margin: 0 0 16px;">• Schedule their free consultation</p>
              <p style="color: #6b7280; font-size: 16px; line-height: 24px; margin: 0 0 16px;">• Add them to your CRM system</p>
            </div>
            
            <div style="text-align: center; margin: 32px 0;">
              <a href="tel:${data.phone}" style="background-color: #2563eb; border-radius: 8px; color: #ffffff; font-size: 16px; font-weight: 600; text-decoration: none; display: inline-block; padding: 12px 24px;">Call Patient Now</a>
            </div>
          </div>
          
          <div style="border-top: 1px solid #e5e7eb; padding: 24px; text-align: center;">
            <p style="color: #9ca3af; font-size: 14px; line-height: 20px; margin: 0;">
              Luminous Dental LV<br>
              1212 S Maryland Pkwy, Las Vegas, NV 89104<br>
              (725) 291-5588 | info@luminousdentallv.com
            </p>
          </div>
        </div>
      </body>
    </html>
  `
}

// Customer confirmation email HTML template
const renderCustomerEmail = (data: { name: string; preferredTime: string }) => {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>Your Free Veneer Consultation Request</title>
      </head>
      <body style="background-color: #f6f9fc; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Ubuntu, sans-serif; margin: 0; padding: 0;">
        <div style="background-color: #ffffff; margin: 0 auto; max-width: 600px;">
          <div style="background-color: #2563eb; padding: 32px 24px; text-align: center;">
            <div style="display: inline-block;">
              <span style="font-size: 32px; color: white; margin-right: 12px;">✨</span>
              <span style="font-size: 24px; font-weight: bold; color: white;">Luminous Dental LV</span>
            </div>
          </div>
          
          <div style="padding: 24px;">
            <h1 style="color: #1f2937; font-size: 28px; font-weight: bold; margin: 0 0 24px; text-align: center;">Thank You, ${data.name}!</h1>
            <p style="color: #6b7280; font-size: 16px; line-height: 24px; margin: 0 0 12px;">
              We've received your request for a free veneer consultation and we're excited to help you achieve your dream smile.
            </p>
            
            <div style="background-color: #eff6ff; border: 2px solid #3b82f6; border-radius: 8px; padding: 24px; margin: 24px 0;">
              <p style="color: #1e40af; font-size: 18px; font-weight: 600; margin: 0 0 16px;"><strong>What happens next?</strong></p>
              <p style="color: #6b7280; font-size: 16px; line-height: 24px; margin: 0 0 12px;">
                • Our team will contact you within <strong>24 hours</strong><br>
                • We'll schedule your free consultation at your convenience<br>
                • You'll receive a comprehensive smile assessment<br>
                • We'll create a personalized treatment plan just for you
              </p>
            </div>
            
            ${
              data.preferredTime
                ? `
            <div style="background-color: #eff6ff; border: 1px solid #93c5fd; border-radius: 8px; padding: 16px; margin: 16px 0;">
              <p style="color: #1e40af; font-size: 16px; margin: 0 0 8px;"><strong>Your Preferred Time:</strong> ${data.preferredTime}</p>
              <p style="color: #6b7280; font-size: 14px; margin: 0;">We'll do our best to accommodate your preferred time slot.</p>
            </div>
            `
                : ""
            }
            
            <div style="margin: 32px 0;">
              <h2 style="color: #374151; font-size: 22px; font-weight: 600; margin: 24px 0 16px;">Why Choose Luminous Dental LV?</h2>
              <p style="color: #6b7280; font-size: 16px; line-height: 24px; margin: 0 0 12px;">✅ Over 15 years of cosmetic dentistry experience</p>
              <p style="color: #6b7280; font-size: 16px; line-height: 24px; margin: 0 0 12px;">✅ Natural-looking, custom-crafted veneers</p>
              <p style="color: #6b7280; font-size: 16px; line-height: 24px; margin: 0 0 12px;">✅ Flexible payment plans available</p>
              <p style="color: #6b7280; font-size: 16px; line-height: 24px; margin: 0 0 12px;">✅ State-of-the-art technology and techniques</p>
              <p style="color: #6b7280; font-size: 16px; line-height: 24px; margin: 0 0 12px;">✅ Convenient Las Vegas location</p>
            </div>
            
            <div style="text-align: center; margin: 32px 0;">
              <p style="color: #6b7280; font-size: 16px; line-height: 24px; margin: 0 0 12px;">Have questions before we call?</p>
              <a href="tel:7252915588" style="background-color: #2563eb; border-radius: 8px; color: #ffffff; font-size: 16px; font-weight: 600; text-decoration: none; display: inline-block; padding: 12px 24px;">Call Us: (725) 291-5588</a>
            </div>
            
            <div style="background-color: #f9fafb; border: 1px solid #e5e7eb; border-radius: 8px; padding: 20px; margin: 24px 0;">
              <h3 style="color: #374151; font-size: 18px; font-weight: 600; margin: 20px 0 12px;">Visit Our Clinic</h3>
              <p style="color: #6b7280; font-size: 16px; line-height: 24px; margin: 0 0 12px;">
                <strong>Luminous Dental LV</strong><br>
                1212 S Maryland Pkwy<br>
                Las Vegas, NV 89104
              </p>
              <p style="color: #6b7280; font-size: 16px; line-height: 24px; margin: 0 0 12px;">
                <strong>Office Hours:</strong><br>
                Monday - Friday: 8:00 AM - 6:00 PM<br>
                Saturday: 9:00 AM - 4:00 PM<br>
                Sunday: Closed
              </p>
            </div>
          </div>
          
          <div style="border-top: 1px solid #e5e7eb; padding: 24px; text-align: center;">
            <hr style="border-color: #e5e7eb; margin: 20px 0;">
            <p style="color: #9ca3af; font-size: 14px; line-height: 20px; margin: 0;">
              This email was sent because you requested a free consultation on our website.<br><br>
              Luminous Dental LV - Premium Dental Care<br>
              1212 S Maryland Pkwy, Las Vegas, NV 89104<br>
              (725) 291-5588 | info@luminousdentallv.com
            </p>
          </div>
        </div>
      </body>
    </html>
  `
}

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const name = formData.get("name") as string
    const phone = formData.get("phone") as string
    const email = formData.get("email") as string
    const preferredTime = formData.get("preferred-time") as string

    // Validation
    if (!name || !phone || !email) {
      return NextResponse.json(
        {
          success: false,
          message: "Please fill in all required fields.",
        },
        { status: 400 },
      )
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        {
          success: false,
          message: "Please enter a valid email address.",
        },
        { status: 400 },
      )
    }

    // Phone validation (basic)
    const phoneRegex = /^[+]?[1-9][\d]{0,15}$/
    const cleanPhone = phone.replace(/\D/g, "")
    if (cleanPhone.length < 10) {
      return NextResponse.json(
        {
          success: false,
          message: "Please enter a valid phone number.",
        },
        { status: 400 },
      )
    }

    const consultationData = {
      name,
      phone: cleanPhone,
      email,
      preferredTime,
      timestamp: new Date().toISOString(),
      userAgent: request.headers.get("user-agent"),
      ip: request.headers.get("x-forwarded-for") || request.headers.get("x-real-ip"),
    }

    console.log("New consultation request:", consultationData)

    // Generate HTML emails using template functions
    const businessEmailHtml = renderBusinessEmail({
      name,
      email,
      phone: cleanPhone,
      preferredTime,
      timestamp: new Date().toLocaleString(),
    })

    const customerEmailHtml = renderCustomerEmail({
      name,
      preferredTime,
    })

    // Send email to business
    try {
      await transporter.sendMail({
        from: `"Luminous Dental LV" <${process.env.HOSTINGER_EMAIL}>`,
        to: "bryan.lopezhdz97@gmail.com",
        subject: `New Veneer Consultation Request - ${name}`,
        html: businessEmailHtml,
        text: `New consultation request from ${name} (${email}, ${cleanPhone}). Preferred time: ${preferredTime || "Not specified"}`,
      })
    } catch (emailError) {
      console.error("Error sending business notification email:", emailError)
    }

    // Send confirmation email to customer
    try {
      await transporter.sendMail({
        from: `"Luminous Dental LV" <${process.env.HOSTINGER_EMAIL}>`,
        to: email,
        subject: "Your Free Veneer Consultation Request - Luminous Dental LV",
        html: customerEmailHtml,
        text: `Thank you ${name}! We've received your request for a free veneer consultation. We'll contact you within 24 hours to schedule your appointment.`,
      })
    } catch (emailError) {
      console.error("Error sending customer confirmation email:", emailError)
    }

    return NextResponse.json(
      {
        success: true,
        message: "Consultation request submitted successfully! We will contact you within 24 hours.",
        data: {
          confirmationNumber: `LDV-${Date.now()}`,
          estimatedCallTime: "Within 24 hours",
        },
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("Error processing consultation request:", error)
    return NextResponse.json(
      {
        success: false,
        message: "There was an error submitting your request. Please try again or call us directly at (725) 291-5588.",
      },
      { status: 500 },
    )
  }
}
