"use client";

import type React from "react";

import { useState, useRef } from "react";
import HeroSection from "@/components/HeroSection";
import FeaturesStrip from "@/components/FeaturesStrip";
import WhyChooseUs from "@/components/WhyChooseUs";
import BeforeAfterGallery from "@/components/BeforeAfterGallery";
import Testimonials from "@/components/Testimonials";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import LocalSeoSection from "@/components/LocalSeoSection";
import { useLanguage } from "@/context/LanguageContext";

export default function VeneersLandingPage() {
  const { t, language, setLanguage } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const scrollToForm = () => {
    const formElement = document.getElementById("consultation-form");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch("/api/submit-consultation", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        setIsSubmitted(true);
        // Reset form
        (e.target as HTMLFormElement).reset();
      } else {
        alert(result.message || "Error submitting form. Please try again.");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      alert("Error submitting form. Please try again or call us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

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
      name: "Julio Ortega",
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
  ];

  const galleryImages = [
    {
      before: "img/gallery/case1/BA XOCHITL CARILLAS PT2.webp",
      after: "img/gallery/case1/BA XOCHITL CARILLAS PT1.webp",
      caption: "Smile makeover with porcelain veneers",
    },
    {
      before: "img/gallery/case2/BA carillasxoch22.webp",
      after: "img/gallery/case2/BA carillasxoch2.webp",
      caption: "Natural look achieved in 2 visits",
    },
    {
      before: "img/gallery/case3/veneers-case-3.webp",
      after: "img/gallery/case3/Cortes BA CARILLAS RESINA INYECTADA2.webp",
      caption: "Confidence restored",
    },
    // Agregar mas imagenes según sea necesario
  ];

  return (
    <div className="min-h-screen bg-white">
      <HeroSection t={t} scrollToForm={scrollToForm} />
      <FeaturesStrip features={t.features} />
      <WhyChooseUs t={t} />
      <BeforeAfterGallery t={t} galleryImages={galleryImages} />
      <Testimonials t={t} testimonials={testimonials} />
      <LeadCaptureForm
        t={t}
        isSubmitting={isSubmitting}
        setIsSubmitting={setIsSubmitting}
        isSubmitted={isSubmitted}
        handleFormSubmit={handleFormSubmit}
        setIsSubmitted={setIsSubmitted}
      />
      <LocalSeoSection t={t} />
    </div>
  );
}