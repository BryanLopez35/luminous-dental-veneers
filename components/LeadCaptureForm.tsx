import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Calendar, Loader2, ArrowRight, Check } from "lucide-react";
import { useRouter } from "next/navigation";

interface LeadCaptureFormProps {
  t: any;
  isSubmitting: boolean;
  setIsSubmitting: (v: boolean) => void;
  isSubmitted: boolean;
  handleFormSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  setIsSubmitted: (v: boolean) => void;
}

const LeadCaptureForm: React.FC<LeadCaptureFormProps> = ({ t, isSubmitting, setIsSubmitting, isSubmitted, handleFormSubmit, setIsSubmitted }) => {
  const router = useRouter();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting) return; // Evita envíos múltiples
    setIsSubmitting(true);
    setIsSubmitted(false);
    // Enviar datos al backend y redirigir con el número de confirmación
    const formData = new FormData(e.currentTarget);
    try {
      const response = await fetch("/api/submit-consultation", {
        method: "POST",
        body: formData,
      });
      const result = await response.json();
      if (result.success && result.data?.confirmationNumber) {
        router.push(`/thank-you?confirmation=${encodeURIComponent(result.data.confirmationNumber)}&name=${encodeURIComponent(formData.get("name") as string)}`);
      } else {
        alert(result.message || "Error submitting form. Please try again.");
      }
    } catch (error) {
      alert("Error submitting form. Please try again or call us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="consultation-form" className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white relative overflow-hidden">
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
                  <form className="space-y-6" onSubmit={onSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="block text-sm font-semibold text-gray-700">{t.fullName} *</label>
                        <Input id="name" name="name" type="text" required placeholder={t.fullName} className="w-full h-12 border-2 border-gray-200 focus:border-blue-500 rounded-lg" disabled={isSubmitting} />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="phone" className="block text-sm font-semibold text-gray-700">{t.phoneNumber} *</label>
                        <Input id="phone" name="phone" type="tel" required placeholder="(702) 123-4567" className="w-full h-12 border-2 border-gray-200 focus:border-blue-500 rounded-lg" disabled={isSubmitting} />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700">{t.emailAddress} *</label>
                      <Input id="email" name="email" type="email" required placeholder="your.email@example.com" className="w-full h-12 border-2 border-gray-200 focus:border-blue-500 rounded-lg" disabled={isSubmitting} />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="preferred-time" className="block text-sm font-semibold text-gray-700">{t.preferredTime}</label>
                      <select id="preferred-time" name="preferred-time" className="w-full h-12 px-4 border-2 border-gray-200 focus:border-blue-500 rounded-lg focus:outline-none" disabled={isSubmitting}>
                        <option value="">{t.selectTime}</option>
                        <option value="morning">{t.morning}</option>
                        <option value="afternoon">{t.afternoon}</option>
                        <option value="evening">{t.evening}</option>
                      </select>
                    </div>
                    <Button type="submit" size="lg" disabled={isSubmitting} className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-4 sm:py-6 text-base sm:text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none">
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
                  </form>
                </>
              ) : (
                <div className="text-center space-y-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto">
                    <Check className="w-10 h-10 text-white" />
                  </div>
                  <h2 className="text-4xl font-bold text-gray-900">{t.submitted}</h2>
                  <p className="text-xl text-gray-600">{t.submittedMessage}</p>
                  <Button onClick={() => setIsSubmitted(false)} variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                    Submit Another Request
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default LeadCaptureForm;
