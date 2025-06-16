import React from "react";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

interface LocalSeoSectionProps {
  t: any;
}

const LocalSeoSection: React.FC<LocalSeoSectionProps> = ({ t }) => (
  <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-gray-50 to-blue-50">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
        <div className="space-y-8">
          <div>
            <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100 mb-4 px-4 py-2">
              <MapPin className="w-4 h-4 mr-2" />
              Visit Us
            </Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              {t.visitClinic}
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">{t.clinicDescription}</p>
          </div>
          <div className="space-y-6">
            <div className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="font-bold text-gray-900 text-lg">{t.address}</p>
                <p className="text-gray-600">1212 S Maryland Pkwy<br />Las Vegas, Nevada 89104</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="font-bold text-gray-900 text-lg">{t.phone}</p>
                <Link href="tel:7252915588" className="text-blue-600 hover:underline text-lg font-semibold">(725) 291-5588</Link>
              </div>
            </div>
            <div className="flex items-center space-x-4 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-lg flex items-center justify-center">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="font-bold text-gray-900 text-lg">{t.email}</p>
                <Link href="mailto:info@luminousdentallv.com" className="text-blue-600 hover:underline">info@luminousdentallv.com</Link>
              </div>
            </div>
          </div>
          <Card className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200">
            <CardContent className="space-y-4">
              <h3 className="font-bold text-gray-900 text-xl flex items-center">
                <Clock className="w-6 h-6 mr-2 text-blue-600" />
                {t.officeHours}
              </h3>
              <div className="space-y-2 text-gray-700">
                <div className="flex justify-between items-center py-2 border-b border-blue-200">
                  <span className="font-medium">{t.monday}</span>
                  <span className="font-semibold">8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-blue-200">
                  <span className="font-medium">{t.saturday}</span>
                  <span className="font-semibold">9:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="font-medium">{t.sunday}</span>
                  <span className="font-semibold text-red-600">{t.closed}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="relative group">
          <Card className="overflow-hidden shadow-2xl border-0 transition-all duration-300 group-hover:shadow-[0_8px_40px_0_rgba(0,0,0,0.25)] group-hover:scale-105">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d201.33983693733543!2d-115.13778445284754!3d36.15590967461434!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c8c30047076025%3A0x937b14a472d729cb!2sLuminous%20Dental!5e0!3m2!1sen!2sus!4v1750066143875!5m2!1sen!2sus"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-3xl border-4 border-blue-300 shadow-lg transition-all duration-300 group-hover:border-blue-500 group-hover:shadow-2xl"
            ></iframe>
          </Card>
        </div>
      </div>
    </div>
  </section>
);

export default LocalSeoSection;
