import React, { useState } from 'react';
import { Send, CheckCircle, Sparkles, Users, Award, ShieldCheck, HeartHandshake } from 'lucide-react';
import { BUSINESS_INFO, SERVICES_LIST } from '../data/salonData';

export const QuoteAndCounterSection: React.FC = () => {
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

    // Prepare mailto link with pre-filled details to business email info@masahealthclub.com
    const subject = encodeURIComponent(`Service Quote Request: ${formData.service} - ${formData.name}`);
    const body = encodeURIComponent(
      `Customer Name: ${formData.name}\n` +
      `Phone Number: ${formData.phone}\n` +
      `Email: ${formData.email}\n` +
      `Selected Service: ${formData.service}\n` +
      `Preferred Date/Time: ${formData.date}\n` +
      `Additional Notes: ${formData.message}\n\n` +
      `Sent from Masa Health Club Website`
    );

    // Open user's email client targeted to info@masahealthclub.com
    window.location.href = `mailto:${BUSINESS_INFO.email}?subject=${subject}&body=${body}`;
  };

  const counters = [
    {
      icon: <Users className="w-8 h-8 text-rose-500" />,
      heading: "Happy & Satisfied Clients",
      count: "5,200+",
      sub: "Across Faisalabad & Punjab"
    },
    {
      icon: <Award className="w-8 h-8 text-amber-500" />,
      heading: "Certified Estheticians & Stylists",
      count: "15+",
      sub: "Master beauty professionals"
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-emerald-500" />,
      heading: "Herbal & Organic Formulations",
      count: "100%",
      sub: "Cruelty-free & skin-safe"
    },
    {
      icon: <HeartHandshake className="w-8 h-8 text-indigo-500" />,
      heading: "Signature Salon Services",
      count: "8+",
      sub: "Comprehensive head-to-toe care"
    }
  ];

  return (
    <section id="quote-section" className="py-20 lg:py-28 bg-stone-900 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* 50% - 50% Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* 1st 50%: Request A Quote Form */}
          <div className="lg:col-span-6 bg-stone-800/90 border border-stone-700 rounded-3xl p-8 sm:p-10 shadow-2xl backdrop-blur-md">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/20 text-rose-300 text-xs font-bold uppercase tracking-wider mb-4 border border-rose-500/30">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Personalized Quotation</span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white tracking-tight mb-3">
              Request A Quote
            </h2>

            {/* Business Related Description */}
            <p className="text-stone-300 text-sm leading-relaxed mb-6 font-light">
              Send your inquiry directly to our official business mailbox (<span className="text-rose-400 font-mono font-medium">{BUSINESS_INFO.email}</span>). Our coordinator will verify therapist availability and respond with an exact tailored estimate.
            </p>

            {submitted ? (
              <div className="p-6 rounded-2xl bg-emerald-950/60 border border-emerald-500 text-center space-y-4 animate-fadeIn">
                <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-white font-heading">Quote Request Prepared!</h3>
                <p className="text-stone-300 text-xs sm:text-sm">
                  Your mail client has been opened to dispatch this request to <strong>{BUSINESS_INFO.email}</strong>. You can also message us directly on WhatsApp for instantaneous assistance.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
                  <a
                    href={BUSINESS_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold uppercase tracking-wider shadow"
                  >
                    Open WhatsApp Chat
                  </a>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-5 py-2.5 rounded-full bg-stone-700 hover:bg-stone-600 text-stone-200 text-xs font-bold uppercase tracking-wider"
                  >
                    Send Another Request
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-stone-300 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Fatima / Usman"
                      className="w-full px-4 py-3 rounded-xl bg-stone-900/80 border border-stone-700 text-white placeholder-stone-500 focus:outline-none focus:border-rose-500 text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-300 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="0300 1234567"
                      className="w-full px-4 py-3 rounded-xl bg-stone-900/80 border border-stone-700 text-white placeholder-stone-500 focus:outline-none focus:border-rose-500 text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-stone-300 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-stone-900/80 border border-stone-700 text-white placeholder-stone-500 focus:outline-none focus:border-rose-500 text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-300 mb-1">
                      Select Service *
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-stone-900/80 border border-stone-700 text-white focus:outline-none focus:border-rose-500 text-sm"
                    >
                      {SERVICES_LIST.map((s) => (
                        <option key={s.id} value={s.title} className="bg-stone-900 text-white">
                          {s.title}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-300 mb-1">
                    Preferred Date & Time (Optional)
                  </label>
                  <input
                    type="text"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    placeholder="e.g. Tomorrow around 4:00 PM"
                    className="w-full px-4 py-3 rounded-xl bg-stone-900/80 border border-stone-700 text-white placeholder-stone-500 focus:outline-none focus:border-rose-500 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-300 mb-1">
                    Additional Details or Inquiries
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about special skin considerations, bridal packages, or timing..."
                    className="w-full px-4 py-3 rounded-xl bg-stone-900/80 border border-stone-700 text-white placeholder-stone-500 focus:outline-none focus:border-rose-500 text-sm resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-bold text-sm uppercase tracking-wider shadow-lg hover:shadow-rose-600/30 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Quote to {BUSINESS_INFO.email}</span>
                </button>
              </form>
            )}

          </div>

          {/* 2nd 50%: Counter Boxes */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold uppercase tracking-wider mb-3 border border-amber-500/30">
                <span>Proven Reliability</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white tracking-tight leading-tight">
                Excellence In Numbers
              </h2>
              <p className="mt-3 text-stone-300 text-sm sm:text-base leading-relaxed font-light">
                Masa Health Club has grown to become Kohinoor City's benchmark health and beauty shop through hygienic consistency, ethical customer service, and certified expertise.
              </p>
            </div>

            {/* Counter Boxes Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
              {counters.map((box, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-stone-800/70 border border-stone-700/80 hover:border-rose-500/60 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-stone-900 border border-stone-700/80 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    {box.icon}
                  </div>

                  {/* Heading */}
                  <h3 className="text-sm font-semibold text-stone-300 font-heading mb-1">
                    {box.heading}
                  </h3>

                  <p className="text-xs text-stone-400 mb-4">
                    {box.sub}
                  </p>

                  {/* Counter at last */}
                  <div className="pt-3 border-t border-stone-700/60">
                    <span className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-heading group-hover:text-rose-400 transition-colors">
                      {box.count}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Hours summary badge */}
            <div className="p-5 rounded-2xl bg-stone-800/40 border border-stone-700/60 flex items-center justify-between text-xs text-stone-300">
              <span>Operating Hours: <strong>{BUSINESS_INFO.hours}</strong></span>
              <span className="text-emerald-400 font-medium">Open Mon - Sat</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
