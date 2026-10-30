/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { BlogModal } from './components/BlogModal';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { BlogsPage } from './pages/BlogsPage';
import { ContactPage } from './pages/ContactPage';
import { BlogPost } from './data/salonData';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'about' | 'services' | 'blogs' | 'contact'>('home');
  const [selectedBlog, setSelectedBlog] = useState<BlogPost | null>(null);

  // Handle URL hash routing if present
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      if (['home', 'about', 'services', 'blogs', 'contact'].includes(hash)) {
        setCurrentPage(hash as any);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: string) => {
    setCurrentPage(page as any);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectBlog = (post: BlogPost) => {
    setSelectedBlog(post);
  };

  const handleCloseBlog = () => {
    setSelectedBlog(null);
  };

  return (
    <div className="min-h-screen flex flex-col bg-stone-50 text-stone-900 selection:bg-rose-500 selection:text-white">
      {/* Top Header with Business Name, Logo, Nav Menu */}
      <Header
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenQuote={() => handleNavigate('contact')}
      />

      {/* Main Page Routing */}
      <div className="flex-grow">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onSelectBlog={handleSelectBlog}
          />
        )}

        {currentPage === 'about' && (
          <AboutPage onNavigate={handleNavigate} />
        )}

        {currentPage === 'services' && (
          <ServicesPage />
        )}

        {currentPage === 'blogs' && (
          <BlogsPage onSelectBlog={handleSelectBlog} />
        )}

        {currentPage === 'contact' && (
          <ContactPage />
        )}
      </div>

      {/* 3-Column Footer with Logo, 40-word desc, Join Us GMB button, Menu & Contact Info */}
      <Footer onNavigate={handleNavigate} />

      {/* WhatsApp Flat Icon Floating on Right Bottom */}
      <WhatsAppButton />

      {/* Full-Article Reader Modal for Blogs */}
      <BlogModal
        post={selectedBlog}
        onClose={handleCloseBlog}
      />
    </div>
  );
}
