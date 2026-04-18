'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface TerminalTextProps {
  text: string;
  speed?: number;
  className?: string;
  showCursor?: boolean;
  delay?: number;
  onComplete?: () => void;
}

export default function TerminalText({
  text,
  speed = 30,
  className = '',
  showCursor = true,
  delay = 0,
  onComplete,
}: TerminalTextProps) {
  const [displayed, setDisplayed] = useState('');
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const delayTimer = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(delayTimer);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    let i = 0;
    const interval = setInterval(() => {
      if (i < text.length) {
        setDisplayed(text.slice(0, i + 1));
        i++;
      } else {
        clearInterval(interval);
        onComplete?.();
      }
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed, started, onComplete]);

  return (
    <span className={`font-mono ${className}`}>
      {displayed}
      {showCursor && started && displayed.length < text.length && (
        <span className="terminal-cursor" />
      )}
    </span>
  );
}
