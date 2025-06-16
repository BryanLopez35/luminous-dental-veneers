import React from "react";
import { Clock, Zap, Shield, Heart } from "lucide-react";

interface FeaturesStripProps {
  features: { title: string; description: string }[];
}

const icons = [Clock, Zap, Shield, Heart];

const FeaturesStrip: React.FC<FeaturesStripProps> = ({ features }) => (
  <section className="py-12 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        {features.map((feature, index) => {
          const Icon = icons[index] || Clock;
          return (
            <div key={index} className="text-center space-y-3">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto">
                <Icon className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold">{feature.title}</h3>
              <p className="text-blue-100 text-sm">{feature.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default FeaturesStrip;
