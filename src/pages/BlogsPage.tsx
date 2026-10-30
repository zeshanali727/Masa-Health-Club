import React, { useState } from 'react';
import { BookOpen, Calendar, Clock, ArrowRight, Search, Sparkles } from 'lucide-react';
import { BLOGS_DATA, BlogPost } from '../data/salonData';

interface BlogsPageProps {
  onSelectBlog: (post: BlogPost) => void;
}

export const BlogsPage: React.FC<BlogsPageProps> = ({ onSelectBlog }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredBlogs = BLOGS_DATA.filter((b) =>
    b.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    b.primaryKeyword.toLowerCase().includes(searchQuery.toLowerCase()) ||
    b.secondaryKeyword.toLowerCase().includes(searchQuery.toLowerCase()) ||
    b.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="w-full bg-stone-50 pb-20">
      
      {/* Page Hero Banner */}
      <section className="relative py-20 lg:py-28 bg-stone-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-25">
          <img
            src="https://images.unsplash.com/photo-1519415387722-a1c3bbef716c?q=80&w=1200&auto=format&fit=crop"
            alt="Masa Health Club Beauty Blogs"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-stone-950/75" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-500/20 text-rose-300 text-xs font-bold uppercase tracking-wider mb-4 border border-rose-500/30">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Articles & Insights</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading tracking-tight mb-4 text-white">
            Beauty & Wellness Journal
          </h1>
          <p className="max-w-2xl mx-auto text-stone-300 text-base sm:text-lg font-light leading-relaxed">
            In-depth guides on holistic skincare regimens, precision hair cuts, organic scalp oiling, and waxing hygiene in Faisalabad.
          </p>

          {/* Search bar */}
          <div className="max-w-md mx-auto mt-8 relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by keyword, topic or treatment..."
              className="w-full pl-12 pr-4 py-3.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-stone-400 focus:outline-none focus:bg-white/20 text-sm"
            />
            <Search className="w-5 h-5 text-stone-400 absolute left-4 top-1/2 -translate-y-1/2" />
          </div>
        </div>
      </section>

      {/* 5 Full Blogs Listing */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {filteredBlogs.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl border border-stone-200 p-8">
            <Sparkles className="w-10 h-10 text-stone-400 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-stone-800">No matching articles found</h3>
            <p className="text-sm text-stone-500 mt-1">Try searching for keywords like &ldquo;Facial&rdquo;, &ldquo;Hair Styling&rdquo;, or &ldquo;Manicure&rdquo;.</p>
            <button
              onClick={() => setSearchQuery('')}
              className="mt-4 px-6 py-2 rounded-full bg-rose-600 text-white text-xs font-bold uppercase tracking-wider"
            >
              Clear Search
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBlogs.map((blog) => (
              <article
                key={blog.id}
                className="bg-white rounded-2xl overflow-hidden border border-stone-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Blog Top: Image */}
                  <div className="relative h-60 w-full overflow-hidden bg-stone-100">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-rose-600 text-white text-[11px] font-bold uppercase tracking-wider shadow">
                      {blog.primaryKeyword}
                    </div>
                  </div>

                  {/* Body: Title & Short Description */}
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-xs text-stone-500 mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-stone-400" />
                        {blog.date}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-stone-400" />
                        {blog.readTime}
                      </span>
                    </div>

                    <h2 className="text-xl font-bold font-heading text-stone-900 group-hover:text-rose-600 transition-colors mb-3 line-clamp-2">
                      {blog.title}
                    </h2>

                    <p className="text-stone-600 text-sm leading-relaxed line-clamp-3 mb-6 font-normal">
                      {blog.excerpt}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-2">
                      <span className="px-2.5 py-0.5 rounded-md bg-stone-100 text-stone-600 text-[11px] font-medium">
                        {blog.primaryKeyword}
                      </span>
                      <span className="px-2.5 py-0.5 rounded-md bg-stone-100 text-stone-600 text-[11px] font-medium">
                        {blog.secondaryKeyword}
                      </span>
                    </div>
                  </div>
                </div>

                {/* End: Read More Button */}
                <div className="px-6 pb-6 pt-0">
                  <button
                    onClick={() => onSelectBlog(blog)}
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-stone-900 hover:bg-rose-600 text-white text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-sm"
                  >
                    <span>Read More</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}

      </section>

    </div>
  );
};
