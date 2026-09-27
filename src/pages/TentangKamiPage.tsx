import React from 'react';
import { PageRoute } from '../types';
import { getWhatsAppUrl } from '../data/hmeData';
import { 
  MessageCircle, 
  CheckCircle,
  Info
} from 'lucide-react';

interface TentangKamiPageProps {
  onNavigate: (page: PageRoute) => void;
}

export const TentangKamiPage: React.FC<TentangKamiPageProps> = ({ onNavigate }) => {
  return (
    <div className="pt-36 sm:pt-40 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-20">
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

          <div className="lg:col-span-5">
            <div className="relative overflow-hidden rounded-3xl border border-emerald-100 bg-gradient-to-br from-white via-emerald-50/70 to-[#F8FAF9] p-6 sm:p-7 shadow-lg">
              <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-[#B0F016]/25 blur-3xl" />
              <div className="relative space-y-6">
                <div className="flex items-center gap-4 text-left">
                  <img
                    src="/images/branding/hme-mark-draft-2.png"
                    alt=""
                    aria-hidden="true"
                    className="h-16 w-16 shrink-0 object-contain"
                    width={96}
                    height={96}
                  />
                  <div className="min-w-0">
                    <div className="text-4xl sm:text-5xl font-black tracking-[0.08em] text-[#0F172A] leading-none">
                      HME
                    </div>
                    <div className="mt-1 text-base sm:text-lg font-black uppercase tracking-wide text-[#0F172A] leading-tight">
                      Hijau Megah Enterprise
                    </div>
                  </div>
                </div>

                <div className="inline-flex max-w-full rounded-xl bg-[#B0F016] px-3 py-2 text-[12px] sm:text-[13px] font-extrabold leading-tight text-[#0A2612] shadow-xs whitespace-nowrap">
                  Construction | Landscape | Homestay
                </div>

                <div className="rounded-2xl border border-emerald-100 bg-white/85 p-5 text-left shadow-xs">
                  <div className="text-xs font-black uppercase tracking-wider text-[#15803D]">
                    Fokus Utama Syarikat
                  </div>
                  <div className="mt-4 grid grid-cols-1 gap-3 text-sm font-semibold text-gray-700">
                    {[
                      'Kerja Atap & Bumbung',
                      'Fabrikasi Besi & Kimpalan',
                      'Pengecatan Bangunan',
                      'Penurapan Jalan Tar Premix',
                      'Pembaikan Dapur, Jubin & Sinki',
                      'Pemasangan Longkang Konkrit U-Drain'
                    ].map((item) => (
                      <div key={item} className="flex items-start gap-2.5">
                        <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-[#15803D]" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
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
