import React from "react";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface Testimonial {
  text: string;
  name: string;
  location: string;
}

interface TestimonialsProps {
  t: any;
  testimonials: Testimonial[];
}

const Testimonials: React.FC<TestimonialsProps> = ({ t, testimonials }) => (
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
              <blockquote className="text-gray-700 italic leading-relaxed text-lg">
                "{testimonial.text}"
              </blockquote>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
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
);

export default Testimonials;
