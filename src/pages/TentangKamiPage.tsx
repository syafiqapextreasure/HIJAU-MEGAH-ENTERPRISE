import React from 'react';
import { PageRoute } from '../types';
import { CONTACT_INFO, getWhatsAppUrl } from '../data/hmeData';
import { HmeLogo } from '../components/HmeLogo';
import { 
  Hammer, 
  Wrench, 
  Paintbrush, 
  Truck, 
  Droplet, 
  Layers, 
  MessageCircle, 
  CheckCircle,
  HelpCircle,
  Info
} from 'lucide-react';

interface TentangKamiPageProps {
  onNavigate: (page: PageRoute) => void;
}

export const TentangKamiPage: React.FC<TentangKamiPageProps> = ({ onNavigate }) => {
  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-20">
      {/* Header Banner */}
      <section className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 text-[#0E4424] text-sm font-bold border border-emerald-100">
          <Info className="w-4 h-4 text-[#15803D]" />
          <span>Mengenai Syarikat Kami</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-black text-gray-900 tracking-tight font-sans">
          Tentang HIJAU MEGAH ENTERPRISE
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 leading-relaxed font-normal">
          Perkhidmatan kontraktor pembinaan, pembaikan dan penyelenggaraan hartanah berfokuskan penyelesaian praktikal di tapak.
        </p>
      </section>

      {/* Main Narrative Card */}
      <section className="bg-white rounded-3xl p-8 sm:p-12 lg:p-16 border border-gray-200/80 shadow-md">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#15803D]">
                Identiti & Pendekatan Kerja
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 font-sans tracking-tight">
                Penyelesaian Praktikal untuk Kediaman & Hartanah
              </h2>
            </div>

            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              <strong>Hijau Megah Enterprise (HME)</strong> mengkhusus dalam kerja-kerja binaan dan penyelenggaraan fizikal. Kami memfokuskan usaha pada skop kerja sebenar yang lazim dihadapi oleh pemilik kediaman dan premis tempatan.
            </p>

            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              Setiap tugasan — sama ada pembaikan kebocoran bumbung lama, penukaran kekuda bumbung, kimpalan struktur besi, mengecat semula luaran rumah, menurap jalan tar premix atau membaiki paip dan jubin kawasan sinki dapur — diuruskan secara terus dengan mengutamakan ketelitian dan bahan yang sesuai.
            </p>

            <div className="p-5 rounded-2xl bg-emerald-50/60 border border-emerald-100 space-y-2">
              <h4 className="font-bold text-[#0E4424] text-base flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-[#15803D]" />
                <span>Prinsip Urusan HME</span>
              </h4>
              <p className="text-sm text-gray-700 leading-relaxed">
                Kami mengutamakan pemeriksaan tapak yang jelas, perbincangan telus berkenaan skop kerja, dan penawaran sebut harga yang berpatutan mengikut saiz dan kesukaran projek tanpa sebarang komitmen yang tidak realistik.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col items-center justify-center p-8 bg-gradient-to-b from-[#F8FAF9] to-emerald-50/50 rounded-2xl border border-gray-100 text-center space-y-6">
            <HmeLogo variant="color" size="lg" />
            <div className="border-t border-gray-200/80 w-full pt-4 space-y-2 text-left">
              <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                Fokus Utama Syarikat:
              </div>
              <ul className="text-sm text-gray-700 space-y-1.5 font-medium">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#15803D]"></span>
                  <span>Kerja Atap & Bumbung (Roofing)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#15803D]"></span>
                  <span>Fabrikasi Besi & Kimpalan</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#15803D]"></span>
                  <span>Pengecatan Bangunan Luar & Dalam</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#15803D]"></span>
                  <span>Penurapan Jalan Tar Premix</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#15803D]"></span>
                  <span>Pembaikan Dapur, Jubin & Sinki</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#15803D]"></span>
                  <span>Pemasangan Longkang Konkrit U-Drain</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ADDITIONAL SCOPE: LANDSCAPE & HOMESTAY (Transparent & Grounded) */}
      <section className="bg-gradient-to-br from-emerald-900 to-[#0A2013] text-white rounded-3xl p-8 sm:p-12 lg:p-14 shadow-xl">
        <div className="max-w-3xl space-y-4">
          <div className="inline-block px-3 py-1 rounded-full bg-white/20 text-[#BEF264] text-xs font-bold uppercase tracking-wider">
            Tagline Jenama
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black font-sans tracking-tight">
            Construction | Landscape | Homestay
          </h2>
          <p className="text-emerald-100 text-base sm:text-lg leading-relaxed">
            Sebagai sebahagian daripada identiti rasmi <strong>Hijau Megah Enterprise</strong>, logo kami menyertakan bidang <strong className="text-white">Construction, Landscape dan Homestay</strong>.
          </p>
          <p className="text-emerald-100 text-base sm:text-lg leading-relaxed">
            Bagi pertanyaan mengenai kerja-kerja landskap asas persekitaran hartanah atau pertanyaan perkhidmatan homestay, anda dialu-alukan untuk menghubungi kami secara terus melalui WhatsApp untuk berbincang mengenai ketersediaan dan kesesuaian mengikut lokasi anda.
          </p>

          <div className="pt-4">
            <a
              href={getWhatsAppUrl('Salam HME, saya ingin membuat pertanyaan mengenai topik Landscape / Homestay.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-white text-[#0E4424] font-bold text-base hover:bg-[#BEF264] transition-colors"
            >
              <MessageCircle className="w-5 h-5 fill-current text-[#15803D]" />
              <span>Pertanyaan Khusus via WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION BUTTONS */}
      <section className="text-center space-y-6 pt-4">
        <h3 className="text-2xl font-bold text-gray-900">
          Ingin Melihat Hasil Kerja Sebenar HME?
        </h3>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => {
              onNavigate('portfolio');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-lg font-bold text-white bg-[#15803D] hover:bg-[#0E4424] transition-all min-h-[48px] shadow-md"
          >
            <span>Semak Galeri Portfolio (19 Foto)</span>
          </button>

          <button
            onClick={() => {
              onNavigate('servis');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-lg font-bold text-gray-800 bg-white hover:bg-gray-50 border border-gray-200 transition-all min-h-[48px]"
          >
            <span>Lihat Senarai Servis Lengkap</span>
          </button>
        </div>
      </section>
    </div>
  );
};
