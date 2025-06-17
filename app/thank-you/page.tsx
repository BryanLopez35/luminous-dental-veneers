"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  CheckCircle,
  Calendar,
  Phone,
  Mail,
  MapPin,
  Star,
  ArrowRight,
  Sparkles,
  Heart,
  Award,
  Users,
  Clock,
  Shield,
  Gift,
  Download,
  Share2,
} from "lucide-react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import Image from "next/image"
import { useLanguage } from "@/context/LanguageContext"

export default function ThankYouPage() {
  const { t, language } = useLanguage();
  const [mounted, setMounted] = useState(false)
  const searchParams = useSearchParams()

  // Get confirmation data from URL params
  const confirmationNumber = searchParams.get("confirmation") || "";
  const customerName = searchParams.get("name") || ""

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null // Prevent hydration mismatch
  }

  // Icon mapping for steps
  const iconMap: Record<string, React.ElementType> = { Phone, Calendar, Award, Sparkles };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      {/* Hero Success Section */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-1000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-amber-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-2000"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="w-32 h-32 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl animate-bounce">
              <CheckCircle className="w-16 h-16 text-white" />
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
              {customerName ? `${t.thankYouTitle} ${customerName}!` : t.thankYouTitle}
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">{t.thankYouSubtitle}</p>

            <Badge className="bg-green-100 text-green-800 hover:bg-green-100 px-6 py-3 text-lg font-semibold">
              <Gift className="w-5 h-5 mr-2" />
              {t.thankYouSocialProof}
            </Badge>
          </div>

          {/* Confirmation Card */}
          <Card className="max-w-4xl mx-auto shadow-2xl border-0 bg-white/95 backdrop-blur-sm mb-16">
            <CardContent className="p-8 md:p-12">
              <div className="text-center space-y-8">
                <div className="flex items-center justify-center space-x-3 mb-6">
                  <Heart className="w-8 h-8 text-red-500 animate-pulse" />
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{t.thankYouConfirmationTitle}</h2>
                  <Heart className="w-8 h-8 text-red-500 animate-pulse" />
                </div>

                <p className="text-xl text-gray-700 leading-relaxed max-w-2xl mx-auto">{t.thankYouConfirmationMessage}</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8">
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border-2 border-blue-200">
                    <div className="flex items-center justify-center mb-3">
                      <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                        <Award className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <p className="text-sm font-semibold text-blue-800 mb-2">{t.thankYouConfirmationNumber}</p>
                    <p className="text-2xl font-bold text-blue-900">{confirmationNumber}</p>
                  </div>

                  <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border-2 border-green-200">
                    <div className="flex items-center justify-center mb-3">
                      <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                        <Clock className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <p className="text-sm font-semibold text-green-800 mb-2">{t.thankYouEstimatedContact}</p>
                    <p className="text-2xl font-bold text-green-900">{t.thankYouWithin24Hours}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Special Offer Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.thankYouSpecialOffer}</h2>
            <p className="text-xl text-blue-100">{t.thankYouOfferTitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.thankYouOfferItems.map((item, index) => (
              <Card
                key={index}
                className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    {index === 0 && <Sparkles className="w-8 h-8 text-white" />}
                    {index === 1 && <Star className="w-8 h-8 text-white" />}
                    {index === 2 && <Gift className="w-8 h-8 text-white" />}
                    {index === 3 && <Shield className="w-8 h-8 text-white" />}
                  </div>
                  <p className="text-white font-semibold">{item}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What Happens Next */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100 mb-6 px-6 py-3 text-lg">
              <Calendar className="w-5 h-5 mr-2" />
              {t.thankYouWhatHappensNext}
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">{t.thankYouWhatHappensNext}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t.thankYouCtaSubtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.thankYouNextSteps.map((step, index) => {
              const StepIcon = iconMap[step.icon as keyof typeof iconMap] || CheckCircle;
              return (
                <Card
                  key={index}
                  className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 border-0 shadow-lg bg-white/90 backdrop-blur-sm relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-600 to-blue-700"></div>
                  <CardContent className="p-8 text-center space-y-6">
                    <div className="relative">
                      <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <StepIcon className="w-10 h-10 text-white" />
                      </div>
                      <div className="absolute -top-3 -right-3 w-10 h-10 bg-amber-400 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                        {step.step}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
                        {step.title}
                      </h3>
                      <Badge variant="outline" className="mb-4 text-xs">
                        <Clock className="w-3 h-3 mr-1" />
                        {step.time}
                      </Badge>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t.thankYouUrgentQuestions}</h2>
            <p className="text-xl text-gray-600">{t.thankYouFollowUs}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white/90 backdrop-blur-sm group">
              <CardContent className="p-8 text-center space-y-6">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                  <Phone className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">{t.thankYouCallNow}</h3>
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 w-full text-lg py-6"
                >
                  <Link href="tel:7252915588">(725) 291-5588</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white/90 backdrop-blur-sm group">
              <CardContent className="p-8 text-center space-y-6">
                <div className="w-20 h-20 bg-gradient-to-br from-indigo-600 to-indigo-700 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">{t.thankYouEmailUs}</h3>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white w-full text-lg py-6"
                >
                  <Link href="mailto:info@luminousdentallv.com">Send Email</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white/90 backdrop-blur-sm group">
              <CardContent className="p-8 text-center space-y-6">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-purple-700 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">{t.thankYouVisitClinic}</h3>
                <div className="text-gray-600 space-y-2">
                  <p className="font-semibold">{t.thankYouAddress}</p>
                  <div className="text-sm space-y-1">
                    <p>{t.thankYouMondayFriday}</p>
                    <p>{t.thankYouSaturday}</p>
                    <p className="text-red-600">{t.thankYouSunday}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Social Proof & Testimonial */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <Card className="shadow-2xl border-0 bg-gradient-to-br from-blue-50 to-indigo-50 overflow-hidden">
              <CardContent className="p-8 md:p-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className="text-center lg:text-left">
                    <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100 mb-6 px-4 py-2">
                      <Users className="w-4 h-4 mr-2" />
                      {t.thankYouTestimonialTitle}
                    </Badge>

                    <div className="flex justify-center lg:justify-start mb-6">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-6 h-6 text-amber-400 fill-current" />
                      ))}
                    </div>

                    <blockquote className="text-xl md:text-2xl text-gray-700 italic leading-relaxed mb-6">
                      "{t.thankYouTestimonialText}"
                    </blockquote>

                    <div className="flex items-center justify-center lg:justify-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-lg">S</span>
                      </div>
                      <div className="text-left">
                        <p className="font-bold text-gray-900">{t.thankYouTestimonialAuthor}</p>
                        <div className="flex items-center space-x-4 text-sm text-gray-600">
                          <span>{t.thankYouRating}</span>
                          <span>•</span>
                          <span>{t.thankYouHappyPatients}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="relative">
                    <Image
                      src="img/veneers-01.webp?height=400&width=400"
                      alt="Happy patient with beautiful smile"
                      width={400}
                      height={400}
                      className="rounded-2xl shadow-xl mx-auto"
                    />
                    <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
                      <CheckCircle className="w-10 h-10 text-white" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-100 mb-6 px-6 py-3 text-lg">
              <Shield className="w-5 h-5 mr-2" />
              {t.thankYouGuaranteeTitle}
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t.thankYouWhyChooseUs}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="shadow-xl border-0 bg-white/90 backdrop-blur-sm">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                  <Award className="w-6 h-6 mr-3 text-blue-600" />
                  {t.thankYouWhyChooseUs}
                </h3>
                <div className="space-y-4">
                  {t.thankYouBenefits.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <p className="text-gray-700">{benefit}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-xl border-0 bg-white/90 backdrop-blur-sm">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                  <Shield className="w-6 h-6 mr-3 text-green-600" />
                  {t.thankYouGuaranteeTitle}
                </h3>
                <div className="space-y-4">
                  {t.thankYouGuaranteeItems.map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <Shield className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <p className="text-gray-700">{item}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{t.thankYouCtaTitle}</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            {t.thankYouCtaSubtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center max-w-2xl mx-auto">
            <Button
              asChild
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              <Link href="/">
                <ArrowRight className="w-5 h-5 mr-2" />
                {t.thankYouBackToHome}
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              <Link href="/#consultation-form">
                <Calendar className="w-5 h-5 mr-2" />
                {t.thankYouScheduleAnother}
              </Link>
            </Button>
          </div>

          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            {/* Botón de compartir funcional */}
            <Button
              variant="ghost"
              className="text-white hover:bg-white/10 border border-white/30"
              onClick={() => {
                if (navigator.share) {
                  navigator.share({
                    title: t.thankYouTitle,
                    text: t.thankYouConfirmationMessage,
                    url: window.location.href,
                  });
                } else {
                  navigator.clipboard.writeText(window.location.href);
                  alert(language === "es" ? "¡Enlace copiado para compartir!" : "Link copied to share!");
                }
              }}
            >
              <Share2 className="w-4 h-4 mr-2" />
              {t.thankYouShareWithFriends}
            </Button>
          </div>
        </div>
      </section>

    </div>
  )
}
