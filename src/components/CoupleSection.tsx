import React from 'react';
import { motion } from 'motion/react';
import { weddingData } from '../data/wedding';
import { Heart, Sparkles, MapPin } from 'lucide-react';

export const CoupleSection: React.FC = () => {
  const { couple } = weddingData;

  return (
    <section id="var-vadhu" className="relative py-16 sm:py-24 px-4 sm:px-6 max-w-5xl mx-auto z-10">
      {/* Decorative Header */}
      <div className="text-center mb-12 sm:mb-16">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-3 mb-3"
        >
          <span className="w-12 h-[1px] bg-gradient-to-r from-transparent to-amber-400" />
          <span className="text-xs sm:text-sm font-marcellus tracking-widest text-amber-400 uppercase">
            The Auspicious Union • मंगल परिणय
          </span>
          <span className="w-12 h-[1px] bg-gradient-to-l from-transparent to-amber-400" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-rozha text-3xl sm:text-5xl lg:text-6xl gold-text-bright tracking-wide drop-shadow-md"
        >
          ॥ वर - वधू ॥
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="font-yatra text-xl sm:text-2xl text-amber-300/90 mt-2"
        >
          {weddingData.invitationTitle}
        </motion.p>

        {/* Auspicious Couple Poem from Invitation Card */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-md mx-auto mt-4 p-3 rounded-2xl bg-amber-950/60 border border-amber-500/30 text-amber-200/90 font-hindi text-sm sm:text-base leading-relaxed text-center"
        >
          <p className="italic">"मिलन हे दो परिवारों का, रस्म हे खुशी मनाने का।</p>
          <p className="italic">हमें तो इंतजार हे, शादी में आपके आने का॥"</p>
        </motion.div>
      </div>

      {/* Main Royal 3D Card for Couple */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
        className="relative royal-card rounded-3xl p-6 sm:p-12 border-2 border-amber-500/50 shadow-[0_25px_60px_rgba(0,0,0,0.85),0_0_35px_rgba(245,158,11,0.2)] overflow-hidden"
      >
        {/* Ornate Gold Traditional Corners */}
        <div className="corner-ornament-tl" />
        <div className="corner-ornament-tr" />
        <div className="corner-ornament-bl" />
        <div className="corner-ornament-br" />

        {/* Groom and Bride Grid with Central Heart Connector */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-stretch relative">
          {/* Groom Card (वर) */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, delay: 0.1 }}
            className="flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-[#FFFDF7] via-[#FEF3C7] to-[#FDE68A] border-2 border-amber-500/70 text-center relative group transition-all duration-300 shadow-[0_15px_35px_rgba(0,0,0,0.5),0_0_25px_rgba(245,158,11,0.25)] hover:-translate-y-1 text-[#26050C]"
          >
            <div>
              <div className="inline-flex items-center gap-1.5 px-5 py-1 rounded-full bg-red-900/10 border border-red-800/30 font-rozha text-base sm:text-lg text-[#881337] mb-3 shadow-inner">
                <Sparkles className="w-4 h-4 text-amber-600" />
                <span className="font-bold">{couple.groom.label}</span>
                <Sparkles className="w-4 h-4 text-amber-600" />
              </div>

              <h3 className="font-rozha text-3xl sm:text-4xl text-[#580B18] font-extrabold tracking-wide mb-3 drop-shadow-sm">
                {couple.groom.name}
              </h3>

              <div className="space-y-2 pt-3 border-t border-amber-800/20 text-stone-800 font-hindi text-sm sm:text-base">
                <p className="font-bold text-amber-950">
                  {couple.groom.grandParents}
                </p>
                <p className="font-bold text-red-950">
                  {couple.groom.parents}
                </p>
                <div className="inline-block px-3 py-1 rounded-full bg-amber-900/10 border border-amber-800/20 text-xs sm:text-sm font-semibold text-amber-900 mt-1">
                  {couple.groom.gotraFamily}
                </div>
              </div>
            </div>

            {/* Residence Info */}
            <div className="mt-5 pt-3 border-t border-amber-800/20 flex items-center justify-center gap-1.5 text-xs sm:text-sm text-stone-700 font-hindi">
              <MapPin className="w-4 h-4 text-red-700 shrink-0" />
              <span>{couple.groom.village}, {couple.groom.district}</span>
            </div>
          </motion.div>

          {/* Central Heart & Sang Link (Desktop Absolute, Mobile Center) */}
          <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex-col items-center justify-center">
            <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-amber-500 via-yellow-300 to-rose-500 p-0.5 shadow-[0_0_25px_rgba(245,158,11,0.9)] animate-pulse">
              <div className="w-full h-full rounded-full bg-[#FFFDF7] flex items-center justify-center border border-amber-400">
                <Heart className="w-6 h-6 text-red-600 fill-red-600" />
              </div>
            </div>
            <span className="font-rozha text-sm text-amber-300 mt-1 font-bold tracking-wider drop-shadow-md">
              संग
            </span>
          </div>

          {/* Mobile Sang Indicator */}
          <div className="flex md:hidden items-center justify-center gap-2 -my-2 text-amber-300">
            <span className="w-8 h-[1px] bg-amber-400/60" />
            <div className="w-8 h-8 rounded-full bg-[#FFFDF7] border border-amber-400 flex items-center justify-center shadow-md">
              <Heart className="w-4 h-4 text-red-600 fill-red-600" />
            </div>
            <span className="font-rozha text-base text-amber-200 font-bold">संग</span>
            <span className="w-8 h-[1px] bg-amber-400/60" />
          </div>

          {/* Bride Card (वधू) */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, delay: 0.15 }}
            className="flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-[#FFFDF7] via-[#FEF3C7] to-[#FDE68A] border-2 border-amber-500/70 text-center relative group transition-all duration-300 shadow-[0_15px_35px_rgba(0,0,0,0.5),0_0_25px_rgba(245,158,11,0.25)] hover:-translate-y-1 text-[#26050C]"
          >
            <div>
              <div className="inline-flex items-center gap-1.5 px-5 py-1 rounded-full bg-red-900/10 border border-red-800/30 font-rozha text-base sm:text-lg text-[#881337] mb-3 shadow-inner">
                <Sparkles className="w-4 h-4 text-amber-600" />
                <span className="font-bold">{couple.bride.label}</span>
                <Sparkles className="w-4 h-4 text-amber-600" />
              </div>

              <h3 className="font-rozha text-3xl sm:text-4xl text-[#580B18] font-extrabold tracking-wide mb-3 drop-shadow-sm">
                {couple.bride.name}
              </h3>

              <div className="space-y-2 pt-3 border-t border-amber-800/20 text-stone-800 font-hindi text-sm sm:text-base">
                <p className="font-bold text-amber-950">
                  {couple.bride.grandParents}
                </p>
                <p className="font-bold text-red-950">
                  {couple.bride.parents}
                </p>
                <div className="inline-block px-3 py-1 rounded-full bg-amber-900/10 border border-amber-800/20 text-xs sm:text-sm font-semibold text-amber-900 mt-1">
                  {couple.bride.gotraFamily}
                </div>
              </div>
            </div>

            {/* Residence Info */}
            <div className="mt-5 pt-3 border-t border-amber-800/20 flex items-center justify-center gap-1.5 text-xs sm:text-sm text-stone-700 font-hindi">
              <MapPin className="w-4 h-4 text-red-700 shrink-0" />
              <span>{couple.bride.village}, {couple.bride.district}</span>
            </div>
          </motion.div>
        </div>

        {/* Couple Sanskrit Mangal Ashirwad */}
        <div className="mt-8 pt-6 border-t border-amber-500/20 text-center">
          <p className="font-hindi text-xs sm:text-sm text-amber-300/80">
            {couple.shloka}
          </p>
        </div>
      </motion.div>
    </section>
  );
};
