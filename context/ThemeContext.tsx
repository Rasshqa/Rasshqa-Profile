'use client';

import React, { createContext, useContext, useState, useCallback, type ReactNode } from 'react';

type ThemeMode = 'neon' | 'stealth';

interface ThemeContextType {
  mode: ThemeMode;
  toggleMode: () => void;
  isNeon: boolean;
}

const ThemeContext = createContext<ThemeContextType>({
  mode: 'neon',
  toggleMode: () => {},
  isNeon: true,
});

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<ThemeMode>('neon');

  const toggleMode = useCallback(() => {
    setMode((prev) => (prev === 'neon' ? 'stealth' : 'neon'));
  }, []);

  return (
    <ThemeContext.Provider value={{ mode, toggleMode, isNeon: mode === 'neon' }}>
      <div className={mode === 'stealth' ? 'stealth-mode' : ''}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
