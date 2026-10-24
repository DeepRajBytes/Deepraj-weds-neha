import React from 'react';
import { motion } from 'motion/react';
import { weddingData } from '../data/wedding';
import { Flame, Bell, Sparkles, Sun, HeartHandshake, BookOpen, Clock } from 'lucide-react';

export const WeddingTimeline: React.FC = () => {
  const primaryEvents = weddingData.events.filter((e) => e.category === 'primary');

  const getEventIcon = (type: string) => {
    switch (type) {
      case 'pooja':
        return <Sun className="w-6 h-6 text-amber-300" />;
      case 'sunderkand':
        return <BookOpen className="w-6 h-6 text-amber-300" />;
      case 'mataji':
        return <Bell className="w-6 h-6 text-amber-300" />;
      case 'mandap':
        return <HeartHandshake className="w-6 h-6 text-amber-300" />;
      case 'haldi':
      default:
        return <Flame className="w-6 h-6 text-amber-300" />;
    }
  };

  return (
    <section id="karyakram" className="relative py-16 sm:py-24 px-4 sm:px-6 max-w-5xl mx-auto z-10">
      {/* Decorative Traditional Toran & Header */}
      <div className="text-center mb-14 sm:mb-20">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-center gap-3 mb-3"
        >
          <span className="w-8 sm:w-16 h-[1.5px] bg-gradient-to-r from-transparent to-amber-400" />
          <span className="text-xs sm:text-sm font-marcellus tracking-widest text-amber-400/90 uppercase">
            Auspicious Ceremonies • शुभ बेलाएं
          </span>
          <span className="w-8 sm:w-16 h-[1.5px] bg-gradient-to-l from-transparent to-amber-400" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-rozha text-3xl sm:text-5xl lg:text-6xl gold-text-bright tracking-wide drop-shadow-md"
        >
          {weddingData.eventsSectionTitle}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-yatra text-lg sm:text-2xl text-amber-300/90 mt-3"
        >
          {weddingData.eventsSectionSubtitle}
        </motion.p>

        {/* Date highlight badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 mt-4 px-4 py-1.5 rounded-full bg-amber-950/70 border border-amber-500/40 text-amber-200 text-xs sm:text-sm font-hindi"
        >
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>24 से 26 नवंबर 2026</span>
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
        </motion.div>
      </div>

      {/* Vertical Animated Timeline */}
      <div className="relative">
        {/* Central Golden Timeline Spine */}
        <div className="absolute left-6 sm:left-1/2 top-4 bottom-8 -translate-x-1/2 w-0.5 bg-gradient-to-b from-amber-500/80 via-amber-300 to-amber-600/30" />

        <div className="space-y-12 sm:space-y-16">
          {primaryEvents.map((event, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={event.id}
                initial={{
                  opacity: 0,
                  x: isEven ? -40 : 40,
                  rotateY: isEven ? 8 : -8,
                  scale: 0.95,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  rotateY: 0,
                  scale: 1,
                }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{
                  duration: 0.85,
                  delay: index * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={`relative flex items-center ${
                  isEven ? 'sm:flex-row' : 'sm:flex-row-reverse'
                } flex-row pl-12 sm:pl-0`}
              >
                {/* Timeline Center Node */}
                <div className="absolute left-6 sm:left-1/2 -translate-x-1/2 z-20 flex items-center justify-center">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-tr from-amber-700 via-amber-500 to-yellow-300 p-0.5 shadow-[0_0_20px_rgba(245,158,11,0.6)]">
                    <div className="w-full h-full rounded-full bg-[#2A050D] flex items-center justify-center">
                      {getEventIcon(event.iconType)}
                    </div>
                  </div>
                </div>

                {/* Content Card (Left or Right on desktop) */}
                <div className={`w-full sm:w-1/2 ${isEven ? 'sm:pr-14' : 'sm:pl-14'}`}>
                  <div className="relative royal-card rounded-2xl p-6 sm:p-7 border border-amber-500/40 hover:border-amber-400/70 transition-all duration-300 hover:shadow-[0_15px_40px_rgba(245,158,11,0.25)] group">
                    {/* Traditional Corner Ornaments */}
                    <div className="corner-ornament-tl opacity-60" />
                    <div className="corner-ornament-tr opacity-60" />

                    {/* Auspicious Step Number & Tithi from PDF */}
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2 pb-2 border-b border-amber-500/20 text-xs text-amber-300/90 font-hindi">
                      <span className="font-marcellus tracking-wider font-bold">कार्यक्रम #{index + 1}</span>
                      <span className="bg-amber-950/70 px-2.5 py-0.5 rounded-full border border-amber-500/30 text-amber-200">
                        {event.hindiTithi}
                      </span>
                    </div>

                    {/* Event Title */}
                    <h3 className="font-rozha text-2xl sm:text-3xl gold-text-bright group-hover:scale-[1.02] transition-transform origin-left">
                      {event.title}
                    </h3>

                    {/* Auspicious Date & Time */}
                    <div className="mt-2 text-sm sm:text-base font-hindi font-bold text-amber-300 flex flex-wrap items-center gap-3">
                      <div className="flex items-center gap-1.5">
                        <Sparkles className="w-4 h-4 text-amber-400" />
                        <span>{event.date}</span>
                      </div>
                      {event.time && (
                        <div className="flex items-center gap-1.5 text-amber-200 bg-red-950/50 px-2.5 py-0.5 rounded-full border border-amber-400/30 text-xs sm:text-sm">
                          <Clock className="w-3.5 h-3.5 text-amber-400" />
                          <span>{event.time}</span>
                        </div>
                      )}
                    </div>

                    {/* Auspicious Sanskrit Shloka */}
                    {event.description && (
                      <div className="mt-3 p-3 rounded-xl bg-gradient-to-r from-amber-950/70 via-red-950/50 to-amber-950/70 border border-amber-500/35 shadow-inner">
                        <p className="font-hindi text-xs sm:text-sm text-amber-200/95 leading-relaxed font-semibold italic text-center">
                          {event.description}
                        </p>
                      </div>
                    )}

                    {/* Bottom subtle rangoli accent */}
                    <div className="mt-4 flex items-center gap-1.5 opacity-60">
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                      <div className="w-8 h-[1px] bg-amber-400/40" />
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
