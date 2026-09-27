import React from 'react';
import { PageRoute } from '../types';
import { HmeLogo } from './HmeLogo';
import { CONTACT_INFO, SERVICES, getWhatsAppUrl } from '../data/hmeData';
import { MessageCircle, Phone, Clock, ShieldCheck, ArrowRight } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageRoute) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#0A2013] text-gray-300 pt-16 pb-12 border-t border-emerald-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-12 border-b border-white/10">
          {/* Column 1: Brand & Logo */}
          <div className="lg:col-span-1 space-y-4">
            <HmeLogo variant="white" size="md" />
            <p className="text-gray-300 text-[15px] leading-relaxed pt-2">
              Kontraktor tempatan berpengalaman yang mengkhusus dalam kerja pembinaan, pembaikan, dan penyelenggaraan hartanah.
            </p>
            <div className="pt-2 text-xs text-emerald-400 font-semibold uppercase tracking-wider flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Penyelenggaraan & Binaan Praktikal
            </div>
          </div>

          {/* Column 2: Pautan Laman */}
          <div>
            <h4 className="text-white text-lg font-bold mb-4 font-sans tracking-tight">
              Pautan Laman
            </h4>
            <ul className="space-y-3">
              {[
                { id: 'utama' as PageRoute, label: 'Laman Utama' },
                { id: 'tentang' as PageRoute, label: 'Tentang Kami' },
                { id: 'servis' as PageRoute, label: 'Perkhidmatan (Servis)' },
                { id: 'landskap' as PageRoute, label: 'Landskap & Penjagaan' },
                { id: 'portfolio' as PageRoute, label: 'Galeri Portfolio Projek' },
                { id: 'homestay' as PageRoute, label: 'Homestay Cameron Highlands' },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => {
                      onNavigate(link.id);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="text-gray-300 hover:text-white hover:translate-x-1 transition-all text-base flex items-center gap-1.5 focus:outline-hidden focus-visible:underline"
                  >
                    <ArrowRight className="w-3.5 h-3.5 text-emerald-500" />
                    <span>{link.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Skop Perkhidmatan */}
          <div>
            <h4 className="text-white text-lg font-bold mb-4 font-sans tracking-tight">
              Skop Servis Utama
            </h4>
            <ul className="space-y-2.5 text-[15px] text-gray-300">
              {SERVICES.map((s) => (
                <li key={s.id} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#BEF264] mt-2 shrink-0"></span>
                  <button
                    onClick={() => {
                      onNavigate('servis');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="text-left hover:text-white transition-colors"
                  >
                    {s.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Hubungi Kami */}
          <div>
            <h4 className="text-white text-lg font-bold mb-4 font-sans tracking-tight">
              Hubungi Terus HME
            </h4>
            <p className="text-sm text-gray-300 mb-4">
              Sebarang pertanyaan atau cadangan projek, sila WhatsApp atau hubungi kami:
            </p>

            <div className="space-y-3">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-4 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-base transition-colors w-full shadow-sm"
              >
                <MessageCircle className="w-5 h-5 fill-current shrink-0" />
                <span>{CONTACT_INFO.DISPLAY_PHONE}</span>
              </a>

              <a
                href={CONTACT_INFO.TEL_URL}
                className="inline-flex items-center gap-2.5 text-gray-300 hover:text-white text-sm font-medium py-1 transition-colors"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>Talian: {CONTACT_INFO.DISPLAY_PHONE}</span>
              </a>

              <div className="flex items-center gap-2 text-xs text-gray-400 pt-1">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{CONTACT_INFO.OPERATION_HOURS}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
          <p>
            © {new Date().getFullYear()} {CONTACT_INFO.COMPANY_NAME}. Hak cipta terpelihara.
          </p>
          <p className="text-xs text-gray-400">
            Fokus: Pembinaan, Pembaikan & Penyelenggaraan Hartanah | {CONTACT_INFO.TAGLINE}
          </p>
        </div>
      </div>
    </footer>
  );
};
