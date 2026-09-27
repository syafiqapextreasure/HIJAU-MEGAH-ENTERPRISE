import React, { useState, useEffect, useCallback, useId } from 'react';
import { PageRoute, ServiceCategory, PortfolioItem } from '../types';
import { PORTFOLIO_ITEMS, getWhatsAppUrl, CONTACT_INFO } from '../data/hmeData';
import { 
  Camera, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  MessageCircle, 
  Maximize2, 
  Filter, 
  CheckCircle2, 
  Clock, 
  Info,
  ExternalLink
} from 'lucide-react';

interface PortfolioPageProps {
  onNavigate: (page: PageRoute) => void;
  initialPhotoCode?: string | null;
}

export const PortfolioPage: React.FC<PortfolioPageProps> = ({
  onNavigate,
  initialPhotoCode,
}) => {
  const [activeFilter, setActiveFilter] = useState<'all' | ServiceCategory>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const lightboxTitleId = useId();

  // Filter items
  const filteredItems = activeFilter === 'all'
    ? PORTFOLIO_ITEMS
    : PORTFOLIO_ITEMS.filter((item) => item.category === activeFilter);

  // If an initialPhotoCode was passed, open lightbox for it on mount
  useEffect(() => {
    if (initialPhotoCode) {
      const idx = PORTFOLIO_ITEMS.findIndex((p) => p.code === initialPhotoCode);
      if (idx !== -1) {
        setLightboxIndex(idx);
      }
    }
  }, [initialPhotoCode]);

  // Keyboard navigation for lightbox
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (lightboxIndex === null) return;

    if (e.key === 'Escape') {
      setLightboxIndex(null);
    } else if (e.key === 'ArrowRight') {
      setLightboxIndex((prev) => (prev !== null ? (prev + 1) % PORTFOLIO_ITEMS.length : null));
    } else if (e.key === 'ArrowLeft') {
      setLightboxIndex((prev) => (prev !== null ? (prev - 1 + PORTFOLIO_ITEMS.length) % PORTFOLIO_ITEMS.length : null));
    }
  }, [lightboxIndex]);

  useEffect(() => {
    if (lightboxIndex !== null) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [lightboxIndex, handleKeyDown]);

  const currentLightboxItem = lightboxIndex !== null ? PORTFOLIO_ITEMS[lightboxIndex] : null;

  const categories: { id: 'all' | ServiceCategory; label: string; count: number }[] = [
    { id: 'all', label: 'Semua Foto', count: PORTFOLIO_ITEMS.length },
    { id: 'konsep', label: 'Konsep Servis', count: PORTFOLIO_ITEMS.filter(i => i.category === 'konsep').length },
    { id: 'bumbung', label: 'Bumbung', count: PORTFOLIO_ITEMS.filter(i => i.category === 'bumbung').length },
    { id: 'besi', label: 'Besi & Kimpalan', count: PORTFOLIO_ITEMS.filter(i => i.category === 'besi').length },
    { id: 'cat', label: 'Mengecat', count: PORTFOLIO_ITEMS.filter(i => i.category === 'cat').length },
    { id: 'jalan', label: 'Jalan & Tar', count: PORTFOLIO_ITEMS.filter(i => i.category === 'jalan').length },
    { id: 'dapur', label: 'Dapur & Sinki', count: PORTFOLIO_ITEMS.filter(i => i.category === 'dapur').length },
    { id: 'longkang', label: 'Longkang', count: PORTFOLIO_ITEMS.filter(i => i.category === 'longkang').length },
  ];

  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
      {/* Header */}
      <section className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 text-[#0E4424] text-sm font-bold border border-emerald-100">
          <Camera className="w-4 h-4 text-[#15803D]" />
          <span>Galeri Kerja & Visual Servis HME</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-black text-gray-900 tracking-tight font-sans">
          Portfolio Projek & Servis
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 leading-relaxed font-normal">
          Gabungan foto tapak kerja HME dan satu visual konsep servis untuk memudahkan pelanggan melihat skop kerja pembinaan, bumbung, kimpalan, mengecat, jalan, saliran dan kemasan rumah.
        </p>
      </section>

      {/* Filter Tabs */}
      <section aria-label="Tapis Galeri Projek" className="space-y-4">
        <div className="flex items-center justify-between flex-wrap gap-3 pb-2 border-b border-gray-200">
          <div className="flex items-center gap-2 text-sm font-bold text-gray-700">
            <Filter className="w-4 h-4 text-[#15803D]" />
            <span>Kategori Kerja:</span>
          </div>
          <span className="text-xs sm:text-sm font-medium text-gray-500">
            Menunjukkan {filteredItems.length} daripada {PORTFOLIO_ITEMS.length} foto projek
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
          {categories.map((cat) => {
            const isSelected = activeFilter === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={`px-4 py-2.5 rounded-xl text-sm sm:text-base font-bold transition-all min-h-[44px] flex items-center gap-2 cursor-pointer focus:outline-hidden focus-visible:ring-3 focus-visible:ring-[#15803D] ${
                  isSelected
                    ? 'bg-[#15803D] text-white shadow-sm'
                    : 'bg-white hover:bg-gray-100 text-gray-700 border border-gray-200'
                }`}
                aria-pressed={isSelected}
              >
                <span>{cat.label}</span>
                <span
                  className={`text-xs px-2 py-0.5 rounded-full font-semibold ${
                    isSelected ? 'bg-white/25 text-white' : 'bg-gray-100 text-gray-600'
                  }`}
                >
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>
      </section>

      {/* Photo Gallery Grid */}
      <section aria-label="Senarai Foto Projek" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {filteredItems.map((item) => {
          const globalIndex = PORTFOLIO_ITEMS.findIndex(p => p.id === item.id);
          return (
            <article
              key={item.id}
              className="bg-white rounded-2xl overflow-hidden border border-gray-200/90 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              {/* Thumbnail Container: shows the FULL photograph without cropping or distortion */}
              <div
                onClick={() => setLightboxIndex(globalIndex)}
                className="relative aspect-4/3 w-full bg-slate-950/5 flex items-center justify-center overflow-hidden cursor-pointer"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setLightboxIndex(globalIndex);
                  }
                }}
                aria-label={`Buka gambar penuh: ${item.caption} (Kod: ${item.code})`}
              >
                <picture className="w-full h-full">
                  <source srcSet={item.webpSrc} type="image/webp" />
                  <img
                    src={item.imageSrc}
                    alt={item.caption}
                    className="w-full h-full object-contain p-1 group-hover:scale-102 transition-transform duration-300"
                    loading="eager"
                    width={1200}
                    height={900}
                  />
                </picture>

                {/* Status Badge */}
                <div className="absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-semibold backdrop-blur-md shadow-xs text-white bg-black/70">
                  {item.status === 'Siap' ? (
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#BEF264]" />
                  ) : (
                    <Clock className="w-3.5 h-3.5 text-amber-300" />
                  )}
                  <span>{item.status}</span>
                </div>

                {/* Category Badge */}
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md text-xs font-bold text-white bg-[#0E4424] shadow-xs">
                  {item.categoryLabel}
                </div>

                {/* Hover overlay hint */}
                <div className="absolute inset-0 bg-[#0E4424]/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                  <div className="bg-white/95 text-gray-900 font-bold text-xs px-3 py-1.5 rounded-lg shadow-md flex items-center gap-1.5">
                    <Maximize2 className="w-3.5 h-3.5 text-[#15803D]" />
                    <span>Lihat Penuh</span>
                  </div>
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs text-gray-500 font-mono">
                    <span>Kod Fail: {item.code}</span>
                    <span className="text-[#15803D] font-bold font-sans">{item.categoryLabel}</span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 leading-snug group-hover:text-[#15803D] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {item.caption}
                  </p>
                </div>

                <div className="pt-3 border-t border-gray-100 flex items-center justify-between gap-2">
                  <button
                    onClick={() => setLightboxIndex(globalIndex)}
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-gray-800 hover:text-[#15803D] transition-colors focus:outline-hidden focus-visible:underline"
                  >
                    <Maximize2 className="w-4 h-4 text-[#15803D]" />
                    <span>Perincian Foto</span>
                  </button>

                  <a
                    href={getWhatsAppUrl(`Salam HME, saya ingin bertanya tentang projek kerja seperti dalam foto portfolio kod [${item.code}] (${item.title}).`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#15803D] hover:text-[#0E4424] hover:underline"
                    aria-label={`WhatsApp HME mengenai projek ${item.code}`}
                  >
                    <MessageCircle className="w-3.5 h-3.5 fill-current" />
                    <span>Tanya Projek Ini</span>
                  </a>
                </div>
              </div>
            </article>
          );
        })}
      </section>

      {/* Reassurance Banner */}
      <section className="bg-emerald-50/80 border border-emerald-200/90 rounded-2xl p-6 sm:p-8 flex items-start gap-4">
        <Info className="w-6 h-6 text-[#15803D] shrink-0 mt-0.5" />
        <div className="space-y-1.5 text-left">
          <h4 className="font-bold text-[#0E4424] text-base sm:text-lg">
            Galeri Tersusun Mengikut Kategori Kerja
          </h4>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
            Setiap imej disusun mengikut kategori kerja yang sesuai dan diberikan penerangan khusus berdasarkan kandungan visual. Semua paparan portfolio menggunakan saiz fail seragam 1200×900 supaya grid kelihatan kemas dan konsisten.
          </p>
        </div>
      </section>

      {/* FULL-IMAGE LIGHTBOX MODAL */}
      {currentLightboxItem && lightboxIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby={lightboxTitleId}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex flex-col justify-between p-4 sm:p-6 transition-all"
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between text-white max-w-7xl mx-auto w-full pb-3 border-b border-white/10">
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-1 rounded bg-[#15803D] text-xs font-extrabold uppercase tracking-wide">
                {currentLightboxItem.categoryLabel}
              </span>
              <span className="text-xs sm:text-sm font-mono text-gray-300">
                Kod: {currentLightboxItem.code} ({lightboxIndex + 1} / {PORTFOLIO_ITEMS.length})
              </span>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-xs text-gray-300 hidden sm:inline">
                Tekan <kbd className="px-1.5 py-0.5 bg-white/10 rounded">ESC</kbd> untuk tutup, panah <kbd className="px-1.5 py-0.5 bg-white/10 rounded">←</kbd> <kbd className="px-1.5 py-0.5 bg-white/10 rounded">→</kbd> untuk navigasi
              </span>
              <button
                onClick={() => setLightboxIndex(null)}
                className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center focus:outline-hidden focus-visible:ring-2 focus-visible:ring-white"
                aria-label="Tutup pemapar gambar (ESC)"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Main Visual Display Area */}
          <div className="relative flex-1 flex items-center justify-center my-4 max-w-7xl mx-auto w-full overflow-hidden">
            {/* Previous Button */}
            <button
              onClick={() =>
                setLightboxIndex(
                  (lightboxIndex - 1 + PORTFOLIO_ITEMS.length) % PORTFOLIO_ITEMS.length
                )
              }
              className="absolute left-2 sm:left-4 z-10 p-3 rounded-full bg-black/60 hover:bg-black/80 text-white transition-all min-h-[48px] min-w-[48px] flex items-center justify-center backdrop-blur-xs focus:outline-hidden focus-visible:ring-2 focus-visible:ring-emerald-400"
              aria-label="Foto sebelumnya"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Uncropped Full Image */}
            <div className="max-h-[70vh] sm:max-h-[75vh] w-full flex items-center justify-center">
              <picture>
                <source srcSet={currentLightboxItem.webpSrc} type="image/webp" />
                <img
                  src={currentLightboxItem.imageSrc}
                  alt={currentLightboxItem.caption}
                  className="max-h-[70vh] sm:max-h-[75vh] max-w-full object-contain rounded-lg shadow-2xl"
                />
              </picture>
            </div>

            {/* Next Button */}
            <button
              onClick={() =>
                setLightboxIndex((lightboxIndex + 1) % PORTFOLIO_ITEMS.length)
              }
              className="absolute right-2 sm:right-4 z-10 p-3 rounded-full bg-black/60 hover:bg-black/80 text-white transition-all min-h-[48px] min-w-[48px] flex items-center justify-center backdrop-blur-xs focus:outline-hidden focus-visible:ring-2 focus-visible:ring-emerald-400"
              aria-label="Foto seterusnya"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Bottom Bar: Caption & Direct WhatsApp CTA */}
          <div className="bg-black/60 backdrop-blur-md rounded-2xl p-4 sm:p-5 max-w-5xl mx-auto w-full text-white border border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <h3 id={lightboxTitleId} className="text-base sm:text-lg font-bold text-white">
                  {currentLightboxItem.title}
                </h3>
                <span className="text-xs px-2 py-0.5 rounded bg-white/20 font-medium">
                  Status: {currentLightboxItem.status}
                </span>
              </div>
              <p className="text-sm text-gray-300">
                {currentLightboxItem.caption}
              </p>
            </div>

            <a
              href={getWhatsAppUrl(`Salam HME, saya berminat untuk berbincang mengenai sebut harga bagi projek serupa foto kod [${currentLightboxItem.code}] (${currentLightboxItem.title}).`)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#15803D] hover:bg-[#0E4424] text-white font-bold text-sm sm:text-base transition-colors shadow-md min-h-[48px] shrink-0"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>Bincang Projek Ini di WhatsApp</span>
            </a>
          </div>
        </div>
      )}

      {/* Closing CTA */}
      <section className="bg-gradient-to-r from-[#0E4424] to-[#15803D] text-white rounded-3xl p-8 sm:p-12 text-center space-y-6 shadow-xl">
        <h2 className="text-3xl sm:text-4xl font-black font-sans tracking-tight">
          Perlukan Bantuan untuk Kerja Kediaman Anda?
        </h2>
        <p className="text-emerald-100 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          Sama ada bumbung bocor, laluan jalan yang perlu diturap, atau struktur besi yang ingin dibina — hantarkan gambar masalah anda terus kepada kami untuk sebut harga.
        </p>
        <div className="pt-2">
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-lg font-bold text-[#0E4424] bg-white hover:bg-[#BEF264] active:scale-95 transition-all shadow-lg min-h-[52px]"
          >
            <MessageCircle className="w-5 h-5 fill-current text-[#15803D]" />
            <span>WhatsApp HME (+60 19-599 5868)</span>
          </a>
        </div>
      </section>
    </div>
  );
};
