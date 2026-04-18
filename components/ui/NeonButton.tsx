'use client';

import { motion } from 'framer-motion';
import { type ReactNode } from 'react';

interface NeonButtonProps {
  children: ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: 'blue' | 'copper';
  className?: string;
  hoverText?: string;
}

export default function NeonButton({
  children,
  onClick,
  href,
  variant = 'blue',
  className = '',
  hoverText,
}: NeonButtonProps) {
  const colors = {
    blue: {
      border: 'border-neon-blue/50',
      text: 'text-neon-blue',
      hoverBg: 'hover:bg-neon-blue/10',
      shadow: 'hover:shadow-[0_0_15px_rgba(0,166,255,0.4)]',
      glow: 'neon-pulse-btn',
    },
    copper: {
      border: 'border-copper/50',
      text: 'text-copper',
      hoverBg: 'hover:bg-copper/10',
      shadow: 'hover:shadow-[0_0_15px_rgba(241,95,8,0.4)]',
      glow: '',
    },
  };

  const c = colors[variant];

  const Component = href ? motion.a : motion.button;
  const props = href
    ? { href, target: '_blank', rel: 'noopener noreferrer' }
    : { onClick };

  return (
    <Component
      {...(props as Record<string, unknown>)}
      className={`
        group relative px-6 py-2.5 font-mono text-sm tracking-wider
        border ${c.border} ${c.text} ${c.hoverBg} ${c.shadow}
        bg-obsidian/80 backdrop-blur-sm transition-all duration-300
        overflow-hidden ${c.glow} ${className}
      `}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
    >
      {/* Hover bg sweep */}
      <span
        className={`absolute inset-0 ${
          variant === 'blue' ? 'bg-neon-blue' : 'bg-copper'
        } opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
      />

      {/* Default text */}
      <span className="relative inline-block group-hover:opacity-0 transition-opacity duration-200">
        [{typeof children === 'string' ? children : children}]
      </span>

      {/* Hover text (glitch swap) */}
      {hoverText && (
        <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 font-mono text-sm tracking-wider">
          [{hoverText}]
        </span>
      )}
    </Component>
  );
}
