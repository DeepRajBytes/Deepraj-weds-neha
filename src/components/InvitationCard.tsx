import React, { useState } from 'react';
import { motion } from 'motion/react';
import { weddingData } from '../data/wedding';
import { GaneshaVisual } from './GaneshaVisual';
import { Sparkles, Flame, Hand, Check, ChevronDown } from 'lucide-react';
import confetti from 'canvas-confetti';
import { weddingAudio } from '../utils/audioSynthesizer';

interface InvitationCardProps {
  onAccept: () => void;
  onMusicStart?: () => void;
}

export const InvitationCard: React.FC<InvitationCardProps> = ({ onAccept, onMusicStart }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleOpenInvitation = () => {
    // If already open, just smooth-scroll down
    if (isOpen) {
      const target = document.getElementById('var-vadhu');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
      return;
    }

    setIsOpen(true);

    // Auspicious Multi-color Flower Petals & Gold Confetti Shower
    try {
      confetti({
        particleCount: 120,
        spread: 120,
        origin: { y: 0.55 },
        colors: ['#F59E0B', '#FBBF24', '#DC2626', '#E11D48', '#FB7185', '#FFFBEB', '#D97706'],
      });
      setTimeout(() => {
        confetti({
          particleCount: 70,
          spread: 90,
          origin: { y: 0.65 },
          colors: ['#F59E0B', '#FDE047', '#E11D48'],
        });
      }, 300);
    } catch {
      // Fallback gracefully
    }

    // Play Indian Wedding Audio
    try {
      weddingAudio.start();
      if (onMusicStart) onMusicStart();
    } catch {
      // Audio autoplay policy handled
    }

    // Immediately trigger onAccept to unlock and scroll
    onAccept();
  };

  return (
    <div className="relative min-h-[90vh] sm:min-h-screen flex items-center justify-center px-3 sm:px-6 py-6 sm:py-10">
      {/* Background Luminous Radial Lighting & Golden Mandala */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-45">
        <div
          className="w-[500px] h-[500px] sm:w-[750px] sm:h-[750px] rounded-full border border-amber-400/30 animate-spin"
          style={{ animationDuration: '90s' }}
        />
        <div
          className="absolute w-[350px] h-[350px] sm:w-[550px] sm:h-[550px] rounded-full border border-dashed border-amber-300/35 animate-spin"
          style={{ animationDuration: '55s', animationDirection: 'reverse' }}
        />
        <div className="absolute w-96 h-96 rounded-full bg-gradient-to-tr from-amber-500/20 via-rose-500/15 to-yellow-300/20 blur-3xl" />
      </div>

      <div className="relative z-10 w-full max-w-xl mx-auto">
        {/* The Main Royal Container with Divine Ganesha & Offered Card */}
        <div className="relative royal-card-luminous rounded-3xl p-5 sm:p-9 text-center overflow-hidden border-2 border-amber-400/60 shadow-[0_30px_70px_rgba(0,0,0,0.85),0_0_40px_rgba(245,158,11,0.25)]">
          {/* Ornate Gold Traditional Corner Embellishments */}
          <div className="corner-ornament-tl" />
          <div className="corner-ornament-tr" />
          <div className="corner-ornament-bl" />
          <div className="corner-ornament-br" />

          {/* Decorative Traditional Toran & Header */}
          <div className="flex justify-center items-center gap-2 mb-1 text-amber-300/80">
            <span className="w-10 sm:w-16 h-[1.5px] bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
            <span className="text-xs sm:text-sm tracking-widest font-marcellus text-amber-200 uppercase font-semibold">
              ॥ ॐ श्री गणेशाय नमः ॥
            </span>
            <span className="w-10 sm:w-16 h-[1.5px] bg-gradient-to-l from-transparent via-amber-400 to-transparent" />
          </div>

          {/* 1. Divine Arrival of Lord Ganesha */}
          <div className="relative">
            <GaneshaVisual />
            {/* Floating Flower Petal Accents around Ganesha */}
            <div className="absolute top-2 left-6 text-amber-300/70 text-sm animate-bounce" style={{ animationDuration: '3s' }}>
              🌸
            </div>
            <div className="absolute top-4 right-8 text-rose-300/70 text-sm animate-bounce" style={{ animationDuration: '3.6s' }}>
              🌺
            </div>
            <div className="absolute bottom-6 left-8 text-yellow-300/70 text-sm animate-bounce" style={{ animationDuration: '2.8s' }}>
              🌼
            </div>
            <div className="absolute bottom-6 right-8 text-amber-300/70 text-sm animate-bounce" style={{ animationDuration: '3.2s' }}>
              🌸
            </div>
          </div>

          {/* Divine Gift Header Text */}
          <div className="mt-2 mb-3 flex items-center justify-center gap-2 text-xs sm:text-sm text-amber-200/90 font-hindi">
            <Sparkles className="w-4 h-4 text-amber-400 animate-spin" style={{ animationDuration: '8s' }} />
            <span className="font-semibold text-amber-200">
              भगवान श्री गणेश जी के करकमलों से सादर निमंत्रण पत्रिका
            </span>
            <Sparkles className="w-4 h-4 text-amber-400 animate-spin" style={{ animationDuration: '8s' }} />
          </div>

          {/* 2. THE SACRED ROYAL INVITATION CARD */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleOpenInvitation}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="relative group cursor-pointer my-3 p-5 sm:p-7 rounded-2xl overflow-hidden transition-all duration-300 shadow-[0_15px_40px_rgba(0,0,0,0.65),0_0_25px_rgba(245,158,11,0.35)]"
            style={{
              background: 'linear-gradient(145deg, #FFFDF7 0%, #FEF3C7 35%, #FDE68A 75%, #F59E0B 100%)',
              border: isOpen ? '2.5px solid #10B981' : isHovered ? '2.5px solid #F59E0B' : '2px solid #D97706',
            }}
          >
            {/* Traditional Inner Card Filigree Borders */}
            <div className="absolute inset-1.5 border border-amber-800/25 rounded-xl pointer-events-none" />
            <div className="absolute inset-2.5 border border-dashed border-amber-800/20 rounded-lg pointer-events-none" />

            {/* Auspicious Kumkum Seal on Top of Card */}
            <div className="flex justify-center mb-1">
              <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-red-700 via-red-600 to-rose-500 border border-amber-200 flex items-center justify-center shadow-md">
                <span className="text-white text-xs font-bold">卐</span>
              </div>
            </div>

            {/* Shubh Vivah Tag */}
            <span className="font-marcellus text-xs sm:text-sm text-red-950/80 font-bold uppercase tracking-widest block">
              ॥ शुभ विवाह महोत्सव ॥
            </span>

            {/* Couple's Names In Gleaming Red & Gold Typography */}
            <div className="my-2 py-1">
              <h1 className="font-rozha text-2xl sm:text-4xl lg:text-5xl text-[#5B0E1D] font-extrabold tracking-wider drop-shadow-sm leading-tight">
                {weddingData.couple.displayName}
              </h1>
              <span className="font-marcellus text-xs sm:text-sm text-amber-900/90 tracking-widest block mt-0.5 font-bold">
                {weddingData.couple.englishName}
              </span>
            </div>

            {/* Subtitle */}
            <div className="space-y-0.5 my-2">
              <span className="font-yatra text-base sm:text-lg text-red-900 font-bold block">
                सादर आमंत्रण
              </span>
              <p className="font-hindi text-xs sm:text-sm text-stone-800 font-medium max-w-sm mx-auto leading-relaxed">
                {weddingData.invitationSubtitle}
              </p>
            </div>

            {/* Dates badge */}
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-red-950/10 border border-red-900/25 text-red-950 text-xs font-hindi font-bold my-1">
              <Flame className="w-3.5 h-3.5 text-amber-600" />
              <span>26 से 28 नवंबर 2026</span>
              <Flame className="w-3.5 h-3.5 text-amber-600" />
            </div>

            {/* INTERACTIVE CALL-TO-ACTION (Click Card to Open) */}
            <div className="mt-4 pt-3 border-t border-amber-800/20 flex flex-col items-center">
              {!isOpen ? (
                <motion.div
                  animate={{ scale: [1, 1.04, 1], y: [0, -3, 0] }}
                  transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-red-700 via-red-600 to-amber-700 text-white font-hindi text-xs sm:text-sm font-bold shadow-[0_10px_25px_rgba(185,28,28,0.5)] cursor-pointer hover:scale-105 active:scale-95 transition-transform"
                >
                  <Hand className="w-4 h-4 text-yellow-300 animate-pulse" />
                  <span>कृपया आमंत्रण पत्र खोलें (Touch to Open)</span>
                  <Sparkles className="w-4 h-4 text-yellow-300 animate-pulse" />
                </motion.div>
              ) : (
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-emerald-700 to-teal-800 text-white font-hindi text-xs sm:text-sm font-bold shadow-[0_10px_25px_rgba(5,150,105,0.4)] cursor-pointer hover:scale-105 active:scale-95 transition-transform"
                >
                  <Check className="w-4 h-4 text-emerald-300" />
                  <span>✓ आमंत्रण स्वीकार हुआ • नीचे कार्यक्रम देखें</span>
                  <ChevronDown className="w-4 h-4 text-emerald-300 animate-bounce" />
                </motion.div>
              )}
              <span className="text-[11px] text-amber-950/80 font-hindi mt-1.5 font-medium">
                {!isOpen
                  ? 'कार्ड पर टच करें एवं संपूर्ण वैवाहिक कार्यक्रम देखें'
                  : 'नीचे स्क्रॉल करें या बटन दबाएं'}
              </span>
            </div>
          </motion.div>

          {/* Auspicious Diya & Blessing Footer Text */}
          <div className="mt-4 pt-3 border-t border-amber-500/20 flex items-center justify-between text-xs text-amber-300/80 font-hindi">
            <span>ग्राम-कलालिया, तह.-जावरा, जिला-रतलाम (म.प्र.)</span>
            <div className="flex items-center gap-1 text-amber-400">
              <Flame className="w-3.5 h-3.5 fill-amber-400 animate-pulse" />
              <span>मार्गशीर्ष माह 2026</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
