import React from 'react';
import { BookOpen, ArrowRight, Calendar, Clock } from 'lucide-react';
import { BLOGS_DATA, BlogPost } from '../data/salonData';

interface HomeBlogsSectionProps {
  onSelectBlog: (post: BlogPost) => void;
  onNavigateToBlogs: () => void;
}

export const HomeBlogsSection: React.FC<HomeBlogsSectionProps> = ({
  onSelectBlog,
  onNavigateToBlogs,
}) => {
  // Show 3 featured blogs on Home page as requested
  const featuredBlogs = BLOGS_DATA.slice(0, 3);

  return (
    <section className="py-20 lg:py-28 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-100 text-rose-700 text-xs font-bold uppercase tracking-wider mb-3">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Expert Beauty Insights</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-stone-900 tracking-tight">
              Latest Health & Beauty Blogs
            </h2>
            <p className="mt-3 text-stone-600 text-base max-w-xl">
              Professional grooming tips, holistic skincare regimens, and styling secrets from our master specialists.
            </p>
          </div>

          <button
            onClick={onNavigateToBlogs}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-stone-900 hover:bg-rose-600 text-white text-xs font-bold uppercase tracking-wider shadow transition-all duration-300 transform hover:-translate-y-0.5"
          >
            <span>View All 5 Blogs</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* 3 Blogs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredBlogs.map((blog) => (
            <article
              key={blog.id}
              className="bg-white rounded-2xl overflow-hidden border border-stone-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Blog Top: Image */}
                <div className="relative h-56 w-full overflow-hidden bg-stone-100">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-rose-600 text-white text-[11px] font-bold uppercase tracking-wider shadow">
                    {blog.primaryKeyword}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Meta */}
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

                  {/* Title */}
                  <h3 className="text-xl font-bold font-heading text-stone-900 group-hover:text-rose-600 transition-colors mb-3 line-clamp-2">
                    {blog.title}
                  </h3>

                  {/* Short Description */}
                  <p className="text-stone-600 text-sm leading-relaxed line-clamp-3 mb-6 font-normal">
                    {blog.excerpt}
                  </p>
                </div>
              </div>

              {/* End: Read More Button */}
              <div className="px-6 pb-6 pt-0">
                <button
                  onClick={() => onSelectBlog(blog)}
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-stone-100 hover:bg-rose-600 text-stone-800 hover:text-white text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-sm"
                >
                  <span>Read More</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};
