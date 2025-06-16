"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Phone,
  Mail,
  MapPin,
  Star,
  Clock,
  DollarSign,
  Award,
  Users,
  CheckCircle,
  ArrowRight,
  Globe,
  Sparkles,
  Shield,
  Heart,
  Zap,
  Calendar,
  MessageCircle,
  Loader2,
  Check,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

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
    experiencedDesc: "Over 15 years of experience in cosmetic dentistry and veneer placement in Las Vegas.",
    affordablePlans: "Affordable Payment Plans",
    affordableDesc: "Flexible financing options to make your dream smile affordable with monthly payment plans.",
    naturalResults: "Natural-Looking Results",
    naturalDesc: "Custom-crafted porcelain veneers that blend seamlessly with your natural teeth.",
    convenientLocation: "Convenient Las Vegas Location",
    locationDesc: "Centrally located on Maryland Parkway, easily accessible from anywhere in Las Vegas.",

    // Gallery
    galleryTitle: "Amazing Veneer Transformations in Las Vegas",
    gallerySubtitle: "See the incredible results our patients have achieved with custom dental veneers.",
    beforeAfter: "Before & After",

    // Testimonials
    testimonialsTitle: "What Our Las Vegas Patients Say",
    testimonialsSubtitle: "Real reviews from real patients who transformed their smiles with veneers.",

    // Form
    formTitle: "Request a Free Consultation",
    formSubtitle: "Ready to transform your smile? Schedule your complimentary veneer consultation today.",
    fullName: "Full Name",
    phoneNumber: "Phone Number",
    emailAddress: "Email Address",
    preferredTime: "Preferred Time",
    selectTime: "Select preferred time",
    morning: "Morning (8AM - 12PM)",
    afternoon: "Afternoon (12PM - 5PM)",
    evening: "Evening (5PM - 7PM)",
    scheduleButton: "Schedule My Free Consultation",
    contactNote: "We'll contact you within 24 hours. Your information is secure and confidential.",
    submitting: "Submitting...",
    submitted: "Request Submitted Successfully!",
    submittedMessage: "Thank you! We'll contact you within 24 hours to schedule your free consultation.",

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
        description: "Get your smile assessment and treatment plan in one visit",
      },
      {
        title: "Advanced Technology",
        description: "State-of-the-art equipment for precise, comfortable treatments",
      },
      {
        title: "Lifetime Warranty",
        description: "We stand behind our work with comprehensive warranty coverage",
      },
      {
        title: "Pain-Free Process",
        description: "Comfortable, minimally invasive procedures with sedation options",
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
    experiencedDesc: "Más de 15 años de experiencia en odontología cosmética y colocación de carillas en Las Vegas.",
    affordablePlans: "Planes de Pago Accesibles",
    affordableDesc:
      "Opciones de financiamiento flexibles para hacer tu sonrisa soñada accesible con planes de pago mensual.",
    naturalResults: "Resultados de Aspecto Natural",
    naturalDesc: "Carillas de porcelana hechas a medida que se mezclan perfectamente con tus dientes naturales.",
    convenientLocation: "Ubicación Conveniente en Las Vegas",
    locationDesc: "Ubicado centralmente en Maryland Parkway, fácilmente accesible desde cualquier lugar de Las Vegas.",

    // Gallery
    galleryTitle: "Increíbles Transformaciones de Carillas en Las Vegas",
    gallerySubtitle:
      "Ve los resultados increíbles que nuestros pacientes han logrado con carillas dentales personalizadas.",
    beforeAfter: "Antes y Después",

    // Testimonials
    testimonialsTitle: "Lo Que Dicen Nuestros Pacientes de Las Vegas",
    testimonialsSubtitle: "Reseñas reales de pacientes reales que transformaron sus sonrisas con carillas.",

    // Form
    formTitle: "Solicitar una Consulta Gratuita",
    formSubtitle: "¿Listo para transformar tu sonrisa? Programa tu consulta gratuita de carillas hoy.",
    fullName: "Nombre Completo",
    phoneNumber: "Número de Teléfono",
    emailAddress: "Dirección de Email",
    preferredTime: "Hora Preferida",
    selectTime: "Seleccionar hora preferida",
    morning: "Mañana (8AM - 12PM)",
    afternoon: "Tarde (12PM - 5PM)",
    evening: "Noche (5PM - 7PM)",
    scheduleButton: "Programar Mi Consulta Gratuita",
    contactNote: "Te contactaremos dentro de 24 horas. Tu información es segura y confidencial.",
    submitting: "Enviando...",
    submitted: "¡Solicitud Enviada Exitosamente!",
    submittedMessage: "¡Gracias! Te contactaremos dentro de 24 horas para programar tu consulta gratuita.",

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
        description: "Obtén tu evaluación de sonrisa y plan de tratamiento en una visita",
      },
      {
        title: "Tecnología Avanzada",
        description: "Equipos de última generación para tratamientos precisos y cómodos",
      },
      {
        title: "Garantía de por Vida",
        description: "Respaldamos nuestro trabajo con cobertura de garantía integral",
      },
      {
        title: "Proceso Sin Dolor",
        description: "Procedimientos cómodos y mínimamente invasivos con opciones de sedación",
      },
    ],
  },
}

