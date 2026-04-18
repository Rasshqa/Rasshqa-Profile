'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { diagnosticLogs } from '@/data/diagnostics';

export default function CarDiagnostics() {
  const [isOpen, setIsOpen] = useState(false);
  const [logIndex, setLogIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setLogIndex((prev) => (prev + 1) % diagnosticLogs.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const currentLogs = diagnosticLogs[logIndex];

  return (
    <div className="absolute bottom-4 left-4 z-20">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="font-mono text-xs text-neon-blue/60 hover:text-neon-blue tracking-widest transition-colors px-3 py-1.5 border border-neon-blue/20 hover:border-neon-blue/40 bg-obsidian/80 backdrop-blur-sm"
      >
        {isOpen ? '[HIDE_DIAG]' : '[CAR_DIAG]'}
      </button>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          className="mt-2 glass-panel p-3 w-72"
        >
          <div className="font-mono text-[10px] text-neon-blue/50 tracking-widest mb-2">
            ─── VEHICLE DIAGNOSTICS ───
          </div>
          {currentLogs.map((log, i) => (
            <motion.div
              key={`${logIndex}-${i}`}
              initial={{ opacity: 0, x: -5 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="font-mono text-[11px] flex justify-between py-0.5"
            >
              <span className="text-slate-gray/60">[{log.system}]:</span>
              <span className={log.status === 'NOMINAL' || log.status === 'OK' || log.status === 'ACTIVE' || log.status === 'OPTIMAL'
                ? 'text-terminal-green/80'
                : 'text-neon-blue/70'
              }>
                {log.status}
              </span>
            </motion.div>
          ))}
          <div className="mt-2 pt-2 border-t border-neon-blue/10 font-mono text-[9px] text-slate-gray/30">
            CYCLE: {logIndex + 1}/{diagnosticLogs.length} // AUTO_REFRESH: 5s
          </div>
        </motion.div>
      )}
    </div>
  );
}
