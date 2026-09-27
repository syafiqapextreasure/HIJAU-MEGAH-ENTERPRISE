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

  return (
    <div className={`inline-flex items-center gap-3 sm:gap-3.5 select-none ${className}`}>
      {/* 3D Isometric Geometric Logo Symbol */}
      <div className={`relative shrink-0 ${size === 'sm' ? 'w-11 h-11' : size === 'lg' ? 'w-18 h-18' : 'w-14 h-14'}`}>
        <svg
          viewBox="0 0 160 160"
          className="w-full h-full drop-shadow-xs"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          {isWhite ? (
            /* White logo variant for footer / dark backgrounds */
            <g stroke="#0F172A" strokeWidth="2.5" strokeLinejoin="round">
              <polygon points="75,12 118,36 78,56 36,32" fill="#FFFFFF" />
              <polygon points="78,56 120,78 78,118 36,92" fill="#FFFFFF" />
              <polygon points="78,56 120,36 160,74 120,78" fill="#FFFFFF" />
              <polygon points="36,92 78,118 36,150 0,120" fill="#FFFFFF" />
              <polygon points="78,118 120,78 160,118 78,150" fill="#FFFFFF" />
            </g>
          ) : (
            /* Full-colour logo variant matching HME LOGO DESIGN DRAFT 2 */
            <g stroke="#FFFFFF" strokeWidth="2.5" strokeLinejoin="round">
              {/* Top roof facet - forest green */}
              <polygon points="75,12 118,36 78,56 36,32" fill="#0E4424" />
              {/* Mid-left facet - emerald green */}
              <polygon points="78,56 120,78 78,118 36,92" fill="#15803D" />
              {/* Mid-right facet - vibrant green */}
              <polygon points="78,56 120,36 160,74 120,78" fill="#16A34A" />
              {/* Bottom-left facet - lime green */}
              <polygon points="36,92 78,118 36,150 0,120" fill="#84CC16" />
              {/* Bottom-right facet - bright lime yellow */}
              <polygon points="78,118 120,78 160,118 78,150" fill="#BEF264" />
            </g>
          )}
        </svg>
      </div>

      {/* Typography & Tagline */}
      <div className="flex flex-col justify-center">
        {/* Main HME letters with registered symbol and architectural red slash */}
        <div className="flex items-center gap-1.5 leading-none">
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
          <span
            className={`text-[10px] font-bold border rounded-full px-1 py-0.2 leading-none inline-flex items-center justify-center ${
              isWhite
                ? 'text-white border-white/80'
                : 'text-red-600 border-red-500 font-extrabold'
            }`}
            title="Registered Trademark"
          >
            ®
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
              className={`inline-block font-extrabold tracking-tight rounded-md shadow-xs ${
                isWhite
                  ? 'bg-white text-[#0F172A]'
                  : 'bg-[#B0F016] text-[#0A2612]'
              } ${
                size === 'sm'
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
