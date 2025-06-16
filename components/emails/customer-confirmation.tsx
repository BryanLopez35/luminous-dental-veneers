interface CustomerConfirmationEmailProps {
  name: string
  preferredTime: string
}

export const CustomerConfirmationEmail = ({ name, preferredTime }: CustomerConfirmationEmailProps) => (
  <html>
    <head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Your Free Veneer Consultation Request</title>
    </head>
    <body style={main}>
      <div style={container}>
        <div style={header}>
          <div style={logoContainer}>
            <div style={logo}>✨</div>
            <h1 style={logoText}>Luminous Dental LV</h1>
          </div>
        </div>

        <div style={content}>
          <h1 style={h1}>Thank You, {name}!</h1>
          <p style={text}>
            We've received your request for a free veneer consultation and we're excited to help you achieve your dream
            smile.
          </p>

          <div style={highlightBox}>
            <p style={highlightText}>
              <strong>What happens next?</strong>
            </p>
            <p style={text}>
              • Our team will contact you within <strong>24 hours</strong>
              <br />• We'll schedule your free consultation at your convenience
              <br />• You'll receive a comprehensive smile assessment
              <br />• We'll create a personalized treatment plan just for you
            </p>
          </div>

          {preferredTime && (
            <div style={infoBox}>
              <p style={infoText}>
                <strong>Your Preferred Time:</strong> {preferredTime}
              </p>
              <p style={smallText}>We'll do our best to accommodate your preferred time slot.</p>
            </div>
          )}

          <div style={benefitsSection}>
            <h2 style={h2}>Why Choose Luminous Dental LV?</h2>
            <p style={text}>✅ Over 15 years of cosmetic dentistry experience</p>
            <p style={text}>✅ Natural-looking, custom-crafted veneers</p>
            <p style={text}>✅ Flexible payment plans available</p>
            <p style={text}>✅ State-of-the-art technology and techniques</p>
            <p style={text}>✅ Convenient Las Vegas location</p>
          </div>

          <div style={ctaSection}>
            <p style={text}>Have questions before we call?</p>
            <a href="tel:7252915588" style={button}>
              Call Us: (725) 291-5588
            </a>
          </div>

          <div style={locationSection}>
            <h3 style={h3}>Visit Our Clinic</h3>
            <p style={text}>
              <strong>Luminous Dental LV</strong>
              <br />
              1212 S Maryland Pkwy
              <br />
              Las Vegas, NV 89104
            </p>
            <p style={text}>
              <strong>Office Hours:</strong>
              <br />
              Monday - Friday: 8:00 AM - 6:00 PM
              <br />
              Saturday: 9:00 AM - 4:00 PM
              <br />
              Sunday: Closed
            </p>
          </div>
        </div>

        <div style={footer}>
          <hr style={hr} />
          <p style={footerText}>
            This email was sent because you requested a free consultation on our website.
            <br />
            <br />
            Luminous Dental LV - Premium Dental Care
            <br />
            1212 S Maryland Pkwy, Las Vegas, NV 89104
            <br />
            (725) 291-5588 | info@luminousdentallv.com
          </p>
        </div>
      </div>
    </body>
  </html>
)

const main = {
  backgroundColor: "#f6f9fc",
  fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
  margin: 0,
  padding: 0,
}

const container = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  padding: "20px 0 48px",
  marginBottom: "64px",
  maxWidth: "600px",
}

const header = {
  padding: "32px 24px",
  backgroundColor: "#2563eb",
}

const logoContainer = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}

const logo = {
  fontSize: "32px",
  marginRight: "12px",
}

const logoText = {
  fontSize: "24px",
  fontWeight: "bold",
  color: "#ffffff",
  margin: "0",
}

const content = {
  padding: "24px",
}

const h1 = {
  color: "#1f2937",
  fontSize: "28px",
  fontWeight: "bold",
  margin: "0 0 24px",
  textAlign: "center" as const,
}

const h2 = {
  color: "#374151",
  fontSize: "22px",
  fontWeight: "600",
  margin: "24px 0 16px",
}

const h3 = {
  color: "#374151",
  fontSize: "18px",
  fontWeight: "600",
  margin: "20px 0 12px",
}

const text = {
  color: "#6b7280",
  fontSize: "16px",
  lineHeight: "24px",
  margin: "0 0 12px",
}

const highlightBox = {
  backgroundColor: "#eff6ff",
  border: "2px solid #3b82f6",
  borderRadius: "8px",
  padding: "24px",
  margin: "24px 0",
}

const highlightText = {
  color: "#1e40af",
  fontSize: "18px",
  fontWeight: "600",
  margin: "0 0 16px",
}

const infoBox = {
  backgroundColor: "#eff6ff",
  border: "1px solid #93c5fd",
  borderRadius: "8px",
  padding: "16px",
  margin: "16px 0",
}

const infoText = {
  color: "#1e40af",
  fontSize: "16px",
  margin: "0 0 8px",
}

const smallText = {
  color: "#6b7280",
  fontSize: "14px",
  margin: "0",
}

const benefitsSection = {
  margin: "32px 0",
}

const ctaSection = {
  textAlign: "center" as const,
  margin: "32px 0",
}

const button = {
  backgroundColor: "#2563eb",
  borderRadius: "8px",
  color: "#ffffff",
  fontSize: "16px",
  fontWeight: "600",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "inline-block",
  padding: "12px 24px",
}

const locationSection = {
  backgroundColor: "#f9fafb",
  border: "1px solid #e5e7eb",
  borderRadius: "8px",
  padding: "20px",
  margin: "24px 0",
}

const footer = {
  borderTop: "1px solid #e5e7eb",
  padding: "24px",
  textAlign: "center" as const,
}

const hr = {
  borderColor: "#e5e7eb",
  margin: "20px 0",
}

const footerText = {
  color: "#9ca3af",
  fontSize: "14px",
  lineHeight: "20px",
  margin: "0",
}
