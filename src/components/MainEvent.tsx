import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { weddingData } from '../data/wedding';
import { MapPin, Clock, Calendar, ExternalLink, Sparkles, Navigation } from 'lucide-react';

export const MainEvent: React.FC = () => {
  const { mainEvent, couple } = weddingData;

  // Live countdown to Pritibhoj (27 November 2026, 5:00 PM)
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const target = new Date(weddingData.weddingDateISO).getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const difference = target - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleAddToCalendar = () => {
    const title = encodeURIComponent(`शुभ विवाह प्रीतिभोज - ${couple.displayName}`);
    const details = encodeURIComponent(`वर: ${couple.groom.name}\nवधू: ${couple.bride.name}\nस्थान: ${mainEvent.venue}, ${mainEvent.addressLine1}, ${mainEvent.addressLine2}\nसमय: ${mainEvent.time}`);
    const location = encodeURIComponent(`${mainEvent.venue}, ${mainEvent.addressLine1}, ${mainEvent.addressLine2}`);
    // Google Calendar URL for 27 Nov 2026, 5:00 PM IST (11:30 AM UTC)
    const gCalUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=20261127T113000Z/20261127T183000Z&details=${details}&location=${location}`;
    window.open(gCalUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="pritibhoj" className="relative py-20 sm:py-28 px-4 sm:px-6 max-w-4xl mx-auto z-10">
      {/* Background Sacred Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 sm:w-[500px] h-80 sm:h-[500px] rounded-full bg-amber-600/15 blur-3xl pointer-events-none" />

      {/* Decorative Traditional Kicker */}
      <div className="text-center mb-10">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-amber-950/80 border border-amber-500/40 text-amber-300 text-xs sm:text-sm font-marcellus tracking-wider mb-3"
        >
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>The Grand Wedding Feast • स्नेह सहभोज</span>
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-rozha text-4xl sm:text-6xl lg:text-7xl gold-text-bright tracking-wider drop-shadow-2xl"
        >
          {mainEvent.title}
        </motion.h2>

        <p className="font-hindi text-amber-200/90 text-base sm:text-xl mt-2 font-medium">
          {mainEvent.subTitle}
        </p>
      </div>

      {/* Royal 3D Perspective Card */}
      <motion.div
        initial={{ opacity: 0, y: 40, rotateX: 10 }}
        whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        style={{ perspective: 1000 }}
        className="relative"
      >
        <div className="relative royal-card rounded-3xl p-6 sm:p-12 border-2 border-amber-400/60 shadow-[0_30px_70px_rgba(0,0,0,0.85),0_0_40px_rgba(245,158,11,0.25)] overflow-hidden">
          {/* Ornate Gold Traditional Corner Embellishments */}
          <div className="corner-ornament-tl" />
          <div className="corner-ornament-tr" />
          <div className="corner-ornament-bl" />
          <div className="corner-ornament-br" />

          {/* Golden Mandala Emblem */}
          <div className="flex justify-center mb-6">
            <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-full border border-amber-400/40 p-2 flex items-center justify-center bg-gradient-to-b from-amber-900/30 to-transparent">
              <div className="w-full h-full rounded-full border border-dashed border-amber-300/60 flex items-center justify-center animate-spin" style={{ animationDuration: '40s' }}>
                <div className="w-12 h-12 rounded-full border border-amber-400/80" />
              </div>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                <span className="font-rozha text-2xl sm:text-3xl gold-text-bright font-bold">2026</span>
                <span className="font-marcellus text-[10px] sm:text-xs text-amber-300 uppercase tracking-widest">वर्ष</span>
              </div>
            </div>
          </div>

          {/* Time & Date Cluster */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 text-center sm:text-left">
            {/* Date Card */}
            <div className="p-4 sm:p-5 rounded-2xl bg-amber-950/40 border border-amber-500/30 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-amber-500/20 border border-amber-400/40 flex items-center justify-center shrink-0">
                <Calendar className="w-6 h-6 text-amber-300" />
              </div>
              <div>
                <span className="font-hindi text-xs text-amber-300/80 block">दिनांक / Date</span>
                <span className="font-rozha text-xl sm:text-2xl text-amber-100 font-bold">
                  27.11.2026, शुक्रवार
                </span>
                <span className="font-hindi text-xs text-amber-300/70 block mt-0.5">
                  मिती अगहन सुदी 03
                </span>
              </div>
            </div>

            {/* Time Card */}
            <div className="p-4 sm:p-5 rounded-2xl bg-amber-950/40 border border-amber-500/30 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-amber-500/20 border border-amber-400/40 flex items-center justify-center shrink-0">
                <Clock className="w-6 h-6 text-amber-300" />
              </div>
              <div>
                <span className="font-hindi text-xs text-amber-300/80 block">समय / Time</span>
                <span className="font-rozha text-lg sm:text-xl text-amber-100 font-bold">
                  {mainEvent.time}
                </span>
              </div>
            </div>
          </div>

          {/* Venue & Location Details (पाटीदार धर्मशाला, कलालिया) */}
          <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-[#2A050D] to-[#1A0307] border-2 border-amber-400/50 text-center relative overflow-hidden mb-8 shadow-inner">
            <div className="flex justify-center mb-3">
              <div className="w-12 h-12 rounded-full bg-amber-500/20 border border-amber-400/50 flex items-center justify-center">
                <MapPin className="w-6 h-6 text-amber-300 animate-bounce" style={{ animationDuration: '2s' }} />
              </div>
            </div>

            <span className="font-hindi text-xs uppercase tracking-widest text-amber-300/80 block mb-1">
              स्थान / Venue
            </span>

            {/* Exact venue line from PDF */}
            <h3 className="font-rozha text-2xl sm:text-4xl text-amber-100 font-bold tracking-wide mb-2">
              {mainEvent.venue}, कलालिया
            </h3>

            {/* Address lines */}
            <p className="font-hindi text-base sm:text-xl text-amber-200 font-medium">
              {mainEvent.addressLine1}
            </p>
            <p className="font-hindi text-base sm:text-xl text-amber-300/90 font-medium">
              {mainEvent.addressLine2}
            </p>
          </div>

          {/* Interactive Actions: Google Maps & Calendar */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            {/* View Location on Google Maps Button */}
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href={mainEvent.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 sm:px-8 py-3.5 rounded-full font-hindi font-bold text-sm sm:text-base text-[#1E0308] flex items-center gap-2 cursor-pointer shadow-lg transition-transform"
              style={{
                background: 'linear-gradient(135deg, #FEF08A 0%, #F59E0B 70%, #D97706 100%)',
                border: '1px solid #FEF08A',
              }}
            >
              <Navigation className="w-4 h-4 text-[#1E0308]" />
              <span>स्थान देखें (Google Maps)</span>
              <ExternalLink className="w-4 h-4 text-[#1E0308]" />
            </motion.a>

            {/* Add to Calendar Button */}
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={handleAddToCalendar}
              className="px-5 py-3.5 rounded-full font-hindi text-sm sm:text-base text-amber-200 border border-amber-400/50 bg-amber-950/60 hover:bg-amber-900/60 flex items-center gap-2 cursor-pointer transition-colors shadow-md"
            >
              <Calendar className="w-4 h-4 text-amber-400" />
              <span>कैलेंडर में जोड़ें</span>
            </motion.button>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
