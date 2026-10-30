import React from 'react';
import { X, Clock, Calendar, ChevronDown, ExternalLink, Share2, Sparkles, MapPin } from 'lucide-react';
import { BlogPost, BUSINESS_INFO } from '../data/salonData';

interface BlogModalProps {
  post: BlogPost | null;
  onClose: () => void;
}

export const BlogModal: React.FC<BlogModalProps> = ({ post, onClose }) => {
  if (!post) return null;

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-stone-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          aria-label="Close article modal"
          className="fixed sm:absolute top-5 right-5 z-20 w-10 h-10 rounded-full bg-stone-900/80 hover:bg-stone-900 text-white flex items-center justify-center shadow-md transition-all duration-200 hover:scale-105"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Featured Image */}
        <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-stone-100 rounded-t-3xl">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/20 to-transparent" />
          
          <div className="absolute bottom-6 left-6 right-6 text-white">
            <div className="flex flex-wrap items-center gap-3 text-xs mb-2">
              <span className="px-3 py-1 rounded-full bg-rose-600 font-bold uppercase tracking-wider">
                {post.primaryKeyword}
              </span>
              <span className="flex items-center gap-1 text-stone-200">
                <Calendar className="w-3.5 h-3.5" />
                {post.date}
              </span>
              <span className="flex items-center gap-1 text-stone-200">
                <Clock className="w-3.5 h-3.5" />
                {post.readTime}
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-heading text-white leading-tight">
              {post.title}
            </h1>
          </div>
        </div>

        {/* Article Body */}
        <div className="p-6 sm:p-10 text-stone-800 space-y-8">
          
          {/* Introductory Paragraph before the first heading (no company name in intro) */}
          <div className="p-6 rounded-2xl bg-stone-50 border-l-4 border-rose-600 text-stone-700 text-base sm:text-lg leading-relaxed font-normal">
            <p>{post.intro}</p>
          </div>

          {/* Structured Sections with Headings */}
          {post.sections.map((section, idx) => (
            <div key={idx} className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold font-heading text-stone-900 border-b border-stone-100 pb-2">
                {section.heading}
              </h2>

              <div className="space-y-4">
                {section.paragraphs.map((p, pIdx) => (
                  <p
                    key={pIdx}
                    className="text-stone-700 text-base leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: p }}
                  />
                ))}
              </div>
            </div>
          ))}

          {/* Conclusion mentioning Masa Health Club and Kohinoor City location */}
          <div className="p-6 rounded-2xl bg-rose-50 border border-rose-200 text-stone-800 space-y-3">
            <h3 className="text-lg font-bold font-heading text-stone-900 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-rose-600" />
              <span>Conclusion</span>
            </h3>
            <p className="text-stone-700 text-base leading-relaxed">
              {post.conclusion}
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href={BUSINESS_INFO.gmbKeywordLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-rose-600 hover:text-rose-700"
              >
                <span>Find Masa Health Club on Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* 5 FAQs at the end */}
          <div className="space-y-4 pt-4 border-t border-stone-200">
            <h3 className="text-xl font-bold font-heading text-stone-900">
              Article Frequently Asked Questions (FAQs)
            </h3>
            <div className="space-y-3">
              {post.faqs.map((faq, fIdx) => (
                <details
                  key={fIdx}
                  className="group bg-stone-50 rounded-xl p-4 border border-stone-200 text-stone-800"
                >
                  <summary className="flex items-center justify-between font-bold text-sm sm:text-base cursor-pointer list-none select-none text-stone-900 group-hover:text-rose-600 transition-colors">
                    <span className="pr-3">{faq.question}</span>
                    <ChevronDown className="w-4 h-4 text-stone-500 group-open:rotate-180 transition-transform flex-shrink-0" />
                  </summary>
                  <p className="mt-3 text-stone-600 text-xs sm:text-sm leading-relaxed border-t border-stone-200 pt-2">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>

          {/* Modal Bottom Close / Action */}
          <div className="pt-6 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs text-stone-500">
              <MapPin className="w-3.5 h-3.5 text-rose-500" />
              <span>{BUSINESS_INFO.address}</span>
            </div>
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                onClick={onClose}
                className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-stone-200 hover:bg-stone-300 text-stone-800 font-bold text-xs uppercase tracking-wider transition-colors"
              >
                Close Article
              </button>
              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider transition-colors text-center shadow"
              >
                Book Appointment
              </a>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
