import React from "react";
import { Badge } from "@/components/ui/badge";
import { Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";
import BeforeAfterImage from "@/components/before-after-image";

interface GalleryImage {
  before: string;
  after: string;
  caption: string;
}

interface BeforeAfterGalleryProps {
  t: any;
  galleryImages: GalleryImage[];
}

const BeforeAfterGallery: React.FC<BeforeAfterGalleryProps> = ({ t, galleryImages }) => (
  <section className="py-12 sm:py-16 md:py-20 bg-white">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100 mb-4 px-4 py-2">
          <Sparkles className="w-4 h-4 mr-2" />
          Transformations
        </Badge>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
          {t.galleryTitle}
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t.gallerySubtitle}</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {galleryImages.map((img, index) => (
          <Card
            key={index}
            className="group overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border-0 shadow-lg flex flex-col items-center p-0"
            style={{ borderRadius: 0, padding: 0 }}
          >
            <div className="relative w-full h-[340px] flex flex-col items-center p-0">
              <BeforeAfterImage
                beforeImage={img.before}
                afterImage={img.after}
                beforeAlt={`Before dental veneers transformation Las Vegas patient ${index + 1}`}
                afterAlt={`After dental veneers transformation Las Vegas patient ${index + 1}`}
                beforeLabel={t.before}
                afterLabel={t.after}
                width={320}
                height={240}
              />
            </div>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

export default BeforeAfterGallery;
