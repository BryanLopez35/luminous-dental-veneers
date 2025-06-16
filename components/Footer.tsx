"use client";
import React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const Footer: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
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
            <h3 className="text-xl font-bold mb-6 text-blue-200">
              {t.navigation}
            </h3>
            <ul className="space-y-3">
              {[
                { label: t.home, href: "https://luminousdentallv.com/" },
                {
                  label: t.about,
                  href: "https://luminousdentallv.com/about-us/",
                },
                {
                  label: t.contact,
                  href: "https://luminousdentallv.com/contact-us/",
                },
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
            <h3 className="text-xl font-bold mb-6 text-blue-200">
              {t.services}
            </h3>
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
            <h3 className="text-xl font-bold mb-6 text-blue-200">
              {t.contactInfo}
            </h3>
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
              &copy; {new Date().getFullYear()} Luminous Dental Las Vegas. All
              rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link
                href="/privacy"
                className="text-gray-400 hover:text-white transition-colors"
              >
                {t.privacyPolicy}
              </Link>
              <Link
                href="/terms"
                className="text-gray-400 hover:text-white transition-colors"
              >
                {t.termsOfService}
              </Link>
            </div>
            <button
              className="ml-4 px-3 py-1 rounded bg-blue-800 text-white text-xs hover:bg-blue-700 flex items-center space-x-2"
              onClick={() => setLanguage(language === "en" ? "es" : "en")}
            >
              <img
                src={language === "en" ? "img/mexico-flag.svg" : "img/usa-flag.svg"}
                alt={
                  language === "en" ? "Switch to Spanish" : "Switch to English"
                }
                className="w-7 h-7 object-contain"
              />
              <span>{language === "en" ? "ES" : "EN"}</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
