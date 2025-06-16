"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Globe, ArrowLeft, Sparkles } from "lucide-react";
import Link from "next/link";

const translations = {
  en: {
    title: "Privacy Policy",
    lastUpdated: "Last Updated: January 15, 2025",
    backToHome: "Back to Home",
    sections: [
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
  },
  es: {
    title: "Política de Privacidad",
    lastUpdated: "Última Actualización: 15 de Enero, 2025",
    backToHome: "Volver al Inicio",
    sections: [
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
  },
};

export default function PrivacyPolicy() {
  const [language, setLanguage] = useState<"en" | "es">("en");
  const t = translations[language];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-blue-100">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow-lg">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-amber-400 rounded-full animate-pulse"></div>
            </div>
            <div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 bg-clip-text text-transparent">
                Luminous Dental LV
              </span>
              <p className="text-xs text-gray-600">Premium Dental Care</p>
            </div>
          </Link>

          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setLanguage(language === "en" ? "es" : "en")}
              className="flex items-center space-x-2 hover:bg-blue-50"
            >
              <Globe className="w-4 h-4" />
              <span className="font-medium">
                {language === "en" ? "ES" : "EN"}
              </span>
            </Button>

            <Button
              asChild
              variant="outline"
              className="border-blue-600 text-blue-600 hover:bg-blue-50"
            >
              <Link href="/">
                <ArrowLeft className="w-4 h-4 mr-2" />
                {t.backToHome}
              </Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t.title}
            </h1>
            <p className="text-lg text-gray-600">{t.lastUpdated}</p>
          </div>

          <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm">
            <CardContent className="p-8 md:p-12">
              <div className="space-y-8">
                {t.sections.map((section, index) => (
                  <div key={index} className="space-y-4">
                    <h2 className="text-2xl font-bold text-gray-900 border-b border-blue-200 pb-2">
                      {section.title}
                    </h2>
                    <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                      {section.content}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="text-center mt-8">
            <Button
              asChild
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800"
            >
              <Link href="/">
                <ArrowLeft className="w-4 h-4 mr-2" />
                {t.backToHome}
              </Link>
            </Button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-300">
            &copy; {new Date().getFullYear()} Luminous Dental LV. All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
