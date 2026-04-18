'use client';

import { useState, useCallback } from 'react';
import dynamic from 'next/dynamic';
import { ThemeProvider } from '@/context/ThemeContext';
import Preloader from '@/components/Preloader';
import NoiseOverlay from '@/components/ui/NoiseOverlay';

const CustomCursor = dynamic(() => import('@/components/ui/CustomCursor'), {
  ssr: false,
});
const SoundEffects = dynamic(() => import('@/components/ui/SoundEffects'), {
  ssr: false,
});

const HeroSection = dynamic(() => import('@/components/hero/HeroSection'), {
  ssr: false,
});
const AboutSection = dynamic(
  () => import('@/components/about/AboutSection'),
  { ssr: false }
);
const PortfolioSection = dynamic(
  () => import('@/components/portfolio/PortfolioSection'),
  { ssr: false }
);
const AchievementsSection = dynamic(
  () => import('@/components/achievements/AchievementsSection'),
  { ssr: false }
);
const ContactSection = dynamic(
  () => import('@/components/contact/ContactSection'),
  { ssr: false }
);
const CyberpunkSettings = dynamic(
  () => import('@/components/ui/CyberpunkSettings'),
  { ssr: false }
);

export default function Page() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadComplete = useCallback(() => {
    setIsLoading(false);
  }, []);

  return (
    <ThemeProvider>
      {/* Preloader */}
      {isLoading && <Preloader onComplete={handleLoadComplete} />}

      {/* Cyberpunk UI Overlay */}
      <CustomCursor />
      <SoundEffects />

      {/* Noise overlay */}
      <NoiseOverlay />

      {/* Settings panel */}
      {!isLoading && <CyberpunkSettings />}

      {/* Main content */}
      <main
        className={`flex-1 ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-1000`}
      >
        <HeroSection />

        {/* Section divider */}
        <div className="w-full max-w-7xl mx-auto px-6 lg:px-12">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-copper/20 to-transparent" />
        </div>

        <AboutSection />

        <div className="w-full max-w-7xl mx-auto px-6 lg:px-12">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-neon-blue/15 to-transparent" />
        </div>

        <PortfolioSection />

        <div className="w-full max-w-7xl mx-auto px-6 lg:px-12">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-copper/20 to-transparent" />
        </div>

        <AchievementsSection />

        <div className="w-full max-w-7xl mx-auto px-6 lg:px-12">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-neon-blue/15 to-transparent" />
        </div>

        <ContactSection />

        {/* Footer */}
        <footer className="py-8 border-t border-neon-blue/5">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
            <div className="font-mono text-[10px] text-slate-gray/25 tracking-widest space-y-1">
              <div>
                ═══════════════════════════════════════════════════
              </div>
              <div>
                R.A.V.E. SYSTEM // DESIGNED & BUILT BY RASHQA ANDREAN
              </div>
              <div>
                POWERED BY NEXT.JS × THREE.JS × REACT THREE FIBER
              </div>
              <div>
                © {new Date().getFullYear()} // ALL RIGHTS RESERVED
              </div>
              <div>
                ═══════════════════════════════════════════════════
              </div>
            </div>
          </div>
        </footer>
      </main>
    </ThemeProvider>
  );
}
