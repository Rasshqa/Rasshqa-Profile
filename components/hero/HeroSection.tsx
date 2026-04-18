'use client';

import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import CarDiagnostics from './CarDiagnostics';
import GlitchText from '@/components/ui/GlitchText';
import TypewriterText from '@/components/ui/TypewriterText';

const ApolloScene = dynamic(() => import('./ApolloScene'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="font-mono text-xs text-copper/40 tracking-widest animate-pulse">
        [LOADING 3D ENGINE...]
      </div>
    </div>
  ),
});

const roles = [
  'FULLSTACK_DEV',
  'MOBILE_DEV',
  'DATA_ANALYST_IN_TRAINING',
  '3D_WEB_ENGINEER',
];

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex items-center overflow-hidden"
    >
      {/* 3D Canvas background */}
      <div className="absolute inset-0 z-0">
        <ApolloScene />
      </div>

      {/* Gradient overlay for text readability */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-obsidian/90 via-obsidian/50 to-transparent" />
      <div className="absolute inset-0 z-[1] bg-gradient-to-t from-obsidian via-transparent to-obsidian/40" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 py-20">
        <div className="max-w-2xl">
          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 mb-6 border border-neon-blue/20 bg-obsidian/60 backdrop-blur-sm"
          >
            <span className="w-2 h-2 rounded-full bg-terminal-green animate-pulse" />
            <span className="font-mono text-xs text-neon-blue/80 tracking-widest">
              STATUS: [PILOT_LOG_ACTIVE]
            </span>
          </motion.div>

          {/* Main title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-copper tracking-wider text-glow-copper mb-4 leading-tight"
          >
            <GlitchText><TypewriterText text="RASHQA" delay={500} speed={80} glitchChance={0.05} /></GlitchText>
            <br />
            <span className="text-stark-white text-3xl sm:text-4xl lg:text-5xl xl:text-6xl">
              ANDREAN
            </span>
            <br />
            <span className="text-copper-light text-2xl sm:text-3xl lg:text-4xl">
              FITRAH S.
            </span>
          </motion.h1>

          {/* Role terminal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="glass-panel p-4 mb-8 max-w-md"
          >
            <div className="font-mono text-xs text-neon-blue/50 mb-2 tracking-widest">
              ─── ROLE ASSIGNMENT ───
            </div>
            {roles.map((role, i) => (
              <motion.div
                key={role}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 + i * 0.15 }}
                className="font-mono text-sm text-slate-gray py-0.5 group cursor-default"
              >
                <span className="text-copper/50">{'>'}</span>{' '}
                <span className="text-neon-blue/40">[{String(i).padStart(2, '0')}]</span>{' '}
                <span className="group-hover:text-copper transition-colors duration-300">
                  {role}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* Social link */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.6 }}
            className="flex items-center gap-4"
          >
            <a
              href="#contact"
              className="group flex items-center gap-2 px-5 py-2.5 bg-copper/10 border border-copper/30 hover:border-copper hover:bg-copper/20 transition-all duration-300 font-mono text-sm text-copper tracking-wider"
            >
              <span>[OPEN_UPLINK]</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
            <a
              href="#portfolio"
              className="font-mono text-xs text-neon-blue/50 hover:text-neon-blue tracking-widest transition-colors"
            >
              [VIEW_PROJECTS]
            </a>
          </motion.div>
        </div>
      </div>

      {/* Car Diagnostics */}
      <CarDiagnostics />

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="font-mono text-[10px] text-slate-gray/30 tracking-widest">
          [SCROLL_DOWN]
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-[1px] h-8 bg-gradient-to-b from-copper/60 to-transparent"
        />
      </motion.div>
    </section>
  );
}
