"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Globe, ArrowLeft, Sparkles } from "lucide-react"
import Link from "next/link"

const translations = {
  en: {
    title: "Terms of Service",
    lastUpdated: "Last Updated: January 15, 2025",
    backToHome: "Back to Home",
    sections: [
      {
        title: "1. Acceptance of Terms",
        content: `By accessing and using the Luminous Dental LV website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.`,
      },
      {
        title: "2. Description of Service",
        content: `Luminous Dental LV provides dental care services including but not limited to:
        • Cosmetic dentistry and dental veneers
        • General dental care and treatments
        • Consultation and examination services
        • Dental health education and information
        • Online appointment scheduling
        
        Our services are provided by licensed dental professionals in Las Vegas, Nevada.`,
      },
      {
        title: "3. Patient Responsibilities",
        content: `As a patient, you agree to:
        • Provide accurate and complete health information
        • Arrive on time for scheduled appointments
        • Give 24-hour notice for appointment cancellations
        • Follow post-treatment care instructions
        • Pay for services as agreed upon
        • Respect our staff and other patients
        • Comply with clinic policies and procedures`,
      },
      {
        title: "4. Appointment Policy",
        content: `Appointment scheduling and cancellation policies:
        • Appointments must be scheduled in advance
        • 24-hour notice required for cancellations
        • Late arrivals may result in rescheduling
        • No-show appointments may incur charges
        • Emergency appointments available when possible
        • Consultation fees may apply for initial visits`,
      },
      {
        title: "5. Payment Terms",
        content: `Payment policies and procedures:
        • Payment is due at the time of service unless other arrangements are made
        • We accept cash, credit cards, and approved financing options
        • Insurance claims will be filed as a courtesy
        • Patients are responsible for understanding their insurance benefits
        • Outstanding balances may be subject to collection procedures
        • Payment plans may be available for qualifying treatments`,
      },
      {
        title: "6. Treatment Consent",
        content: `By receiving treatment, you acknowledge that:
        • You have been informed of your treatment options
        • You understand the risks and benefits of proposed treatments
        • No guarantee of treatment outcome has been made
        • You consent to the recommended treatment plan
        • You understand alternative treatment options
        • You have had the opportunity to ask questions`,
      },
      {
        title: "7. Privacy and Confidentiality",
        content: `We are committed to protecting your privacy:
        • Patient information is kept confidential per HIPAA regulations
        • Information is only shared with authorized personnel
        • You have the right to access your dental records
        • We use secure systems to protect your data
        • Marketing communications require your consent
        • You may opt-out of communications at any time`,
      },
      {
        title: "8. Website Use",
        content: `When using our website, you agree to:
        • Use the site for lawful purposes only
        • Not interfere with site functionality
        • Not attempt to gain unauthorized access
        • Respect intellectual property rights
        • Provide accurate information in forms
        • Not transmit harmful or malicious content`,
      },
      {
        title: "9. Limitation of Liability",
        content: `Luminous Dental LV's liability is limited as follows:
        • We are not liable for indirect or consequential damages
        • Our liability is limited to the cost of services provided
        • We are not responsible for treatment outcomes beyond our control
        • Emergency care may be limited by circumstances
        • Third-party services have separate liability terms
        • Some limitations may not apply in certain jurisdictions`,
      },
      {
        title: "10. Intellectual Property",
        content: `All content on this website is protected by intellectual property laws:
        • Website content is owned by Luminous Dental LV
        • Unauthorized use of content is prohibited
        • Trademarks and logos are protected
        • Patient testimonials are used with permission
        • Educational materials are for informational purposes only
        • Commercial use requires written permission`,
      },
      {
        title: "11. Modifications to Terms",
        content: `We reserve the right to modify these terms:
        • Changes will be posted on this page
        • Continued use constitutes acceptance of changes
        • Significant changes will be communicated to patients
        • Previous versions may be available upon request
        • Legal requirements may necessitate immediate changes`,
      },
      {
        title: "12. Contact Information",
        content: `For questions about these Terms of Service, contact us:
        
        Luminous Dental LV
        1212 S Maryland Pkwy
        Las Vegas, NV 89104
        Phone: (725) 291-5588
        Email: info@luminousdentallv.com
        
        Office Hours:
        Monday - Friday: 8:00 AM - 6:00 PM
        Saturday: 9:00 AM - 4:00 PM
        Sunday: Closed`,
      },
    ],
  },
  es: {
    title: "Términos de Servicio",
    lastUpdated: "Última Actualización: 15 de Enero, 2025",
    backToHome: "Volver al Inicio",
    sections: [
      {
        title: "1. Aceptación de Términos",
        content: `Al acceder y usar el sitio web y servicios de Luminous Dental LV, usted acepta y está de acuerdo en cumplir con los términos y disposiciones de este acuerdo. Si no está de acuerdo con lo anterior, por favor no use este servicio.`,
      },
      {
        title: "2. Descripción del Servicio",
        content: `Luminous Dental LV proporciona servicios de atención dental incluyendo pero no limitado a:
        • Odontología cosmética y carillas dentales
        • Atención dental general y tratamientos
        • Servicios de consulta y examen
        • Educación e información sobre salud dental
        • Programación de citas en línea
        
        Nuestros servicios son proporcionados por profesionales dentales licenciados en Las Vegas, Nevada.`,
      },
      {
        title: "3. Responsabilidades del Paciente",
        content: `Como paciente, usted acepta:
        • Proporcionar información de salud precisa y completa
        • Llegar a tiempo a las citas programadas
        • Dar aviso de 24 horas para cancelaciones de citas
        • Seguir las instrucciones de cuidado post-tratamiento
        • Pagar por los servicios según lo acordado
        • Respetar a nuestro personal y otros pacientes
        • Cumplir con las políticas y procedimientos de la clínica`,
      },
      {
        title: "4. Política de Citas",
        content: `Políticas de programación y cancelación de citas:
        • Las citas deben programarse con anticipación
        • Se requiere aviso de 24 horas para cancelaciones
        • Las llegadas tardías pueden resultar en reprogramación
        • Las citas perdidas pueden incurrir en cargos
        • Citas de emergencia disponibles cuando sea posible
        • Pueden aplicar tarifas de consulta para visitas iniciales`,
      },
      {
        title: "5. Términos de Pago",
        content: `Políticas y procedimientos de pago:
        • El pago se debe al momento del servicio a menos que se hagan otros arreglos
        • Aceptamos efectivo, tarjetas de crédito y opciones de financiamiento aprobadas
        • Los reclamos de seguro se presentarán como cortesía
        • Los pacientes son responsables de entender sus beneficios de seguro
        • Los saldos pendientes pueden estar sujetos a procedimientos de cobranza
        • Planes de pago pueden estar disponibles para tratamientos calificados`,
      },
      {
        title: "6. Consentimiento de Tratamiento",
        content: `Al recibir tratamiento, usted reconoce que:
        • Ha sido informado de sus opciones de tratamiento
        • Entiende los riesgos y beneficios de los tratamientos propuestos
        • No se ha hecho garantía del resultado del tratamiento
        • Consiente al plan de tratamiento recomendado
        • Entiende las opciones de tratamiento alternativas
        • Ha tenido la oportunidad de hacer preguntas`,
      },
      {
        title: "7. Privacidad y Confidencialidad",
        content: `Estamos comprometidos a proteger su privacidad:
        • La información del paciente se mantiene confidencial según las regulaciones HIPAA
        • La información solo se comparte con personal autorizado
        • Tiene derecho a acceder a sus registros dentales
        • Usamos sistemas seguros para proteger sus datos
        • Las comunicaciones de marketing requieren su consentimiento
        • Puede optar por no recibir comunicaciones en cualquier momento`,
      },
      {
        title: "8. Uso del Sitio Web",
        content: `Al usar nuestro sitio web, usted acepta:
        • Usar el sitio solo para propósitos legales
        • No interferir con la funcionalidad del sitio
        • No intentar obtener acceso no autorizado
        • Respetar los derechos de propiedad intelectual
        • Proporcionar información precisa en los formularios
        • No transmitir contenido dañino o malicioso`,
      },
      {
        title: "9. Limitación de Responsabilidad",
        content: `La responsabilidad de Luminous Dental LV está limitada de la siguiente manera:
        • No somos responsables por daños indirectos o consecuenciales
        • Nuestra responsabilidad está limitada al costo de los servicios proporcionados
        • No somos responsables por resultados de tratamiento fuera de nuestro control
        • La atención de emergencia puede estar limitada por las circunstancias
        • Los servicios de terceros tienen términos de responsabilidad separados
        • Algunas limitaciones pueden no aplicar en ciertas jurisdicciones`,
      },
      {
        title: "10. Propiedad Intelectual",
        content: `Todo el contenido de este sitio web está protegido por leyes de propiedad intelectual:
        • El contenido del sitio web es propiedad de Luminous Dental LV
        • El uso no autorizado del contenido está prohibido
        • Las marcas comerciales y logos están protegidos
        • Los testimonios de pacientes se usan con permiso
        • Los materiales educativos son solo para fines informativos
        • El uso comercial requiere permiso por escrito`,
      },
      {
        title: "11. Modificaciones a los Términos",
        content: `Nos reservamos el derecho de modificar estos términos:
        • Los cambios se publicarán en esta página
        • El uso continuado constituye aceptación de los cambios
        • Los cambios significativos se comunicarán a los pacientes
        • Las versiones anteriores pueden estar disponibles bajo solicitud
        • Los requisitos legales pueden necesitar cambios inmediatos`,
      },
      {
        title: "12. Información de Contacto",
        content: `Para preguntas sobre estos Términos de Servicio, contáctenos:
        
        Luminous Dental LV
        1212 S Maryland Pkwy
        Las Vegas, NV 89104
        Teléfono: (725) 291-5588
        Correo: info@luminousdentallv.com
        
        Horarios de Oficina:
        Lunes - Viernes: 8:00 AM - 6:00 PM
        Sábado: 9:00 AM - 4:00 PM
        Domingo: Cerrado`,
      },
    ],
  },
}

export default function TermsOfService() {
  const [language, setLanguage] = useState<"en" | "es">("en")
  const t = translations[language]

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
              <span className="font-medium">{language === "en" ? "ES" : "EN"}</span>
            </Button>

            <Button asChild variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
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
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{t.title}</h1>
            <p className="text-lg text-gray-600">{t.lastUpdated}</p>
          </div>

          <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm">
            <CardContent className="p-8 md:p-12">
              <div className="space-y-8">
                {t.sections.map((section, index) => (
                  <div key={index} className="space-y-4">
                    <h2 className="text-2xl font-bold text-gray-900 border-b border-blue-200 pb-2">{section.title}</h2>
                    <div className="text-gray-700 leading-relaxed whitespace-pre-line">{section.content}</div>
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
          <p className="text-gray-300">&copy; {new Date().getFullYear()} Luminous Dental LV. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
