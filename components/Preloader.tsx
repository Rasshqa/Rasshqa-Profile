'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const bootSequence = [
  '[SYS]: BIOS CHECK .......................... OK',
  '[SYS]: MEMORY ALLOCATION ................... 64GB',
  '[SYS]: GPU PIPELINE ........................ ARMED',
  '[SYS]: NEURAL INTERFACE .................... SYNC',
  '[LOG]: INITIALIZING R.A.V.E. PILOT\'S LOG',
  '[LOG]: SYSTEM BOOT ......................... ████',
  '[LOG]: LOADING 3D ASSETS ................... ░░░░',
  '[LOG]: COMPILING SHADERS ................... ████',
  '[LOG]: ESTABLISHING UPLINK ................. DONE',
  '[SYS]: ALL SYSTEMS NOMINAL',
  '',
  '> WELCOME, PILOT.',
  '> ENTERING THE NEXUS...',
];

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const [lines, setLines] = useState<string[]>([]);
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let lineIndex = 0;
    let cleared = false;
    const interval = setInterval(() => {
      if (cleared) return;
      if (lineIndex < bootSequence.length) {
        const currentLine = bootSequence[lineIndex];
        const currentIndex = lineIndex;
        lineIndex++;
        setLines((prev) => [...prev, currentLine]);
        setProgress(((currentIndex + 1) / bootSequence.length) * 100);
        if (terminalRef.current) {
          terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
        }
      } else {
        cleared = true;
        clearInterval(interval);
        setTimeout(() => {
          setIsExiting(true);
          setTimeout(onComplete, 800);
        }, 600);
      }
    }, 180);

    return () => {
      cleared = true;
      clearInterval(interval);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-obsidian"
          exit={{
            opacity: 0,
            filter: 'brightness(3) contrast(2)',
            transition: { duration: 0.6 },
          }}
        >
          {/* Scanline effect */}
          <div className="absolute inset-0 scanline-overlay opacity-30" />

          {/* Terminal window */}
          <div className="w-full max-w-2xl px-6">
            {/* Terminal header */}
            <div className="flex items-center gap-2 px-4 py-2 border border-copper/30 border-b-0 bg-obsidian-light rounded-t-md">
              <div className="w-3 h-3 rounded-full bg-copper/60" />
              <div className="w-3 h-3 rounded-full bg-neon-blue/40" />
              <div className="w-3 h-3 rounded-full bg-slate-gray/30" />
              <span className="ml-3 text-xs font-mono text-copper/70 tracking-widest">
                R.A.V.E. TERMINAL v4.2.1
              </span>
            </div>

            {/* Terminal body */}
            <div
              ref={terminalRef}
              className="h-64 overflow-hidden px-4 py-3 border border-copper/20 bg-obsidian font-mono text-sm leading-relaxed"
            >
              {lines.map((line, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.15 }}
                  className={`${
                    line?.startsWith('>')
                      ? 'text-copper font-bold text-glow-copper'
                      : line?.startsWith('[LOG]')
                      ? 'text-neon-blue'
                      : 'text-slate-gray/80'
                  }`}
                >
                  {line || ''}
                </motion.div>
              ))}
              {lines.length < bootSequence.length && (
                <span className="terminal-cursor text-copper" />
              )}
            </div>

            {/* Progress bar */}
            <div className="h-1 bg-obsidian-light border border-t-0 border-copper/20 rounded-b-md overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-copper to-copper-light"
                style={{ boxShadow: '0 0 15px rgba(241, 95, 8, 0.6)' }}
                initial={{ width: '0%' }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
              />
            </div>

            {/* Status text */}
            <div className="mt-4 text-center font-mono text-xs text-slate-gray/50 tracking-[0.3em]">
              {progress < 100
                ? `LOADING SYSTEMS... ${Math.round(progress)}%`
                : 'BOOT SEQUENCE COMPLETE'}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
