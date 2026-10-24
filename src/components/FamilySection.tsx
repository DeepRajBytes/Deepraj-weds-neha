import React from 'react';
import { motion } from 'motion/react';
import { weddingData } from '../data/wedding';
import { Heart, Users, Sparkles, Building2, Flower2, Phone, Baby } from 'lucide-react';

export const FamilySection: React.FC = () => {
  const {
    vineet,
    nanihalPaksh,
    darshanabhilashi,
    visheshAagrah,
    swagatakshuk,
    bhanej,
    balManuhar,
    commercialFirms,
  } = weddingData;

  return (
    <section id="parivar" className="relative py-16 sm:py-24 px-4 sm:px-6 max-w-5xl mx-auto z-10">
      {/* Decorative Header */}
      <div className="text-center mb-14">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-3 mb-3"
        >
          <span className="w-12 h-[1px] bg-gradient-to-r from-transparent to-amber-400" />
          <span className="text-xs sm:text-sm font-marcellus tracking-widest text-amber-400 uppercase">
            Family & Auspicious Hosts • स्नेहिल आमंत्रण
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
          {weddingData.familySectionTitle}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="font-yatra text-base sm:text-xl text-amber-300/90 mt-2 max-w-2xl mx-auto"
        >
          {weddingData.familySectionSubtitle}
        </motion.p>
      </div>

      <div className="space-y-8">
        {/* Row 1: विनीत (Vineet) Only */}
        <div className="max-w-xl mx-auto">
          {/* विनीत */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="royal-card rounded-2xl p-6 sm:p-8 border-2 border-amber-500/70 flex flex-col justify-between shadow-[0_20px_45px_rgba(0,0,0,0.65)] text-center relative overflow-hidden"
          >
            <div className="corner-ornament-tl opacity-70" />
            <div className="corner-ornament-tr opacity-70" />
            <div className="corner-ornament-bl opacity-70" />
            <div className="corner-ornament-br opacity-70" />

            <div>
              <div className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full bg-red-950/70 border border-amber-400/50 text-amber-300 font-rozha text-xl mb-5 shadow-inner">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>{vineet.title}</span>
                <Sparkles className="w-4 h-4 text-amber-400" />
              </div>

              <div className="space-y-2.5 font-hindi text-base sm:text-xl text-amber-100 font-bold max-w-sm mx-auto">
                {vineet.members.map((mem, idx) => (
                  <p key={idx} className="flex items-center justify-center gap-2">
                    <Flower2 className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>{mem}</span>
                  </p>
                ))}
              </div>

              <div className="mt-5 pt-3 border-t border-amber-500/20 font-hindi text-sm sm:text-base text-amber-200">
                <p className="font-semibold text-amber-300">{vineet.firm}</p>
                <p className="text-xs text-amber-300/80 mt-0.5">ग्राम-कलालिया, तह.-जावरा, जिला-रतलाम (म.प्र.)</p>
              </div>
            </div>

            <div className="mt-5 pt-3 border-t border-amber-500/25 flex items-center justify-center gap-3 text-xs sm:text-sm text-amber-200">
              <a
                href={`tel:${vineet.phone}`}
                className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-amber-950/60 border border-amber-400/40 text-amber-300 hover:text-amber-100 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                <span>मो. {vineet.phone}</span>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Row 2: ननिहाल पक्ष (नि.-सालमगढ़) */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75 }}
          className="royal-card rounded-2xl p-6 sm:p-9 border border-amber-400/70 relative overflow-hidden shadow-[0_20px_45px_rgba(0,0,0,0.7)]"
        >
          <div className="corner-ornament-tl opacity-70" />
          <div className="corner-ornament-tr opacity-70" />

          <div className="flex flex-wrap items-center justify-between gap-2 mb-6 pb-3 border-b border-amber-500/30">
            <div className="flex items-center gap-2 text-amber-400">
              <Heart className="w-5 h-5 text-red-400 fill-red-400" />
              <h3 className="font-rozha text-2xl sm:text-3xl text-amber-100 font-bold">
                {nanihalPaksh.title}
              </h3>
            </div>
            <span className="font-hindi text-xs sm:text-sm bg-amber-950/80 px-3 py-1 rounded-full border border-amber-500/40 text-amber-200">
              {nanihalPaksh.residence}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {nanihalPaksh.members.map((mem, index) => (
              <div
                key={index}
                className="p-3 rounded-xl bg-amber-950/40 border border-amber-500/30 flex items-center gap-2.5 text-amber-100 font-hindi text-sm sm:text-base font-semibold"
              >
                <Flower2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{mem}</span>
              </div>
            ))}
          </div>

          <div className="mt-5 p-3 rounded-xl bg-amber-950/60 border border-amber-400/40 text-center font-hindi text-xs sm:text-sm text-amber-200">
            <span className="font-bold text-amber-300">स्नेही बच्चे: </span>
            <span>{nanihalPaksh.children}</span>
          </div>
        </motion.div>

        {/* Row 3: दर्शनाभिलाषी (Darshanabhilashi Groups) */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75 }}
          className="royal-card rounded-2xl p-6 sm:p-8 border border-amber-500/50 relative overflow-hidden"
        >
          <div className="flex items-center justify-center gap-2 mb-6 text-amber-400">
            <Users className="w-5 h-5 text-amber-300" />
            <h3 className="font-rozha text-2xl sm:text-3xl text-amber-100 font-bold">
              {darshanabhilashi.title}
            </h3>
            <Users className="w-5 h-5 text-amber-300" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {darshanabhilashi.groups.map((grp, index) => (
              <div
                key={index}
                className="p-4 rounded-xl bg-gradient-to-b from-amber-950/50 to-red-950/40 border border-amber-500/30 flex flex-col justify-between"
              >
                <div>
                  <div className="inline-block px-2.5 py-0.5 rounded-md bg-amber-900/60 border border-amber-500/30 text-xs font-hindi font-bold text-amber-300 mb-2">
                    {grp.location}
                  </div>
                  <p className="font-hindi text-sm sm:text-base text-amber-100 font-semibold leading-relaxed">
                    {grp.names}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Row 4: विशेष आग्रह, स्वागतातुर & भाणेज */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* विशेष आग्रह (राकोदा) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="royal-card rounded-2xl p-5 border border-amber-500/40 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-3 pb-2 border-b border-amber-500/20">
                <span className="font-rozha text-lg text-amber-100 font-bold">{visheshAagrah.title}</span>
                <span className="text-[11px] font-hindi text-amber-300 bg-amber-950/80 px-2 py-0.5 rounded border border-amber-500/30">{visheshAagrah.residence}</span>
              </div>
              <ul className="space-y-1.5 font-hindi text-xs sm:text-sm text-amber-200">
                {visheshAagrah.members.map((m, idx) => (
                  <li key={idx} className="flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-amber-400" />
                    <span>{m}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* स्वागतातुर (पटलावद) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="royal-card rounded-2xl p-5 border border-amber-500/40 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-3 pb-2 border-b border-amber-500/20">
                <span className="font-rozha text-lg text-amber-100 font-bold">{swagatakshuk.title}</span>
                <span className="text-[11px] font-hindi text-amber-300 bg-amber-950/80 px-2 py-0.5 rounded border border-amber-500/30">{swagatakshuk.residence}</span>
              </div>
              <ul className="space-y-1.5 font-hindi text-xs sm:text-sm text-amber-200">
                {swagatakshuk.members.map((m, idx) => (
                  <li key={idx} className="flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-amber-400" />
                    <span>{m}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* भाणेज (रियावन) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="royal-card rounded-2xl p-5 border border-amber-500/40 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-3 pb-2 border-b border-amber-500/20">
                <span className="font-rozha text-lg text-amber-100 font-bold">{bhanej.title}</span>
                <span className="text-[11px] font-hindi text-amber-300 bg-amber-950/80 px-2 py-0.5 rounded border border-amber-500/30">{bhanej.residence}</span>
              </div>
              <ul className="space-y-1.5 font-hindi text-xs sm:text-sm text-amber-200">
                {bhanej.members.map((m, idx) => (
                  <li key={idx} className="flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-amber-400" />
                    <span>{m}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Row 5: बालमनुहार (Balmanuhar with playful poem and child names) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="royal-card rounded-2xl p-6 sm:p-8 border-2 border-amber-400/60 text-center relative overflow-hidden"
        >
          <div className="flex items-center justify-center gap-2 mb-3 text-amber-300">
            <Baby className="w-5 h-5 text-amber-400" />
            <h3 className="font-rozha text-2xl sm:text-3xl text-amber-100 font-bold">
              {balManuhar.title}
            </h3>
            <Baby className="w-5 h-5 text-amber-400" />
          </div>

          <div className="max-w-md mx-auto p-4 rounded-xl bg-gradient-to-r from-amber-950/80 via-red-950/60 to-amber-950/80 border border-amber-500/40 mb-4">
            <p className="font-hindi text-base sm:text-lg text-amber-100 font-bold leading-relaxed whitespace-pre-line italic">
              "{balManuhar.poem}"
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 max-w-2xl mx-auto">
            {balManuhar.children.map((child, idx) => (
              <span
                key={idx}
                className="px-3.5 py-1 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-200 font-hindi text-xs sm:text-sm font-semibold"
              >
                {child}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Row 6: पारिवारिक व्यावसायिक प्रतिष्ठान */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="royal-card rounded-2xl p-6 border border-amber-500/40 text-center"
        >
          <div className="flex items-center justify-center gap-2 mb-4 text-amber-400">
            <Building2 className="w-5 h-5 text-amber-300" />
            <span className="font-hindi text-sm text-amber-300/90 font-semibold tracking-wider">
              पारिवारिक प्रतिष्ठान
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {commercialFirms.map((firm, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-amber-950/40 border border-amber-500/30 text-amber-100 font-hindi font-bold text-sm sm:text-base flex items-center justify-center text-center"
              >
                {firm}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
