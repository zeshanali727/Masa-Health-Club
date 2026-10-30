import React from 'react';
import { ShieldCheck, HeartHandshake, Sparkles, Award, Clock4, Users } from 'lucide-react';
import { BUSINESS_INFO } from '../data/salonData';

export const WhyChooseUsSection: React.FC = () => {
  const chooseImage = "https://images.unsplash.com/photo-1634449571010-02389ed0f9b0?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D";

  const reasons = [
    {
      icon: <Award className="w-6 h-6 text-rose-600" />,
      title: "Certified Master Estheticians",
      description: "Our beauty and hair professionals are formally certified with continuous training in international salon standards."
    },
    {
      icon: <Sparkles className="w-6 h-6 text-amber-500" />,
      title: "100% Herbal & Organic Formulations",
      description: "We use high-grade natural botanicals, pure carrier oils, and hypoallergenic extracts free of harsh sulfates or parabens."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-emerald-600" />,
      title: "Hospital-Grade Sanitization",
      description: "Every tool undergoes UV autoclave sterilization, and all treatment linens are single-use or sanitized before each client."
    },
    {
      icon: <Users className="w-6 h-6 text-indigo-600" />,
      title: "Private VIP Treatment Suites",
      description: "Enjoy peaceful, temperature-controlled private suites designed to ensure discretion, serenity, and maximum comfort."
    },
    {
      icon: <HeartHandshake className="w-6 h-6 text-rose-500" />,
      title: "Transparent & Honest Pricing",
      description: "No hidden charges or unnecessary upselling. We provide clear consultations and competitive, honest pricing."
    },
    {
      icon: <Clock4 className="w-6 h-6 text-teal-600" />,
      title: "Punctual & Stress-Free Booking",
      description: "We respect your busy routine with dedicated appointment slots and convenient booking via phone or WhatsApp."
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* 1st 50% Section: Heading, Description & Feature Tiles */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-50 text-rose-600 text-xs font-bold uppercase tracking-wider mb-3">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Our Excellence Standards</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-stone-900 tracking-tight leading-tight">
                Why Choose Masa Health Club?
              </h2>
              <p className="mt-4 text-base sm:text-lg text-stone-600 leading-relaxed">
                We combine modern beauty salon artistry with restorative wellness rituals to deliver an experience that refreshes both mind and body in Kohinoor City, Faisalabad.
              </p>
            </div>

            {/* Feature Tiles Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {reasons.map((tile, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-stone-50 border border-stone-200/80 hover:border-rose-300 hover:bg-rose-50/30 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    {tile.icon}
                  </div>
                  <h3 className="font-bold text-stone-900 text-base font-heading mb-1.5 group-hover:text-rose-600 transition-colors">
                    {tile.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    {tile.description}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="pt-2">
              <a
                href={BUSINESS_INFO.gmbLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-stone-900 hover:bg-rose-600 text-white font-bold text-xs uppercase tracking-wider shadow transition-all duration-300"
              >
                <span>Read Customer Stories on Google</span>
              </a>
            </div>
          </div>

          {/* 2nd 50% Section: Service Image */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-stone-100 group">
              <img
                src={chooseImage}
                alt="Why Choose Masa Health Club Service"
                className="w-full h-[450px] sm:h-[550px] lg:h-[620px] object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent pointer-events-none" />

              {/* Floating Testimonial Pill */}
              <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-white/95 backdrop-blur-md shadow-2xl border border-stone-200">
                <div className="flex items-center gap-1 text-amber-500 mb-2">
                  {"★★★★★".split('').map((star, i) => (
                    <span key={i} className="text-base">{star}</span>
                  ))}
                  <span className="text-xs font-bold text-stone-800 ml-2">5.0 Star Rated Salon</span>
                </div>
                <p className="text-stone-700 text-xs sm:text-sm italic">
                  &ldquo;A clean, peaceful haven on Jaranwala Road. Their attention to detail and customer hygiene is the best in Faisalabad.&rdquo;
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
