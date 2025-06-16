"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

const translations = {
  en: {
    // Header
    bookConsultation: "Book a Free Consultation",
    // Hero Section
    topDentist: "#1 Cosmetic Dentist in Las Vegas",
    heroTitle: "Veneers in Las Vegas That Transform Your Smile",
    heroSubtitle:
      "Get the confident, radiant smile you deserve from our expert cosmetic dentists. Custom porcelain veneers designed to give you natural-looking, beautiful results.",
    scheduleConsultation: "Schedule Your Free Consultation",
    rating: "4.9/5 Rating",
    happyPatients: "500+ Happy Patients",
    // Why Choose Us
    whyChooseTitle: "Why Choose Luminous Dental LV for Your Veneers?",
    whyChooseSubtitle:
      "We're the trusted choice for dental veneers in Las Vegas, combining expertise with personalized care.",
    experiencedDentists: "Experienced Cosmetic Dentists",
    experiencedDesc:
      "Over 15 years of experience in cosmetic dentistry and veneer placement in Las Vegas.",
    affordablePlans: "Affordable Payment Plans",
    affordableDesc:
      "Flexible financing options to make your dream smile affordable with monthly payment plans.",
    naturalResults: "Natural-Looking Results",
    naturalDesc:
      "Custom-crafted porcelain veneers that blend seamlessly with your natural teeth.",
    convenientLocation: "Convenient Las Vegas Location",
    locationDesc:
      "Centrally located on Maryland Parkway, easily accessible from anywhere in Las Vegas.",
    // Gallery
    galleryTitle: "Amazing Veneer Transformations in Las Vegas",
    gallerySubtitle:
      "See the incredible results our patients have achieved with custom dental veneers.",
    beforeAfter: "Before & After",
    before: "Before",
    after: "After",
    // Testimonials
    testimonialsTitle: "What Our Las Vegas Patients Say",
    testimonialsSubtitle:
      "Real reviews from real patients who transformed their smiles with veneers.",
    // Form
    formTitle: "Request a Free Consultation",
    formSubtitle:
      "Ready to transform your smile? Schedule your complimentary veneer consultation today.",
    fullName: "Full Name",
    phoneNumber: "Phone Number",
    emailAddress: "Email Address",
    preferredTime: "Preferred Time",
    selectTime: "Select preferred time",
    morning: "Morning (8AM - 12PM)",
    afternoon: "Afternoon (12PM - 5PM)",
    evening: "Evening (5PM - 7PM)",
    scheduleButton: "Schedule My Free Consultation",
    contactNote:
      "We'll contact you within 24 hours. Your information is secure and confidential.",
    submitting: "Submitting...",
    submitted: "Request Submitted Successfully!",
    submittedMessage:
      "Thank you! We'll contact you within 24 hours to schedule your free consultation.",
    // Local SEO
    visitClinic: "Visit Our Veneers Clinic in Las Vegas",
    clinicDescription:
      "Conveniently located in the heart of Las Vegas, our state-of-the-art dental clinic is equipped with the latest technology for veneer placement and cosmetic dentistry.",
    address: "Address",
    phone: "Phone",
    email: "Email",
    officeHours: "Office Hours",
    monday: "Monday - Friday:",
    saturday: "Saturday:",
    sunday: "Sunday:",
    closed: "Closed",
    // Footer
    navigation: "Navigation",
    services: "Services",
    contactInfo: "Contact Info",
    home: "Home",
    about: "About",
    veneers: "Veneers",
    contact: "Contact",
    porcelainVeneers: "Porcelain Veneers",
    cosmeticDentistry: "Cosmetic Dentistry",
    smileMakeovers: "Smile Makeovers",
    teethWhitening: "Teeth Whitening",
    privacyPolicy: "Privacy Policy",
    termsOfService: "Terms of Service",
    // Features
    features: [
      {
        title: "Same-Day Consultations",
        description:
          "Get your smile assessment and treatment plan in one visit",
      },
      {
        title: "Advanced Technology",
        description:
          "State-of-the-art equipment for precise, comfortable treatments",
      },
      {
        title: "Lifetime Warranty",
        description:
          "We stand behind our work with comprehensive warranty coverage",
      },
      {
        title: "Pain-Free Process",
        description:
          "Comfortable, minimally invasive procedures with sedation options",
      },
    ],
  },
  es: {
    // Header
    bookConsultation: "Reservar Consulta Gratuita",
    // Hero Section
    topDentist: "#1 Dentista Cosmético en Las Vegas",
    heroTitle: "Carillas en Las Vegas Que Transforman Tu Sonrisa",
    heroSubtitle:
      "Obtén la sonrisa confiada y radiante que mereces de nuestros dentistas cosméticos expertos. Carillas de porcelana personalizadas diseñadas para darte resultados hermosos y de aspecto natural.",
    scheduleConsultation: "Programa Tu Consulta Gratuita",
    rating: "Calificación 4.9/5",
    happyPatients: "500+ Pacientes Felices",
    // Why Choose Us
    whyChooseTitle: "¿Por Qué Elegir Luminous Dental LV para Tus Carillas?",
    whyChooseSubtitle:
      "Somos la opción de confianza para carillas dentales en Las Vegas, combinando experiencia con atención personalizada.",
    experiencedDentists: "Dentistas Cosméticos Experimentados",
    experiencedDesc:
      "Más de 15 años de experiencia en odontología cosmética y colocación de carillas en Las Vegas.",
    affordablePlans: "Planes de Pago Accesibles",
    affordableDesc:
      "Opciones de financiamiento flexibles para hacer tu sonrisa soñada accesible con planes de pago mensual.",
    naturalResults: "Resultados de Aspecto Natural",
    naturalDesc:
      "Carillas de porcelana hechas a medida que se mezclan perfectamente con tus dientes naturales.",
    convenientLocation: "Ubicación Conveniente en Las Vegas",
    locationDesc:
      "Ubicado centralmente en Maryland Parkway, fácilmente accesible desde cualquier lugar de Las Vegas.",
    // Gallery
    galleryTitle: "Increíbles Transformaciones de Carillas en Las Vegas",
    gallerySubtitle:
      "Ve los resultados increíbles que nuestros pacientes han logrado con carillas dentales personalizadas.",
    beforeAfter: "Antes y Después",
    before: "Antes",
    after: "Después",
    // Testimonials
    testimonialsTitle: "Lo Que Dicen Nuestros Pacientes de Las Vegas",
    testimonialsSubtitle:
      "Reseñas reales de pacientes reales que transformaron sus sonrisas con carillas.",
    // Form
    formTitle: "Solicitar una Consulta Gratuita",
    formSubtitle:
      "¿Listo para transformar tu sonrisa? Programa tu consulta gratuita de carillas hoy.",
    fullName: "Nombre Completo",
    phoneNumber: "Número de Teléfono",
    emailAddress: "Dirección de Email",
    preferredTime: "Hora Preferida",
    selectTime: "Seleccionar hora preferida",
    morning: "Mañana (8AM - 12PM)",
    afternoon: "Tarde (12PM - 5PM)",
    evening: "Noche (5PM - 7PM)",
    scheduleButton: "Programar Mi Consulta Gratuita",
    contactNote:
      "Te contactaremos dentro de 24 horas. Tu información es segura y confidencial.",
    submitting: "Enviando...",
    submitted: "¡Solicitud Enviada Exitosamente!",
    submittedMessage:
      "¡Gracias! Te contactaremos dentro de 24 horas para programar tu consulta gratuita.",
    // Local SEO
    visitClinic: "Visita Nuestra Clínica de Carillas en Las Vegas",
    clinicDescription:
      "Convenientemente ubicada en el corazón de Las Vegas, nuestra clínica dental de última generación está equipada con la tecnología más avanzada para colocación de carillas y odontología cosmética.",
    address: "Dirección",
    phone: "Teléfono",
    email: "Email",
    officeHours: "Horarios de Oficina",
    monday: "Lunes - Viernes:",
    saturday: "Sábado:",
    sunday: "Domingo:",
    closed: "Cerrado",
    // Footer
    navigation: "Navegación",
    services: "Servicios",
    contactInfo: "Información de Contacto",
    home: "Inicio",
    about: "Acerca de",
    veneers: "Carillas",
    contact: "Contacto",
    porcelainVeneers: "Carillas de Porcelana",
    cosmeticDentistry: "Odontología Cosmética",
    smileMakeovers: "Transformaciones de Sonrisa",
    teethWhitening: "Blanqueamiento Dental",
    privacyPolicy: "Política de Privacidad",
    termsOfService: "Términos de Servicio",
    // Features
    features: [
      {
        title: "Consultas el Mismo Día",
        description:
          "Obtén tu evaluación de sonrisa y plan de tratamiento en una visita",
      },
      {
        title: "Tecnología Avanzada",
        description:
          "Equipos de última generación para tratamientos precisos y cómodos",
      },
      {
        title: "Garantía de por Vida",
        description:
          "Respaldamos nuestro trabajo con cobertura de garantía integral",
      },
      {
        title: "Proceso Sin Dolor",
        description:
          "Procedimientos cómodos y mínimamente invasivos con opciones de sedación",
      },
    ],
  },
};

interface LanguageContextType {
  language: "en" | "es";
  setLanguage: (lang: "en" | "es") => void;
  t: typeof translations["en"];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within a LanguageProvider");
  return context;
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<"en" | "es">("en");
  const t = translations[language];
  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