export default function VeneersLandingPage() {
  const [language, setLanguage] = useState<"en" | "es">("en")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const t = translations[language]

  const scrollToForm = () => {
    const formElement = document.getElementById("consultation-form")
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(e.currentTarget)

    try {
      const response = await fetch("/api/submit-consultation", {
        method: "POST",
        body: formData,
      })

      const result = await response.json()

      if (result.success) {
        setIsSubmitted(true)
        // Reset form
        ;(e.target as HTMLFormElement).reset()
      } else {
        alert(result.message || "Error submitting form. Please try again.")
      }
    } catch (error) {
      console.error("Form submission error:", error)
      alert("Error submitting form. Please try again or call us directly.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const testimonials = [
    {
      text:
        language === "en"
          ? "I am very happy with the treatment they gave me and I recommend everyone to come to this dentist."
          : "Estoy muy contenta con el tratamiento que me dieron y recomiendo a todos que acudan a este dentista.",
      name: "Elena Oliva",
      location: "Las Vegas, NV",
    },
    {
      text:
        language === "en"
          ? "I like the Dr. Very much and he dental assistant was very patient with me!"
          : "Me gusta mucho el Dr. y su asistente dental fue muy paciente conmigo!",
      name: "Julio Ortega.",
      location: "Henderson, NV",
    },
    {
      text:
        language === "en"
          ? "This place is amazing! They are very professional and they are very patient! Highly recommend!"
          : "Este lugar es increíble! Son muy profesionales y son muy pacientes! ¡Lo recomiendo!",
      name: "Saul Mendoza",
      location: "Las Vegas, NV",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-blue-100">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <img
                src="img/luminous-logo.webp"
                alt="Luminous Dental LV Logo"
                className="w-72 h-16 rounded-xl  object-contain"
              />
            </div>

          </div>

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

            <Button
              onClick={scrollToForm}
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-2 sm:px-4 md:px-6 py-1.5 sm:py-2 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-xs sm:text-sm md:text-base"
            >
              <Phone className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
              <span className="hidden md:inline">{t.bookConsultation}</span>
              <span className="md:hidden">Book</span>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 sm:py-16 md:py-20 relative bg-gradient-to-br from-blue-50 via-white to-blue-50 py-20 md:py-32 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-1000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-amber-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-2000"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <Badge className="bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 px-4 py-2 text-sm font-semibold shadow-lg">
                  <Award className="w-4 h-4 mr-2" />
                  {t.topDentist}
                </Badge>

                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight">
                  <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 bg-clip-text text-transparent">
                    {t.heroTitle.split(" ").slice(0, 2).join(" ")}
                  </span>
                  <br />
                  <span className="text-gray-800">{t.heroTitle.split(" ").slice(2).join(" ")}</span>
                </h1>

                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-2xl">
                  {t.heroSubtitle}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Button
                  onClick={scrollToForm}
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-4 sm:px-6 md:px-8 py-3 sm:py-4 md:py-6 text-sm sm:text-base md:text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group"
                >
                  <Calendar className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:animate-bounce" />
                  <span className="hidden sm:inline">{t.scheduleConsultation}</span>
                  <span className="sm:hidden">Schedule Consultation</span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-4 sm:px-6 md:px-8 py-3 sm:py-4 md:py-6 text-sm sm:text-base md:text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  asChild
                >
                  <Link href="tel:7252915588">
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                    (725) 291-5588
                  </Link>
                </Button>
              </div>

              <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-8 pt-4">
                <div className="flex items-center space-x-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400 fill-current" />
                    ))}
                  </div>
                  <span className="text-gray-700 font-semibold text-sm sm:text-base">{t.rating}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                  <span className="text-gray-700 font-semibold text-sm sm:text-base">{t.happyPatients}</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <Image
                  src="img/fondo-veneers.png?height=900&width=900"
                  alt="Patient with dental veneers smiling in Las Vegas"
                  width={600}
                  height={700}
                  className="rounded-3xl shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-500 rounded-3xl transform rotate-6 opacity-20"></div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-amber-400 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                <Sparkles className="w-12 h-12 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Strip */}
      <section className="py-12 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {t.features.map((feature, index) => (
              <div key={index} className="text-center space-y-3">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto">
                  {index === 0 && <Clock className="w-8 h-8" />}
                  {index === 1 && <Zap className="w-8 h-8" />}
                  {index === 2 && <Shield className="w-8 h-8" />}
                  {index === 3 && <Heart className="w-8 h-8" />}
                </div>
                <h3 className="text-lg font-semibold">{feature.title}</h3>
                <p className="text-blue-100 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100 mb-4 px-4 py-2">
              <Award className="w-4 h-4 mr-2" />
              Why Choose Us
            </Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              {t.whyChooseTitle}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t.whyChooseSubtitle}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Award,
                title: t.experiencedDentists,
                desc: t.experiencedDesc,
                color: "from-blue-600 to-blue-700",
              },
              {
                icon: DollarSign,
                title: t.affordablePlans,
                desc: t.affordableDesc,
                color: "from-blue-500 to-blue-600",
              },
              {
                icon: Star,
                title: t.naturalResults,
                desc: t.naturalDesc,
                color: "from-amber-500 to-amber-600",
              },
              {
                icon: MapPin,
                title: t.convenientLocation,
                desc: t.locationDesc,
                color: "from-indigo-500 to-indigo-600",
              },
            ].map((item, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg bg-white/80 backdrop-blur-sm"
              >
                <CardContent className="p-8 text-center space-y-6">
                  <div
                    className={`w-20 h-20 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    <item.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Before & After Gallery */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100 mb-4 px-4 py-2">
              <Sparkles className="w-4 h-4 mr-2" />
              Transformations
            </Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              {t.galleryTitle}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t.gallerySubtitle}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((index) => (
              <Card
                key={index}
                className="group overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border-0 shadow-lg"
              >
                <div className="relative">
                  <Image
                    src={`/placeholder.svg?height=400&width=500`}
                    alt={`Before and after dental veneers transformation Las Vegas patient ${index}`}
                    width={500}
                    height={400}
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <Badge className="absolute top-4 left-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg">
                    <CheckCircle className="w-4 h-4 mr-1" />
                    {t.beforeAfter}
                  </Badge>
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-sm font-semibold">Amazing transformation in just 2 visits!</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Patient Testimonials */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-indigo-100 text-indigo-800 hover:bg-indigo-100 mb-4 px-4 py-2">
              <MessageCircle className="w-4 h-4 mr-2" />
              Testimonials
            </Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              {t.testimonialsTitle}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t.testimonialsSubtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg bg-white/90 backdrop-blur-sm"
              >
                <CardContent className="p-8 space-y-6">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-amber-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-gray-700 italic leading-relaxed text-lg">"{testimonial.text}"</blockquote>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-lg">{testimonial.name.charAt(0)}</span>
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">{testimonial.name}</p>
                      <p className="text-sm text-gray-600">{testimonial.location}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Capture Form */}
      <section
        id="consultation-form"
        className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto">
            <Card className="p-10 shadow-2xl border-0 bg-white/95 backdrop-blur-md">
              <CardContent className="space-y-8">
                {!isSubmitted ? (
                  <>
                    <div className="text-center">
                      <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Calendar className="w-10 h-10 text-white" />
                      </div>
                      <h2 className="text-4xl font-bold text-gray-900 mb-4">{t.formTitle}</h2>
                      <p className="text-xl text-gray-600">{t.formSubtitle}</p>
                    </div>

                    <form className="space-y-6" onSubmit={handleFormSubmit}>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                        <div className="space-y-2">
                          <label htmlFor="name" className="block text-sm font-semibold text-gray-700">
                            {t.fullName} *
                          </label>
                          <Input
                            id="name"
                            name="name"
                            type="text"
                            required
                            placeholder={t.fullName}
                            className="w-full h-12 border-2 border-gray-200 focus:border-blue-500 rounded-lg"
                            disabled={isSubmitting}
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="phone" className="block text-sm font-semibold text-gray-700">
                            {t.phoneNumber} *
                          </label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            required
                            placeholder="(702) 123-4567"
                            className="w-full h-12 border-2 border-gray-200 focus:border-blue-500 rounded-lg"
                            disabled={isSubmitting}
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="email" className="block text-sm font-semibold text-gray-700">
                          {t.emailAddress} *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          placeholder="your.email@example.com"
                          className="w-full h-12 border-2 border-gray-200 focus:border-blue-500 rounded-lg"
                          disabled={isSubmitting}
                        />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="preferred-time" className="block text-sm font-semibold text-gray-700">
                          {t.preferredTime}
                        </label>
                        <select
                          id="preferred-time"
                          name="preferred-time"
                          className="w-full h-12 px-4 border-2 border-gray-200 focus:border-blue-500 rounded-lg focus:outline-none"
                          disabled={isSubmitting}
                        >
                          <option value="">{t.selectTime}</option>
                          <option value="morning">{t.morning}</option>
                          <option value="afternoon">{t.afternoon}</option>
                          <option value="evening">{t.evening}</option>
                        </select>
                      </div>

                      <Button
                        type="submit"
                        size="lg"
                        disabled={isSubmitting}
                        className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-4 sm:py-6 text-base sm:text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 animate-spin" />
                            {t.submitting}
                          </>
                        ) : (
                          <>
                            <Calendar className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 group-hover:animate-bounce" />
                            <span className="hidden sm:inline">{t.scheduleButton}</span>
                            <span className="sm:hidden">Schedule Consultation</span>
                            <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 ml-2 sm:ml-3 group-hover:translate-x-1 transition-transform" />
                          </>
                        )}
                      </Button>

                      <div className="text-center">
                        <p className="text-sm text-gray-600 bg-blue-50 p-4 rounded-lg border border-blue-200">
                          <strong className="text-blue-700">{t.contactNote}</strong>
                        </p>
                      </div>
                    </form>
                  </>
                ) : (
                  <div className="text-center space-y-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto">
                      <Check className="w-10 h-10 text-white" />
                    </div>
                    <h2 className="text-4xl font-bold text-gray-900">{t.submitted}</h2>
                    <p className="text-xl text-gray-600">{t.submittedMessage}</p>
                    <Button
                      onClick={() => setIsSubmitted(false)}
                      variant="outline"
                      className="border-blue-600 text-blue-600 hover:bg-blue-50"
                    >
                      Submit Another Request
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Local SEO Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            <div className="space-y-8">
              <div>
                <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100 mb-4 px-4 py-2">
                  <MapPin className="w-4 h-4 mr-2" />
                  Visit Us
                </Badge>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                  {t.visitClinic}
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">{t.clinicDescription}</p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-lg">{t.address}</p>
                    <p className="text-gray-600">
                      1212 S Maryland Pkwy
                      <br />
                      Las Vegas, Nevada 89104
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-lg">{t.phone}</p>
                    <Link href="tel:7252915588" className="text-blue-600 hover:underline text-lg font-semibold">
                      (725) 291-5588
                    </Link>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-lg">{t.email}</p>
                    <Link href="mailto:info@luminousdentallv.com" className="text-blue-600 hover:underline">
                      info@luminousdentallv.com
                    </Link>
                  </div>
                </div>
              </div>

              <Card className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200">
                <CardContent className="space-y-4">
                  <h3 className="font-bold text-gray-900 text-xl flex items-center">
                    <Clock className="w-6 h-6 mr-2 text-blue-600" />
                    {t.officeHours}
                  </h3>
                  <div className="space-y-2 text-gray-700">
                    <div className="flex justify-between items-center py-2 border-b border-blue-200">
                      <span className="font-medium">{t.monday}</span>
                      <span className="font-semibold">8:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-blue-200">
                      <span className="font-medium">{t.saturday}</span>
                      <span className="font-semibold">9:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="font-medium">{t.sunday}</span>
                      <span className="font-semibold text-red-600">{t.closed}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="relative">
              <Card className="overflow-hidden shadow-2xl border-0">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d201.33983693733543!2d-115.13778445284754!3d36.15590967461434!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c8c30047076025%3A0x937b14a472d729cb!2sLuminous%20Dental!5e0!3m2!1sen!2sus!4v1750066143875!5m2!1sen!2sus"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg"
                ></iframe>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                {/* Logo reemplazando el cuadro con sparkles */}
                <img
                  src="img/luminous-logo-blanco.webp"
                  alt="Luminous Dental LV Logo"
                  className="w-72 h-28 rounded-xl object-contain"
                />
              </div>
              <p className="text-gray-300 leading-relaxed">
                {language === "en"
                  ? "Las Vegas's premier destination for dental veneers and cosmetic dentistry."
                  : "El destino principal de Las Vegas para carillas dentales y odontología cosmética."}
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6 text-blue-200">{t.navigation}</h3>
              <ul className="space-y-3">
                {[
                  { label: t.home, href: "https://luminousdentallv.com/" },
                  { label: t.about, href: "https://luminousdentallv.com/about-us/" },
                  { label: t.contact, href: "https://luminousdentallv.com/contact-us/" },
                ].map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.href}
                      className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center group"
                    >
                      <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6 text-blue-200">{t.services}</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2 text-blue-400" />
                  {t.porcelainVeneers}
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2 text-blue-400" />
                  {t.cosmeticDentistry}
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2 text-blue-400" />
                  {t.smileMakeovers}
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2 text-blue-400" />
                  {t.teethWhitening}
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6 text-blue-200">{t.contactInfo}</h3>
              <div className="space-y-4">
                <div className="text-gray-300">
                  <p className="font-semibold">1212 S Maryland Pkwy</p>
                  <p>Las Vegas, NV 89104</p>
                </div>
                <div className="text-gray-300">
                  <p className="font-semibold">(725) 291-5588</p>
                  <p>info@luminousdentallv.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-gray-400 text-center md:text-left">
                &copy; {new Date().getFullYear()} Luminous Dental Las Vegas. All rights reserved.
              </p>
              <div className="flex space-x-6">
                <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                  {t.privacyPolicy}
                </Link>
                <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                  {t.termsOfService}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
