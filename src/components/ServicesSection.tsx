import React from 'react';
import { ExternalLink, Sparkles } from 'lucide-react';
import { SERVICES_LIST, BUSINESS_INFO } from '../data/salonData';

export const ServicesSection: React.FC = () => {
  return (
    <section id="services-section" className="py-20 lg:py-28 bg-stone-50 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-100 text-rose-700 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Our Signature Offerings</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-stone-900 tracking-tight">
            Comprehensive Health & Beauty Services
          </h2>
          <p className="mt-4 text-stone-600 text-base sm:text-lg">
            Indulge in tailored treatments performed with sterile instruments and 100% pure botanical formulas in Kohinoor City, Faisalabad.
          </p>
        </div>

        {/* 8 Services Grid: 2 rows of 4 services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES_LIST.map((service, index) => {
            return (
              <div
                key={service.id}
                className="bg-white rounded-2xl overflow-hidden border border-stone-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
              >
                {/* 1st: Image on top with hover layer starting from left side */}
                <div className="relative h-60 w-full overflow-hidden bg-stone-100">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />

                  {/* Hover layer from the left side */}
                  <div
                    className="absolute inset-0 bg-stone-950/70 backdrop-blur-[2px] -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out flex items-center justify-center p-4"
                  >
                    <span className="text-white text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full border border-white/60 bg-white/10 backdrop-blur-sm shadow-md">
                      Masa Health Club
                    </span>
                  </div>

                  {/* Badge */}
                  <div className="absolute top-3 right-3 z-10 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-sm text-[11px] font-bold uppercase tracking-wider text-stone-800 shadow-sm">
                    {service.category}
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex flex-col flex-grow justify-between">
                  <div>
                    {/* 2nd: Service Title */}
                    <h3 className="text-xl font-bold font-heading text-stone-900 group-hover:text-rose-600 transition-colors mb-3">
                      {service.title}
                    </h3>

                    {/* 3rd: 40 to 50 words description */}
                    <p className="text-stone-600 text-sm leading-relaxed mb-6 font-normal">
                      {service.shortDesc}
                    </p>
                  </div>

                  {/* 4th: Get a Free Quote button in <a> anchor tag linking to GMB link */}
                  <div className="pt-2 border-t border-stone-100">
                    <a
                      href={BUSINESS_INFO.gmbLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-stone-900 hover:bg-rose-600 text-white text-xs font-bold uppercase tracking-wider shadow-sm hover:shadow-md transition-all duration-300 transform active:scale-95"
                    >
                      <span>Get a Free Quote</span>
                      <ExternalLink className="w-3.5 h-3.5 text-stone-300 group-hover:text-white" />
                    </a>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
