import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import confetti from 'canvas-confetti';

interface GaneshaVideoIntroProps {
  onComplete: () => void;
}

export const GaneshaVideoIntro: React.FC<GaneshaVideoIntroProps> = ({ onComplete }) => {
  const [isBlasting, setIsBlasting] = useState(false);
  const hasTriggeredRef = useRef(false);

  // Trigger the Grand Golden & Floral Blast Animation
  const triggerBlastAndComplete = () => {
    if (hasTriggeredRef.current) return;
    hasTriggeredRef.current = true;
    setIsBlasting(true);

    // 1. Center Grand Blast
    try {
      confetti({
        particleCount: 160,
        spread: 140,
        startVelocity: 55,
        origin: { x: 0.5, y: 0.5 },
        colors: ['#F59E0B', '#FEF08A', '#DC2626', '#E11D48', '#FB7185', '#FFFDF0', '#D97706'],
      });

      // 2. Dual Side Cannons after 100ms
      setTimeout(() => {
        confetti({
          particleCount: 80,
          angle: 60,
          spread: 75,
          origin: { x: 0.1, y: 0.7 },
          colors: ['#FBBF24', '#F59E0B', '#DC2626'],
        });
        confetti({
          particleCount: 80,
          angle: 120,
          spread: 75,
          origin: { x: 0.9, y: 0.7 },
          colors: ['#FBBF24', '#F59E0B', '#DC2626'],
        });
      }, 100);
    } catch {
      // Fallback gracefully
    }

    // 3. Smooth fade out and switch to main invitation page
    setTimeout(() => {
      onComplete();
    }, 700);
  };

  useEffect(() => {
    // Crisp, smooth 3.4-second timing: divine walk -> scroll offering -> blast -> card reveals
    const timer = setTimeout(() => {
      triggerBlastAndComplete();
    }, 3400);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      onClick={triggerBlastAndComplete}
      className="fixed inset-0 z-50 w-screen h-screen bg-[#140307] flex items-center justify-center overflow-hidden cursor-pointer select-none"
    >
      {/* Seamless Fullscreen Cinematic Visual (Instant 0.0s load, no black screen, no wait) */}
      <div className="absolute inset-0 w-full h-full overflow-hidden flex items-center justify-center bg-gradient-to-b from-[#1C050B] via-[#2A0812] to-[#120306]">
        {/* Sacred Sunlight Rays through Trees */}
        <div className="absolute inset-0 pointer-events-none opacity-45">
          <div
            className="w-full h-full"
            style={{
              background:
                'radial-gradient(ellipse 90% 60% at 50% 20%, rgba(254, 240, 138, 0.45) 0%, rgba(245, 158, 11, 0.25) 45%, transparent 75%)',
            }}
          />
        </div>

        {/* Stone Pathway with Lotuses and Marigolds on Both Sides */}
        <div className="absolute inset-0 pointer-events-none flex flex-col justify-end">
          {/* Garden Pathway Floor */}
          <div className="h-2/5 w-full bg-gradient-to-t from-[#260B08] to-transparent relative">
            {/* Stone Path in Center */}
            <div className="w-64 sm:w-96 h-full mx-auto bg-gradient-to-t from-stone-800/80 via-stone-700/50 to-transparent border-x-4 border-amber-900/30" />

            {/* Pink Lotuses Floating on Water (Left & Right) */}
            <div className="absolute bottom-4 left-4 sm:left-12 flex gap-4 text-3xl sm:text-5xl animate-pulse">
              <span>🪷</span>
              <span className="hidden sm:inline">🌼</span>
              <span>🪷</span>
            </div>
            <div className="absolute bottom-4 right-4 sm:right-12 flex gap-4 text-3xl sm:text-5xl animate-pulse">
              <span>🪷</span>
              <span className="hidden sm:inline">🌼</span>
              <span>🪷</span>
            </div>

            {/* Marigold Bushes Lining the Path */}
            <div className="absolute bottom-16 inset-x-0 flex justify-between px-6 sm:px-20 text-2xl sm:text-4xl opacity-85">
              <span>🌼 🌸 🌼</span>
              <span>🌼 🌸 🌼</span>
            </div>
          </div>
        </div>

        {/* Lord Ganesha Walking Forward from Distance to Full Close-Up */}
        <motion.div
          initial={{ scale: 0.7, y: -20, opacity: 0.95 }}
          animate={{
            scale: [0.7, 0.88, 1.1, 1.25],
            y: [-20, -5, 12, 24],
            opacity: 1,
          }}
          transition={{ duration: 3.4, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative z-10 flex flex-col items-center justify-center"
        >
          {/* Rotating Divine Sunburst Halo (प्रभामंडल) */}
          <div className="absolute -top-16 pointer-events-none flex items-center justify-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
              className="w-72 h-72 sm:w-96 sm:h-96 rounded-full opacity-55"
              style={{
                background:
                  'conic-gradient(from 0deg, transparent 0deg, rgba(245, 158, 11, 0.6) 20deg, transparent 40deg, rgba(254, 240, 138, 0.8) 80deg, transparent 120deg, rgba(245, 158, 11, 0.6) 160deg, transparent 200deg, rgba(254, 240, 138, 0.8) 260deg, transparent 300deg, rgba(245, 158, 11, 0.6) 340deg, transparent 360deg)',
                filter: 'blur(5px)',
              }}
            />
            <div className="absolute w-64 h-64 rounded-full bg-amber-400/30 blur-2xl animate-pulse" />
          </div>

          {/* Walking Motion Physics (Stepping Left and Right) */}
          <motion.div
            animate={{
              rotate: [-2, 2, -2],
              y: [-5, 5, -5],
            }}
            transition={{ duration: 0.85, repeat: Infinity, ease: 'easeInOut' }}
            className="w-56 h-56 sm:w-72 sm:h-72 flex items-center justify-center"
          >
            {/* Lord Ganesha Character SVG */}
            <svg
              viewBox="0 0 240 240"
              className="w-full h-full drop-shadow-[0_0_35px_rgba(245,158,11,0.9)]"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="goldCrownIntro" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FFFDF5" />
                  <stop offset="25%" stopColor="#FEF08A" />
                  <stop offset="60%" stopColor="#F59E0B" />
                  <stop offset="100%" stopColor="#B45309" />
                </linearGradient>
                <linearGradient id="yellowDhotiIntro" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FEF08A" />
                  <stop offset="45%" stopColor="#F59E0B" />
                  <stop offset="100%" stopColor="#D97706" />
                </linearGradient>
                <filter id="divineAuraIntro" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              {/* Halo Rings */}
              <circle cx="120" cy="110" r="95" stroke="url(#goldCrownIntro)" strokeWidth="2" opacity="0.75" />
              <circle cx="120" cy="110" r="86" stroke="url(#goldCrownIntro)" strokeWidth="1" strokeDasharray="4 4" opacity="0.5" />

              {/* Royal Crown (मुकुट) */}
              <path
                d="M90 65 L120 20 L150 65 C142 60 132 58 120 58 C108 58 98 60 90 65 Z"
                fill="url(#goldCrownIntro)"
                filter="url(#divineAuraIntro)"
              />
              <circle cx="120" cy="38" r="4.5" fill="#DC2626" />
              <circle cx="108" cy="50" r="3" fill="#059669" />
              <circle cx="132" cy="50" r="3" fill="#059669" />
              <circle cx="120" cy="50" r="3.5" fill="#FEF08A" />

              {/* Tilak on Forehead */}
              <path d="M115 68 C115 68 120 62 125 68 L125 80 C125 82 120 84 115 80 Z" fill="#DC2626" />
              <path d="M110 70 Q120 78 130 70" stroke="url(#goldCrownIntro)" strokeWidth="2.5" strokeLinecap="round" />
              <circle cx="120" cy="72" r="2" fill="#FEF08A" />

              {/* Ears */}
              <path d="M88 74 C66 74 54 90 56 108 C58 120 70 126 84 122 C84 114 86 102 90 94 Z" fill="url(#goldCrownIntro)" opacity="0.95" />
              <path d="M152 74 C174 74 186 90 184 108 C182 120 170 126 156 122 C156 114 154 102 150 94 Z" fill="url(#goldCrownIntro)" opacity="0.95" />

              {/* Benevolent Divine Eyes */}
              <path d="M102 88 Q110 86 114 90" stroke="#18181B" strokeWidth="2.5" strokeLinecap="round" />
              <path d="M138 88 Q130 86 126 90" stroke="#18181B" strokeWidth="2.5" strokeLinecap="round" />
              <circle cx="108" cy="89" r="1.8" fill="#111827" />
              <circle cx="132" cy="89" r="1.8" fill="#111827" />

              {/* Tusks */}
              <path d="M108 110 L98 116 L106 117 Z" fill="#FFFBEB" />
              <path d="M132 110 L140 115 L134 116 Z" fill="#FFFBEB" />

              {/* Trunk with Golden Modak */}
              <path
                d="M115 95 C115 107 113 122 119 134 C125 145 139 145 144 135 C147 128 142 120 135 123 C130 126 130 132 135 132"
                stroke="url(#goldCrownIntro)"
                strokeWidth="8.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                filter="url(#divineAuraIntro)"
              />
              <circle cx="135" cy="131" r="4.5" fill="#FEF08A" />

              {/* Silk Attire (पीतांबर धोती) */}
              <path d="M95 135 C82 145 82 180 120 185 C158 180 158 145 145 135 Z" fill="url(#yellowDhotiIntro)" opacity="0.95" />

              {/* Hands Extending the Patrika */}
              <path d="M82 146 C74 148 68 156 78 162 C88 168 96 162 92 153 Z" fill="url(#goldCrownIntro)" />
              <path d="M158 146 C166 148 172 156 162 162 C152 168 144 162 148 153 Z" fill="url(#goldCrownIntro)" />

              {/* Lotus Footsteps Stepping Forward */}
              <ellipse cx="104" cy="192" rx="14" ry="7" fill="#F472B6" />
              <ellipse cx="104" cy="190" rx="9" ry="4" fill="#FEF08A" />
              <ellipse cx="136" cy="196" rx="15" ry="8" fill="#F472B6" />
              <ellipse cx="136" cy="194" rx="10" ry="5" fill="#FEF08A" />
            </svg>
          </motion.div>

          {/* THE SACRED UNROLLED WEDDING SCROLL (Extending forward) */}
          <motion.div
            initial={{ scale: 0.7, y: -5 }}
            animate={{
              scale: [0.7, 0.9, 1.15, 1.35],
              y: [-5, 5, 15, 25],
            }}
            transition={{ duration: 3.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative z-30 -mt-10 sm:-mt-12 w-72 sm:w-96 rounded-xl p-3 sm:p-4 text-center shadow-[0_20px_50px_rgba(0,0,0,0.9),0_0_35px_rgba(245,158,11,0.6)]"
            style={{
              background: 'linear-gradient(135deg, #FFFDF5 0%, #FEF3C7 30%, #FDE68A 70%, #F59E0B 100%)',
              border: '3px solid #D97706',
            }}
          >
            {/* Scroll Rollers on Left and Right (काष्ठ बेलन) */}
            <div className="absolute -left-3 inset-y-1 w-4 rounded-full bg-gradient-to-r from-amber-900 to-amber-700 border border-yellow-300 shadow-md" />
            <div className="absolute -right-3 inset-y-1 w-4 rounded-full bg-gradient-to-l from-amber-900 to-amber-700 border border-yellow-300 shadow-md" />

            {/* Red Ribbons on both ends */}
            <div className="absolute -left-5 top-1/2 -translate-y-1/2 text-red-600 font-bold text-lg">🎀</div>
            <div className="absolute -right-5 top-1/2 -translate-y-1/2 text-red-600 font-bold text-lg">🎀</div>

            {/* Sanskrit Inscription on the Sacred Scroll */}
            <div className="space-y-0.5">
              <span className="text-[11px] sm:text-xs font-marcellus text-red-900 font-extrabold tracking-widest block uppercase">
                ॥ ॐ श्री गणेशाय नमः ॥
              </span>
              <h2 className="font-rozha text-xl sm:text-3xl text-[#580B18] font-black tracking-wide drop-shadow-xs">
                ॥ मंगल परिणयोत्सव ॥
              </h2>
              <p className="font-rozha text-lg sm:text-2xl text-red-950 font-bold tracking-wider">
                चि. दीपराज संग सौ. का. नेहा
              </p>
              <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-red-950/15 text-red-950 text-[10px] sm:text-xs font-bold font-hindi mt-1">
                <span>सादर आमंत्रण भेंट</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* GRAND BLAST ANIMATION (Triggered at end of 3.4 seconds) */}
      <AnimatePresence>
        {isBlasting && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 pointer-events-none flex items-center justify-center z-50"
          >
            {/* Bright Golden Shockwave Ring */}
            <motion.div
              initial={{ scale: 0.1, opacity: 1 }}
              animate={{ scale: 4, opacity: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="w-96 h-96 rounded-full border-8 border-amber-300 shadow-[0_0_120px_rgba(245,158,11,1)]"
            />

            {/* Radiant White/Gold Screen Flash */}
            <motion.div
              initial={{ opacity: 0.95 }}
              animate={{ opacity: 0 }}
              transition={{ duration: 0.65, ease: 'easeOut' }}
              className="absolute inset-0 bg-gradient-to-r from-amber-200 via-yellow-100 to-amber-200"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
