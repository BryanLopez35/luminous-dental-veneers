import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import BackToTop from "@/components/back-to-top";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { LanguageProvider } from "@/context/LanguageContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Veneers in Las Vegas | Luminous Dental LV",
  description:
    "Get a radiant smile with custom veneers from top cosmetic dentists in Las Vegas. Book a free consultation at Luminous Dental LV today.",
  keywords:
    "veneers Las Vegas, cosmetic dentist Las Vegas, dental veneers in Las Vegas, porcelain veneers Nevada, smile makeover Las Vegas, teeth veneers cost Las Vegas, carillas dentales Las Vegas, dentista cosmético Las Vegas",
  authors: [{ name: "Luminous Dental LV" }],
  creator: "Luminous Dental LV",
  publisher: "Luminous Dental LV",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://veneers.luminousdentallv.com"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en",
      "es-US": "/es",
    },
  },
  openGraph: {
    title: "Veneers in Las Vegas | Luminous Dental LV",
    description:
      "Get a radiant smile with custom veneers from top cosmetic dentists in Las Vegas. Book a free consultation at Luminous Dental LV today.",
    url: "https://veneers.luminousdentallv.com",
    siteName: "Luminous Dental Las Vegas",
    images: [
      {
        url: "img/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Luminous Dental - Veneers in Las Vegas",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Veneers in Las Vegas | Luminous Dental Las Vegas",
    description:
      "Get a radiant smile with custom veneers from top cosmetic dentists in Las Vegas. Book a free consultation at Luminous Dental Las Vegas today.",
    images: ["img/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://veneers.luminousdentallv.com" />
        <link
          rel="alternate"
          hrefLang="en"
          href="https://veneers.luminousdentallv.com/en"
        />
        <link
          rel="alternate"
          hrefLang="es"
          href="https://veneers.luminousdentallv.com/es"
        />
        <meta name="geo.region" content="US-NV" />
        <meta name="geo.placename" content="Las Vegas" />
        <meta name="geo.position" content="36.1699;-115.1398" />
        <meta name="ICBM" content="36.1699, -115.1398" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "DentalClinic",
              name: "Luminous Dental Las Vegas",
              image: "https://veneers.luminousdentallv.com/logo.png",
              description:
                "Premier dental veneers and cosmetic dentistry in Las Vegas, Nevada. Expert cosmetic dentists providing natural-looking veneer results.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "1212 S Maryland Pkwy",
                addressLocality: "Las Vegas",
                addressRegion: "NV",
                postalCode: "89104",
                addressCountry: "US",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 36.1699,
                longitude: -115.1398,
              },
              telephone: "(725) 291-5588",
              email: "info@luminousdentallv.com",
              url: "https://veneers.luminousdentallv.com/",
              openingHours: ["Mo-Fr 08:00-18:00", "Sa 09:00-16:00"],
              priceRange: "$$",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "127",
              },
              medicalSpecialty: "Cosmetic Dentistry",
              availableService: [
                {
                  "@type": "MedicalProcedure",
                  name: "Dental Veneers",
                  description:
                    "Custom porcelain veneers for smile transformation",
                },
                {
                  "@type": "MedicalProcedure",
                  name: "Cosmetic Dentistry",
                  description:
                    "Complete smile makeovers and aesthetic dental treatments",
                },
              ],
              inLanguage: ["en", "es"],
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <LanguageProvider>
          <Header />
          {children}
          <Footer />
          <BackToTop />
        </LanguageProvider>
      </body>
    </html>
  );
}
