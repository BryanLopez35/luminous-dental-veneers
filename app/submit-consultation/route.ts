import { type NextRequest, NextResponse } from "next/server"

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

    // Here you would typically:
    // 1. Save to database (Supabase, Neon, etc.)
    // 2. Send confirmation emails
    // 3. Integrate with CRM/scheduling system (Calendly, Acuity, etc.)
    // 4. Send SMS notifications
    // 5. Add to email marketing list

    console.log("New consultation request:", {
      name,
      phone: cleanPhone,
      email,
      preferredTime,
      timestamp: new Date().toISOString(),
      userAgent: request.headers.get("user-agent"),
      ip: request.headers.get("x-forwarded-for") || request.headers.get("x-real-ip"),
    })

    // Simulate processing delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

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
