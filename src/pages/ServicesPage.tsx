import React, { useState } from 'react';
import { Sparkles, Clock, ExternalLink, Calendar, CheckCircle2, MessageCircle } from 'lucide-react';
import { SERVICES_LIST, BUSINESS_INFO } from '../data/salonData';

export const ServicesPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Hair', 'Skin', 'Nails', 'Body'];

  const filteredServices = activeCategory === 'All'
    ? SERVICES_LIST
    : SERVICES_LIST.filter((s) => s.category === activeCategory);

  const packages = [
    {
      title: "Royal Bridal / Groom Glow",
      price: "Custom Package",
      duration: "3 - 4 Hours",
      features: [
        "Herbal Facial Treatment & Deep Hydration",
        "Full Body Polishing with Botanical Scrubs",
        "Luxury Manicure & Pedicure Session",
        "Hair Trimming, Styling & Gloss Masque"
      ],
      popular: true
    },
    {
      title: "Weekend Refresh & De-Stress",
      price: "Exclusive Deal",
      duration: "2 Hours",
      features: [
        "Warm Herbal Hair Oiling Treatment",
        "Express Facial Cleansing & Steam",
        "Pedicure with Aromatherapy Foot Soak",
        "Eyebrow Shaping & Threading"
      ],
      popular: false
    },
    {
      title: "Executive Grooming Suite",
      price: "Tailored Quote",
      duration: "90 Minutes",
      features: [
        "Signature Scissor Hair Cut & Texture",
        "Revitalizing Skin Exfoliation",
        "Precision Beard / Eyebrow Threading",
        "Acupressure Scalp & Shoulder Massage"
      ],
      popular: false
    }
  ];

  return (
    <div className="w-full bg-stone-50 pb-20">
      
      {/* Page Hero Banner */}
      <section className="relative py-20 lg:py-28 bg-stone-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-25">
          <img
            src="https://images.unsplash.com/photo-1675034743339-0b0747047727?q=80&w=1200&auto=format&fit=crop"
            alt="Masa Health Club Services Banner"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-stone-950/75" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-500/20 text-rose-300 text-xs font-bold uppercase tracking-wider mb-4 border border-rose-500/30">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Service Catalog</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading tracking-tight mb-4 text-white">
            Health & Beauty Services
          </h1>
          <p className="max-w-2xl mx-auto text-stone-300 text-base sm:text-lg font-light leading-relaxed">
            Personalized salon, hair, skin, and spa treatments performed with hospital-level hygiene and botanical organic care.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-rose-600 text-white shadow-lg'
                    : 'bg-white/10 hover:bg-white/20 text-stone-200 border border-white/20'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl overflow-hidden border border-stone-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Image on top with left hover layer */}
                <div className="relative h-60 w-full overflow-hidden bg-stone-100">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  {/* Left sliding layer */}
                  <div className="absolute inset-0 bg-stone-950/70 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out flex items-center justify-center p-4">
                    <span className="text-white text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full border border-white/60 bg-white/10">
                      Masa Health Club
                    </span>
                  </div>
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-white/90 text-[11px] font-bold uppercase tracking-wider text-stone-800 shadow">
                    {service.category}
                  </div>
                </div>

                {/* Body */}
                <div className="p-6">
                  <h3 className="text-xl font-bold font-heading text-stone-900 group-hover:text-rose-600 transition-colors mb-2">
                    {service.title}
                  </h3>

                  <div className="flex items-center gap-4 text-xs text-stone-500 mb-4 pb-3 border-b border-stone-100">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-stone-400" />
                      {service.duration}
                    </span>
                    <span>•</span>
                    <span className="text-rose-600 font-semibold">{service.price}</span>
                  </div>

                  {/* 40 to 50 words description */}
                  <p className="text-stone-600 text-sm leading-relaxed font-normal">
                    {service.shortDesc}
                  </p>
                </div>
              </div>

              {/* Get a Free Quote button linking to GMB */}
              <div className="px-6 pb-6 pt-0">
                <a
                  href={BUSINESS_INFO.gmbLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-stone-900 hover:bg-rose-600 text-white text-xs font-bold uppercase tracking-wider shadow-sm transition-all duration-300"
                >
                  <span>Get a Free Quote</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Exclusive Salon Packages */}
      <section className="py-20 bg-white border-t border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-rose-600 block mb-2">
              Value Combinations
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-stone-900">
              Signature Curated Packages
            </h2>
            <p className="mt-3 text-stone-600 text-base">
              Bundle your favorite treatments for an extraordinary half-day spa and styling experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, idx) => (
              <div
                key={idx}
                className={`rounded-3xl p-8 flex flex-col justify-between border relative transition-all duration-300 ${
                  pkg.popular
                    ? 'bg-stone-900 text-white border-rose-500 shadow-2xl ring-2 ring-rose-500'
                    : 'bg-stone-50 text-stone-900 border-stone-200 shadow-md'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-rose-600 text-white text-xs font-bold uppercase tracking-wider shadow">
                    Most Popular
                  </div>
                )}

                <div>
                  <h3 className="text-2xl font-bold font-heading mb-2">
                    {pkg.title}
                  </h3>
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-lg font-bold text-rose-500">{pkg.price}</span>
                    <span className={`text-xs ${pkg.popular ? 'text-stone-400' : 'text-stone-500'}`}>
                      ({pkg.duration})
                    </span>
                  </div>

                  <ul className="space-y-3 pt-4 border-t border-stone-200/40">
                    {pkg.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm">
                        <CheckCircle2 className={`w-4 h-4 flex-shrink-0 mt-0.5 ${pkg.popular ? 'text-rose-400' : 'text-emerald-600'}`} />
                        <span className={pkg.popular ? 'text-stone-200' : 'text-stone-700'}>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-6 border-t border-stone-200/40">
                  <a
                    href={BUSINESS_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-bold text-xs uppercase tracking-wider transition-colors shadow ${
                      pkg.popular
                        ? 'bg-rose-600 hover:bg-rose-500 text-white'
                        : 'bg-stone-900 hover:bg-rose-600 text-white'
                    }`}
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Inquire via WhatsApp</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};
