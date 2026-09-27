import React, { useState } from 'react';
import { PageRoute } from '../types';
import { SERVICES, getWhatsAppUrl } from '../data/hmeData';
import { EnquiryForm } from '../components/EnquiryForm';
import { 
  MessageCircle, 
  CheckCircle2,
  Wrench
} from 'lucide-react';

interface ServisPageProps {
  onNavigate: (page: PageRoute) => void;
}

export const ServisPage: React.FC<ServisPageProps> = ({ onNavigate }) => {
  const [selectedServiceForForm, setSelectedServiceForForm] = useState<string>('Bumbung & Atap');

  const scrollToFormWithService = (serviceTitle: string) => {
    setSelectedServiceForForm(serviceTitle);
    const formElement = document.getElementById('borang-sebut-harga');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-20">
      {/* Page Header */}
      <section className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 text-[#0E4424] text-sm font-bold border border-emerald-100">
          <Wrench className="w-4 h-4 text-[#15803D]" />
          <span>Skop Perkhidmatan HME</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-black text-gray-900 tracking-tight font-sans">
          Perkhidmatan Pembinaan & Pembaikan
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 leading-relaxed font-normal">
          Kepakaran praktikal bagi membaiki, membina semula dan menyelenggara komponen kediaman serta hartanah anda di Malaysia.
        </p>
      </section>

      {/* Six Service Cards */}
      <section className="space-y-12">
        {SERVICES.map((service, index) => {
          const isEven = index % 2 === 1;
          return (
            <div
              key={service.id}
              id={`servis-${service.id}`}
              className="bg-white rounded-3xl overflow-hidden border border-gray-200/80 shadow-md hover:shadow-xl transition-all duration-300 scroll-mt-28"
            >
              <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${isEven ? 'lg:flex-row-reverse' : ''}`}>
                {/* Visual Column */}
                <div className={`lg:col-span-6 relative ${isEven ? 'lg:order-2' : ''}`}>
                  <div className="relative aspect-4/3 sm:aspect-16/10 lg:aspect-4/3 w-full overflow-hidden bg-gray-100 group">
                    <img
                      src={service.image}
                      alt={`${service.title} bagi persekitaran kediaman di Malaysia`}
                      className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                      loading="lazy"
                      width={800}
                      height={600}
                    />

                  </div>
                </div>

                {/* Content Column */}
                <div className={`lg:col-span-6 p-6 sm:p-8 lg:p-10 space-y-6 ${isEven ? 'lg:order-1' : ''}`}>
                  <div>
                    <span className="text-xs font-extrabold uppercase tracking-wider text-[#15803D] block mb-1">
                      Servis 0{index + 1}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight font-sans">
                      {service.title}
                    </h2>
                    <p className="mt-3 text-gray-600 text-base sm:text-lg leading-relaxed font-normal">
                      {service.fullDesc}
                    </p>
                  </div>

                  {/* Feature Checkpoints */}
                  <div className="space-y-2.5 pt-2">
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                      Skop kerja merangkumi:
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {service.features.map((feature, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2.5 text-sm sm:text-base text-gray-700">
                          <CheckCircle2 className="w-4 h-4 text-[#15803D] shrink-0 mt-1" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                    <a
                      href={getWhatsAppUrl(service.ctaMessage)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl text-base font-bold text-white bg-[#15803D] hover:bg-[#0E4424] active:scale-[0.98] transition-all shadow-md hover:shadow-lg min-h-[48px] focus:outline-hidden focus-visible:ring-4 focus-visible:ring-emerald-300"
                    >
                      <MessageCircle className="w-5 h-5 fill-current" />
                      <span>WhatsApp Servis {service.title.split(' ')[0]}</span>
                    </a>

                    <button
                      type="button"
                      onClick={() => scrollToFormWithService(service.title)}
                      className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-base font-semibold text-gray-800 bg-gray-100 hover:bg-gray-200 transition-colors min-h-[48px]"
                    >
                      <span>Isi Borang Sebut Harga</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>


      {/* Embedded Enquiry Form */}
      <section id="borang-sebut-harga" className="max-w-4xl mx-auto scroll-mt-28">
        <EnquiryForm initialService={selectedServiceForForm} />
      </section>
    </div>
  );
};
