interface BusinessNotificationEmailProps {
  name: string
  email: string
  phone: string
  preferredTime: string
  timestamp: string
}

export const BusinessNotificationEmail = ({
  name,
  email,
  phone,
  preferredTime,
  timestamp,
}: BusinessNotificationEmailProps) => (
  <html>
    <head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>New Veneer Consultation Request</title>
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
          <h1 style={h1}>New Consultation Request</h1>
          <p style={text}>You have received a new veneer consultation request from your website.</p>

          <div style={infoBox}>
            <h2 style={h2}>Patient Information</h2>
            <hr style={hr} />
            <p style={infoText}>
              <strong>Name:</strong> {name}
            </p>
            <p style={infoText}>
              <strong>Email:</strong>{" "}
              <a href={`mailto:${email}`} style={link}>
                {email}
              </a>
            </p>
            <p style={infoText}>
              <strong>Phone:</strong>{" "}
              <a href={`tel:${phone}`} style={link}>
                {phone}
              </a>
            </p>
            <p style={infoText}>
              <strong>Preferred Time:</strong> {preferredTime || "Not specified"}
            </p>
            <p style={infoText}>
              <strong>Submitted:</strong> {timestamp}
            </p>
          </div>

          <div style={actionSection}>
            <p style={text}>
              <strong>Next Steps:</strong>
            </p>
            <p style={text}>• Contact the patient within 24 hours</p>
            <p style={text}>• Schedule their free consultation</p>
            <p style={text}>• Add them to your CRM system</p>
          </div>

          <div style={ctaSection}>
            <a href={`tel:${phone}`} style={button}>
              Call Patient Now
            </a>
          </div>
        </div>

        <div style={footer}>
          <p style={footerText}>
            Luminous Dental LV
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
  fontSize: "20px",
  fontWeight: "600",
  margin: "0 0 16px",
}

const text = {
  color: "#6b7280",
  fontSize: "16px",
  lineHeight: "24px",
  margin: "0 0 16px",
}

const infoBox = {
  backgroundColor: "#f9fafb",
  border: "1px solid #e5e7eb",
  borderRadius: "8px",
  padding: "24px",
  margin: "24px 0",
}

const infoText = {
  color: "#374151",
  fontSize: "16px",
  lineHeight: "24px",
  margin: "0 0 12px",
}

const hr = {
  borderColor: "#e5e7eb",
  margin: "16px 0",
}

const link = {
  color: "#2563eb",
  textDecoration: "underline",
}

const actionSection = {
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

const footer = {
  borderTop: "1px solid #e5e7eb",
  padding: "24px",
  textAlign: "center" as const,
}

const footerText = {
  color: "#9ca3af",
  fontSize: "14px",
  lineHeight: "20px",
  margin: "0",
}
