import React, { useState, useEffect } from 'react';
import { PageRoute } from '../types';
import { HmeLogo } from './HmeLogo';
import { CONTACT_INFO, getWhatsAppUrl } from '../data/hmeData';
import { MessageCircle, Menu, X, Phone } from 'lucide-react';

interface NavbarProps {
  currentPage: PageRoute;
  onNavigate: (page: PageRoute) => void;
  onOpenEnquiry?: (servicePrefill?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Requested Order: Utama | Tentang Kami | Servis | Landskap | Portfolio | Homestay
  const navLinks: { id: PageRoute; label: string }[] = [
    { id: 'utama', label: 'Utama' },
    { id: 'tentang', label: 'Tentang Kami' },
    { id: 'servis', label: 'Servis' },
    { id: 'landskap', label: 'Landskap' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'homestay', label: 'Homestay' },
  ];

  const handleLinkClick = (page: PageRoute) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-200 py-2'
          : 'bg-white/50 backdrop-blur-md border-b border-white/60 py-3 shadow-xs'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-2">
          {/* Brand Logo - Isolated Full-Color Logo */}
          <button
            onClick={() => handleLinkClick('utama')}
            className="flex items-center text-left focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#15803D] rounded-lg p-0.5 transition-transform hover:opacity-95 shrink-0"
            aria-label="Kembali ke Laman Utama HME - HIJAU MEGAH ENTERPRISE"
          >
            <HmeLogo variant="color" size="sm" className="sm:hidden" />
            <HmeLogo variant="color" size="md" className="hidden sm:inline-flex" />
          </button>

          {/* Desktop Navigation Links (Switches to Hamburger on Tablet < xl to prevent crowding) */}
          <nav className="hidden xl:flex items-center gap-1" aria-label="Navigasi Utama">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`px-3 py-2 rounded-lg text-[15px] font-bold transition-all relative min-h-[40px] flex items-center focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#15803D] ${
                    isActive
                      ? 'text-[#0E4424] font-black bg-emerald-50/70'
                      : 'text-gray-700 hover:text-[#0E4424] hover:bg-gray-50'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0.5 left-3 right-3 h-0.75 bg-[#15803D] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Compact WhatsApp CTA (Clean, compact, no layout overflow) */}
          <div className="hidden sm:flex items-center gap-2 shrink-0">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-3.5 py-2 rounded-xl text-sm font-bold text-white bg-[#15803D] hover:bg-[#0E4424] active:scale-[0.98] transition-all shadow-xs hover:shadow-md min-h-[42px] focus:outline-hidden focus-visible:ring-3 focus-visible:ring-[#84CC16]"
            >
              <MessageCircle className="w-4 h-4 fill-current text-white" />
              <span>WhatsApp Kami</span>
            </a>
          </div>

          {/* Mobile & Tablet Hamburger Button (< xl) */}
          <div className="flex xl:hidden items-center gap-2">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="sm:hidden inline-flex items-center justify-center p-2 rounded-lg bg-[#15803D] text-white active:scale-95 transition-all min-h-[40px] min-w-[40px]"
              aria-label="WhatsApp Kami"
            >
              <MessageCircle className="w-4 h-4" />
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-gray-700 hover:text-gray-900 hover:bg-gray-100 min-h-[44px] min-w-[44px] flex items-center justify-center focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#15803D]"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Tutup menu navigasi' : 'Buka menu navigasi'}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-gray-900" />
              ) : (
                <Menu className="w-6 h-6 text-gray-900" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile / Tablet Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white/98 backdrop-blur-xl border-b border-gray-200 px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-1.5" aria-label="Navigasi Mudah Alih">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`w-full text-left px-4 py-3 rounded-xl text-base font-bold min-h-[46px] flex items-center justify-between transition-colors ${
                    isActive
                      ? 'bg-emerald-50 text-[#0E4424] border-l-4 border-[#15803D]'
                      : 'text-gray-800 hover:bg-gray-50'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  <span>{link.label}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-[#15803D]" />}
                </button>
              );
            })}

            <div className="mt-4 pt-4 border-t border-gray-100 flex flex-col gap-2.5">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2.5 px-4 py-3 rounded-xl text-base font-bold text-white bg-[#15803D] hover:bg-[#0E4424] active:scale-[0.98] transition-all min-h-[46px] shadow-xs"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>WhatsApp: {CONTACT_INFO.DISPLAY_PHONE}</span>
              </a>

              <a
                href={CONTACT_INFO.TEL_URL}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-gray-700 bg-gray-50 hover:bg-gray-100 transition-colors min-h-[44px]"
              >
                <Phone className="w-4 h-4 text-[#15803D]" />
                <span>Panggilan Telefon Terus</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
