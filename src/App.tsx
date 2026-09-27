import React, { useState, useEffect } from 'react';
import { PageRoute } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { UtamaPage } from './pages/UtamaPage';
import { TentangKamiPage } from './pages/TentangKamiPage';
import { ServisPage } from './pages/ServisPage';
import { LandskapPage } from './pages/LandskapPage';
import { PortfolioPage } from './pages/PortfolioPage';
import { HomestayPage } from './pages/HomestayPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageRoute>('utama');
  const [selectedPhotoCode, setSelectedPhotoCode] = useState<string | null>(null);

  // Sync state with URL hash
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      if (hash.startsWith('portfolio')) {
        setCurrentPage('portfolio');
        const match = hash.match(/portfolio-(\d+)/);
        if (match) {
          setSelectedPhotoCode(match[1]);
        }
      } else if (hash.startsWith('landskap')) {
        setCurrentPage('landskap');
      } else if (hash.startsWith('homestay')) {
        setCurrentPage('homestay');
      } else if (hash.startsWith('servis')) {
        setCurrentPage('servis');
      } else if (hash.startsWith('tentang')) {
        setCurrentPage('tentang');
      } else if (hash.startsWith('utama') || hash === '') {
        setCurrentPage('utama');
      }
    };

    // Initial check
    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: PageRoute) => {
    setCurrentPage(page);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenLightboxFromUtama = (photoCode: string) => {
    setSelectedPhotoCode(photoCode);
    setCurrentPage('portfolio');
    window.location.hash = `portfolio-${photoCode}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAF9] text-[#1E293B] antialiased selection:bg-[#16A34A] selection:text-white">
      {/* Skip to Content for Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 bg-[#15803D] text-white px-4 py-2 rounded-lg font-bold shadow-lg"
      >
        Langkau ke kandungan utama
      </a>

      {/* Header & Navigation */}
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />

      {/* Main Content Area */}
      <main id="main-content" className="flex-1 focus:outline-hidden" tabIndex={-1}>
        {currentPage === 'utama' && (
          <UtamaPage
            onNavigate={handleNavigate}
            onOpenLightbox={handleOpenLightboxFromUtama}
          />
        )}

        {currentPage === 'tentang' && (
          <TentangKamiPage onNavigate={handleNavigate} />
        )}

        {currentPage === 'servis' && (
          <ServisPage onNavigate={handleNavigate} />
        )}

        {currentPage === 'landskap' && (
          <LandskapPage onNavigate={handleNavigate} />
        )}

        {currentPage === 'portfolio' && (
          <PortfolioPage
            onNavigate={handleNavigate}
            initialPhotoCode={selectedPhotoCode}
          />
        )}

        {currentPage === 'homestay' && (
          <HomestayPage onNavigate={handleNavigate} />
        )}
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Global Floating WhatsApp Contact Action */}
      <FloatingWhatsApp />
    </div>
  );
}
