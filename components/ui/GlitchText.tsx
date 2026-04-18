'use client';

import { type ReactNode } from 'react';

interface GlitchTextProps {
  children: ReactNode;
  className?: string;
}

export default function GlitchText({ children, className = '' }: GlitchTextProps) {
  const text = typeof children === 'string' ? children : '';

  return (
    <span className={`glitch-hover inline-block ${className}`} data-text={text}>
      {children}
    </span>
  );
}
