import React, { useState } from 'react';
import { Menu, X, Phone, Clock, MapPin, Sparkles } from 'lucide-react';
import { BUSINESS_INFO } from '../data/salonData';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  onOpenQuote?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate, onOpenQuote }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'Services' },
    { id: 'blogs', label: 'Blogs' },
    { id: 'contact', label: 'Contact Us' },
  ];

  const handleNavClick = (pageId: string) => {
    onNavigate(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-stone-200/80 shadow-sm transition-all duration-300">
      {/* Top micro bar for phone, address & hours */}
      <div className="bg-stone-900 text-stone-300 text-xs py-2 px-4 border-b border-stone-800 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-1.5 hover:text-white transition-colors">
              <MapPin className="w-3.5 h-3.5 text-rose-400" />
              <span>Kohinoor City, Faisalabad</span>
            </div>
            <div className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Clock className="w-3.5 h-3.5 text-amber-400" />
              <span>Mon - Sat: 11:00 AM – 9:00 PM</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <a
              href={BUSINESS_INFO.telLink}
              className="flex items-center gap-1.5 text-stone-200 hover:text-rose-400 transition-colors font-medium"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span>{BUSINESS_INFO.phoneDisplay}</span>
            </a>
            <span className="text-stone-600">|</span>
            <a
              href={BUSINESS_INFO.gmbLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-300 hover:text-white transition-colors flex items-center gap-1"
            >
              <Sparkles className="w-3 h-3 text-amber-400" />
              <span>Verified On Google Maps</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Header Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Left Side: Logo & Business Name */}
          <div
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="relative w-14 h-14 rounded-full overflow-hidden bg-white shadow-md p-1 border border-stone-200 flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
              <img
                src={BUSINESS_INFO.logo}
                alt={`${BUSINESS_INFO.name} Logo`}
                className="w-full h-full object-contain"
                onError={(e) => {
                  // Fallback in case of image render glitch
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold tracking-tight text-stone-900 font-heading group-hover:text-rose-600 transition-colors">
                {BUSINESS_INFO.name}
              </span>
              <span className="text-[11px] font-medium tracking-widest uppercase text-stone-500">
                Health & Beauty Shop
              </span>
            </div>
          </div>

          {/* Right Side: Desktop Menu Bar */}
          <nav className="hidden lg:flex items-center gap-8">
            <ul className="flex items-center gap-7">
              {navLinks.map((link) => {
                const isActive = currentPage === link.id;
                return (
                  <li key={link.id}>
                    <button
                      onClick={() => handleNavClick(link.id)}
                      className={`text-sm font-semibold tracking-wide transition-colors duration-200 relative py-1 ${
                        isActive
                          ? 'text-rose-600'
                          : 'text-stone-700 hover:text-rose-600'
                      }`}
                    >
                      {link.label}
                      {isActive && (
                        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-rose-600 rounded-full animate-fadeIn" />
                      )}
                    </button>
                  </li>
                );
              })}
            </ul>

            {/* CTA Anchor button for quote / appointment */}
            <div className="flex items-center gap-3 pl-4 border-l border-stone-200">
              <a
                href={BUSINESS_INFO.gmbLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-rose-600 text-white hover:bg-rose-700 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
              >
                Get A Quote
              </a>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href={BUSINESS_INFO.telLink}
              className="p-2 text-stone-700 hover:text-rose-600 transition-colors"
              aria-label="Call Masa Health Club"
            >
              <Phone className="w-5 h-5 text-rose-600" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-stone-700 hover:text-stone-900 hover:bg-stone-100 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-stone-200 px-4 pt-3 pb-6 shadow-xl animate-fadeIn">
          <ul className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <li key={link.id}>
                  <button
                    onClick={() => handleNavClick(link.id)}
                    className={`w-full text-left px-4 py-3 rounded-lg text-base font-semibold tracking-wide transition-all ${
                      isActive
                        ? 'bg-rose-50 text-rose-600 font-bold'
                        : 'text-stone-700 hover:bg-stone-50 hover:text-rose-600'
                    }`}
                  >
                    {link.label}
                  </button>
                </li>
              );
            })}
          </ul>

          <div className="mt-4 pt-4 border-t border-stone-100 flex flex-col gap-3">
            <a
              href={BUSINESS_INFO.gmbLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center py-3 rounded-full text-sm font-bold uppercase tracking-wider bg-rose-600 text-white shadow hover:bg-rose-700 transition-colors"
            >
              Get A Quote (Google Profile)
            </a>
            <div className="flex justify-between items-center text-xs text-stone-500 px-2 pt-1">
              <span>{BUSINESS_INFO.phoneDisplay}</span>
              <span>11:00 AM – 9:00 PM</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
