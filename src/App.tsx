/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ThreeCanvas } from './components/ThreeCanvas';
import { FloatingPetalsOverlay } from './components/FloatingPetalsOverlay';
import { InvitationCard } from './components/InvitationCard';
import { CoupleSection } from './components/CoupleSection';
import { WeddingTimeline } from './components/WeddingTimeline';
import { ManglikSchedule } from './components/ManglikSchedule';
import { MainEvent } from './components/MainEvent';
import { BaratSection } from './components/BaratSection';
import { FamilySection } from './components/FamilySection';
import { FinalBlessingScreen } from './components/FinalBlessingScreen';
import { WeddingNavigation } from './components/WeddingNavigation';
import { MusicPlayer } from './components/MusicPlayer';

export default function App() {
  const [currentSection, setCurrentSection] = useState('nimantran');
  const [musicRequested, setMusicRequested] = useState(false);
  const [isInvitationOpened, setIsInvitationOpened] = useState(false);

  // Track active section on scroll once unlocked
  useEffect(() => {
    if (!isInvitationOpened) return;

    const handleScroll = () => {
      const sections = ['nimantran', 'var-vadhu', 'karyakram', 'manglik', 'pritibhoj', 'barat', 'parivar'];
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= windowHeight * 0.4 && rect.bottom >= windowHeight * 0.2) {
            setCurrentSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isInvitationOpened]);

  const handleNavigate = (sectionId: string) => {
    setCurrentSection(sectionId);
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleAcceptInvitation = () => {
    setIsInvitationOpened(true);
    setMusicRequested(true);

    // Smoothly scroll down to the Var-Vadhu couple section
    setTimeout(() => {
      const target = document.getElementById('var-vadhu');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }, 450);
  };

  return (
    <div className="relative min-h-screen bg-[#120306] text-[#FDF8E2] overflow-x-hidden selection:bg-amber-600 selection:text-white">
      {/* 3D WebGL Scene in background */}
      <ThreeCanvas interactive={true} />

      {/* Atmospheric Flower Petals */}
      <FloatingPetalsOverlay />

      {/* Navigation (Top bar & Bottom Step Bar) - Visible ONLY after opening card */}
      {isInvitationOpened && (
        <WeddingNavigation
          currentSection={currentSection}
          onNavigate={handleNavigate}
        />
      )}

      {/* Music Player in Top Right */}
      <MusicPlayer autoStartRequested={musicRequested} />

      {/* Main Wedding Content Flow - Directly lands on Touch to Open screen */}
      <main className="relative z-10 w-full">
        {/* Page 1 — Direct Landing on Touch to Open Invitation Card */}
        <section
          id="nimantran"
          className="relative pt-6 sm:pt-12 min-h-screen flex items-center justify-center"
        >
          <InvitationCard
            onAccept={handleAcceptInvitation}
            onMusicStart={() => setMusicRequested(true)}
          />
        </section>

        {/* ALL REMAINING SECTIONS ARE UNLOCKED ONLY WHEN USER CLICKS "TOUCH TO OPEN" */}
        {isInvitationOpened && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Page 2 — वर एवं वधू */}
            <CoupleSection />

            {/* Page 3 — विवाह कार्यक्रम (शुभ बेलाएं) */}
            <WeddingTimeline />

            {/* Page 4 — शुभ मांगलिक कार्यक्रम (गंगौज व मौसारा) */}
            <ManglikSchedule />

            {/* Page 5 — MAIN EVENT: प्रीतिभोज (पाटीदार धर्मशाला, कलालिया) */}
            <MainEvent />

            {/* Page 6 — बारात प्रस्थान (अर्निया गुर्जर हेतु) */}
            <BaratSection />

            {/* Page 7 — परिवार / आमंत्रक (विनीत, ननिहाल पक्ष, दर्शनाभिलाषी, विशेष आग्रह, स्वागतातुर, भाणेज, बालमनुहार) */}
            <FamilySection />

            {/* Final Screen: सादर आमंत्रण, Diya, Marigolds & Interactive Guestbook */}
            <FinalBlessingScreen />
          </motion.div>
        )}
      </main>
    </div>
  );
}
