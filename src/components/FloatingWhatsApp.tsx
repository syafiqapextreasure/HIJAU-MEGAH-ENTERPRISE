import React, { useState } from 'react';
import { CONTACT_INFO, getWhatsAppUrl } from '../data/hmeData';
import { MessageCircle, X } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <aside aria-label="Bantuan WhatsApp" className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Tooltip bubble on first view / hover */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-xl shadow-lg border border-emerald-100 text-sm text-gray-800 animate-in fade-in slide-in-from-right-3">
          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></div>
          <span className="font-semibold text-gray-900">Perlukan sebut harga pantas?</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-gray-400 hover:text-gray-600 p-0.5 rounded-full"
            aria-label="Tutup petunjuk"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Button */}
      <a
        href={getWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        className="relative group flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full shadow-lg hover:shadow-xl active:scale-95 transition-all duration-300 focus:outline-hidden focus-visible:ring-4 focus-visible:ring-emerald-300"
        aria-label="Buka WhatsApp untuk berbincang dengan HME di +60 19-599 5868"
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25 group-hover:opacity-40"></span>
        <MessageCircle className="w-7 h-7 fill-current relative z-10" />
      </a>
    </aside>
  );
};
