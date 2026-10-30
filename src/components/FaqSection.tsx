import React from 'react';
import { ChevronDown, HelpCircle, PhoneCall } from 'lucide-react';
import { FAQS_LIST, BUSINESS_INFO } from '../data/salonData';

export const FaqSection: React.FC = () => {
  const faqImage = "https://images.unsplash.com/photo-1519415387722-a1c3bbef716c?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D";

  // Schema.org FAQPage data
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": FAQS_LIST.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <section className="py-20 lg:py-28 bg-stone-50 border-b border-stone-200">
      {/* Inject Schema.org FAQPage for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-100 text-rose-700 text-xs font-bold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-stone-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-stone-600 text-base sm:text-lg">
            Everything you need to know about our health and beauty treatments in Kohinoor City, Faisalabad.
          </p>
        </div>

        {/* 50% - 50% Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* 1st 50%: FAQs using <details> and <summary> with arrow icon */}
          <div className="lg:col-span-6 space-y-4">
            {FAQS_LIST.map((faq, index) => (
              <details
                key={faq.id}
                className="group bg-white rounded-2xl border border-stone-200/90 shadow-sm p-5 transition-all duration-300 open:shadow-md open:border-rose-300"
                open={index === 0}
              >
                <summary className="flex items-center justify-between cursor-pointer list-none select-none text-stone-900 font-bold text-base sm:text-lg font-heading group-hover:text-rose-600 transition-colors">
                  <span className="pr-4">{faq.question}</span>
                  {/* Question wali line me arrow icon */}
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-stone-100 group-hover:bg-rose-50 flex items-center justify-center text-stone-600 group-hover:text-rose-600 transition-all duration-300 group-open:rotate-180">
                    <ChevronDown className="w-4 h-4" />
                  </span>
                </summary>

                <div className="mt-4 pt-3 border-t border-stone-100 text-stone-600 text-sm sm:text-base leading-relaxed animate-fadeIn">
                  <p>{faq.answer}</p>
                </div>
              </details>
            ))}

            <div className="p-5 rounded-2xl bg-rose-50/60 border border-rose-200/80 flex items-center justify-between">
              <div>
                <h4 className="font-bold text-stone-900 text-sm">Have a unique question?</h4>
                <p className="text-xs text-stone-600">Our customer team is available Monday to Saturday.</p>
              </div>
              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-sm transition-colors"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>Ask on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* 2nd 50%: Service Related Image as given */}
          <div className="lg:col-span-6 sticky top-28">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white group">
              <img
                src={faqImage}
                alt="Masa Health Club FAQ & Client Guidance"
                className="w-full h-[460px] sm:h-[520px] lg:h-[560px] object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-white/95 backdrop-blur-md shadow-xl border border-stone-200">
                <span className="text-xs font-bold uppercase tracking-wider text-rose-600 block mb-1">
                  Masa Health Club Promise
                </span>
                <h4 className="text-lg font-bold font-heading text-stone-900 mb-2">
                  Transparent Advice & Personalized Care
                </h4>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  Every treatment starts with a complimentary consultation so your goals, allergies, and skin preferences are fully accommodated.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
