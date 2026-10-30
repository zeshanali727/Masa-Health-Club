import React from 'react';
import { Sparkles, CheckCircle2, MapPin, ExternalLink } from 'lucide-react';
import { BUSINESS_INFO } from '../data/salonData';

export const AboutSection: React.FC = () => {
  const highlights = [
    "Certified Estheticians & Master Hair Stylists",
    "100% Organic, Herbal & Chemical-Free Treatments",
    "Hospital-Grade Sterile Equipment & Private VIP Rooms",
    "Prime Location in Kohinoor City, Faisalabad"
  ];

  const aboutImage = "https://images.unsplash.com/photo-1629397685944-7073f5589754?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D";

  return (
    <section className="py-20 lg:py-28 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 50% - 50% Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* 1st 50% Section: Text, Description & Get A Quote GMB Anchor button */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-50 text-rose-600 text-xs font-bold uppercase tracking-wider border border-rose-200">
              <Sparkles className="w-3.5 h-3.5" />
              <span>About Masa Health Club</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-stone-900 tracking-tight leading-tight">
              A Premier Health & Beauty Sanctuary in Faisalabad
            </h2>

            {/* Exact Business Description as requested */}
            <p className="text-base sm:text-lg text-stone-600 leading-relaxed">
              {BUSINESS_INFO.description}
            </p>

            {/* Value Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm font-medium text-stone-700">{item}</span>
                </div>
              ))}
            </div>

            {/* Directly Underneath: Get A Quote Button in tag anchor <a> with GMB link */}
            <div className="pt-4">
              <a
                href={BUSINESS_INFO.gmbLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-rose-600 hover:bg-rose-700 text-white font-bold text-sm uppercase tracking-wider shadow-lg hover:shadow-rose-600/30 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Get A Quote</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* 2nd 50% Section: Service Image */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-stone-100 group">
              <img
                src={aboutImage}
                alt="About Masa Health Club Treatment Suite"
                className="w-full h-[400px] sm:h-[480px] lg:h-[520px] object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent pointer-events-none" />

              {/* Floating Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-white/95 backdrop-blur-md border border-stone-200/80 shadow-xl flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-rose-100 flex items-center justify-center text-rose-600 flex-shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-stone-900 text-sm">The Orion, Kohinoor City</h4>
                  <p className="text-xs text-stone-600">8-G, Shop No 6 Jaranwala Rd, Faisalabad</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
