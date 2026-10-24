import React from 'react';
import { motion } from 'motion/react';
import { weddingData } from '../data/wedding';
import { Clock, MapPin, Sparkles, Music2, Calendar, Heart } from 'lucide-react';

export const BaratSection: React.FC = () => {
  const { barat } = weddingData;

  return (
    <section id="barat" className="relative py-16 sm:py-24 px-4 sm:px-6 max-w-5xl mx-auto z-10">
      {/* Decorative Royal Header */}
      <div className="text-center mb-12 sm:mb-16">
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-3 mb-3"
        >
          <span className="w-12 h-[1px] bg-gradient-to-r from-transparent to-amber-400" />
          <span className="text-xs sm:text-sm font-marcellus tracking-widest text-amber-400 uppercase">
            Royal Wedding Procession • बारात प्रस्थान
          </span>
          <span className="w-12 h-[1px] bg-gradient-to-l from-transparent to-amber-400" />
        </motion.div>

        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-rozha text-4xl sm:text-6xl lg:text-7xl gold-text-bright tracking-wide drop-shadow-xl"
        >
          {barat.title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="font-yatra text-xl sm:text-2xl text-amber-300/95 mt-2"
        >
          मांगलिक बारात रवानगी एवं शुभ लग्न (दिन में)
        </motion.p>

        {/* Date badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 mt-4 px-4 py-1.5 rounded-full bg-amber-950/80 border border-amber-500/50 text-amber-200 text-xs sm:text-sm font-hindi shadow-md"
        >
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span className="font-semibold">{barat.day} (मिती अगहन सुदी 04)</span>
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
        </motion.div>
      </div>

      {/* Main Royal Barat Card with 3D depth */}
      <motion.div
        initial={{ opacity: 0, y: 35, rotateX: 6 }}
        whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
        style={{ perspective: 1000 }}
        className="relative royal-card rounded-3xl p-6 sm:p-10 border-2 border-amber-500/50 shadow-[0_25px_60px_rgba(0,0,0,0.85),0_0_35px_rgba(245,158,11,0.2)] overflow-hidden"
      >
        {/* Ornate Gold Traditional Corners */}
        <div className="corner-ornament-tl" />
        <div className="corner-ornament-tr" />
        <div className="corner-ornament-bl" />
        <div className="corner-ornament-br" />

        {/* Royal Indian Wedding Procession Emblem */}
        <div className="flex flex-col items-center justify-center mb-8 relative">
          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border border-amber-400/40 p-2 flex items-center justify-center bg-gradient-to-b from-amber-900/40 to-transparent shadow-inner">
            <svg
              viewBox="0 0 100 100"
              className="w-16 h-16 sm:w-20 sm:h-20 drop-shadow-[0_0_15px_rgba(245,158,11,0.6)]"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="baratGoldGradPrasthan" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FFFBEB" />
                  <stop offset="50%" stopColor="#F59E0B" />
                  <stop offset="100%" stopColor="#B45309" />
                </linearGradient>
              </defs>

              {/* Royal Chhatri / Ceremonial Umbrella */}
              <path
                d="M50 15 C36 15 28 25 28 29 C38 29 42 27 50 27 C58 27 62 29 72 29 C72 25 64 15 50 15 Z"
                fill="url(#baratGoldGradPrasthan)"
              />
              <line x1="50" y1="12" x2="50" y2="40" stroke="url(#baratGoldGradPrasthan)" strokeWidth="2" strokeLinecap="round" />
              <circle cx="50" cy="11" r="2" fill="#FEF08A" />

              {/* Royal Procession Steed / Horse Silhouette */}
              <path
                d="M44 42 C40 38 42 32 46 30 C49 33 50 35 53 35 C55 35 57 32 60 30 C64 34 60 40 56 43 C58 48 65 52 70 50 C68 56 64 62 60 62 C58 68 58 82 56 86 L53 86 L54 68 L48 68 L47 86 L44 86 C44 78 43 65 41 60 C36 57 34 50 35 44 C38 46 41 45 44 42 Z"
                fill="url(#baratGoldGradPrasthan)"
              />
              <circle cx="50" cy="33" r="1.5" fill="#EF4444" />
              <path d="M46 44 Q50 48 54 44" stroke="#FEF08A" strokeWidth="1.2" />
            </svg>
          </div>

          <div className="mt-2 flex items-center gap-2 text-xs sm:text-sm text-amber-300 font-hindi">
            <Music2 className="w-3.5 h-3.5 text-amber-400" />
            <span>बैंड-बाजे, ढोल-धमाके एवं शहनाई की मंगल ध्वनि के साथ प्रस्थान</span>
            <Music2 className="w-3.5 h-3.5 text-amber-400" />
          </div>
        </div>

        {/* Detailed Traditional Travel Note & Departure Details (Exact from PDF) */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-amber-950/80 via-red-950/60 to-amber-950/80 border border-amber-400/50 text-center relative overflow-hidden">
          <div className="flex items-center justify-center gap-2 mb-3 text-amber-300">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span className="font-hindi text-xs sm:text-sm uppercase tracking-wider font-semibold">
              मांगलिक प्रस्थान संदेश
            </span>
            <Sparkles className="w-4 h-4 text-amber-400" />
          </div>

          <p className="font-hindi text-lg sm:text-2xl text-amber-100 font-bold leading-relaxed max-w-2xl mx-auto drop-shadow-md">
            "{barat.fullNote}"
          </p>

          <div className="mt-5 pt-4 border-t border-amber-500/25 flex flex-wrap items-center justify-center gap-5 text-amber-200 font-hindi text-sm sm:text-base">
            <div className="flex items-center gap-2 bg-amber-900/30 px-4 py-2 rounded-xl border border-amber-500/30">
              <Clock className="w-4 h-4 text-amber-400" />
              <span>प्रस्थान समय: <strong className="text-amber-100 font-rozha text-base sm:text-lg">{barat.departureTime}</strong> (कलालिया से)</span>
            </div>

            <div className="flex items-center gap-2 bg-amber-900/30 px-4 py-2 rounded-xl border border-amber-500/30">
              <MapPin className="w-4 h-4 text-amber-400" />
              <span>गंतव्य: <strong className="text-amber-100 font-rozha text-base sm:text-lg">अर्निया गुर्जर</strong> (जिला-रतलाम)</span>
            </div>
          </div>

          {/* Shubh Lagna Details from PDF */}
          <div className="mt-5 p-4 rounded-xl bg-amber-950/70 border border-amber-400/40 max-w-xl mx-auto">
            <div className="flex items-center justify-center gap-2 text-amber-300 font-hindi text-sm font-bold mb-1">
              <Calendar className="w-4 h-4 text-amber-400" />
              <span>शुभ लग्न (दिन में)</span>
            </div>
            <p className="font-hindi text-sm sm:text-base text-amber-100 font-semibold">
              मिती अगहन सुदी 04, शनिवार • दिनांक-28.11.2026
            </p>
            <p className="font-hindi text-xs text-amber-300/80 mt-1">
              स्थान: ग्राम-अर्निया गुर्जर (विवाह स्थल)
            </p>
            <div className="mt-3 pt-2.5 border-t border-amber-400/30">
              <p className="font-hindi text-xs sm:text-sm text-amber-200/95 italic font-medium leading-relaxed">
                ॥ गृभ्णामि ते सौभगत्वाय हस्तं मया पत्या जरदष्टिर्यथासः। भगो अर्यमा सविता पुरन्धिर्मह्यं त्वादुर्गार्हपत्याय देवाः॥
              </p>
            </div>
          </div>

          <p className="font-hindi text-xs sm:text-sm text-amber-300/80 mt-5 font-normal">
            आप सभी आत्मीयजन सप्रेम बारात में सम्मिलित होकर वर-वधू को अपना शुभाशीर्वाद प्रदान करें।
          </p>
        </div>

        {/* Traditional Footer Accent */}
        <div className="mt-8 pt-4 border-t border-amber-500/15 flex items-center justify-between text-xs text-amber-400/60 font-hindi">
          <span>॥ बारात प्रस्थान एवं शुभ लग्न ॥</span>
          <div className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-amber-400/50" />
            <span className="w-8 h-[1px] bg-amber-400/50" />
            <span className="w-2 h-2 rounded-full bg-amber-400/50" />
          </div>
          <span>शनिवार, 28 नवंबर 2026</span>
        </div>
      </motion.div>
    </section>
  );
};
