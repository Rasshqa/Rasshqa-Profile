'use client';

import { useTheme } from '@/context/ThemeContext';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

export default function CyberpunkSettings() {
  const { mode, toggleMode, isNeon } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-4 right-4 z-[100]">
      {/* Toggle button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="w-10 h-10 flex items-center justify-center border border-neon-blue/30 bg-obsidian/90 backdrop-blur-sm text-neon-blue hover:border-neon-blue/60 transition-colors"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        title="System Settings"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="3" />
          <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
        </svg>
      </motion.button>

      {/* Settings panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-12 right-0 w-64 glass-panel p-4 border border-neon-blue/20"
          >
            {/* Header */}
            <div className="font-mono text-xs text-neon-blue/70 tracking-widest mb-4 pb-2 border-b border-neon-blue/10">
              [SYS_CONFIG]
            </div>

            {/* System Mode Toggle */}
            <div className="mb-4">
              <div className="font-mono text-xs text-slate-gray/60 mb-2">DISPLAY_MODE:</div>
              <button
                onClick={toggleMode}
                className="w-full flex items-center justify-between px-3 py-2 border border-copper/20 bg-obsidian/80 hover:border-copper/50 transition-colors group"
              >
                <span className="font-mono text-xs text-copper tracking-wider">
                  {isNeon ? '[NEON_CORE]' : '[STEALTH_MODE]'}
                </span>
                <div
                  className={`w-8 h-4 rounded-full relative transition-colors duration-300 ${
                    isNeon ? 'bg-copper/40' : 'bg-slate-gray/20'
                  }`}
                >
                  <div
                    className={`absolute top-0.5 w-3 h-3 rounded-full transition-all duration-300 ${
                      isNeon
                        ? 'right-0.5 bg-copper shadow-[0_0_8px_rgba(241,95,8,0.6)]'
                        : 'left-0.5 bg-slate-gray/50'
                    }`}
                  />
                </div>
              </button>
            </div>

            {/* Mode description */}
            <div className="font-mono text-[10px] text-slate-gray/40 leading-relaxed">
              {isNeon
                ? '> NEON_CORE: All visual effects active. Glow, pulse, and scanline overlays enabled.'
                : '> STEALTH_MODE: Minimal visual noise. Reduced glow and animations for focus.'}
            </div>

            {/* Status */}
            <div className="mt-3 pt-2 border-t border-neon-blue/10">
              <div className="font-mono text-[10px] text-terminal-green/60">
                [STATUS]: THEME_ENGINE // {mode.toUpperCase()} // ACTIVE
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
