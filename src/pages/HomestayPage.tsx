import React, { useState } from 'react';
import { PageRoute } from '../types';
import { CONTACT_INFO, HOMESTAY_HIGHLIGHTS, getHomestayWhatsAppUrl } from '../data/hmeData';
import { 
  MessageCircle, 
  Calendar, 
  MapPin, 
  CloudSun,
  CheckCircle2
} from 'lucide-react';

interface HomestayPageProps {
  onNavigate: (page: PageRoute) => void;
}

export const HomestayPage: React.FC<HomestayPageProps> = ({ onNavigate }) => {
  const [name, setName] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState('2-4 Orang');
  const [notes, setNotes] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const url = getHomestayWhatsAppUrl({
      name,
      checkIn,
      checkOut,
      guests,
      notes
    });

    const link = document.createElement('a');
    link.href = url;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const conceptImages = [
    {
      src: '/images/homestay/homestay-cameron-exterior.webp',
      title: 'Bangunan Apartmen di Lereng Bukit Hijau',
      desc: 'Konsep bangunan kediaman percutian di pergunungan Cameron Highlands yang dikelilingi kehijauan dan kabus sejuk.',
      alt: 'Konsep apartmen percutian di Cameron Highlands Pahang'
    },
    {
      src: '/images/homestay/homestay-ruang-tamu-konsep.webp',
      title: 'Ruang Tamu Santai & Selesa',
      desc: 'Konsep ruang santai moden bertemakan percutian pergunungan untuk beristirahat bersama keluarga.',
      alt: 'Konsep ruang tamu apartmen percutian Cameron Highlands'
    },
    {
      src: '/images/homestay/homestay-bilik-konsep.webp',
      title: 'Bilik Tidur Kemas & Tenang',
      desc: 'Konsep ruang rehat yang nyaman dalam suasana malam tanah tinggi yang sejuk dan menyegarkan.',
      alt: 'Konsep bilik tidur apartmen percutian tanah tinggi'
    }
  ];

  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-24">
      {/* Page Title & Location Header */}
      <section className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 text-[#0E4424] text-sm font-bold border border-emerald-100">
          <MapPin className="w-4 h-4 text-[#15803D]" />
          <span>{HOMESTAY_HIGHLIGHTS.LOCATION}</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-black text-gray-900 tracking-tight font-sans">
          Homestay Apartmen di Cameron Highlands
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 leading-relaxed font-normal">
          Nikmati percutian tanah tinggi dengan penginapan apartmen dalam suasana pergunungan Pahang yang nyaman, sejuk dan menyegarkan.
        </p>
      </section>

      {/* Main Concept Showcase */}
      <section className="bg-white rounded-3xl overflow-hidden border border-gray-200/80 shadow-lg">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 relative h-72 sm:h-96 lg:h-[440px] overflow-hidden bg-gray-100">
            <img
              src="/images/homestay/homestay-cameron-exterior.webp"
              alt="Konsep bangunan apartmen Cameron Highlands berlatar bukit teh berkabus"
              className="w-full h-full object-cover"
              loading="eager"
              width={1280}
              height={720}
            />
          </div>

          <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-[#0E4424] text-xs font-bold">
              <CloudSun className="w-4 h-4 text-[#15803D]" />
              <span>Suasana Tanah Tinggi</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 font-sans tracking-tight">
              Percutian Nyaman di Cameron Highlands
            </h2>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              Lokasi percutian popular Cameron Highlands menawarkan suhu sejuk sepanjang tahun, kehijauan ladang teh dan udara pergunungan yang segar. Sesuai bagi mereka yang ingin berehat daripada kesibukan bandar.
            </p>

            <div className="space-y-2.5 pt-2 text-sm text-gray-700">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#15803D]" />
                <span>Lokasi tumpuan di Cameron Highlands, Pahang</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#15803D]" />
                <span>Penginapan apartmen sesuai untuk keluarga atau percutian berkumpulan</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#15803D]" />
                <span>Urusan pertanyaan terus melalui WhatsApp rasmi HME</span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={getHomestayWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl text-base font-bold text-white bg-[#15803D] hover:bg-[#0E4424] active:scale-[0.98] transition-all shadow-md min-h-[48px]"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Minta Foto Unit Sebenar di WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Concept Gallery Cards (With Explicit Labels on Every Image) */}
      <section className="space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#15803D]">
              Visual Konsep
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 font-sans tracking-tight">
              Galeri Konsep Homestay
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {conceptImages.map((img, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl overflow-hidden border border-gray-200/90 shadow-sm flex flex-col group"
            >
              <div className="relative aspect-4/3 overflow-hidden bg-gray-100">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                  loading="lazy"
                  width={800}
                  height={600}
                />
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between space-y-2">
                <div>
                  <h3 className="font-bold text-gray-900 text-base">
                    {img.title}
                  </h3>
                  <p className="text-sm text-gray-600 mt-1 leading-relaxed">
                    {img.desc}
                  </p>
                </div>

                <div className="pt-2 text-xs font-medium text-gray-500 italic">
                  Hubungi kami di WhatsApp untuk foto unit sebenar.
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Booking / Availability Enquiry Form */}
      <section id="borang-homestay" className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-200/90 shadow-md max-w-4xl mx-auto scroll-mt-28">
        <div className="mb-6 space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-[#0E4424] text-xs font-bold">
            <Calendar className="w-3.5 h-3.5 text-[#15803D]" />
            <span>Borang Semakan Tarikh</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight font-sans">
            Semak Ketersediaan Tarikh Homestay
          </h3>
          <p className="text-gray-600 text-base sm:text-lg">
            Sila isi tarikh cadangan dan bilangan tetamu. Butiran ini akan dihantar terus ke WhatsApp nombor rasmi kami ({CONTACT_INFO.DISPLAY_PHONE}) untuk semakan jadual unit.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="homestay-name" className="block text-base font-bold text-gray-800 mb-1.5">
              Nama Anda <span className="text-red-500">*</span>
            </label>
            <input
              id="homestay-name"
              type="text"
              required
              placeholder="cth: Puan Noraini / Encik Hafiz"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#15803D] focus:ring-2 focus:ring-emerald-200 text-base outline-hidden transition-all bg-gray-50/50 min-h-[48px]"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="homestay-checkin" className="block text-base font-bold text-gray-800 mb-1.5">
                Tarikh Daftar Masuk (Check-in) <span className="text-red-500">*</span>
              </label>
              <input
                id="homestay-checkin"
                type="date"
                required
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#15803D] focus:ring-2 focus:ring-emerald-200 text-base outline-hidden transition-all bg-white min-h-[48px]"
              />
            </div>

            <div>
              <label htmlFor="homestay-checkout" className="block text-base font-bold text-gray-800 mb-1.5">
                Tarikh Daftar Keluar (Check-out) <span className="text-red-500">*</span>
              </label>
              <input
                id="homestay-checkout"
                type="date"
                required
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#15803D] focus:ring-2 focus:ring-emerald-200 text-base outline-hidden transition-all bg-white min-h-[48px]"
              />
            </div>
          </div>

          <div>
            <label htmlFor="homestay-guests" className="block text-base font-bold text-gray-800 mb-1.5">
              Bilangan Tetamu (Anggaran)
            </label>
            <select
              id="homestay-guests"
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#15803D] focus:ring-2 focus:ring-emerald-200 text-base outline-hidden transition-all bg-white min-h-[48px]"
            >
              <option value="1 - 2 Orang">1 - 2 Orang</option>
              <option value="3 - 4 Orang">3 - 4 Orang</option>
              <option value="5 - 6 Orang">5 - 6 Orang</option>
              <option value="7 - 8 Orang">7 - 8 Orang</option>
              <option value="Lebih 8 Orang (Kumpulan Besar)">Lebih 8 Orang (Kumpulan Besar)</option>
            </select>
          </div>

          <div>
            <label htmlFor="homestay-notes" className="block text-base font-bold text-gray-800 mb-1.5">
              Pertanyaan / Permintaan Khas
            </label>
            <textarea
              id="homestay-notes"
              rows={3}
              placeholder="cth: Mohon kongsikan foto unit sebenar, lokasi berdekatan kemudahan, dan harga bagi hujung minggu tersebut."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#15803D] focus:ring-2 focus:ring-emerald-200 text-base outline-hidden transition-all bg-gray-50/50 resize-none"
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl text-lg font-bold text-white bg-[#15803D] hover:bg-[#0E4424] active:scale-[0.98] transition-all shadow-md min-h-[52px] cursor-pointer"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>Semak Ketersediaan di WhatsApp</span>
            </button>
          </div>

          <p className="text-center text-xs text-gray-500 pt-1">
            * Butiran borang akan dimuatkan ke aplikasi WhatsApp anda untuk dihantar terus ke pihak HME tanpa sebarang bayaran atas talian yang belum disahkan.
          </p>
        </form>
      </section>
    </div>
  );
};
