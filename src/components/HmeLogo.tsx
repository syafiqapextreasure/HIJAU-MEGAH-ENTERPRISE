import React from 'react';

interface HmeLogoProps {
  variant?: 'color' | 'white';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  showTagline?: boolean;
}

export const HmeLogo: React.FC<HmeLogoProps> = ({
  variant = 'color',
  size = 'md',
  className = '',
  showTagline = true,
}) => {
  const isWhite = variant === 'white';
  const markSrc = isWhite
    ? '/images/branding/hme-mark-white.png'
    : '/images/branding/hme-mark-draft-2.png';

  return (
    <div className={`inline-flex items-center gap-3 sm:gap-3.5 select-none ${className}`}>
      {/* Original HME geometric mark from supplied Image 1 only; text labels remain live HTML below. */}
      <div className={`relative shrink-0 ${size === 'sm' ? 'w-11 h-11' : size === 'lg' ? 'w-18 h-18' : 'w-14 h-14'}`}>
        <img
          src={markSrc}
          alt=""
          aria-hidden="true"
          className="h-full w-full object-contain drop-shadow-xs"
          draggable={false}
        />
      </div>

      {/* Typography & Tagline */}
      <div className="flex flex-col justify-center">
        {/* Main HME letters. The supplied logo mark does not use a separate registered-symbol badge. */}
        <div className="flex items-center leading-none">
          <span
            className={`font-black tracking-wider ${
              isWhite ? 'text-white' : 'text-[#0F172A]'
            } ${
              size === 'sm' ? 'text-2xl' : size === 'lg' ? 'text-4xl' : 'text-3xl'
            }`}
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            HME
          </span>
        </div>

        {/* HIJAU MEGAH ENTERPRISE label - INCREASED SIZE AS REQUESTED */}
        <span
          className={`font-black uppercase tracking-wider leading-tight mt-0.5 ${
            isWhite ? 'text-white/95' : 'text-[#0F172A]'
          } ${
            size === 'sm'
              ? 'text-[12px] sm:text-[13px] tracking-wide'
              : size === 'lg'
              ? 'text-[18px] sm:text-[20px] tracking-wide'
              : 'text-[14px] sm:text-[15.5px] tracking-wide'
          }`}
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
        >
          HIJAU MEGAH ENTERPRISE
        </span>

        {/* Construction | Landscape | Homestay badge - INCREASED SIZE AS REQUESTED */}
        {showTagline && (
          <div className="mt-1">
            <span
              className={`inline-block whitespace-nowrap font-extrabold tracking-tight rounded-md shadow-xs ${
                isWhite
                  ? 'bg-white text-[#0F172A]'
                  : 'bg-[#B0F016] text-[#0A2612]'
              } ${
                isWhite
                  ? 'px-2 py-0.5 text-[10px] sm:text-[11px]'
                  : size === 'sm'
                  ? 'px-2.5 py-0.5 text-[11px]'
                  : size === 'lg'
                  ? 'px-3.5 py-1 text-[14px] sm:text-[15px]'
                  : 'px-2.5 py-0.5 sm:px-3 sm:py-1 text-[12px] sm:text-[13px]'
              }`}
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Construction | Landscape | Homestay
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
