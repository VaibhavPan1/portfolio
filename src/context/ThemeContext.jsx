import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const ACCENTS = [
  { id: 'sky', name: 'Sky Blue', color: '#38bdf8', lightColor: '#0284c7' },
  { id: 'emerald', name: 'Emerald', color: '#34d399', lightColor: '#059669' },
  { id: 'amber', name: 'Amber', color: '#fbbf24', lightColor: '#d97706' },
  { id: 'rose', name: 'Rose', color: '#fb7185', lightColor: '#e11d48' },
  { id: 'indigo', name: 'Indigo', color: '#818cf8', lightColor: '#4f46e5' },
];

export function ThemeProvider({ children }) {
  const [mode, setMode] = useState(() => {
    const saved = localStorage.getItem('portfolio_theme_mode');
    if (saved === 'light' || saved === 'dark') return saved;
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches
      ? 'light'
      : 'dark';
  });

  const [accent, setAccent] = useState(() => {
    const saved = localStorage.getItem('portfolio_theme_accent');
    return ACCENTS.some((a) => a.id === saved) ? saved : 'sky';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', mode);
    localStorage.setItem('portfolio_theme_mode', mode);
  }, [mode]);

  useEffect(() => {
    document.documentElement.setAttribute('data-accent', accent);
    localStorage.setItem('portfolio_theme_accent', accent);
  }, [accent]);

  const toggleMode = () => {
    setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const changeAccent = (newAccent) => {
    setAccent(newAccent);
  };

  return (
    <ThemeContext.Provider
      value={{
        mode,
        accent,
        toggleMode,
        setAccent: changeAccent,
        accents: ACCENTS,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider');
  return ctx;
}
