import React, { useState } from 'react';
import { CONTACT_INFO } from '../data/hmeData';
import { Send, MessageSquare, MapPin, User, Wrench, FileText, ExternalLink } from 'lucide-react';

interface EnquiryFormProps {
  initialService?: string;
  className?: string;
}

export const EnquiryForm: React.FC<EnquiryFormProps> = ({
  initialService = 'Bumbung & Atap',
  className = '',
}) => {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [service, setService] = useState(initialService);
  const [details, setDetails] = useState('');

  const serviceOptions = [
    'Bumbung & Atap',
    'Besi & Kimpalan',
    'Mengecat Bangunan',
    'Jalan & Tar',
    'Dapur, Jubin & Sinki',
    'Longkang & Saliran',
    'Lain-lain / Pertanyaan Umum',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Construct the formatted WhatsApp message
    const message = [
      `Salam HME (Hijau Megah Enterprise), saya ingin berbincang mengenai sebut harga projek:`,
      ``,
      `*Nama:* ${name.trim() || 'Pelanggan'}`,
      `*Lokasi Projek:* ${location.trim() || 'Akan dimaklumkan'}`,
      `*Jenis Servis:* ${service}`,
      `*Penerangan Kerja / Keperluan:* ${details.trim() || 'Mohon maklumat lanjut & sebut harga.'}`,
      ``,
      `Terima kasih.`
    ].join('\n');

    const whatsappUrl = `https://wa.me/${CONTACT_INFO.WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    
    // Open WhatsApp safely without window.open
    const link = document.createElement('a');
    link.href = whatsappUrl;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className={`bg-white rounded-2xl p-6 sm:p-8 md:p-10 shadow-lg border border-gray-100 ${className}`}>
      <div className="mb-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 text-[#0E4424] text-sm font-bold mb-3 border border-emerald-100">
          <MessageSquare className="w-4 h-4 text-[#15803D]" />
          <span>Borang Pertanyaan & Sebut Harga WhatsApp</span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight font-sans">
          Bincang Projek Anda Terus Bersama HME
        </h3>
        <p className="mt-2 text-gray-600 text-base sm:text-lg leading-relaxed">
          Isi butiran ringkas di bawah. Selepas menekan butang hantar, aplikasi WhatsApp anda akan dibuka secara automatik dengan mesej yang siap diisi untuk dihantar ke <span className="font-semibold text-[#0E4424]">{CONTACT_INFO.DISPLAY_PHONE}</span>.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Nama Field */}
        <div>
          <label htmlFor="enquiry-name" className="block text-base font-bold text-gray-800 mb-1.5 flex items-center gap-1.5">
            <User className="w-4 h-4 text-[#15803D]" />
            <span>Nama Anda <span className="text-red-500">*</span></span>
          </label>
          <input
            id="enquiry-name"
            type="text"
            required
            placeholder="cth: Encik Ahmad / Puan Siti"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#15803D] focus:ring-2 focus:ring-emerald-200 text-base outline-hidden transition-all bg-gray-50/50 hover:bg-white min-h-[48px]"
          />
        </div>

        {/* Lokasi Field */}
        <div>
          <label htmlFor="enquiry-location" className="block text-base font-bold text-gray-800 mb-1.5 flex items-center gap-1.5">
            <MapPin className="w-4 h-4 text-[#15803D]" />
            <span>Lokasi Projek <span className="text-red-500">*</span></span>
          </label>
          <input
            id="enquiry-location"
            type="text"
            required
            placeholder="cth: Ipoh, Manjung, Taiping, Kuala Kangsar, dll."
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#15803D] focus:ring-2 focus:ring-emerald-200 text-base outline-hidden transition-all bg-gray-50/50 hover:bg-white min-h-[48px]"
          />
        </div>

        {/* Jenis Servis Field */}
        <div>
          <label htmlFor="enquiry-service" className="block text-base font-bold text-gray-800 mb-1.5 flex items-center gap-1.5">
            <Wrench className="w-4 h-4 text-[#15803D]" />
            <span>Jenis Servis <span className="text-red-500">*</span></span>
          </label>
          <select
            id="enquiry-service"
            value={service}
            onChange={(e) => setService(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#15803D] focus:ring-2 focus:ring-emerald-200 text-base outline-hidden transition-all bg-white min-h-[48px]"
          >
            {serviceOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>

        {/* Penerangan Kerja */}
        <div>
          <label htmlFor="enquiry-details" className="block text-base font-bold text-gray-800 mb-1.5 flex items-center gap-1.5">
            <FileText className="w-4 h-4 text-[#15803D]" />
            <span>Penerangan Kerja / Keperluan</span>
          </label>
          <textarea
            id="enquiry-details"
            rows={3}
            placeholder="Nyatakan secara ringkas kerosakan atau keperluan anda (cth: bumbung belakang bocor semasa hujan lebat, tapak sinki jubin tercabut, jalan depan rumah mahu diturap tar premix)."
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#15803D] focus:ring-2 focus:ring-emerald-200 text-base outline-hidden transition-all bg-gray-50/50 hover:bg-white resize-none"
          />
        </div>

        {/* Submit button */}
        <div className="pt-2">
          <button
            type="submit"
            className="w-full inline-flex items-center justify-center gap-3 px-6 py-4 rounded-xl text-lg font-bold text-white bg-[#15803D] hover:bg-[#0E4424] active:scale-[0.99] transition-all duration-200 shadow-md hover:shadow-lg min-h-[52px] focus:outline-hidden focus-visible:ring-4 focus-visible:ring-emerald-300 cursor-pointer"
          >
            <Send className="w-5 h-5 fill-current" />
            <span>Hantar Butiran ke WhatsApp Rasmi HME</span>
            <ExternalLink className="w-4 h-4 ml-1 opacity-80" />
          </button>
        </div>

        {/* Informative transparency notice - no fake 'sent' status */}
        <p className="text-center text-xs sm:text-sm text-gray-500 pt-2 leading-relaxed">
          * Butiran yang anda isi akan dimuatkan terus ke perbualan WhatsApp anda bersama nombor rasmi kami (+60 19-599 5868) untuk anda semak dan hantar sendiri di dalam WhatsApp.
        </p>
      </form>
    </div>
  );
};
