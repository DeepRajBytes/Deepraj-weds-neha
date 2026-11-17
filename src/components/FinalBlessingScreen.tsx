
import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { weddingData } from '../data/wedding';
import {
  Flame,
  Sparkles,
  Navigation,
  ExternalLink,
  MapPin,
  ArrowUp,
} from 'lucide-react';

export const FinalBlessingScreen: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const target = new Date(weddingData.weddingDateISO).getTime();

    const updateTimer = () => {
      const now = Date.now();
      const difference = target - now;

      if (difference <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
        return;
      }

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      });
    };

    updateTimer();

    const interval = window.setInterval(updateTimer, 1000);

    return () => window.clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const countdownItems = [
    { label: 'दिन', value: timeLeft.days },
    { label: 'घंटे', value: timeLeft.hours },
    { label: 'मिनट', value: timeLeft.minutes },
    { label: 'सेकंड', value: timeLeft.seconds },
  ];

  return (
    <footer className="relative py-20 sm:py-32 px-4 sm:px-6 max-w-4xl mx-auto z-10 text-center">

      {/* Auspicious Shubh Muhurat Countdown Timer */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.85 }}
        className="mb-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-amber-950/70 via-red-950/50 to-amber-950/70 border-2 border-amber-400/50 shadow-[0_20px_50px_rgba(0,0,0,0.7),0_0_30px_rgba(245,158,11,0.2)] max-w-xl mx-auto"
      >
        <div className="flex items-center justify-center gap-2 mb-2 text-amber-300">
          <Sparkles className="w-4 h-4 text-amber-400" />

          <span className="font-hindi text-sm sm:text-base font-semibold text-amber-200">
            मांगलिक शुभ लग्न मुहूर्त शेष समय
          </span>

          <Sparkles className="w-4 h-4 text-amber-400" />
        </div>

        <div className="grid grid-cols-4 gap-2 sm:gap-4 mt-5">
          {countdownItems.map((item) => (
            <div
              key={item.label}
              className="p-3 sm:p-4 rounded-2xl bg-amber-950/80 border border-amber-500/40 flex flex-col items-center shadow-inner hover:border-amber-400 transition-colors"
            >
              <span className="font-rozha text-2xl sm:text-4xl text-amber-100 font-bold tabular-nums drop-shadow-sm">
                {String(item.value).padStart(2, '0')}
              </span>

              <span className="font-hindi text-xs sm:text-sm text-amber-300 font-medium mt-1">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Sacred Glowing Diya */}
      <div className="relative mb-12 flex flex-col items-center justify-center">

        <div className="relative w-28 h-28 flex items-center justify-center">

          {/* Flame Halo Glow */}
          <div className="absolute w-20 h-20 rounded-full bg-amber-500/30 blur-xl animate-pulse" />

          {/* Animated Flame */}
          <motion.div
            animate={{
              scale: [1, 1.08, 0.96, 1],
              rotate: [-1, 2, -2, 0],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="relative z-10 text-amber-400"
          >
            <Flame className="w-16 h-16 text-amber-400 fill-amber-300 drop-shadow-[0_0_20px_rgba(245,158,11,0.9)]" />
          </motion.div>
        </div>

        {/* Closing Main Message */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-rozha text-3xl sm:text-5xl lg:text-6xl gold-text-bright tracking-wide max-w-2xl mx-auto leading-tight drop-shadow-xl mt-4"
        >
          {weddingData.closingMessage}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-yatra text-2xl sm:text-4xl text-amber-300 font-bold mt-4"
        >
          {weddingData.closingSalutation}
        </motion.p>

        {/* Traditional Floral Accent */}
        <div className="flex items-center gap-3 mt-6 text-amber-400/80">
          <span className="w-16 h-[1px] bg-gradient-to-r from-transparent to-amber-400" />

          <span className="font-marcellus text-sm tracking-widest uppercase">
            शुभमस्तु
          </span>

          <span className="w-16 h-[1px] bg-gradient-to-l from-transparent to-amber-400" />
        </div>
      </div>

      {/* Location Navigation Button */}
      <div className="flex flex-col items-center justify-center gap-3 mb-16">
        <motion.a
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          href="https://maps.app.goo.gl/tWg9o1ExbAxuv9iu5"
          target="_blank"
          rel="noopener noreferrer"
          className="px-7 sm:px-9 py-3.5 sm:py-4 rounded-full font-hindi font-bold text-sm sm:text-base text-[#1E0308] flex items-center gap-2.5 cursor-pointer shadow-[0_10px_25px_rgba(245,158,11,0.45)] hover:shadow-[0_15px_35px_rgba(245,158,11,0.65)] transition-all"
          style={{
            background:
              'linear-gradient(135deg, #FFFDF5 0%, #FEF08A 25%, #F59E0B 75%, #D97706 100%)',
            border: '2px solid #FEF08A',
          }}
        >
          <Navigation className="w-5 h-5 text-[#1E0308] animate-bounce" />

          <span>विवाह स्थल देखें (Google Maps नेविगेशन)</span>

          <ExternalLink className="w-4 h-4 text-[#1E0308]" />
        </motion.a>

        <span className="font-hindi text-xs sm:text-sm text-amber-300/80 flex items-center gap-1.5">
          <MapPin className="w-3.5 h-3.5 text-amber-400" />

          <span>
            पाटीदार धर्मशाला, कलालिया (तह.-जावरा, जिला-रतलाम)
          </span>
        </span>
      </div>

      {/* Back to Top */}
      <div className="flex flex-col items-center justify-center gap-2">
        <button
          onClick={scrollToTop}
          className="p-3 rounded-full bg-amber-950/50 border border-amber-500/30 text-amber-300 hover:text-amber-100 hover:border-amber-400 cursor-pointer transition-colors"
          title="शीर्ष पर जाएं"
          aria-label="शीर्ष पर जाएं"
        >
          <ArrowUp className="w-5 h-5" />
        </button>

        <span className="font-hindi text-xs text-amber-400/60">
          आरंभ पर लौटें
        </span>
      </div>

      {/* Copyright & Tradition Note */}
      <div className="mt-12 text-center text-xs text-amber-400/50 font-hindi">
        <p>॥ सर्वे भवन्तु सुखिनः सर्वे सन्तु निरामयाः ॥</p>

        <p className="mt-1">
          शुभ विवाह समारोह 2026 • कलालिया, जावरा (रतलाम)
        </p>
      </div>

    </footer>
  );
};
