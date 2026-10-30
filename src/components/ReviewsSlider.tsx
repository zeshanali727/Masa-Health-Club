import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { REVIEWS_LIST, BUSINESS_INFO } from '../data/salonData';

export const ReviewsSlider: React.FC = () => {
  // 6 reviews, 2 per slide => 3 slides (indices 0, 1, 2)
  const [slideIndex, setSlideIndex] = useState(0);
  const totalSlides = Math.ceil(REVIEWS_LIST.length / 2);

  const nextSlide = () => {
    setSlideIndex((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setSlideIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const currentPair = REVIEWS_LIST.slice(slideIndex * 2, slideIndex * 2 + 2);

  return (
    <section className="py-20 lg:py-28 bg-stone-900 text-white relative overflow-hidden">
      {/* Decorative background glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-rose-900/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-900/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-500/20 text-rose-300 text-xs font-bold uppercase tracking-wider mb-3 border border-rose-500/30">
              <Star className="w-3.5 h-3.5 fill-rose-300 text-rose-300" />
              <span>Real Experiences</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-white tracking-tight">
              What Our Clients Say
            </h2>
            <p className="mt-3 text-stone-400 text-base max-w-xl">
              Verified testimonials from esteemed gentlemen and ladies across Faisalabad.
            </p>
          </div>

          {/* Slider Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={prevSlide}
              aria-label="Previous Reviews"
              className="w-12 h-12 rounded-full bg-stone-800 hover:bg-rose-600 text-white border border-stone-700 flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <span className="text-xs font-medium text-stone-400 px-1">
              Pair {slideIndex + 1} of {totalSlides}
            </span>
            <button
              onClick={nextSlide}
              aria-label="Next Reviews"
              className="w-12 h-12 rounded-full bg-stone-800 hover:bg-rose-600 text-white border border-stone-700 flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* 2 by 2 Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {currentPair.map((review) => (
            <div
              key={review.id}
              className="bg-stone-800/80 backdrop-blur-sm border border-stone-700/80 rounded-2xl p-8 shadow-xl flex flex-col justify-between relative transition-all duration-500 hover:border-rose-500/50"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-stone-700 pointer-events-none" />

              <div>
                {/* 1st Line: Top pay 5-star rated */}
                <div className="flex items-center gap-1.5 mb-3" aria-label="5 out of 5 stars">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-amber-400 text-amber-400"
                    />
                  ))}
                  <span className="ml-2 text-xs font-semibold text-amber-300 uppercase tracking-wider">
                    5-Star Rated
                  </span>
                </div>

                {/* 2nd Line: Client Name & Service */}
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-white font-heading">
                    {review.name}
                  </h3>
                  <div className="flex flex-wrap items-center gap-2 text-xs text-rose-400 mt-1">
                    <span>{review.location}</span>
                    <span>•</span>
                    <span className="text-stone-300">{review.service}</span>
                  </div>
                </div>

                {/* Last: Reviews Description */}
                <p className="text-stone-300 text-sm sm:text-base leading-relaxed font-light italic">
                  &ldquo;{review.comment}&rdquo;
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-stone-700/60 flex items-center justify-between text-xs text-stone-400">
                <span className="text-emerald-400 font-medium">✓ Verified Customer</span>
                <span>{review.date}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center items-center gap-2 mt-10">
          {[...Array(totalSlides)].map((_, idx) => (
            <button
              key={idx}
              onClick={() => setSlideIndex(idx)}
              aria-label={`Go to review pair ${idx + 1}`}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                idx === slideIndex ? 'w-8 bg-rose-500' : 'w-2.5 bg-stone-700 hover:bg-stone-500'
              }`}
            />
          ))}
        </div>

        {/* GMB Review Button */}
        <div className="text-center mt-12">
          <a
            href={BUSINESS_INFO.gmbLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-stone-300 hover:text-white transition-colors"
          >
            <span>Review Us On Google Maps (Masa Health Club)</span>
            <span className="text-rose-400">→</span>
          </a>
        </div>

      </div>
    </section>
  );
};
