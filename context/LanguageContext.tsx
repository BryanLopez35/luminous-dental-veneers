"use client";
import test from "node:test";
import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

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
    whyChooseUsBadge:"Why Choose Us",
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
    beforeAfterBadge: "Transformations",
    galleryTitle: "Amazing Veneer Transformations in Las Vegas",
    gallerySubtitle:
      "See the incredible results our patients have achieved with custom dental veneers.",
    beforeAfter: "Before & After",
    before: "Before",
    after: "After",
    // Testimonials
    testimonialsBadge: "Testimonials",
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
    visitUsBadge:"Visit Us",
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
    rightsReserved: "All rights reserved",
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
    // --- THANK YOU PAGE TRANSLATIONS ---
    thankYouTitle: "Thank You!",
    thankYouSubtitle: "Your consultation request has been received",
    thankYouConfirmationTitle: "🎉 Consultation Request Confirmed!",
    thankYouConfirmationMessage:
      "We've received your request for a free veneer consultation and we're excited to help you achieve your dream smile!",
    thankYouWhatHappensNext: "What Happens Next?",
    thankYouNextSteps: [
      {
        step: "1",
        title: "We'll Contact You",
        description: "Our team will call you within 24 hours to schedule your free consultation",
        icon: "Phone",
        time: "Within 24 hours",
      },
      {
        step: "2",
        title: "Schedule Your Visit",
        description: "We'll find a convenient time that works with your schedule",
        icon: "Calendar",
        time: "2-3 minutes",
      },
      {
        step: "3",
        title: "Comprehensive Assessment",
        description: "Receive a thorough smile evaluation and personalized treatment plan",
        icon: "Award",
        time: "60 minutes",
      },
      {
        step: "4",
        title: "Transform Your Smile",
        description: "Begin your journey to the confident, radiant smile you deserve",
        icon: "Sparkles",
        time: "2-3 visits",
      },
    ],
    thankYouConfirmationNumber: "Confirmation Number",
    thankYouEstimatedContact: "Estimated Contact Time",
    thankYouWithin24Hours: "Within 24 hours",
    thankYouUrgentQuestions: "Have urgent questions?",
    thankYouCallNow: "Call Us Now",
    thankYouEmailUs: "Email Us",
    thankYouVisitClinic: "Visit Our Clinic",
    thankYouAddress: "1212 S Maryland Pkwy, Las Vegas, NV 89104",
    thankYouOfficeHours: "Office Hours",
    thankYouMondayFriday: "Monday - Friday: 8:00 AM - 6:00 PM",
    thankYouSaturday: "Saturday: 9:00 AM - 4:00 PM",
    thankYouSunday: "Sunday: Closed",
    thankYouWhyChooseUs: "Why 500+ Patients Choose Us",
    thankYouBenefits: [
      "Over 15 years of cosmetic dentistry experience",
      "Natural-looking, custom-crafted veneers",
      "Flexible payment plans available",
      "State-of-the-art technology and techniques",
      "Convenient Las Vegas location",
      "Comprehensive warranty coverage",
    ],
    thankYouBackToHome: "Back to Home",
    thankYouScheduleAnother: "Schedule Another Consultation",
    thankYouShareExperience: "Share Your Experience",
    thankYouFollowUs: "Follow us on social media for smile tips and updates",
    thankYouTestimonialTitle: "Join 500+ Happy Patients",
    thankYouTestimonialText:
      "This place is amazing! They are very professional and they are very patient! Highly recommend!",
    thankYouTestimonialAuthor: "Saul Mendoza, Las Vegas",
    thankYouRating: "4.9/5 Rating",
    thankYouHappyPatients: "500+ Happy Patients",
    thankYouSpecialOffer: "🎁 Special Consultation Bonus",
    thankYouOfferTitle: "Exclusive Benefits for New Patients",
    thankYouOfferItems: [
      "Free 3D smile preview ($200 value)",
      "Complimentary teeth whitening consultation",
      "10% discount on your first treatment",
      "Flexible payment plans available",
    ],
    thankYouDownloadGuide: "Download Free Smile Guide",
    thankYouShareWithFriends: "Share with Friends",
    thankYouSocialProof: "Trusted by 500+ Las Vegas residents",
    thankYouGuaranteeTitle: "Our Promise to You",
    thankYouGuaranteeItems: [
      "100% satisfaction guarantee",
      "Natural-looking results",
      "Comfortable, pain-free experience",
      "Lifetime support and care",
    ],
    thankYouCtaTitle: "Ready to Take the Next Step?",
    thankYouCtaSubtitle: "While you wait for our call, explore more about our services or schedule additional consultations",
    // --- PRIVACY POLICY PAGE TRANSLATIONS ---
    privacyTitle: "Privacy Policy",
    privacyLastUpdated: "Last Updated: January 15, 2025",
    privacySections: [
      {
        title: "1. Information We Collect",
        content: `We collect information you provide directly to us, such as when you:
        • Fill out our consultation request form
        • Contact us via phone or email
        • Visit our clinic
        • Subscribe to our newsletter
        
        The types of information we may collect include:
        • Name and contact information (email address, phone number)
        • Dental health information and treatment preferences
        • Appointment scheduling information
        • Communication preferences`,
      },
      {
        title: "2. How We Use Your Information",
        content: `We use the information we collect to:
        • Schedule and manage your dental appointments
        • Provide dental care and treatment services
        • Communicate with you about your treatment
        • Send appointment reminders and follow-up care instructions
        • Improve our services and patient experience
        • Comply with legal and regulatory requirements
        • Send marketing communications (with your consent)`,
      },
      {
        title: "3. Information Sharing and Disclosure",
        content: `We do not sell, trade, or otherwise transfer your personal information to third parties except:
        • With your explicit consent
        • To dental laboratories for treatment purposes
        • To insurance companies for billing and claims processing
        • To comply with legal obligations
        • To protect our rights and safety
        • In connection with a business transfer or merger`,
      },
      {
        title: "4. Data Security",
        content: `We implement appropriate security measures to protect your personal information:
        • Secure data transmission using SSL encryption
        • Limited access to personal information on a need-to-know basis
        • Regular security assessments and updates
        • Secure storage of physical and electronic records
        • Staff training on privacy and security protocols`,
      },
      {
        title: "5. Your Rights and Choices",
        content: `You have the right to:
        • Access your personal information
        • Request corrections to inaccurate information
        • Request deletion of your information (subject to legal requirements)
        • Opt-out of marketing communications
        • Request a copy of your dental records
        • File a complaint with regulatory authorities`,
      },
      {
        title: "6. Cookies and Tracking Technologies",
        content: `Our website uses cookies and similar technologies to:
        • Improve website functionality and user experience
        • Analyze website traffic and usage patterns
        • Remember your preferences and settings
        • Provide personalized content and advertisements
        
        You can control cookie settings through your browser preferences.`,
      },
      {
        title: "7. Third-Party Services",
        content: `We may use third-party services such as:
        • Google Analytics for website analytics
        • Email marketing platforms for communications
        • Appointment scheduling software
        • Payment processing services
        
        These services have their own privacy policies and we encourage you to review them.`,
      },
      {
        title: "8. Children's Privacy",
        content: `Our services are not directed to children under 13. We do not knowingly collect personal information from children under 13. If we become aware that we have collected personal information from a child under 13, we will take steps to delete such information.`,
      },
      {
        title: "9. Changes to This Privacy Policy",
        content: `We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. We encourage you to review this Privacy Policy periodically.`,
      },
      {
        title: "10. Contact Us",
        content: `If you have any questions about this Privacy Policy, please contact us:
        
        Luminous Dental LV
        1212 S Maryland Pkwy
        Las Vegas, NV 89104
        Phone: (725) 291-5588
        Email: info@luminousdentallv.com`,
      },
    ],
    // --- TERMS OF SERVICE PAGE TRANSLATIONS ---
    termsTitle: "Terms of Service",
    termsLastUpdated: "Last Updated: January 15, 2025",
    termsSections: [
      {
        title: "1. Acceptance of Terms",
        content: `By accessing or using our services, you agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree with these terms, please do not use our services.`,
      },
      {
        title: "2. Changes to Terms",
        content: `We may update these Terms of Service from time to time. We will notify you of any changes by posting the new Terms on this page and updating the "Last Updated" date. Your continued use of our services after any changes indicates your acceptance of the new terms.`,
      },
      {
        title: "3. Service Description",
        content: `Luminous Dental LV provides cosmetic dental services, including but not limited to veneer placement, teeth whitening, and smile makeovers. We strive to provide accurate descriptions and representations of our services, but we do not guarantee specific results.`,
      },
      {
        title: "4. Appointment Scheduling and Cancellations",
        content: `Appointments can be scheduled through our website or by contacting our office. We require at least 24 hours notice for cancellations or rescheduling. Failure to provide adequate notice may result in a cancellation fee.`,
      },
      {
        title: "5. Payment and Fees",
        content: `We offer various payment options, including financing plans, to make our services affordable. Full payment or a payment plan agreement is required before the start of any treatment. Additional fees may apply for missed appointments or late cancellations.`,
      },
      {
        title: "6. Patient Responsibilities",
        content: `Patients are responsible for providing accurate information about their dental health and treatment preferences. It is also the patient's responsibility to follow post-treatment care instructions and attend follow-up appointments as recommended.`,
      },
      {
        title: "7. Limitation of Liability",
        content: `Luminous Dental LV is not liable for any indirect, incidental, or consequential damages arising from the use or inability to use our services. Our total liability to you for any claims arising from our services is limited to the amount paid by you for the specific service in question.`,
      },
      {
        title: "8. Governing Law",
        content: `These Terms of Service are governed by the laws of the State of Nevada, without regard to its conflict of law principles. Any disputes arising from these terms or our services will be resolved in the state or federal courts located in Clark County, Nevada.`,
      },
      {
        title: "9. Contact Information",
        content: `If you have any questions about these Terms of Service, please contact us:
        
        Luminous Dental LV
        1212 S Maryland Pkwy
        Las Vegas, NV 89104
        Phone: (725) 291-5588
        Email: info@luminousdentallv.com`,
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
    whyChooseUsBadge: "¿Por Qué Elegirnos?",
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
    beforeAfterBadge: "Transformaciones",
    galleryTitle: "Increíbles Transformaciones de Carillas en Las Vegas",
    gallerySubtitle:
      "Ve los resultados increíbles que nuestros pacientes han logrado con carillas dentales personalizadas.",
    beforeAfter: "Antes y Después",
    before: "Antes",
    after: "Después",
    // Testimonials
    testimonialsBadge: "Testimonios",
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
    visitUsBadge: "Visítanos",
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
    rightsReserved: "Todos los derechos reservados",
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
    // --- TRADUCCIONES PÁGINA DE AGRADECIMIENTO (ESPAÑOL) ---
    thankYouTitle: "¡Gracias!",
    thankYouSubtitle: "Hemos recibido su solicitud de consulta",
    thankYouConfirmationTitle: "🎉 ¡Solicitud de Consulta Confirmada!",
    thankYouConfirmationMessage:
      "¡Hemos recibido su solicitud de consulta gratuita de carillas y estamos emocionados de ayudarle a lograr la sonrisa de sus sueños!",
    thankYouWhatHappensNext: "¿Qué Sigue Ahora?",
    thankYouNextSteps: [
      {
        step: "1",
        title: "Le Contactaremos",
        description: "Nuestro equipo le llamará dentro de 24 horas para programar su consulta gratuita",
        icon: "Phone",
        time: "Dentro de 24 horas",
      },
      {
        step: "2",
        title: "Programar Su Visita",
        description: "Encontraremos un horario conveniente que funcione con su agenda",
        icon: "Calendar",
        time: "2-3 minutos",
      },
      {
        step: "3",
        title: "Evaluación Integral",
        description: "Reciba una evaluación completa de sonrisa y plan de tratamiento personalizado",
        icon: "Award",
        time: "60 minutos",
      },
      {
        step: "4",
        title: "Transforme Su Sonrisa",
        description: "Comience su viaje hacia la sonrisa confiada y radiante que merece",
        icon: "Sparkles",
        time: "2-3 visitas",
      },
    ],
    thankYouConfirmationNumber: "Número de Confirmación",
    thankYouEstimatedContact: "Tiempo Estimado de Contacto",
    thankYouWithin24Hours: "Dentro de 24 horas",
    thankYouUrgentQuestions: "¿Tiene preguntas urgentes?",
    thankYouCallNow: "Llámenos Ahora",
    thankYouEmailUs: "Envíenos un Email",
    thankYouVisitClinic: "Visite Nuestra Clínica",
    thankYouAddress: "1212 S Maryland Pkwy, Las Vegas, NV 89104",
    thankYouOfficeHours: "Horarios de Oficina",
    thankYouMondayFriday: "Lunes - Viernes: 8:00 AM - 6:00 PM",
    thankYouSaturday: "Sábado: 9:00 AM - 4:00 PM",
    thankYouSunday: "Domingo: Cerrado",
    thankYouWhyChooseUs: "Por Qué 500+ Pacientes Nos Eligen",
    thankYouBenefits: [
      "Más de 15 años de experiencia en odontología cosmética",
      "Carillas de aspecto natural hechas a medida",
      "Planes de pago flexibles disponibles",
      "Tecnología y técnicas de vanguardia",
      "Ubicación conveniente en Las Vegas",
      "Cobertura integral de garantía",
    ],
    thankYouBackToHome: "Volver al Inicio",
    thankYouScheduleAnother: "Programar Otra Consulta",
    thankYouShareExperience: "Comparta Su Experiencia",
    thankYouFollowUs: "Síganos en redes sociales para consejos de sonrisa y actualizaciones",
    thankYouTestimonialTitle: "Únase a 500+ Pacientes Felices",
    thankYouTestimonialText:
      "Este lugar es increíble! Son muy profesionales y son muy pacientes! ¡Lo recomiendo!",
    thankYouTestimonialAuthor: "Saul Mendoza, Las Vegas",
    thankYouRating: "Calificación 4.9/5",
    thankYouHappyPatients: "500+ Pacientes Felices",
    thankYouSpecialOffer: "🎁 Bono Especial de Consulta",
    thankYouOfferTitle: "Beneficios Exclusivos para Nuevos Pacientes",
    thankYouOfferItems: [
      "Vista previa 3D de sonrisa gratis (valor $200)",
      "Consulta gratuita de blanqueamiento dental",
      "10% de descuento en su primer tratamiento",
      "Planes de pago flexibles disponibles",
    ],
    thankYouDownloadGuide: "Descargar Guía Gratuita de Sonrisa",
    thankYouShareWithFriends: "Compartir con Amigos",
    thankYouSocialProof: "Confiado por 500+ residentes de Las Vegas",
    thankYouGuaranteeTitle: "Nuestra Promesa Para Usted",
    thankYouGuaranteeItems: [
      "Garantía de satisfacción 100%",
      "Resultados de aspecto natural",
      "Experiencia cómoda y sin dolor",
      "Soporte y cuidado de por vida",
    ],
    thankYouCtaTitle: "¿Listo para dar el siguiente paso?",
    thankYouCtaSubtitle: "Mientras espera nuestra llamada, explore más sobre nuestros servicios o programe consultas adicionales",
    // --- PRIVACY POLICY PAGE TRANSLATIONS ---
    privacyTitle: "Política de Privacidad",
    privacyLastUpdated: "Última Actualización: 15 de Enero, 2025",
    privacySections: [
      {
        title: "1. Información que Recopilamos",
        content: `Recopilamos información que nos proporciona directamente, como cuando:
        • Completa nuestro formulario de solicitud de consulta
        • Se comunica con nosotros por teléfono o correo electrónico
        • Visita nuestra clínica
        • Se suscribe a nuestro boletín
        
        Los tipos de información que podemos recopilar incluyen:
        • Nombre e información de contacto (dirección de correo electrónico, número de teléfono)
        • Información de salud dental y preferencias de tratamiento
        • Información de programación de citas
        • Preferencias de comunicación`,
      },
      {
        title: "2. Cómo Usamos Su Información",
        content: `Usamos la información que recopilamos para:
        • Programar y gestionar sus citas dentales
        • Proporcionar atención dental y servicios de tratamiento
        • Comunicarnos con usted sobre su tratamiento
        • Enviar recordatorios de citas e instrucciones de cuidado posterior
        • Mejorar nuestros servicios y experiencia del paciente
        • Cumplir con requisitos legales y regulatorios
        • Enviar comunicaciones de marketing (con su consentimiento)`,
      },
      {
        title: "3. Compartir y Divulgación de Información",
        content: `No vendemos, intercambiamos o transferimos su información personal a terceros excepto:
        • Con su consentimiento explícito
        • A laboratorios dentales para fines de tratamiento
        • A compañías de seguros para facturación y procesamiento de reclamos
        • Para cumplir con obligaciones legales
        • Para proteger nuestros derechos y seguridad
        • En conexión con una transferencia comercial o fusión`,
      },
      {
        title: "4. Seguridad de Datos",
        content: `Implementamos medidas de seguridad apropiadas para proteger su información personal:
        • Transmisión segura de datos usando encriptación SSL
        • Acceso limitado a información personal según necesidad
        • Evaluaciones y actualizaciones regulares de seguridad
        • Almacenamiento seguro de registros físicos y electrónicos
        • Capacitación del personal en protocolos de privacidad y seguridad`,
      },
      {
        title: "5. Sus Derechos y Opciones",
        content: `Usted tiene derecho a:
        • Acceder a su información personal
        • Solicitar correcciones a información inexacta
        • Solicitar eliminación de su información (sujeto a requisitos legales)
        • Optar por no recibir comunicaciones de marketing
        • Solicitar una copia de sus registros dentales
        • Presentar una queja ante autoridades regulatorias`,
      },
      {
        title: "6. Cookies y Tecnologías de Seguimiento",
        content: `Nuestro sitio web utiliza cookies y tecnologías similares para:
        • Mejorar la funcionalidad del sitio web y la experiencia del usuario
        • Analizar el tráfico y patrones de uso del sitio web
        • Recordar sus preferencias y configuraciones
        • Proporcionar contenido personalizado y anuncios
        
        Puede controlar la configuración de cookies a través de las preferencias de su navegador.`,
      },
      {
        title: "7. Servicios de Terceros",
        content: `Podemos usar servicios de terceros como:
        • Google Analytics para análisis del sitio web
        • Plataformas de marketing por correo electrónico para comunicaciones
        • Software de programación de citas
        • Servicios de procesamiento de pagos
        
        Estos servicios tienen sus propias políticas de privacidad y le recomendamos revisarlas.`,
      },
      {
        title: "8. Privacidad de Menores",
        content: `Nuestros servicios no están dirigidos a menores de 13 años. No recopilamos conscientemente información personal de menores de 13 años. Si nos enteramos de que hemos recopilado información personal de un menor de 13 años, tomaremos medidas para eliminar dicha información.`,
      },
      {
        title: "9. Cambios a Esta Política de Privacidad",
        content: `Podemos actualizar esta Política de Privacidad de vez en cuando. Le notificaremos cualquier cambio publicando la nueva Política de Privacidad en esta página y actualizando la fecha de "Última Actualización". Le recomendamos revisar esta Política de Privacidad periódicamente.`,
      },
      {
        title: "10. Contáctenos",
        content: `Si tiene alguna pregunta sobre esta Política de Privacidad, contáctenos:
        
        Luminous Dental LV
        1212 S Maryland Pkwy
        Las Vegas, NV 89104
        Teléfono: (725) 291-5588
        Correo: info@luminousdentallv.com`,
      },
    ],
    // --- TERMS OF SERVICE PAGE TRANSLATIONS ---
    termsTitle: "Términos de Servicio",
    termsLastUpdated: "Última Actualización: 15 de Enero, 2025",
    termsSections: [
      {
        title: "1. Aceptación de Términos",
        content: `Al acceder o utilizar nuestros servicios, usted acepta estar sujeto a estos Términos de Servicio y nuestra Política de Privacidad. Si no está de acuerdo con estos términos, no utilice nuestros servicios.`,
      },
      {
        title: "2. Cambios a los Términos",
        content: `Podemos actualizar estos Términos de Servicio de vez en cuando. Le notificaremos sobre cualquier cambio publicando los Nuevos Términos en esta página y actualizando la fecha de "Última Actualización". Su uso continuado de nuestros servicios después de cualquier cambio indica su aceptación de los nuevos términos.`,
      },
      {
        title: "3. Descripción del Servicio",
        content: `Luminous Dental LV proporciona servicios dentales cosméticos, incluyendo pero no limitado a colocación de carillas, blanqueamiento dental y transformaciones de sonrisa. Nos esforzamos por proporcionar descripciones y representaciones precisas de nuestros servicios, pero no garantizamos resultados específicos.`,
      },
      {
        title: "4. Programación y Cancelaciones de Citas",
        content: `Las citas se pueden programar a través de nuestro sitio web o contactando a nuestra oficina. Requerimos al menos 24 horas de aviso para cancelaciones o reprogramaciones. La falta de aviso adecuado puede resultar en una tarifa de cancelación.`,
      },
      {
        title: "5. Pago y Tarifas",
        content: `Ofrecemos varias opciones de pago, incluyendo planes de financiamiento, para hacer nuestros servicios asequibles. Se requiere el pago completo o un acuerdo de plan de pago antes del inicio de cualquier tratamiento. Pueden aplicarse tarifas adicionales por citas perdidas o cancelaciones tardías.`,
      },
      {
        title: "6. Responsabilidades del Paciente",
        content: `Los pacientes son responsables de proporcionar información precisa sobre su salud dental y preferencias de tratamiento. También es responsabilidad del paciente seguir las instrucciones de cuidado posterior al tratamiento y asistir a las citas de seguimiento según lo recomendado.`,
      },
      {
        title: "7. Limitación de Responsabilidad",
        content: `Luminous Dental LV no es responsable de ningún daño indirecto, incidental o consecuente que surja del uso o la imposibilidad de usar nuestros servicios. Nuestra responsabilidad total hacia usted por cualquier reclamación que surja de nuestros servicios se limita a la cantidad pagada por usted por el servicio específico en cuestión.`,
      },
      {
        title: "8. Ley Aplicable",
        content: `Estos Términos de Servicio se rigen por las leyes del Estado de Nevada, sin tener en cuenta sus principios de conflicto de leyes. Cualquier disputa que surja de estos términos o nuestros servicios se resolverá en los tribunales estatales o federales ubicados en el Condado de Clark, Nevada.`,
      },
      {
        title: "9. Información de Contacto",
        content: `Si tiene alguna pregunta sobre estos Términos de Servicio, contáctenos:
        
        Luminous Dental LV
        1212 S Maryland Pkwy
        Las Vegas, NV 89104
        Teléfono: (725) 291-5588
        Correo: info@luminousdentallv.com`,
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
  const [language, setLanguageState] = useState<"en" | "es">("en");

  // Leer idioma de localStorage al montar
  useEffect(() => {
    const storedLang = typeof window !== "undefined" ? localStorage.getItem("luminous-lang") : null;
    if (storedLang === "en" || storedLang === "es") {
      setLanguageState(storedLang);
    }
  }, []);

  // Guardar idioma en localStorage cuando cambie
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("luminous-lang", language);
    }
  }, [language]);

  const setLanguage = (lang: "en" | "es") => {
    setLanguageState(lang);
  };

  const t = translations[language];
  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
