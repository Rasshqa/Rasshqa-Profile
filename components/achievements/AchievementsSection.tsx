'use client';

import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { milestones } from '@/data/milestones';

export default function AchievementsSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const traceProgress = useTransform(scrollYProgress, [0.1, 0.9], [0, 100]);
  const traceHeight = useTransform(traceProgress, (v) => `${v}%`);

  const statusIcons = {
    COMPLETED: '◆',
    IN_PROGRESS: '◇',
    PENDING: '○',
  };

  const statusColors = {
    COMPLETED: 'text-copper',
    IN_PROGRESS: 'text-neon-blue',
    PENDING: 'text-slate-gray/40',
  };

  return (
    <section id="achievements" className="relative py-24 lg:py-32" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="font-mono text-xs text-neon-blue/50 tracking-[0.3em] mb-3">
            {'// SECTION_004'}
          </div>
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-stark-white tracking-wider">
            MILESTONE <span className="text-copper text-glow-copper">TRACE</span>
          </h2>
          <div className="w-24 h-[2px] bg-gradient-to-r from-copper to-transparent mt-4" />
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* PCB Trace line */}
          <div className="absolute left-6 lg:left-8 top-0 bottom-0 w-[2px] bg-copper/10">
            <motion.div
              className="w-full bg-gradient-to-b from-copper to-copper-light origin-top"
              style={{
                height: traceHeight,
                boxShadow: '0 0 10px rgba(241, 95, 8, 0.4), 0 0 25px rgba(241, 95, 8, 0.15)',
              }}
            />
          </div>

          {/* Milestone items */}
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.id}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.12, duration: 0.5 }}
                className="relative flex gap-6 lg:gap-8 group"
              >
                {/* Node */}
                <div className="relative z-10 flex-shrink-0 mt-1">
                  <div
                    className={`
                      pcb-node transition-all duration-500
                      ${milestone.status === 'COMPLETED' ? 'pcb-node-active' : ''}
                      ${milestone.status === 'IN_PROGRESS' ? 'border-neon-blue bg-neon-blue/20 shadow-[0_0_8px_rgba(0,166,255,0.4)]' : ''}
                    `}
                  />
                </div>

                {/* Content card */}
                <div
                  className={`
                    flex-1 glass-panel p-5 transition-all duration-300
                    group-hover:border-copper/30
                    ${milestone.status === 'COMPLETED' ? 'border-copper/15' : ''}
                  `}
                >
                  {/* Year + Status */}
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-[10px] text-neon-blue/40 tracking-widest">
                      [{milestone.year}]
                    </span>
                    <span className={`font-mono text-[10px] tracking-widest ${statusColors[milestone.status]}`}>
                      {statusIcons[milestone.status]} {milestone.status}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-mono text-sm font-semibold text-stark-white tracking-wider mb-2 group-hover:text-copper transition-colors">
                    {milestone.title}
                  </h3>

                  {/* Description */}
                  <p className="font-mono text-xs text-slate-gray/50 leading-relaxed">
                    {milestone.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* End marker */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 1.5 }}
            className="relative flex items-center gap-6 lg:gap-8 mt-8"
          >
            <div className="relative z-10 flex-shrink-0">
              <div className="w-3.5 h-3.5 rounded-full border-2 border-dashed border-copper/20 bg-obsidian" />
            </div>
            <div className="font-mono text-[10px] text-slate-gray/20 tracking-widest">
              [END_OF_TRACE] // MORE_MILESTONES_PENDING...
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
