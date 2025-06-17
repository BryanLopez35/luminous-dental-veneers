import React from "react";
import { Badge } from "@/components/ui/badge";
import { Award, DollarSign, Star, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface WhyChooseUsProps {
  t: any;
}

const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ t }) => (
  <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-gray-50 to-blue-50">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100 mb-4 px-4 py-2">
          <Award className="w-4 h-4 mr-2" />
          {t.whyChooseUsBadge}
        </Badge>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
          {t.whyChooseTitle}
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          {t.whyChooseSubtitle}
        </p>
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
);

export default WhyChooseUs;
