import React from 'react';
import { Mail, Phone, MapPin, Clock, ExternalLink, ArrowRight, Heart } from 'lucide-react';
import { BUSINESS_INFO } from '../data/salonData';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'Services' },
    { id: 'blogs', label: 'Blogs' },
    { id: 'contact', label: 'Contact Us' },
  ];

  const handleLinkClick = (pageId: string) => {
    onNavigate(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-stone-950 text-stone-300 border-t border-stone-800">
      {/* 100% div divided into 3 parts (33.33% each) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          
          {/* 1st 33.33% Section: Logo, 40 words description, and Join Us anchor button to GMB */}
          <div className="w-full space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 rounded-full overflow-hidden bg-white p-1 shadow-md border border-stone-700 flex-shrink-0">
                <img
                  src={BUSINESS_INFO.logo}
                  alt={`${BUSINESS_INFO.name} Logo`}
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white font-heading tracking-wide">
                  {BUSINESS_INFO.name}
                </h3>
                <span className="text-xs uppercase tracking-widest text-rose-400 font-semibold">
                  Health & Beauty Shop
                </span>
              </div>
            </div>

            {/* 40 words description as required */}
            <p className="text-sm text-stone-400 leading-relaxed font-light">
              Welcome to Masa Health Club, a premier health and beauty shop in Kohinoor City Faisalabad. We offer luxury hair styling, organic facials, hygienic waxing, revitalizing manicures, and body polishing in private comfortable suites. Refresh your look and feel your best today.
            </p>

            {/* Anchor text button "Join Us" attached to GMB link */}
            <div>
              <a
                href={BUSINESS_INFO.gmbLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-rose-600/30 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Join Us</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* 2nd 33.33% Section: Navigation Menu */}
          <div className="w-full space-y-6">
            <h4 className="text-lg font-bold text-white font-heading tracking-wide border-b border-stone-800 pb-3 inline-block">
              Navigation Menu
            </h4>

            <ul className="space-y-3.5">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleLinkClick(link.id)}
                    className="flex items-center gap-2 text-sm text-stone-400 hover:text-rose-400 transition-colors duration-200 group text-left"
                  >
                    <ArrowRight className="w-3.5 h-3.5 text-stone-600 group-hover:text-rose-400 group-hover:translate-x-1 transition-all" />
                    <span>{link.label}</span>
                  </button>
                </li>
              ))}
            </ul>

            <div className="pt-2">
              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-emerald-400 hover:underline flex items-center gap-1.5"
              >
                <span>Direct WhatsApp Consultation: {BUSINESS_INFO.phoneDisplay}</span>
              </a>
            </div>
          </div>

          {/* 3rd 33.33% Section: Email, Phone, Address, Working hours (each on separate line) */}
          <div className="w-full space-y-6">
            <h4 className="text-lg font-bold text-white font-heading tracking-wide border-b border-stone-800 pb-3 inline-block">
              Contact Information
            </h4>

            <ul className="space-y-4">
              {/* Business Email with email icon */}
              <li className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-stone-900 border border-stone-800 flex items-center justify-center flex-shrink-0 text-indigo-400 mt-0.5">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-[11px] font-semibold text-stone-500 uppercase tracking-wider">
                    Business Email
                  </span>
                  <a
                    href={`mailto:${BUSINESS_INFO.email}`}
                    className="text-sm text-stone-300 hover:text-white transition-colors"
                  >
                    {BUSINESS_INFO.email}
                  </a>
                </div>
              </li>

              {/* Phone number with phone icon */}
              <li className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-stone-900 border border-stone-800 flex items-center justify-center flex-shrink-0 text-emerald-400 mt-0.5">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-[11px] font-semibold text-stone-500 uppercase tracking-wider">
                    Phone Number
                  </span>
                  <a
                    href={BUSINESS_INFO.telLink}
                    className="text-sm text-stone-300 hover:text-white transition-colors font-medium"
                  >
                    {BUSINESS_INFO.phoneDisplay}
                  </a>
                </div>
              </li>

              {/* Full address with location icon */}
              <li className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-stone-900 border border-stone-800 flex items-center justify-center flex-shrink-0 text-rose-400 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-[11px] font-semibold text-stone-500 uppercase tracking-wider">
                    Location Address
                  </span>
                  <a
                    href={BUSINESS_INFO.gmbLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-stone-300 hover:text-white transition-colors"
                  >
                    {BUSINESS_INFO.address}
                  </a>
                </div>
              </li>

              {/* Working Hours with clock icon */}
              <li className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-stone-900 border border-stone-800 flex items-center justify-center flex-shrink-0 text-amber-400 mt-0.5">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-[11px] font-semibold text-stone-500 uppercase tracking-wider">
                    Working Hours
                  </span>
                  <span className="text-sm text-stone-300">
                    {BUSINESS_INFO.hours}
                  </span>
                </div>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Center: All Rights Reserved */}
      <div className="border-t border-stone-800/80 bg-stone-950 py-6 px-4">
        <div className="max-w-7xl mx-auto flex flex-col items-center justify-center text-center gap-2">
          <p className="text-xs sm:text-sm text-stone-400 tracking-wide">
            © 2026 All Rights Reserved By The Ranking Geeks
          </p>
          <p className="text-[11px] text-stone-600">
            Masa Health Club • The Orion, Kohinoor City Faisalabad • Premium Beauty Salon & Health Shop
          </p>
        </div>
      </div>
    </footer>
  );
};
