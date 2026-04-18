'use client';

import { useState, useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';

interface TypewriterTextProps {
  text: string;
  delay?: number;
  speed?: number;
  className?: string;
  glitchChance?: number;
}

const GLITCH_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()_+';

export default function TypewriterText({
  text,
  delay = 0,
  speed = 30, // ms per char
  className = '',
  glitchChance = 0.05,
}: TypewriterTextProps) {
  const [displayText, setDisplayText] = useState('');
  const [isComplete, setIsComplete] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!isInView) return;

    let timeoutId: NodeJS.Timeout;
    let currentIndex = 0;

    const typeChar = () => {
      if (currentIndex >= text.length) {
        setIsComplete(true);
        return;
      }

      // Add a glitch character temporarily before replacing it
      const shouldGlitch = Math.random() < glitchChance;
      
      if (shouldGlitch && currentIndex < text.length - 1) {
        const randomChar = GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)];
        setDisplayText(text.substring(0, currentIndex) + randomChar);
        
        timeoutId = setTimeout(() => {
          setDisplayText(text.substring(0, currentIndex + 1));
          currentIndex++;
          timeoutId = setTimeout(typeChar, speed);
        }, speed * 1.5);
      } else {
        setDisplayText(text.substring(0, currentIndex + 1));
        currentIndex++;
        timeoutId = setTimeout(typeChar, speed);
      }
    };

    // Start after initial delay
    timeoutId = setTimeout(typeChar, delay);

    return () => clearTimeout(timeoutId);
  }, [isInView, text, delay, speed, glitchChance]);

  return (
    <span ref={ref} className={className}>
      {displayText}
      {!isComplete && (
        <span className="inline-block w-[0.5em] h-[1em] bg-current opacity-70 animate-pulse ml-0.5" />
      )}
    </span>
  );
}
