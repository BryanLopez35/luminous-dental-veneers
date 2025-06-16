import React from "react";
import { Badge } from "@/components/ui/badge";
import { Award, Calendar, ArrowRight, Star, Users, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface HeroSectionProps {
  t: any;
  scrollToForm: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ t, scrollToForm }) => (
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
              <a href="tel:7252915588">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h2.28a2 2 0 011.94 1.515l.518 2.073a2 2 0 01-.45 1.947l-1.1 1.1a16.001 16.001 0 006.586 6.586l1.1-1.1a2 2 0 011.947-.45l2.073.518A2 2 0 0121 18.72V21a2 2 0 01-2 2h-1C9.163 23 1 14.837 1 5V4a2 2 0 012-2z"></path></svg>
                (725) 291-5588
              </a>
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
              src="/img/veneers-hero.webp"
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
);

export default HeroSection;
