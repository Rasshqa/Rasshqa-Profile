'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import type { Project } from '@/data/projects';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [isHovered, setIsHovered] = useState(false);

  const statusColors = {
    DEPLOYED: 'text-terminal-green',
    IN_DEV: 'text-copper',
    ARCHIVED: 'text-slate-gray/50',
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.12, duration: 0.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative"
    >
      <div className={`
        relative glass-panel p-6 h-full transition-all duration-500
        ${isHovered ? 'border-copper/40 glow-copper' : 'border-neon-blue/10'}
      `}>
        {/* Glitch overlay on hover */}
        {isHovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.08, 0, 0.05, 0] }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0 bg-copper/10 pointer-events-none"
          />
        )}

        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <span className="text-2xl">{project.icon}</span>
            <div>
              <h3 className="font-mono text-base font-semibold text-stark-white tracking-wider group-hover:text-copper transition-colors">
                {project.title}
              </h3>
              <span className={`font-mono text-[10px] tracking-widest ${statusColors[project.status]}`}>
                [{project.status}]
              </span>
            </div>
          </div>
          <div className="font-mono text-xs text-neon-blue/30">
            #{String(index + 1).padStart(3, '0')}
          </div>
        </div>

        {/* Description */}
        <p className="font-mono text-xs text-slate-gray/60 leading-relaxed mb-5">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 font-mono text-[10px] text-neon-blue/60 border border-neon-blue/15 bg-neon-blue/5 tracking-wider"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action buttons */}
        <div className="flex gap-3 pt-4 border-t border-neon-blue/10">
          {project.codeUrl && (
            <a
              href={project.codeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-neon-blue/50 hover:text-neon-blue tracking-wider transition-colors"
            >
              [VIEW_CODE]
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-copper/50 hover:text-copper tracking-wider transition-colors"
            >
              [LIVE_DEMO]
            </a>
          )}
          {!project.codeUrl && !project.liveUrl && (
            <span className="font-mono text-xs text-slate-gray/30 tracking-wider">
              [PENDING_DEPLOY]
            </span>
          )}
        </div>

        {/* Corner accent */}
        <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-copper/20 group-hover:border-copper/50 transition-colors" />
        <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-copper/20 group-hover:border-copper/50 transition-colors" />
      </div>
    </motion.div>
  );
}
