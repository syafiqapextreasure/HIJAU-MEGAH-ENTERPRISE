import React from 'react';
import { PageRoute } from '../types';
import { CONTACT_INFO, SERVICES, ORDERED_PORTFOLIO_ITEMS, WORK_PROCESS_STEPS, FAQS, getWhatsAppUrl } from '../data/hmeData';
import { EnquiryForm } from '../components/EnquiryForm';
import { 
  ArrowRight, 
  MessageCircle, 
  Hammer, 
  ShieldCheck, 
  Clock, 
  Wrench, 
  ChevronRight, 
  HelpCircle, 
  Camera, 
  CheckCircle2, 
  Sparkles,
  Layers,
  Trees,
  Building2
} from 'lucide-react';

interface UtamaPageProps {
  onNavigate: (page: PageRoute) => void;
  onOpenLightbox?: (photoCode: string) => void;
}

export const UtamaPage: React.FC<UtamaPageProps> = ({ onNavigate, onOpenLightbox }) => {
  // Selected original project photos for the home preview
  const previewPhotos = ORDERED_PORTFOLIO_ITEMS.slice(0, 6);

  const scrollToEnquiry = () => {
    const el = document.getElementById('borang-sebut-harga');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="space-y-20 sm:space-y-28 pb-16">
      {/* HERO SECTION */}
      <section className="relative isolate pt-32 pb-16 lg:pt-36 lg:pb-24 overflow-hidden">
        {/* Fullwidth Panoramic Background Image (Construction, Landscape & Homestay) */}
        <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
          <img
            src="/images/hero/hero-bg-composite.webp"
            alt="Latar belakang HME Construction, Landscape dan Homestay"
            className="w-full h-full object-cover object-top opacity-35 sm:opacity-40"
            width={1920}
            height={1080}
            loading="eager"
          />
          {/* Subtle directional gradients: keeps left text 100% legible while allowing the scenic image to show cleanly across hero */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#F8FAF9]/85 via-[#F8FAF9]/55 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#F8FAF9]/30 via-transparent to-[#F8FAF9]" />
          <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-tr from-emerald-100/25 via-lime-100/20 to-transparent blur-3xl pointer-events-none" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Hero Column: Copy & Actions (Restored to clean original layout) */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-left">
              {/* Badge */}
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/90 backdrop-blur-md border border-emerald-200/80 shadow-xs text-sm sm:text-base font-bold text-[#0E4424]">
                <span className="w-2.5 h-2.5 rounded-full bg-[#15803D] animate-pulse"></span>
                <span>Hijau Megah Enterprise (HME)</span>
                <span className="text-gray-300">|</span>
                <span className="text-xs sm:text-sm font-semibold text-gray-600">Perkhidmatan Kontraktor Tempatan</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#0F172A] tracking-tight leading-[1.15] font-sans">
                Bina, Baik Pulih & Selenggara Bersama HME
              </h1>

              {/* Supporting Copy */}
              <p className="text-lg sm:text-xl text-gray-700 leading-relaxed max-w-2xl font-normal">
                Perkhidmatan menyeluruh bagi kerja-kerja <strong className="font-semibold text-gray-900">bumbung & atap</strong>, <strong className="font-semibold text-gray-900">kimpalan besi</strong>, <strong className="font-semibold text-gray-900">mengecat bangunan</strong>, <strong className="font-semibold text-gray-900">penurapan jalan & tar</strong>, <strong className="font-semibold text-gray-900">pembaikan dapur & sinki</strong>, serta <strong className="font-semibold text-gray-900">pemasangan saliran longkang</strong>.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <button
                  onClick={scrollToEnquiry}
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-lg font-bold text-white bg-[#15803D] hover:bg-[#0E4424] active:scale-[0.98] transition-all duration-200 shadow-md hover:shadow-lg min-h-[52px] focus:outline-hidden focus-visible:ring-4 focus-visible:ring-emerald-300 cursor-pointer"
                >
                  <MessageCircle className="w-5 h-5 fill-current" />
                  <span>Bincang Projek Anda</span>
                </button>

                <button
                  onClick={() => {
                    onNavigate('portfolio');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-lg font-bold text-gray-800 bg-white hover:bg-gray-50 border border-gray-200 active:scale-[0.98] transition-all min-h-[52px] shadow-xs focus:outline-hidden focus-visible:ring-2 focus-visible:ring-gray-400 cursor-pointer"
                >
                  <span>Lihat Portfolio</span>
                  <ArrowRight className="w-5 h-5 text-gray-600" />
                </button>
              </div>

              {/* Micro Trust Indicators */}
              <div className="pt-4 flex flex-wrap items-center gap-y-3 gap-x-6 text-sm text-gray-600 font-medium">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#15803D]" />
                  <span>Kerja Kemas & Teliti</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#15803D]" />
                  <span>Hubungi Terus WhatsApp</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#15803D]" />
                  <span>Sebut Harga Berbincang Terbuka</span>
                </div>
              </div>
            </div>

            {/* Right Hero Column: Visual (Reusing the generated roofing image as hero visual) */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-lg lg:max-w-none">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-white group">
                  <img
                    src="/images/servis/servis-bumbung.webp"
                    alt="Kerja pemasangan bumbung logam merah kemas di tapak kediaman Malaysia"
                    className="w-full h-80 sm:h-96 lg:h-[420px] object-cover object-center group-hover:scale-102 transition-transform duration-500"
                    width={800}
                    height={600}
                    loading="eager"
                  />
                  {/* Floating Highlight Card */}
                  <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-xl shadow-lg border border-gray-100 flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-bold text-gray-900 font-sans">
                        Pemasangan & Pembaikan Bumbung
                      </h4>
                      <p className="text-xs text-gray-600 mt-0.5">
                        Kekuda, kepingan zink, flashing & perabung atap
                      </p>
                    </div>
                    <button
                      onClick={() => onNavigate('servis')}
                      className="p-2 rounded-lg bg-emerald-50 text-[#15803D] hover:bg-emerald-100 transition-colors"
                      aria-label="Lihat perincian servis bumbung"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* Decorative accent card */}
                <div className="hidden sm:block absolute -bottom-5 -right-5 bg-gradient-to-r from-[#15803D] to-[#0E4424] text-white p-4 rounded-xl shadow-xl max-w-xs -z-10">
                  <span className="text-xs font-bold text-[#BEF264] uppercase tracking-wider block">
                    Kualiti Praktikal
                  </span>
                  <span className="text-sm font-semibold">
                    Ketelitian kerja dari kerja bumbung hingga turapan tar.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SHORT COMPANY INTRODUCTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-white to-emerald-50/40 rounded-3xl p-8 sm:p-12 lg:p-14 border border-emerald-100/80 shadow-md overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-sm font-extrabold uppercase tracking-wider text-[#15803D]">
                Pengenalan Syarikat
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-gray-900 font-sans tracking-tight">
                Mengenai Hijau Megah Enterprise (HME)
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed font-normal">
                Hijau Megah Enterprise (HME) beroperasi dengan fokus utama terhadap pelaksanaan kerja-kerja pembinaan, pembaikan, dan penyelenggaraan hartanah yang teliti dan praktikal. Dari struktur bumbung yang melindungi kediaman daripada cuaca basah, kimpalan rangka besi, pengecatan dinding, penurapan tar jalan, sehinggalah pembaikan ruang dalaman seperti dapur dan sistem longkang saliran air hujan.
              </p>
              <p className="text-base text-gray-600 leading-relaxed">
                Mengekalkan moto <span className="font-semibold text-gray-800">“Construction | Landscape | Homestay”</span>, kami mengutamakan perbincangan telus mengikut keperluan sebenar tapak anda tanpa sebarang janji berlebihan.
              </p>

              <div className="pt-2">
                <button
                  onClick={() => {
                    onNavigate('tentang');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-2 text-base font-bold text-[#15803D] hover:text-[#0E4424] hover:underline transition-colors"
                >
                  <span>Ketahui lebih lanjut mengenai skop HME</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden border border-white/80 shadow-xl bg-emerald-950 min-h-[320px]">
                <img
                  src="/images/branding/hme-service-landscape-homestay.webp"
                  alt="Rumah kediaman dengan kerja baik pulih, taman landskap dan suasana homestay tanah tinggi"
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                  width={900}
                  height={600}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A2013]/80 via-[#0A2013]/10 to-transparent" />
                <div className="absolute left-5 right-5 bottom-5 rounded-2xl bg-white/92 backdrop-blur-md p-4 shadow-lg">
                  <p className="text-xs font-black uppercase tracking-wider text-[#15803D]">
                    Construction | Landscape | Homestay
                  </p>
                  <p className="mt-1 text-sm font-semibold text-gray-800 leading-relaxed">
                    Satu identiti perkhidmatan untuk pembaikan hartanah, susun atur laman dan suasana penginapan yang kemas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SIX SERVICE PREVIEWS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <span className="text-sm font-extrabold uppercase tracking-wider text-[#15803D]">
              Kepakaran Kerja
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 font-sans tracking-tight mt-1">
              Enam Servis Utama HME
            </h2>
            <p className="text-base sm:text-lg text-gray-600 mt-2 max-w-2xl">
              Penyelesaian kerja binaan dan pembaikan yang praktikal untuk kediaman dan premis anda.
            </p>
          </div>

          <button
            onClick={() => {
              onNavigate('servis');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 text-base font-bold text-[#15803D] hover:text-[#0E4424] hover:underline self-start md:self-end"
          >
            <span>Lihat semua penerangan servis</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl overflow-hidden border border-gray-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              {/* Service Visual */}
              <div className="relative h-56 overflow-hidden bg-gray-100">
                <img
                  src={service.image}
                  alt={`${service.title} untuk persekitaran kediaman Malaysia`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  width={600}
                  height={450}
                />
              </div>

              {/* Service Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-black text-gray-900 group-hover:text-[#15803D] transition-colors">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-gray-600 text-sm sm:text-[15px] leading-relaxed line-clamp-3">
                    {service.shortDesc}
                  </p>
                </div>

                <div className="pt-6 mt-4 border-t border-gray-100 flex items-center justify-between gap-3">
                  <a
                    href={getWhatsAppUrl(service.ctaMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-bold text-[#15803D] hover:text-[#0E4424] transition-colors"
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    <span>WhatsApp Servis Ini</span>
                  </a>

                  <button
                    onClick={() => {
                      onNavigate('servis');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="text-xs font-semibold text-gray-500 hover:text-gray-800"
                  >
                    Perincian →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PREVIEW CARDS: LANDSKAP & HOMESTAY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-2">
          <span className="text-xs font-extrabold uppercase tracking-wider text-[#15803D]">
            Cabang Servis & Penginapan
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 font-sans tracking-tight">
            Landskap & Homestay HME
          </h2>
          <p className="text-base sm:text-lg text-gray-600">
            Ketahui dua perkhidmatan khusus kami yang melengkapi identiti “Construction | Landscape | Homestay”.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Landskap Preview Card */}
          <div className="bg-white rounded-3xl overflow-hidden border border-gray-200/90 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col group">
            <div className="relative h-64 sm:h-72 overflow-hidden bg-gray-100">
              <img
                src="/images/landskap/landskap-utama.webp"
                alt="Landskap dan penjagaan kawasan kediaman Malaysia"
                className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-500"
                loading="lazy"
                width={800}
                height={500}
              />
              <div className="absolute top-3 left-3 bg-[#0E4424] text-white text-xs px-3 py-1 rounded-md font-bold flex items-center gap-1.5 shadow-xs">
                <Trees className="w-3.5 h-3.5 text-[#BEF264]" />
                <span>Landskap & Penjagaan Kawasan</span>
              </div>
            </div>

            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-4">
              <div>
                <h3 className="text-2xl font-black text-gray-900 font-sans group-hover:text-[#15803D] transition-colors">
                  Landskap & Penjagaan Kawasan
                </h3>
                <p className="mt-2 text-gray-600 text-base leading-relaxed">
                  Perancangan dan penjagaan laman hijau bagi kediaman dan premis komersial. Dari susunan taman, penanaman rumput, hingga penyelenggaraan berkala mengikut keperluan tapak.
                </p>
              </div>

              <div className="pt-2 flex items-center justify-between gap-3 border-t border-gray-100">
                <button
                  onClick={() => {
                    onNavigate('landskap');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#15803D] hover:bg-[#0E4424] text-white text-sm font-bold transition-all shadow-xs"
                >
                  <span>Terokai Servis Landskap</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href={getWhatsAppUrl('Salam HME, saya berminat untuk berbincang mengenai perkhidmatan Landskap & Penjagaan Kawasan.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs sm:text-sm font-bold text-gray-600 hover:text-[#15803D] flex items-center gap-1"
                >
                  <MessageCircle className="w-4 h-4 text-[#15803D] fill-current" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          {/* Homestay Preview Card */}
          <div className="bg-white rounded-3xl overflow-hidden border border-gray-200/90 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col group">
            <div className="relative h-64 sm:h-72 overflow-hidden bg-gray-100">
              <img
                src="/images/homestay/homestay-cameron-exterior.webp"
                alt="Konsep apartmen percutian di Cameron Highlands"
                className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-500"
                loading="lazy"
                width={800}
                height={500}
              />
              <div className="absolute top-3 left-3 bg-[#0E4424] text-white text-xs px-3 py-1 rounded-md font-bold flex items-center gap-1.5 shadow-xs">
                <Building2 className="w-3.5 h-3.5 text-[#BEF264]" />
                <span>Cameron Highlands, Pahang</span>
              </div>
            </div>

            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-4">
              <div>
                <h3 className="text-2xl font-black text-gray-900 font-sans group-hover:text-[#15803D] transition-colors">
                  Homestay Apartmen di Cameron Highlands
                </h3>
                <p className="mt-2 text-gray-600 text-base leading-relaxed">
                  Percutian nyaman dalam suasana bukit teh yang dingin dan menyegarkan. Sedia untuk semakan tarikh percutian keluarga atau perjumpaan santai anda secara terus di WhatsApp.
                </p>
              </div>

              <div className="pt-2 flex items-center justify-between gap-3 border-t border-gray-100">
                <button
                  onClick={() => {
                    onNavigate('homestay');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gray-900 hover:bg-[#15803D] text-white text-sm font-bold transition-all shadow-xs"
                >
                  <span>Lihat Maklumat Homestay</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href={getWhatsAppUrl('Salam HME, saya ingin menyemak ketersediaan Homestay Apartmen Cameron Highlands.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs sm:text-sm font-bold text-gray-600 hover:text-[#15803D] flex items-center gap-1"
                >
                  <MessageCircle className="w-4 h-4 text-[#15803D] fill-current" />
                  <span>Semak Tarikh</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SELECTED ORIGINAL PROJECT PHOTOS PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-200/80 shadow-md">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-[#0E4424] text-xs font-bold mb-2">
                <Camera className="w-3.5 h-3.5 text-[#15803D]" />
                <span>Gambar Asli Tapak Projek</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-gray-900 font-sans tracking-tight">
                Galeri Projek Sebenar HME
              </h2>
              <p className="text-base sm:text-lg text-gray-600 mt-1 max-w-2xl">
                Sorotan daripada {ORDERED_PORTFOLIO_ITEMS.length} foto kerja-kerja sebenar di tapak merangkumi bumbung, jalan tar, kimpalan, cat, dapur dan longkang.
              </p>
            </div>

            <button
              onClick={() => {
                onNavigate('portfolio');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gray-900 hover:bg-gray-800 text-white font-bold text-base transition-colors self-start md:self-end min-h-[48px]"
            >
              <span>Lihat Semua {ORDERED_PORTFOLIO_ITEMS.length} Foto</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Photo Grid Preview */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {previewPhotos.map((photo) => (
              <div
                key={photo.id}
                onClick={() => onOpenLightbox && onOpenLightbox(photo.code)}
                className="group relative bg-gray-100 rounded-2xl overflow-hidden border border-gray-200 cursor-pointer hover:shadow-xl transition-all duration-300"
              >
                <div className="relative aspect-4/3 overflow-hidden bg-gray-200">
                  <picture>
                    <source srcSet={photo.webpSrc} type="image/webp" />
                    <img
                      src={photo.imageSrc}
                      alt={photo.caption}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </picture>

                  {/* Status Tag */}
                  <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-md text-white text-xs px-2.5 py-1 rounded-md font-medium">
                    {photo.status}
                  </div>

                  {/* Category Tag */}
                  <div className="absolute top-3 left-3 bg-[#15803D] text-white text-xs px-2.5 py-1 rounded-md font-bold">
                    {photo.categoryLabel}
                  </div>
                </div>

                <div className="p-4 bg-white">
                  <p className="text-sm font-semibold text-gray-800 leading-snug group-hover:text-[#15803D] transition-colors">
                    {photo.caption}
                  </p>
                  <p className="text-xs text-gray-600 mt-1.5 flex items-center justify-between">
                    <span>{photo.code}</span>
                    <span className="text-[#15803D] font-bold">Buka Gambar →</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SIMPLE ENQUIRY PROCESS (3 STEPS) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-sm font-extrabold uppercase tracking-wider text-[#15803D]">
            Langkah Mudah
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 font-sans tracking-tight mt-1">
            Proses Ringkas Pertanyaan Projek
          </h2>
          <p className="text-base sm:text-lg text-gray-600 mt-2">
            Cara mudah untuk berhubung dengan pihak HME bagi sebarang kerja pembinaan atau pembaikan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {WORK_PROCESS_STEPS.map((s, idx) => (
            <div
              key={s.step}
              className="relative bg-white rounded-2xl p-8 border border-gray-200/80 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-3xl font-black text-[#15803D]/30 font-mono">
                    {s.step}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#15803D] flex items-center justify-center font-bold text-sm">
                    {idx + 1}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2.5 font-sans">
                  {s.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  {s.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-100 flex items-center text-xs font-semibold text-[#15803D]">
                <span>Langkah {s.step}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* INTERACTIVE ENQUIRY FORM SECTION */}
      <section id="borang-sebut-harga" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-28">
        <EnquiryForm />
      </section>

      {/* HELPFUL FAQ SECTION */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-[#0E4424] text-xs font-bold mb-2">
            <HelpCircle className="w-3.5 h-3.5 text-[#15803D]" />
            <span>Soalan Lazim</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 font-sans tracking-tight">
            Soalan Lazim Pelanggan
          </h2>
          <p className="text-base sm:text-lg text-gray-600 mt-2">
            Maklumat ringkas mengenai cara berurusan, skop perkhidmatan dan penyediaan sebut harga.
          </p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-gray-200/80 shadow-xs"
            >
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 font-sans flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-emerald-100 text-[#0E4424] text-xs font-extrabold flex items-center justify-center shrink-0 mt-0.5">
                  Q
                </span>
                <span>{faq.question}</span>
              </h3>
              <p className="text-gray-700 text-base leading-relaxed pl-9">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CLOSING WHATSAPP CTA BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-[#0E4424] via-[#15803D] to-[#0A2E17] text-white rounded-3xl p-8 sm:p-12 lg:p-16 shadow-2xl relative overflow-hidden text-center sm:text-left flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl space-y-4">
            <span className="inline-block px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-[#BEF264] text-xs font-extrabold tracking-wide uppercase">
              Talian Terus WhatsApp HME
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
              Ada Kerja Pembaikan atau Cadangan Projek?
            </h2>
            <p className="text-emerald-100 text-base sm:text-lg leading-relaxed">
              Hubungi kami terus di talian <strong className="text-white underline">{CONTACT_INFO.DISPLAY_PHONE}</strong>. Kongsikan gambar kerosakan atau lokasi projek anda untuk perbincangan awal yang mesra dan pantas.
            </p>
          </div>

          <div className="shrink-0 flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-lg font-bold text-[#0E4424] bg-white hover:bg-[#BEF264] active:scale-[0.98] transition-all shadow-lg min-h-[52px]"
            >
              <MessageCircle className="w-6 h-6 fill-current text-[#15803D]" />
              <span>WhatsApp: {CONTACT_INFO.DISPLAY_PHONE}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
