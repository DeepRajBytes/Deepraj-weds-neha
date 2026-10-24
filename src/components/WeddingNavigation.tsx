import React, { useState } from 'react';
import { Menu, X, ChevronRight, ChevronLeft, Sparkles } from 'lucide-react';

interface WeddingNavigationProps {
  currentSection: string;
  onNavigate: (sectionId: string) => void;
}

export const WeddingNavigation: React.FC<WeddingNavigationProps> = ({
  currentSection,
  onNavigate,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'nimantran', label: 'निमंत्रण' },
    { id: 'var-vadhu', label: 'वर-वधू' },
    { id: 'karyakram', label: 'शुभ बेलाएं' },
    { id: 'manglik', label: 'मांगलिक/मामेरा' },
    { id: 'pritibhoj', label: 'प्रीतिभोज' },
    { id: 'barat', label: 'बारात प्रस्थान' },
    { id: 'parivar', label: 'परिवार' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  const currentIndex = navItems.findIndex((item) => item.id === currentSection);
  const prevItem = currentIndex > 0 ? navItems[currentIndex - 1] : null;
  const nextItem = currentIndex < navItems.length - 1 ? navItems[currentIndex + 1] : null;

  return (
    <>
      {/* Top Floating Traditional Header Bar */}
      <header className="fixed top-0 left-0 right-0 z-40 px-4 sm:px-8 py-3.5 flex items-center justify-between pointer-events-none">
        {/* Zone 1: Single text element wordmark */}
        <div className="pointer-events-auto">
          <button
            onClick={() => handleNavClick('nimantran')}
            className="flex items-center gap-2 group cursor-pointer text-left focus:outline-none"
          >
            <span className="font-rozha text-lg sm:text-xl gold-text-bright font-bold tracking-wider">
              शुभ विवाह
            </span>
            <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-amber-400" />
            <span className="hidden sm:inline-block font-marcellus text-xs text-amber-300/80">
              2026
            </span>
          </button>
        </div>

        {/* Zone 2: Clean 4-5 Navigation links (Desktop) */}
        <nav className="hidden md:flex pointer-events-auto items-center gap-1 px-3 py-1.5 rounded-full bg-[#200308]/85 border border-amber-500/40 backdrop-blur-md shadow-2xl">
          {navItems.map((item) => {
            const isActive = currentSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-3.5 py-1 rounded-full text-xs font-hindi transition-all cursor-pointer whitespace-nowrap ${isActive
                    ? 'bg-gradient-to-r from-amber-600 to-amber-500 text-stone-950 font-bold shadow-md'
                    : 'text-amber-200/80 hover:text-amber-100 hover:bg-amber-950/40'
                  }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: Mobile Menu Trigger */}
        <div className="flex md:hidden pointer-events-auto items-center gap-2 mr-14">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-full bg-[#200308]/90 border border-amber-500/40 text-amber-300 hover:text-amber-100 focus:outline-none shadow-lg"
            aria-label="सूची खोलें"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-[#120306]/95 backdrop-blur-xl flex flex-col justify-center items-center p-6 md:hidden animate-in fade-in">
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="absolute top-5 right-5 p-2 rounded-full border border-amber-500/40 text-amber-300"
            aria-label="बंद करें"
          >
            <X className="w-5 h-5" />
          </button>

          <span className="font-rozha text-2xl gold-text-bright mb-6">
            मांगलिक सूची
          </span>

          <div className="flex flex-col items-center gap-4 w-full max-w-xs">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="w-full py-3 rounded-xl border border-amber-500/30 bg-amber-950/40 font-hindi text-base text-amber-100 font-medium hover:bg-amber-900/40 transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Floating Bottom Step Bar (Previous / Next navigation) */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 flex items-center gap-3 px-4 py-2 rounded-full bg-[#200308]/90 border border-amber-500/40 backdrop-blur-md shadow-2xl">
        {prevItem ? (
          <button
            onClick={() => handleNavClick(prevItem.id)}
            className="flex items-center gap-1 font-hindi text-xs text-amber-300 hover:text-amber-100 cursor-pointer"
          >
            <ChevronLeft className="w-3.5 h-3.5" />
            <span>पिछला</span>
          </button>
        ) : (
          <span className="flex items-center gap-1 font-hindi text-xs text-amber-400/40 cursor-not-allowed">
            <ChevronLeft className="w-3.5 h-3.5" />
            <span>आरंभ</span>
          </span>
        )}

        <div className="w-1.5 h-1.5 rounded-full bg-amber-400" />

        {nextItem ? (
          <button
            onClick={() => handleNavClick(nextItem.id)}
            className="flex items-center gap-1 font-hindi text-xs text-amber-300 hover:text-amber-100 cursor-pointer font-bold"
          >
            <span>अगला ({nextItem.label})</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        ) : (
          <button
            onClick={() => handleNavClick('nimantran')}
            className="flex items-center gap-1 font-hindi text-xs text-amber-300 hover:text-amber-100 cursor-pointer font-bold"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>पुनः दर्शन</span>
          </button>
        )}
      </div>
    </>
  );
};
