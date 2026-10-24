import React from 'react';
import { motion } from 'motion/react';
import { weddingData } from '../data/wedding';
import { Droplet, Gift, Sparkles, Heart, Clock, MapPin } from 'lucide-react';

export const ManglikSchedule: React.FC = () => {
  const { mousara } = weddingData;
  const gangojEvent = weddingData.events.find((e) => e.id === 'gangoj-gyaras');

  return (
    <section id="manglik" className="relative py-16 sm:py-24 px-4 sm:px-6 max-w-5xl mx-auto z-10">
      {/* Decorative Traditional Header */}
      <div className="text-center mb-14">
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-3 mb-3"
        >
          <span className="w-12 h-[1px] bg-gradient-to-r from-transparent to-amber-400" />
          <span className="text-xs sm:text-sm font-marcellus tracking-widest text-amber-400 uppercase">
            Pavitra Manglik Sanskar • मांगलिक कार्यक्रम
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
          {weddingData.manglikSectionTitle}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="font-yatra text-lg sm:text-2xl text-amber-300/90 mt-3"
        >
          {weddingData.manglikSectionSubtitle}
        </motion.p>

        {/* Date badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 mt-4 px-4 py-1.5 rounded-full bg-amber-950/70 border border-amber-500/40 text-amber-200 text-xs sm:text-sm font-hindi"
        >
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>शुक्रवार, 27 नवंबर 2026 (मिती अगहन सुदी 03)</span>
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
        </motion.div>
      </div>

      {/* Grid of Manglik Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
        {/* Card 1: घरविवाह (गंगौज, ग्यारस) */}
        {gangojEvent && (
          <motion.div
            initial={{ opacity: 0, y: 35, rotateY: 5 }}
            whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex flex-col justify-between royal-card rounded-2xl p-7 sm:p-9 border border-amber-500/40 transition-all duration-300 group hover:-translate-y-1.5 shadow-[0_15px_40px_rgba(0,0,0,0.6)]"
          >
            <div className="corner-ornament-tl" />
            <div className="corner-ornament-tr" />
            <div className="corner-ornament-bl" />
            <div className="corner-ornament-br" />

            <div>
              {/* Event Category & Icon Header */}
              <div className="flex items-center justify-between gap-4 mb-4 pb-3 border-b border-amber-500/20">
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-amber-700 to-yellow-300 p-0.5 shadow-md">
                  <div className="w-full h-full rounded-full bg-[#20040A] flex items-center justify-center">
                    <Droplet className="w-6 h-6 text-amber-300 group-hover:scale-110 transition-transform" />
                  </div>
                </div>

                <span className="font-hindi text-xs sm:text-sm text-amber-200 bg-amber-950/80 px-3 py-1 rounded-full border border-amber-500/30 font-semibold">
                  {gangojEvent.hindiTithi}
                </span>
              </div>

              {/* Event Title */}
              <h3 className="font-rozha text-2xl sm:text-3xl gold-text-bright tracking-wide mb-2">
                घरविवाह (गंगौज, ग्यारस)
              </h3>

              {/* Date & Time */}
              <div className="flex flex-wrap items-center gap-3 text-sm sm:text-base font-hindi font-bold text-amber-300 mb-4">
                <div className="flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  <span>{gangojEvent.date}</span>
                </div>
                {gangojEvent.time && (
                  <div className="flex items-center gap-1.5 text-amber-200 bg-red-950/60 px-3 py-0.5 rounded-full border border-amber-500/30 text-xs sm:text-sm">
                    <Clock className="w-3.5 h-3.5 text-amber-400" />
                    <span>{gangojEvent.time}</span>
                  </div>
                )}
              </div>

              {/* Sanskrit Shloka for Gangoj */}
              <div className="mt-3 p-3.5 rounded-xl bg-gradient-to-r from-amber-950/70 via-red-950/50 to-amber-950/70 border border-amber-500/35 shadow-inner">
                <p className="font-hindi text-xs sm:text-sm text-amber-200/95 leading-relaxed font-semibold italic text-center">
                  {gangojEvent.description}
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-amber-500/15 flex items-center justify-between text-xs text-amber-400/60 font-hindi">
              <span>शुभ संस्कार</span>
              <span>गृह निवास, कलालिया</span>
            </div>
          </motion.div>
        )}

        {/* Card 2: मौसारा (मातृपक्ष / ननिहाल आगमन) */}
        <motion.div
          initial={{ opacity: 0, y: 35, rotateY: -5 }}
          whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.85, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="relative flex flex-col justify-between royal-card rounded-2xl p-7 sm:p-9 border-2 border-amber-400/80 shadow-[0_20px_50px_rgba(245,158,11,0.25)] transition-all duration-300 group hover:-translate-y-1.5"
        >
          <div className="corner-ornament-tl" />
          <div className="corner-ornament-tr" />
          <div className="corner-ornament-bl" />
          <div className="corner-ornament-br" />

          <div>
            {/* Event Category & Icon Header */}
            <div className="flex items-center justify-between gap-4 mb-4 pb-3 border-b border-amber-500/20">
              <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-amber-700 to-yellow-300 p-0.5 shadow-md">
                <div className="w-full h-full rounded-full bg-[#20040A] flex items-center justify-center">
                  <Gift className="w-6 h-6 text-amber-300 group-hover:scale-110 transition-transform" />
                </div>
              </div>

              <span className="font-hindi text-xs sm:text-sm text-amber-200 bg-amber-950/80 px-3 py-1 rounded-full border border-amber-500/30 font-semibold">
                मातृपक्ष स्नेह भेंट
              </span>
            </div>

            {/* Event Title */}
            <h3 className="font-rozha text-2xl sm:text-3xl gold-text-bright tracking-wide mb-2">
              {mousara.title}
            </h3>

            {/* Date & Time */}
            <div className="flex flex-wrap items-center gap-3 text-sm sm:text-base font-hindi font-bold text-amber-300 mb-4">
              <div className="flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>दिनांक-27.11.2026, शुक्रवार</span>
              </div>
              <div className="flex items-center gap-1.5 text-amber-200 bg-red-950/60 px-3 py-0.5 rounded-full border border-amber-500/30 text-xs sm:text-sm">
                <Clock className="w-3.5 h-3.5 text-amber-400" />
                <span>दोप. 01:00 बजे आवेगा</span>
              </div>
            </div>

            {/* Exact Note from PDF */}
            <div className="mt-3 p-4 rounded-xl bg-gradient-to-r from-amber-950/90 via-red-950/70 to-amber-950/90 border border-amber-400/50 relative overflow-hidden">
              <p className="font-hindi text-sm sm:text-base text-amber-100 font-semibold leading-relaxed">
                "{mousara.note}"
              </p>
              <div className="mt-3 flex items-center gap-2 text-xs text-amber-300 font-medium">
                <Heart className="w-3.5 h-3.5 text-red-400 fill-red-400" />
                <span>सालमगढ़ (राज.) से आदरणीय ननिहाल पक्ष का शुभागमन</span>
              </div>
            </div>

            {/* Sanskrit Shloka for Mousara */}
            <div className="mt-3 p-3 rounded-xl bg-gradient-to-r from-amber-950/70 via-red-950/50 to-amber-950/70 border border-amber-500/35 shadow-inner">
              <p className="font-hindi text-xs sm:text-sm text-amber-200/95 leading-relaxed font-semibold italic text-center">
                ॥ मातृपक्षस्य संमानं स्नेहेन परिपूरितम्। आशीर्वादेन संयुक्तं सौहार्दं वर्धते सदा॥
              </p>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-amber-500/15 flex items-center justify-between text-xs text-amber-400/60 font-hindi">
            <span>मांगलिक मौसारा</span>
            <div className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              <span>सालमगढ़ (राज.)</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
