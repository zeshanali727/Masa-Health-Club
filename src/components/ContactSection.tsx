import React from 'react';
import { Phone, MapPin, Mail, Clock, Navigation, ExternalLink } from 'lucide-react';
import { BUSINESS_INFO } from '../data/salonData';

export const ContactSection: React.FC = () => {
  const contactDetails = [
    {
      label: "Phone Number",
      value: BUSINESS_INFO.phoneDisplay,
      href: BUSINESS_INFO.telLink,
      subtext: "Call or WhatsApp for bookings",
      icon: <Phone className="w-6 h-6 text-emerald-600" />,
      bgColor: "bg-emerald-50",
      borderColor: "border-emerald-200"
    },
    {
      label: "Salon Address",
      value: BUSINESS_INFO.address,
      href: BUSINESS_INFO.gmbLink,
      subtext: "Near Kohinoor City commercial center",
      icon: <MapPin className="w-6 h-6 text-rose-600" />,
      bgColor: "bg-rose-50",
      borderColor: "border-rose-200"
    },
    {
      label: "Business Email",
      value: BUSINESS_INFO.email,
      href: `mailto:${BUSINESS_INFO.email}`,
      subtext: "For quotations, corporate & inquiries",
      icon: <Mail className="w-6 h-6 text-indigo-600" />,
      bgColor: "bg-indigo-50",
      borderColor: "border-indigo-200"
    },
    {
      label: "Business Hours",
      value: BUSINESS_INFO.hours,
      href: undefined,
      subtext: "Sunday closed or appointment on request",
      icon: <Clock className="w-6 h-6 text-amber-600" />,
      bgColor: "bg-amber-50",
      borderColor: "border-amber-200"
    }
  ];

  return (
    <section id="contact-section" className="py-20 lg:py-28 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-100 text-rose-700 text-xs font-bold uppercase tracking-wider mb-3">
            <Navigation className="w-3.5 h-3.5" />
            <span>Connect With Us</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-stone-900 tracking-tight">
            Contact Masa Health Club
          </h2>
          <p className="mt-4 text-stone-600 text-base sm:text-lg">
            Visit our serene beauty salon in Kohinoor City or reach out for personalized grooming consultations.
          </p>
        </div>

        {/* 50% - 50% Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* 1st 50%: Business Details with Flat Icons */}
          <div className="lg:col-span-6 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactDetails.map((item, idx) => {
                const Content = (
                  <div className={`p-6 rounded-2xl border ${item.borderColor} ${item.bgColor} transition-all duration-300 hover:shadow-md flex flex-col justify-between h-full group`}>
                    <div>
                      {/* Flat Icon */}
                      <div className="w-12 h-12 rounded-xl bg-white shadow-sm border border-stone-200/60 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                        {item.icon}
                      </div>

                      <span className="text-xs font-bold uppercase tracking-wider text-stone-500 block mb-1">
                        {item.label}
                      </span>

                      <h4 className="text-base sm:text-lg font-bold text-stone-900 font-heading leading-snug">
                        {item.value}
                      </h4>
                    </div>

                    <p className="text-xs text-stone-500 mt-3 pt-3 border-t border-stone-200/60">
                      {item.subtext}
                    </p>
                  </div>
                );

                return item.href ? (
                  <a
                    key={idx}
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="block h-full"
                  >
                    {Content}
                  </a>
                ) : (
                  <div key={idx} className="h-full">
                    {Content}
                  </div>
                );
              })}
            </div>

            {/* Quick Actions Row */}
            <div className="p-6 rounded-2xl bg-stone-900 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h4 className="font-bold text-base font-heading">Need Fast Directions?</h4>
                <p className="text-xs text-stone-300">Open verified Google Business pin for turn-by-turn navigation.</p>
              </div>
              <a
                href={BUSINESS_INFO.gmbLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 rounded-full bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs uppercase tracking-wider transition-all duration-300 flex items-center gap-1.5 whitespace-nowrap shadow"
              >
                <span>Open in Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* 2nd 50%: The Exact Google Maps iframe embed */}
          <div className="lg:col-span-6">
            <div className="w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-stone-100 bg-stone-100 relative h-[450px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2478.4236728552787!2d73.1161831!3d31.4124315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85a41a173e4e2db7%3A0xfa8c1d0aee6f913e!2sMasa%20Health%20Club!5e1!3m2!1sen!2s!4v1793226570250!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                title="Masa Health Club Google Map Location"
                className="w-full h-full"
              ></iframe>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
