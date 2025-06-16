"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import usaFlag from "public/usa-flag.svg";
import mexicoFlag from "public/mexico-flag.svg";

const Header: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  const pathname = usePathname();
  const router = useRouter();

  const handleBookClick = () => {
    if (pathname === "/") {
      const el = document.getElementById("consultation-form");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      router.push("/#consultation-form");
    }
  };

  return (
    <header className="bg-white/95 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-blue-100">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="relative">
            <Link href="/">
              <img
                src="img/luminous-logo.webp"
                alt="Luminous Dental LV Logo"
                className="w-72 h-16 rounded-xl object-contain cursor-pointer"
              />
            </Link>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setLanguage(language === "en" ? "es" : "en")}
            className="flex items-center space-x-2 hover:bg-blue-50"
          >
            <img
              src={language === "en" ? "img/mexico-flag.svg" : "img/usa-flag.svg"}
              alt={language === "en" ? "Switch to Spanish" : "Switch to English"}
              className="w-7 h-7 object-contain"
            />
            <span className="font-medium">{language === "en" ? "ES" : "EN"}</span>
          </Button>
          <Button
            onClick={handleBookClick}
            className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-2 sm:px-4 md:px-6 py-1.5 sm:py-2 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-xs sm:text-sm md:text-base"
          >
            <Phone className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
            <span className="hidden md:inline">{t.bookConsultation}</span>
            <span className="md:hidden">Book</span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
