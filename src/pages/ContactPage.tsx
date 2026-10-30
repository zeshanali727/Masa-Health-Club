import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle, CheckCircle, ExternalLink, Navigation } from 'lucide-react';
import { BUSINESS_INFO, SERVICES_LIST } from '../data/salonData';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: SERVICES_LIST[0].title,
    date: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const subject = encodeURIComponent(`Appointment Inquiry: ${formData.service} - ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Phone: ${formData.phone}\n` +
      `Email: ${formData.email}\n` +
      `Service: ${formData.service}\n` +
      `Preferred Time: ${formData.date}\n` +
      `Message: ${formData.message}\n`
    );

    window.location.href = `mailto:${BUSINESS_INFO.email}?subject=${subject}&body=${body}`;
  };

  const contactTiles = [
    {
      title: "Direct Phone & Mobile",
      info: BUSINESS_INFO.phoneDisplay,
      href: BUSINESS_INFO.telLink,
      sub: "Mon - Sat: 11:00 AM – 9:00 PM",
      icon: <Phone className="w-6 h-6 text-emerald-600" />,
      color: "bg-emerald-50 border-emerald-200"
    },
    {
      title: "Official Email Inbox",
      info: BUSINESS_INFO.email,
      href: `mailto:${BUSINESS_INFO.email}`,
      sub: "Inquiries, corporate & packages",
      icon: <Mail className="w-6 h-6 text-indigo-600" />,
      color: "bg-indigo-50 border-indigo-200"
    },
    {
      title: "Salon Location",
      info: BUSINESS_INFO.address,
      href: BUSINESS_INFO.gmbLink,
      sub: "Kohinoor City commercial hub",
      icon: <MapPin className="w-6 h-6 text-rose-600" />,
      color: "bg-rose-50 border-rose-200"
    },
    {
      title: "Salon Operating Hours",
      info: BUSINESS_INFO.hours,
      href: undefined,
      sub: "Sunday Closed / Appointments on Request",
      icon: <Clock className="w-6 h-6 text-amber-600" />,
      color: "bg-amber-50 border-amber-200"
    }
  ];

  return (
    <div className="w-full bg-stone-50 pb-20">
      
      {/* Page Hero Banner */}
      <section className="relative py-20 lg:py-28 bg-stone-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-25">
          <img
            src="https://images.unsplash.com/photo-1629397662600-50ad523ef4fb?q=80&w=1200&auto=format&fit=crop"
            alt="Masa Health Club Contact"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-stone-950/75" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-500/20 text-rose-300 text-xs font-bold uppercase tracking-wider mb-4 border border-rose-500/30">
            <Navigation className="w-3.5 h-3.5" />
            <span>Visit Or Contact</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading tracking-tight mb-4 text-white">
            Get In Touch With Masa Health Club
          </h1>
          <p className="max-w-2xl mx-auto text-stone-300 text-base sm:text-lg font-light leading-relaxed">
            We are situated inside The Orion on Jaranwala Road, Kohinoor City. Reach us by phone, email, or WhatsApp for custom consultations.
          </p>
        </div>
      </section>

      {/* Flat Icon Contact Cards Grid */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactTiles.map((tile, idx) => {
            const Body = (
              <div className={`p-6 rounded-2xl border ${tile.color} bg-white shadow-sm hover:shadow-md transition-all duration-300 h-full flex flex-col justify-between group`}>
                <div>
                  <div className="w-12 h-12 rounded-xl bg-white shadow-sm border border-stone-200/80 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                    {tile.icon}
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-stone-400 block mb-1">
                    {tile.title}
                  </span>
                  <h3 className="text-base font-bold text-stone-900 font-heading leading-snug">
                    {tile.info}
                  </h3>
                </div>
                <p className="text-xs text-stone-500 mt-4 pt-3 border-t border-stone-100">
                  {tile.sub}
                </p>
              </div>
            );

            return tile.href ? (
              <a
                key={idx}
                href={tile.href}
                target={tile.href.startsWith('http') ? '_blank' : undefined}
                rel={tile.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="block h-full"
              >
                {Body}
              </a>
            ) : (
              <div key={idx} className="h-full">
                {Body}
              </div>
            );
          })}
        </div>
      </section>

      {/* Interactive Form & Google Map Embed */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Form */}
          <div className="lg:col-span-6 bg-white rounded-3xl p-8 sm:p-10 border border-stone-200 shadow-xl">
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-stone-900 mb-2">
              Book An Appointment / Request A Quote
            </h2>
            <p className="text-sm text-stone-600 mb-6 font-normal">
              Fill out the details below. Our booking team will contact you to confirm your schedule.
            </p>

            {submitted ? (
              <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-300 text-center space-y-4">
                <CheckCircle className="w-12 h-12 text-emerald-600 mx-auto" />
                <h3 className="text-xl font-bold text-stone-900">Thank You!</h3>
                <p className="text-sm text-stone-600">
                  Your inquiry has been compiled for <strong>{BUSINESS_INFO.email}</strong>.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2 rounded-full bg-stone-900 text-white text-xs font-bold uppercase tracking-wider"
                >
                  Submit Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Full Name"
                    className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 text-stone-900 placeholder-stone-400 focus:outline-none focus:border-rose-500 text-sm"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="0300 1234567"
                      className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 text-stone-900 placeholder-stone-400 focus:outline-none focus:border-rose-500 text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 text-stone-900 placeholder-stone-400 focus:outline-none focus:border-rose-500 text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1">
                    Service Required
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 text-stone-900 focus:outline-none focus:border-rose-500 text-sm"
                  >
                    {SERVICES_LIST.map((s) => (
                      <option key={s.id} value={s.title}>
                        {s.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1">
                    Preferred Date & Time
                  </label>
                  <input
                    type="text"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    placeholder="e.g. Saturday afternoon"
                    className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 text-stone-900 placeholder-stone-400 focus:outline-none focus:border-rose-500 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1">
                    Special Notes
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Any allergies, bridal requests, or multiple guests..."
                    className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 text-stone-900 placeholder-stone-400 focus:outline-none focus:border-rose-500 text-sm resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-rose-600/30 transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Quote Request</span>
                </button>
              </form>
            )}

            <div className="mt-6 pt-6 border-t border-stone-100 flex items-center justify-between">
              <span className="text-xs text-stone-500">Need instant confirmation?</span>
              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-emerald-600 hover:underline flex items-center gap-1"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Embedded Map & Directions */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-stone-200 h-[450px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2478.4236728552787!2d73.1161831!3d31.4124315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85a41a173e4e2db7%3A0xfa8c1d0aee6f913e!2sMasa%20Health%20Club!5e1!3m2!1sen!2s!4v1793226570250!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                title="Masa Health Club Google Map Directions"
              ></iframe>
            </div>

            <div className="p-6 rounded-2xl bg-stone-900 text-white flex items-center justify-between">
              <div>
                <h4 className="font-bold text-base font-heading">The Orion, Kohinoor City</h4>
                <p className="text-xs text-stone-300 mt-1">Shop No 6, Jaranwala Road, Faisalabad</p>
              </div>
              <a
                href={BUSINESS_INFO.gmbLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-full bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 shadow"
              >
                <span>Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
