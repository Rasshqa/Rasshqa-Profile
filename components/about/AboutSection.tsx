'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';

const bioLines = [
  { prefix: 'PILOT_ID', value: 'RASHQA_ANDREAN_FITRAH_S', color: 'text-copper' },
  { prefix: 'DESIGNATION', value: 'STUDENT // DEVELOPER // CREATOR', color: 'text-neon-blue' },
  { prefix: 'AFFILIATION', value: 'SMAKZIE_INSTITUTE', color: 'text-slate-gray' },
  { prefix: 'PROGRAMMING_JOURNEY', value: 'DEEP_LEARNING_IN_PROGRESS', color: 'text-terminal-green' },
  { prefix: 'CORE_STACK', value: 'LARAVEL // PHP // JS // DART', color: 'text-neon-blue' },
  { prefix: 'FUTURE_AMBITION', value: 'MASTERING_FULLSTACK + MOBILE + DATA_ANALYTICS', color: 'text-copper' },
  { prefix: 'STATUS', value: '[ACTIVE_LEARNING_MODE]', color: 'text-terminal-green' },
];

const skills = [
  { name: 'PHP / Laravel', level: 85 },
  { name: 'JavaScript / TypeScript', level: 75 },
  { name: 'HTML / CSS / Tailwind', level: 90 },
  { name: 'Three.js / WebGL', level: 65 },
  { name: 'Flutter / Dart', level: 50 },
  { name: 'MySQL / Database', level: 70 },
  { name: 'Python / Data', level: 40 },
  { name: 'Git / DevOps', level: 60 },
];

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="relative py-24 lg:py-32" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="font-mono text-xs text-neon-blue/50 tracking-[0.3em] mb-3">
            {'// SECTION_002'}
          </div>
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-stark-white tracking-wider">
            PILOT&apos;S <span className="text-copper text-glow-copper">INTERFACE</span>
          </h2>
          <div className="w-24 h-[2px] bg-gradient-to-r from-copper to-transparent mt-4" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Terminal Bio Panel */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="glass-panel p-6 lg:p-8 border-glow-blue scanline-overlay relative overflow-hidden"
          >
            {/* Terminal header */}
            <div className="flex items-center gap-2 mb-6 pb-3 border-b border-neon-blue/10">
              <div className="w-2.5 h-2.5 rounded-full bg-copper/60" />
              <div className="w-2.5 h-2.5 rounded-full bg-neon-blue/40" />
              <div className="w-2.5 h-2.5 rounded-full bg-slate-gray/30" />
              <span className="ml-2 font-mono text-[10px] text-neon-blue/40 tracking-widest">
                PILOT_DATA.log
              </span>
            </div>

            {/* Bio lines */}
            <div className="space-y-3">
              {bioLines.map((line, i) => (
                <motion.div
                  key={line.prefix}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="font-mono text-sm"
                >
                  <span className="text-slate-gray/40">[</span>
                  <span className="text-neon-blue/60">{line.prefix}</span>
                  <span className="text-slate-gray/40">]: </span>
                  <span className={line.color}>{line.value}</span>
                </motion.div>
              ))}
            </div>

            {/* Description paragraph */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 1.2 }}
              className="mt-8 pt-6 border-t border-neon-blue/10"
            >
              <p className="text-slate-gray/70 text-sm leading-relaxed font-body">
                Seorang pelajar yang passionate dalam dunia pemrograman dan teknologi.
                Memulai perjalanan dari web development dengan Laravel dan PHP, lalu
                memperluas horizon ke dunia 3D web dengan Three.js, mobile development
                dengan Flutter, serta sedang mendalami data analytics. Setiap baris kode
                adalah langkah menuju masa depan yang lebih baik.
              </p>
            </motion.div>
          </motion.div>

          {/* Skills Panel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="glass-panel-copper p-6 lg:p-8"
          >
            <div className="font-mono text-xs text-copper/60 tracking-widest mb-6">
              ─── SKILL DIAGNOSTICS ───
            </div>

            <div className="space-y-4">
              {skills.map((skill, i) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.5 + i * 0.1 }}
                >
                  <div className="flex justify-between mb-1">
                    <span className="font-mono text-xs text-slate-gray/70">
                      {skill.name}
                    </span>
                    <span className="font-mono text-xs text-copper/70">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="h-1.5 bg-obsidian-lighter rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : {}}
                      transition={{ delay: 0.7 + i * 0.1, duration: 0.8, ease: 'easeOut' }}
                      className="h-full rounded-full bg-gradient-to-r from-copper to-copper-light"
                      style={{
                        boxShadow: '0 0 8px rgba(241, 95, 8, 0.4)',
                      }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Status */}
            <div className="mt-8 pt-4 border-t border-copper/10 font-mono text-[10px] text-slate-gray/30">
              [LAST_CALIBRATION]: {new Date().toISOString().split('T')[0]} // AUTO_UPDATE: ENABLED
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
