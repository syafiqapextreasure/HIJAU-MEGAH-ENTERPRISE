import React, { useState } from 'react';
import { PageRoute } from '../types';
import { CONTACT_INFO, LANDSCAPE_SERVICES, getLandskapWhatsAppUrl } from '../data/hmeData';
import { 
  Trees, 
  MessageCircle, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Clock, 
  MapPin, 
  Send,
  HelpCircle,
  Flower2,
  Scissors,
  Shovel
} from 'lucide-react';

interface LandskapPageProps {
  onNavigate: (page: PageRoute) => void;
}

export const LandskapPage: React.FC<LandskapPageProps> = ({ onNavigate }) => {
  const [formName, setFormName] = useState('');
  const [formLocation, setFormLocation] = useState('');
  const [formScope, setFormScope] = useState('Penyusunan Taman Kediaman');
  const [formNotes, setFormNotes] = useState('');

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const details = [
      `*Nama:* ${formName.trim() || 'Pelanggan'}`,
      `*Lokasi Tapak:* ${formLocation.trim() || 'Akan dimaklumkan'}`,
      `*Skop Minat:* ${formScope}`,
      formNotes.trim() ? `*Butiran Ruang:* ${formNotes.trim()}` : null,
      ``,
      `Mohon perbincangan lanjut & anggaran sebut harga. Terima kasih.`
    ].filter(Boolean).join('\n');

    const url = getLandskapWhatsAppUrl(details);
    const link = document.createElement('a');
    link.href = url;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const landscapePhotos = [
    {
      src: '/images/landskap/landskap-utama.webp',
      title: 'Taman Kediaman Bersih & Segar',
      caption: 'Penataan laman hijau tropika di samping rumah kediaman dengan rumput rapi dan tanaman berpagar kemas.',
      badge: 'Kediaman'
    },
    {
      src: '/images/landskap/landskap-penjagaan.webp',
      title: 'Kerja Penjagaan & Pemangkasan',
      caption: 'Penyelenggaraan pokok renek dan rumput oleh tenaga kerja dengan kelengkapan kerja yang sesuai.',
      badge: 'Penjagaan Tapak'
    },
    {
      src: '/images/landskap/landskap-taman.webp',
      title: 'Laluan Laman & Pokok Palma',
      caption: 'Susunan pokok hiasan tropika, palma renek, bunga ceria dan laluan pejalan kaki ringkas.',
      badge: 'Susun Atur'
    }
  ];

  return (
    <div className="pt-36 sm:pt-40 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-24">
      {/* Page Header */}
      <section className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 text-[#0E4424] text-sm font-bold border border-emerald-100">
          <Trees className="w-4 h-4 text-[#15803D]" />
          <span>Perkhidmatan Luaran Hartanah</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-black text-gray-900 tracking-tight font-sans">
          Landskap & Penjagaan Kawasan
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 leading-relaxed font-normal">
          Perkhidmatan pengurusan dan penyelenggaraan laman luar bagi kediaman dan premis komersial. Skop kerja disesuaikan mengikut saiz kawasan dan keperluan khusus tapak anda.
        </p>
      </section>

      {/* Hero Showcase Card */}
      <section className="bg-white rounded-3xl overflow-hidden border border-gray-200/80 shadow-lg">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 relative h-72 sm:h-96 lg:h-[440px] overflow-hidden bg-gray-100">
            <img
              src="/images/landskap/landskap-utama.webp"
              alt="Taman kediaman tropika yang dijaga rapi di sisi rumah kediaman Malaysia"
              className="w-full h-full object-cover"
              loading="eager"
              width={1280}
              height={720}
            />
          </div>

          <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 space-y-5">
            <span className="text-xs font-extrabold uppercase tracking-wider text-[#15803D]">
              Suasana Hijau & Selesa
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 font-sans tracking-tight">
              Mewujudkan Ruang Laman Yang Teratur & Bernilai
            </h2>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              Kawasan luar rumah atau premis perniagaan yang bersih dan teratur bukan sahaja menyejukkan pandangan, malah mencerminkan keperibadian pemilik. HME sedia membantu anda merancang dan menjaga persekitaran laman dengan teliti.
            </p>
            <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-100 text-sm text-gray-700 leading-relaxed">
              <strong className="text-[#0E4424] block mb-1">Perbincangan Mengikut Tapak:</strong>
              Setiap tapak mempunyai jenis tanah, saiz dan pencahayaan yang berbeza. Kami tidak mengenakan pakej kaku — skop kerja akan dibincangkan secara terbuka mengikut keperluan sebenar anda.
            </div>

            <div className="pt-2">
              <a
                href={getLandskapWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl text-base font-bold text-white bg-[#15803D] hover:bg-[#0E4424] active:scale-[0.98] transition-all shadow-md min-h-[48px]"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Tanya Servis Landskap</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Breakdown */}
      <section className="space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-[#15803D]">
            Skop Pilihan
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 font-sans tracking-tight">
            Perkhidmatan Landskap HME
          </h2>
          <p className="text-base text-gray-600">
            Pilihan skop kerja bagi kawasan laman rumah mahupun kawasan lapang komersial.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {LANDSCAPE_SERVICES.map((srv, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200/90 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 text-[#15803D] flex items-center justify-center font-bold">
                  {idx === 0 && <Flower2 className="w-6 h-6" />}
                  {idx === 1 && <Shovel className="w-6 h-6" />}
                  {idx === 2 && <Scissors className="w-6 h-6" />}
                  {idx === 3 && <Trees className="w-6 h-6" />}
                </div>

                <h3 className="text-xl font-bold text-gray-900 font-sans">
                  {srv.title}
                </h3>
                <p className="text-base text-gray-600 leading-relaxed">
                  {srv.desc}
                </p>

                <ul className="space-y-2 pt-2 border-t border-gray-100">
                  {srv.points.map((pt, pIdx) => (
                    <li key={pIdx} className="flex items-center gap-2 text-sm text-gray-700">
                      <CheckCircle2 className="w-4 h-4 text-[#15803D] shrink-0" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-100">
                <a
                  href={getLandskapWhatsAppUrl(`Salam HME, saya berminat untuk berbincang mengenai: ${srv.title}`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-[#15803D] hover:text-[#0E4424] hover:underline"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Bincang Skop {srv.title}</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Visual Image Gallery */}
      <section className="space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#15803D]">
              Galeri Landskap
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 font-sans tracking-tight">
              Inspirasi Suasana Laman Tropika
            </h2>
          </div>
          <span className="text-xs text-gray-500 font-medium">
            *Visual konsep landskap HME
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {landscapePhotos.map((photo, pIdx) => (
            <div
              key={pIdx}
              className="bg-white rounded-2xl overflow-hidden border border-gray-200/90 shadow-sm flex flex-col group"
            >
              <div className="relative aspect-4/3 overflow-hidden bg-gray-100">
                <img
                  src={photo.src}
                  alt={photo.title}
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                  loading="lazy"
                  width={800}
                  height={600}
                />
                <div className="absolute top-3 left-3 bg-[#0E4424] text-white text-xs px-2.5 py-0.5 rounded-md font-bold">
                  {photo.badge}
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between space-y-2">
                <div>
                  <h3 className="font-bold text-gray-900 text-base">
                    {photo.title}
                  </h3>
                  <p className="text-sm text-gray-600 mt-1 leading-relaxed">
                    {photo.caption}
                  </p>
                </div>

              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Simple Landscape Enquiry Process */}
      <section className="bg-gradient-to-br from-emerald-50/70 to-white rounded-3xl p-8 sm:p-12 border border-emerald-100">
        <div className="max-w-3xl space-y-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#15803D]">
              Cara Berurusan
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 font-sans tracking-tight mt-1">
              3 Langkah Mudah Pertanyaan Servis Landskap
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="space-y-2">
              <div className="w-8 h-8 rounded-lg bg-[#15803D] text-white font-bold text-sm flex items-center justify-center">
                1
              </div>
              <h4 className="font-bold text-gray-900 text-base">Kongsi Foto Laman</h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                Hantar foto keadaan terkini laman atau kawasan luar anda melalui WhatsApp.
              </p>
            </div>

            <div className="space-y-2">
              <div className="w-8 h-8 rounded-lg bg-[#15803D] text-white font-bold text-sm flex items-center justify-center">
                2
              </div>
              <h4 className="font-bold text-gray-900 text-base">Bincang Skop & Bajet</h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                Kami mencadangkan kerja yang sesuai (rumput, pokok, pembersihan atau susun atur).
              </p>
            </div>

            <div className="space-y-2">
              <div className="w-8 h-8 rounded-lg bg-[#15803D] text-white font-bold text-sm flex items-center justify-center">
                3
              </div>
              <h4 className="font-bold text-gray-900 text-base">Pelaksanaan di Tapak</h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                Kerja dilaksanakan mengikut persetujuan dengan menitikberatkan kekemasan laman.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Dedicated Landscape Enquiry Form */}
      <section className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-200/90 shadow-md max-w-4xl mx-auto">
        <div className="mb-6 space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-[#0E4424] text-xs font-bold">
            <MessageCircle className="w-3.5 h-3.5 text-[#15803D]" />
            <span>Borang WhatsApp Landskap</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight font-sans">
            Bincang Keperluan Landskap Anda
          </h3>
          <p className="text-gray-600 text-base sm:text-lg">
            Isi butiran di bawah untuk membuka WhatsApp terus kepada nombor rasmi kami ({CONTACT_INFO.DISPLAY_PHONE}).
          </p>
        </div>

        <form onSubmit={handleFormSubmit} className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="landskap-name" className="block text-base font-bold text-gray-800 mb-1.5">
                Nama Anda <span className="text-red-500">*</span>
              </label>
              <input
                id="landskap-name"
                type="text"
                required
                placeholder="cth: Encik Kamaruddin"
                value={formName}
                onChange={(e) => setFormName(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#15803D] focus:ring-2 focus:ring-emerald-200 text-base outline-hidden transition-all bg-gray-50/50 min-h-[48px]"
              />
            </div>

            <div>
              <label htmlFor="landskap-location" className="block text-base font-bold text-gray-800 mb-1.5">
                Lokasi Tapak <span className="text-red-500">*</span>
              </label>
              <input
                id="landskap-location"
                type="text"
                required
                placeholder="cth: Ipoh, Manjung, Taiping, dll."
                value={formLocation}
                onChange={(e) => setFormLocation(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#15803D] focus:ring-2 focus:ring-emerald-200 text-base outline-hidden transition-all bg-gray-50/50 min-h-[48px]"
              />
            </div>
          </div>

          <div>
            <label htmlFor="landskap-scope" className="block text-base font-bold text-gray-800 mb-1.5">
              Skop Minat
            </label>
            <select
              id="landskap-scope"
              value={formScope}
              onChange={(e) => setFormScope(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#15803D] focus:ring-2 focus:ring-emerald-200 text-base outline-hidden transition-all bg-white min-h-[48px]"
            >
              <option value="Penyusunan & Rekaan Taman Kediaman">Penyusunan & Rekaan Taman Kediaman</option>
              <option value="Penanaman Rumput & Pokok Hiasan">Penanaman Rumput & Pokok Hiasan</option>
              <option value="Pemotongan Rumput & Penjagaan Berkala">Pemotongan Rumput & Penjagaan Berkala</option>
              <option value="Pembersihan & Selenggara Kawasan Komersial">Pembersihan & Selenggara Kawasan Komersial</option>
              <option value="Lain-lain Servis Landskap">Lain-lain Servis Landskap</option>
            </select>
          </div>

          <div>
            <label htmlFor="landskap-notes" className="block text-base font-bold text-gray-800 mb-1.5">
              Butiran Ruang / Anggaran Keluasan
            </label>
            <textarea
              id="landskap-notes"
              rows={3}
              placeholder="cth: Laman depan rumah teres mahu ditanam rumput karpet dan pokok palma renek."
              value={formNotes}
              onChange={(e) => setFormNotes(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#15803D] focus:ring-2 focus:ring-emerald-200 text-base outline-hidden transition-all bg-gray-50/50 resize-none"
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl text-lg font-bold text-white bg-[#15803D] hover:bg-[#0E4424] active:scale-[0.98] transition-all shadow-md min-h-[52px] cursor-pointer"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>Hantar ke WhatsApp Rasmi HME</span>
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};
