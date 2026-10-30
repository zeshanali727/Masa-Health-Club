import React from 'react';
import { BannerSlider } from '../components/BannerSlider';
import { AboutSection } from '../components/AboutSection';
import { ServicesSection } from '../components/ServicesSection';
import { WhyChooseUsSection } from '../components/WhyChooseUsSection';
import { ReviewsSlider } from '../components/ReviewsSlider';
import { FaqSection } from '../components/FaqSection';
import { ContactSection } from '../components/ContactSection';
import { HomeBlogsSection } from '../components/HomeBlogsSection';
import { QuoteAndCounterSection } from '../components/QuoteAndCounterSection';
import { BlogPost } from '../data/salonData';

interface HomePageProps {
  onNavigate: (page: string) => void;
  onSelectBlog: (post: BlogPost) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onSelectBlog }) => {
  return (
    <main className="w-full">
      {/* 1st Section: Banner Slider with 3-4 images, 0.5 black overlay, left/right arrows, 4 dots */}
      <BannerSlider onNavigate={onNavigate} />

      {/* 2nd Section: About Us 50% text + description + Get A Quote GMB button + 50% image */}
      <AboutSection />

      {/* 3rd Section: Services 8 services in 2 rows of 4 with left-sliding hover layer & GMB button */}
      <ServicesSection />

      {/* 4th Section: Why You Choose Us 50% tiles + 50% service image */}
      <WhyChooseUsSection />

      {/* 5th Section: Customer Reviews with Pakistani clients, 5-star rating, sliding 2 by 2 */}
      <ReviewsSlider />

      {/* 6th Section: Frequently Asked Questions 6 FAQs with <details>/<summary> accordion & image */}
      <FaqSection />

      {/* 7th Section Part A: Contact Us with flat icons + Google Map iframe */}
      <ContactSection />

      {/* 7th Section Part B: Featured 3 Blogs with Read More full article opener */}
      <HomeBlogsSection
        onSelectBlog={onSelectBlog}
        onNavigateToBlogs={() => onNavigate('blogs')}
      />

      {/* 8th Section: Request A Quote form integrated with email + Statistics Counter box */}
      <QuoteAndCounterSection />
    </main>
  );
};
