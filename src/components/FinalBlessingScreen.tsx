import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { weddingData } from '../data/wedding';
import { Flame, Heart, Send, Sparkles, Navigation, ExternalLink, MapPin, ArrowUp } from 'lucide-react';
import confetti from 'canvas-confetti';

interface Blessing {
  id: string;
  name: string;
  message: string;
  date: string;
}

export const FinalBlessingScreen: React.FC = () => {
  const [blessings, setBlessings] = useState<Blessing[]>([]);
  const [guestName, setGuestName] = useState('');
  const [guestMessage, setGuestMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
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

  useEffect(() => {
    try {
      const saved = typeof window !== 'undefined' && window.localStorage ? localStorage.getItem('wedding_blessings') : null;
      if (saved) {
        setBlessings(JSON.parse(saved));
        return;
      }
    } catch {
      // In sandboxed iframes, localStorage may be restricted; ignore and use in-memory state
    }

    const initialBlessings: Blessing[] = [
      {
        id: '1',
        name: 'कन्हैयालाल जी सेन एवं परिवार',
        message: 'वर-वधू को सुखी एवं मंगलमय दांपत्य जीवन की अनंत शुभकामनाएं एवं शुभाशीर्वाद!',
        date: 'आज',
      },
      {
        id: '2',
        name: 'समरथ जी सेन (सालमगढ़)',
        message: 'मांगलिक कार्य निर्विघ्न संपन्न हो, भगवान श्री गणेश जी की कृपा सदा बनी रहे।',
        date: 'आज',
      },
    ];
    setBlessings(initialBlessings);

    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        localStorage.setItem('wedding_blessings', JSON.stringify(initialBlessings));
      }
    } catch {
      // Ignored safely
    }
  }, []);

  const handleSendBlessing = (e: React.FormEvent) => {
    e.preventDefault();
    if (!guestName.trim() || !guestMessage.trim()) return;

    const newBlessing: Blessing = {
      id: Date.now().toString(),
      name: guestName.trim(),
      message: guestMessage.trim(),
      date: 'अभी-अभी',
    };

    const updated = [newBlessing, ...blessings];
    setBlessings(updated);

    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        localStorage.setItem('wedding_blessings', JSON.stringify(updated));
      }
    } catch {
      // Ignored safely
    }

    setGuestName('');
    setGuestMessage('');
    setSubmitted(true);

    try {
      confetti({
        particleCount: 50,
        spread: 70,
        origin: { y: 0.8 },
        colors: ['#F59E0B', '#DC2626', '#FEF08A'],
      });
    } catch {
      // fallback
    }

    setTimeout(() => setSubmitted(false), 3500);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-20 sm:py-32 px-4 sm:px-6 max-w-4xl mx-auto z-10 text-center">
      {/* Auspicious Shubh Muhurat Countdown Timer (Moved to Last Section) */}
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
          {[
            { label: 'दिन', value: timeLeft.days },
            { label: 'घंटे', value: timeLeft.hours },
            { label: 'मिनट', value: timeLeft.minutes },
            { label: 'सेकंड', value: timeLeft.seconds },
          ].map((item) => (
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

      {/* Sacred Glowing Rangoli & Diya Visual Centerpiece */}
      <div className="relative mb-12 flex flex-col items-center justify-center">
        {/* Animated Sacred Diya with Flickering Light */}
        <div className="relative w-28 h-28 flex items-center justify-center">
          {/* Flame Halo Glow */}
          <div className="absolute w-20 h-20 rounded-full bg-amber-500/30 blur-xl animate-pulse" />
          
          {/* Flame SVG */}
          <motion.div
            animate={{ scale: [1, 1.08, 0.96, 1], rotate: [-1, 2, -2, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
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

        {/* Small Traditional Floral Accent */}
        <div className="flex items-center gap-3 mt-6 text-amber-400/80">
          <span className="w-16 h-[1px] bg-gradient-to-r from-transparent to-amber-400" />
          <span className="font-marcellus text-sm tracking-widest uppercase">शुभमस्तु</span>
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
            background: 'linear-gradient(135deg, #FFFDF5 0%, #FEF08A 25%, #F59E0B 75%, #D97706 100%)',
            border: '2px solid #FEF08A',
          }}
        >
          <Navigation className="w-5 h-5 text-[#1E0308] animate-bounce" />
          <span>विवाह स्थल देखें (Google Maps नेविगेशन)</span>
          <ExternalLink className="w-4 h-4 text-[#1E0308]" />
        </motion.a>
        <span className="font-hindi text-xs sm:text-sm text-amber-300/80 flex items-center gap-1.5">
          <MapPin className="w-3.5 h-3.5 text-amber-400" />
          <span>पाटीदार धर्मशाला, कलालिया (तह.-जावरा, जिला-रतलाम)</span>
        </span>
      </div>

      {/* Interactive Guest Blessings / शुभकामनाएं Board */}
      {/* <div className="royal-card rounded-2xl p-6 sm:p-9 border border-amber-500/40 text-left mb-12">
        <div className="flex items-center justify-between gap-4 mb-4 pb-3 border-b border-amber-500/25">
          <div className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-red-400 fill-red-400" />
            <h3 className="font-rozha text-xl sm:text-2xl text-amber-100">
              मंगल शुभकामनाएं एवं शुभाशीर्वाद
            </h3>
          </div>
          <span className="font-hindi text-xs text-amber-300/80">
            {blessings.length} आशीर्वाद प्राप्त
          </span>
        </div> */}

        {/* Input Form */}
        {/* <form onSubmit={handleSendBlessing} className="mb-6 space-y-3">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="sm:col-span-1">
              <label htmlFor="guest-name" className="sr-only">आपका शुभ नाम</label>
              <input
                id="guest-name"
                type="text"
                placeholder="आपका शुभ नाम..."
                value={guestName}
                onChange={(e) => setGuestName(e.target.value)}
                maxLength={40}
                required
                className="w-full px-4 py-2.5 rounded-xl bg-amber-950/40 border border-amber-500/30 text-amber-100 placeholder:text-amber-400/40 text-sm focus:outline-none focus:border-amber-400 font-hindi"
              />
            </div>
            <div className="sm:col-span-2 flex gap-2">
              <label htmlFor="guest-msg" className="sr-only">मंगल संदेश</label>
              <input
                id="guest-msg"
                type="text"
                placeholder="वर-वधू हेतु मंगल संदेश / शुभकामनाएं..."
                value={guestMessage}
                onChange={(e) => setGuestMessage(e.target.value)}
                maxLength={120}
                required
                className="flex-1 px-4 py-2.5 rounded-xl bg-amber-950/40 border border-amber-500/30 text-amber-100 placeholder:text-amber-400/40 text-sm focus:outline-none focus:border-amber-400 font-hindi"
              />
              <button
                type="submit"
                className="px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-hindi font-bold text-sm flex items-center gap-1.5 cursor-pointer transition-colors shrink-0"
              >
                <Send className="w-4 h-4" />
                <span className="hidden sm:inline">भेजें</span>
              </button>
            </div>
          </div>
          {submitted && (
            <motion.p
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-xs text-amber-300 font-hindi flex items-center gap-1"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>आपके पावन आशीर्वाद हेतु हार्दिक धन्यवाद!</span>
            </motion.p>
          )}
        </form> */}

        {/* Display List of Blessings */}
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

      {/* Subtle Copyright & Tradition Note */}
      <div className="mt-12 text-center text-xs text-amber-400/50 font-hindi">
        <p>॥ सर्वे भवन्तु सुखिनः सर्वे सन्तु निरामयाः ॥</p>
        <p className="mt-1">शुभ विवाह समारोह 2026 • कलालिया, जावरा (रतलाम)</p>
      </div>
    </footer>
  );
};
