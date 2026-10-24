import React from 'react';
import { motion } from 'motion/react';

interface GaneshaVisualProps {
  onCardClick?: () => void;
  isCardHovered?: boolean;
}

export const GaneshaVisual: React.FC<GaneshaVisualProps> = ({ onCardClick, isCardHovered }) => {
  return (
    <div className="relative flex flex-col items-center justify-center py-2 select-none">
      {/* 1. Divine Radiant Prabhamandala (Rotating Golden Sunburst Halo) */}
      <div className="absolute -top-12 pointer-events-none flex items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 45, repeat: Infinity, ease: 'linear' }}
          className="w-80 h-80 sm:w-[420px] sm:h-[420px] rounded-full opacity-35"
          style={{
            background:
              'conic-gradient(from 0deg, transparent 0deg, rgba(245, 158, 11, 0.45) 25deg, transparent 50deg, rgba(254, 240, 138, 0.6) 90deg, transparent 130deg, rgba(245, 158, 11, 0.45) 180deg, transparent 220deg, rgba(254, 240, 138, 0.6) 270deg, transparent 315deg, rgba(245, 158, 11, 0.45) 360deg)',
            filter: 'blur(8px)',
          }}
        />
        {/* Divine Golden Light Aura */}
        <div className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-gradient-to-r from-amber-500/25 via-yellow-400/20 to-red-500/20 blur-3xl animate-pulse" />
      </div>

      {/* 2. Walking & Blessing Lord Ganesha Character with Forward Step Motion */}
      <motion.div
        initial={{ y: -30, scale: 0.85, opacity: 0 }}
        animate={{
          y: [0, -8, 0, -5, 0],
          scale: [0.98, 1.02, 0.99, 1.01, 0.98],
          opacity: 1,
        }}
        transition={{
          y: { duration: 4.5, repeat: Infinity, ease: 'easeInOut' },
          scale: { duration: 4.5, repeat: Infinity, ease: 'easeInOut' },
          opacity: { duration: 1.2 },
        }}
        className="relative z-10 w-48 h-48 sm:w-60 sm:h-60 flex flex-col items-center justify-center"
      >
        {/* Lord Ganesha Divine Vector Artwork with Hands Presenting Forward */}
        <svg
          viewBox="0 0 240 240"
          className="w-full h-full drop-shadow-[0_0_30px_rgba(245,158,11,0.65)]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="ganeshaGoldMain" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFDF5" />
              <stop offset="20%" stopColor="#FEF08A" />
              <stop offset="50%" stopColor="#F59E0B" />
              <stop offset="85%" stopColor="#D97706" />
              <stop offset="100%" stopColor="#92400E" />
            </linearGradient>

            <linearGradient id="dhotiSilk" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FEF08A" />
              <stop offset="50%" stopColor="#F59E0B" />
              <stop offset="100%" stopColor="#DC2626" />
            </linearGradient>

            <filter id="ganeshaGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3.5" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Divine Prabhamandala Aura Rings */}
          <circle cx="120" cy="115" r="102" stroke="url(#ganeshaGoldMain)" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.6" />
          <circle cx="120" cy="115" r="92" stroke="url(#ganeshaGoldMain)" strokeWidth="2" opacity="0.8" />
          <circle cx="120" cy="115" r="84" stroke="url(#ganeshaGoldMain)" strokeWidth="1" strokeDasharray="5 5" opacity="0.5" />

          {/* Radiating Lotus Petals on Halo */}
          {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => (
            <path
              key={deg}
              d="M120 22 C123 29 125 36 120 42 C115 36 117 29 120 22 Z"
              fill="url(#ganeshaGoldMain)"
              opacity="0.9"
              transform={`rotate(${deg} 120 115)`}
            />
          ))}

          {/* Royal Crown (मुकुट) */}
          <path
            d="M92 68 L120 24 L148 68 C140 64 130 62 120 62 C110 62 100 64 92 68 Z"
            fill="url(#ganeshaGoldMain)"
            filter="url(#ganeshaGlow)"
          />
          {/* Crown Jewels (माणिक्य एवं पन्ना) */}
          <circle cx="120" cy="42" r="4" fill="#DC2626" />
          <circle cx="110" cy="54" r="2.8" fill="#059669" />
          <circle cx="130" cy="54" r="2.8" fill="#059669" />
          <circle cx="120" cy="54" r="3.2" fill="#FEF08A" />

          {/* Holy Tilak & Trishul Mark on Forehead */}
          <path d="M115 72 C115 72 120 66 125 72 L125 84 C125 86 120 88 115 84 Z" fill="#DC2626" />
          <path d="M111 74 Q120 81 129 74" stroke="url(#ganeshaGoldMain)" strokeWidth="2.2" strokeLinecap="round" />
          <circle cx="120" cy="76" r="2" fill="#FEF08A" />

          {/* Large Ears with Kundal Ornaments */}
          {/* Left Ear */}
          <path d="M92 78 C70 78 58 94 60 112 C62 124 74 130 88 126 C88 118 90 106 94 98 Z" fill="url(#ganeshaGoldMain)" opacity="0.92" />
          <circle cx="70" cy="116" r="3" fill="#DC2626" />

          {/* Right Ear */}
          <path d="M148 78 C170 78 182 94 180 112 C178 124 166 130 152 126 C152 118 150 106 146 98 Z" fill="url(#ganeshaGoldMain)" opacity="0.92" />
          <circle cx="170" cy="116" r="3" fill="#DC2626" />

          {/* Benevolent Divine Eyes */}
          <path d="M102 91 Q110 89 114 93" stroke="#18181B" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M138 91 Q130 89 126 93" stroke="#18181B" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="108" cy="93" r="1.5" fill="#111827" />
          <circle cx="132" cy="93" r="1.5" fill="#111827" />

          {/* Tusks */}
          <path d="M108 114 L98 120 L106 121 Z" fill="#FFFBEB" />
          <path d="M132 114 L140 119 L134 120 Z" fill="#FFFBEB" />

          {/* Graceful Curved Trunk with Sacred Modak */}
          <path
            d="M115 98 C115 110 113 126 119 138 C125 150 139 150 144 140 C147 133 142 125 135 128 C130 131 130 137 135 137"
            stroke="url(#ganeshaGoldMain)"
            strokeWidth="8.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            filter="url(#ganeshaGlow)"
          />
          {/* Golden Modak on Trunk Tip */}
          <circle cx="136" cy="136" r="4.5" fill="#FEF08A" />
          <circle cx="136" cy="136" r="2.5" fill="#F59E0B" />

          {/* Sacred Royal Attire / Pithambar Silk Torso */}
          <path d="M96 140 C85 148 85 178 120 182 C155 178 155 148 144 140 Z" fill="url(#dhotiSilk)" opacity="0.9" />

          {/* Upper Blessing Hand (अभय मुद्रा) */}
          <path d="M72 126 C68 120 72 110 78 112 C84 114 86 124 82 132 Z" fill="url(#ganeshaGoldMain)" />
          {/* Auspicious Palm Sign */}
          <circle cx="76" cy="120" r="2.5" fill="#DC2626" />

          {/* Forward Hands Extending the Sacred Invitation Card */}
          <g filter="url(#ganeshaGlow)">
            {/* Left offering hand */}
            <path d="M86 150 C80 152 74 158 84 164 C94 170 102 165 98 156 Z" fill="url(#ganeshaGoldMain)" />
            {/* Right offering hand */}
            <path d="M154 150 C160 152 166 158 156 164 C146 170 138 165 142 156 Z" fill="url(#ganeshaGoldMain)" />
          </g>

          {/* Divine Lotus Footsteps (कमल चरण - Step forward animation) */}
          <g opacity="0.95">
            {/* Left Lotus Footstep */}
            <ellipse cx="106" cy="192" rx="14" ry="7" fill="#F472B6" />
            <ellipse cx="106" cy="190" rx="10" ry="4" fill="#FEF08A" />
            {/* Right Lotus Footstep (Stepping slightly forward) */}
            <ellipse cx="134" cy="196" rx="15" ry="8" fill="#F472B6" />
            <ellipse cx="134" cy="194" rx="11" ry="5" fill="#FEF08A" />
          </g>
        </svg>

        {/* Step Light Ripple Beneath Feet */}
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-24 h-4 rounded-full bg-gradient-to-r from-amber-400/30 via-yellow-300/60 to-amber-400/30 blur-sm -mt-2"
        />
      </motion.div>

      {/* 3. Divine Shloka Banner */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="text-center mt-1 z-10"
      >
        <span className="font-rozha text-lg sm:text-2xl gold-text-bright tracking-wider font-bold block">
          ॥ श्री गणेशाय नमः ॥
        </span>
        <p className="font-hindi text-xs sm:text-sm text-amber-200/90 font-medium max-w-sm mx-auto leading-relaxed mt-0.5">
          वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ। निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा॥
        </p>
      </motion.div>
    </div>
  );
};
