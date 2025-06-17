"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function TermsOfService() {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t.termsTitle}
            </h1>
            <p className="text-lg text-gray-600">{t.termsLastUpdated}</p>
          </div>

          <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm">
            <CardContent className="p-8 md:p-12">
              <div className="space-y-8">
                {t.termsSections.map((section: any, index: number) => (
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
                {t.thankYouBackToHome}
              </Link>
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
