import React from 'react';
import { Sparkles, ShieldCheck, HeartHandshake, Award, Clock, MapPin, CheckCircle, ExternalLink, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/salonData';

interface AboutPageProps {
  onNavigate: (page: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  const facilityImages = [
    {
      title: "Private VIP Treatment Suites",
      desc: "Soundproof, calm atmosphere equipped with customized ergonomic treatment recliners.",
      image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=870&auto=format&fit=crop"
    },
    {
      title: "Sterile Hair & Styling Studio",
      desc: "Equipped with temperature-regulated washing basins and salon-grade styling stations.",
      image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=870&auto=format&fit=crop"
    },
    {
      title: "Herbal Nail & Foot Lounge",
      desc: "Hydrotherapy basins and botanical scrub stations for relaxing manicures and pedicures.",
      image: "https://images.unsplash.com/photo-1519415387722-a1c3bbef716c?q=80&w=870&auto=format&fit=crop"
    }
  ];

  const standards = [
    {
      title: "Hospital-Grade Sterilization",
      desc: "All metal instruments undergo triple-stage ultrasonic cleansing and autoclave sterilization. Disposable supplies are single-use."
    },
    {
      title: "Pure Botanical Formulations",
      desc: "We exclusively formulate treatments using certified organic carrier oils, fresh aloe vera, rose distillates, and herbal clays."
    },
    {
      title: "Certified Aesthetic Specialists",
      desc: "Every practitioner holds formal aesthetic certifications and undergoes monthly technique evaluations."
    },
    {
      title: "Privacy & Discretion",
      desc: "Dedicated separate rooms ensure absolute modesty, peaceful quietude, and customized attention for every client."
    }
  ];

  return (
    <div className="w-full bg-stone-50 pb-20">
      
      {/* Page Hero Banner */}
      <section className="relative py-20 lg:py-28 bg-stone-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img
            src="https://images.unsplash.com/photo-1629397685944-7073f5589754?q=80&w=1200&auto=format&fit=crop"
            alt="Masa Health Club Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-stone-950/75" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-500/20 text-rose-300 text-xs font-bold uppercase tracking-wider mb-4 border border-rose-500/30">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Discover Our Story</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading tracking-tight mb-4 text-white">
            About Masa Health Club
          </h1>
          <p className="max-w-2xl mx-auto text-stone-300 text-base sm:text-lg font-light leading-relaxed">
            Elevating beauty, wellness, and personal grooming standards in Kohinoor City, Faisalabad through organic treatments and certified mastery.
          </p>
        </div>
      </section>

      {/* Main Story & Heritage */}
      <section className="py-20 bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-rose-600 block">
                Our Essence & Philosophy
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold font-heading text-stone-900 leading-tight">
                Crafting Timeless Elegance in Faisalabad
              </h2>
              <p className="text-stone-600 text-base leading-relaxed">
                {BUSINESS_INFO.description}
              </p>
              <p className="text-stone-600 text-base leading-relaxed">
                Founded with a mission to bring world-class health and beauty care to Punjab, Masa Health Club is designed as a calm retreat from urban bustle. Located inside The Orion on Jaranwala Road, our sanctuary provides an immaculate environment where each service is treated as an art form.
              </p>

              <div className="pt-4 flex flex-wrap gap-4">
                <a
                  href={BUSINESS_INFO.gmbLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-rose-600/30 transition-all"
                >
                  <span>Get A Quote</span>
                  <ExternalLink className="w-4 h-4" />
                </a>

                <button
                  onClick={() => onNavigate('contact')}
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-800 font-bold text-xs uppercase tracking-wider transition-all"
                >
                  <span>Contact Our Team</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-stone-100 group">
                <img
                  src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=870&auto=format&fit=crop"
                  alt="Masa Health Club Spa Interior"
                  className="w-full h-[460px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-white/95 backdrop-blur-md shadow-lg border border-stone-200">
                  <h4 className="font-bold text-stone-900 text-sm font-heading">The Orion, Kohinoor City</h4>
                  <p className="text-xs text-stone-600">8-G, Shop No 6 Jaranwala Rd, Faisalabad</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Facilities & Ambiance Gallery */}
      <section className="py-20 bg-stone-50 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-rose-600 block mb-2">
              Comfort & Elegance
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-stone-900">
              Our State-of-the-Art Sanctuary
            </h2>
            <p className="mt-3 text-stone-600 text-base">
              Every square foot is engineered for client relaxation, privacy, and clinical hygiene.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {facilityImages.map((fac, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl overflow-hidden border border-stone-200/90 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col"
              >
                <div className="relative h-60 w-full overflow-hidden bg-stone-100">
                  <img
                    src={fac.image}
                    alt={fac.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="font-bold text-lg font-heading text-stone-900 mb-2 group-hover:text-rose-600 transition-colors">
                      {fac.title}
                    </h3>
                    <p className="text-sm text-stone-600 leading-relaxed">
                      {fac.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hygiene & Standards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-rose-600 block mb-2">
              Uncompromising Quality
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-stone-900">
              Our 4 Pillars of Excellence
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {standards.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-stone-50 border border-stone-200 hover:border-rose-300 hover:bg-rose-50/20 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center font-bold text-sm mb-4">
                  0{idx + 1}
                </div>
                <h3 className="font-bold text-stone-900 text-base font-heading mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};
