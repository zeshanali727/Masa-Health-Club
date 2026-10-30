import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Calendar, ArrowRight } from 'lucide-react';
import { BANNER_SLIDES, BUSINESS_INFO } from '../data/salonData';

interface BannerSliderProps {
  onNavigate?: (page: string) => void;
}

export const BannerSlider: React.FC<BannerSliderProps> = ({ onNavigate }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = BANNER_SLIDES.length;

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  }, [totalSlides]);

  // Autoplay
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section className="relative w-full h-[540px] sm:h-[620px] lg:h-[700px] overflow-hidden select-none bg-stone-950">
      {/* Slides Container */}
      {BANNER_SLIDES.map((slide, index) => {
        const isActive = index === currentSlide;
        return (
          <div
            key={slide.id}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
              isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
            }`}
          >
            {/* Full-width Background Image */}
            <img
              src={slide.image}
              alt={slide.title}
              className={`w-full h-full object-cover object-center transform transition-transform duration-7000 ease-out ${
                isActive ? 'scale-105' : 'scale-100'
              }`}
            />

            {/* 0.5 Opacity Black Layer on top as required */}
            <div
              className="absolute inset-0 w-full h-full bg-black/50 z-10"
              style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
            />

            {/* Slide Content */}
            <div className="absolute inset-0 z-20 flex items-center justify-center text-center px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto text-white">
                {/* Subtitle Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-600/90 text-white text-xs sm:text-sm font-semibold tracking-wider uppercase mb-4 shadow-lg backdrop-blur-sm animate-fadeIn">
                  <span>{slide.badge}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
                  <span>{slide.subtitle}</span>
                </div>

                {/* Main Heading */}
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-heading tracking-tight leading-tight sm:leading-tight mb-4 drop-shadow-md">
                  {slide.title}
                </h1>

                {/* Short Description */}
                <p className="text-base sm:text-lg lg:text-xl text-stone-200 max-w-2xl mx-auto mb-8 font-light leading-relaxed drop-shadow">
                  {slide.description}
                </p>

                {/* Call To Action Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a
                    href={BUSINESS_INFO.gmbLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-rose-600 hover:bg-rose-700 text-white font-semibold text-sm uppercase tracking-wider shadow-lg hover:shadow-rose-600/30 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
                  >
                    <span>Get A Quote</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>

                  <button
                    onClick={() => onNavigate && onNavigate('services')}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-white/15 hover:bg-white/25 text-white border border-white/30 backdrop-blur-md font-semibold text-sm uppercase tracking-wider transition-all duration-300 hover:border-white"
                  >
                    <Calendar className="w-4 h-4 text-amber-300" />
                    <span>View All Services</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      {/* Left Slider Arrow Button */}
      <button
        onClick={prevSlide}
        aria-label="Previous Slide"
        className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white/20 hover:bg-white/40 text-white backdrop-blur-md border border-white/30 flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 active:scale-95 focus:outline-none"
      >
        <ChevronLeft className="w-6 h-6 stroke-[2.5]" />
      </button>

      {/* Right Slider Arrow Button */}
      <button
        onClick={nextSlide}
        aria-label="Next Slide"
        className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white/20 hover:bg-white/40 text-white backdrop-blur-md border border-white/30 flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 active:scale-95 focus:outline-none"
      >
        <ChevronRight className="w-6 h-6 stroke-[2.5]" />
      </button>

      {/* Bottom Slider 4 Dots */}
      <div className="absolute bottom-6 left-0 right-0 z-30 flex items-center justify-center gap-3">
        {BANNER_SLIDES.map((_, dotIndex) => {
          const isActive = dotIndex === currentSlide;
          return (
            <button
              key={dotIndex}
              onClick={() => setCurrentSlide(dotIndex)}
              aria-label={`Go to slide ${dotIndex + 1}`}
              className={`transition-all duration-300 rounded-full focus:outline-none ${
                isActive
                  ? 'w-10 h-3 bg-rose-500 shadow-md ring-2 ring-white/50'
                  : 'w-3 h-3 bg-white/60 hover:bg-white'
              }`}
            />
          );
        })}
      </div>
    </section>
  );
};
