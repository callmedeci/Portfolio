'use client';

import { useLocalStorage } from '@/hooks/useLocalStorage';
import { createContext, useContext, useEffect, useState } from 'react';

const DarkModeContext = createContext();

function DarkModeProvider({ children }) {
  const [isDark, setIsDark] = useLocalStorage(false, 'isDarkMode');

  function toggleDark() {
    setIsDark((dark) => !dark);
  }

  useEffect(function () {
    setIsDark(window.matchMedia('(prefers-color-scheme: dark)').matches);
  }, []);

  useEffect(
    function () {
      isDark
        ? document.documentElement.classList.add('dark')
        : document.documentElement.classList.remove('dark');
    },
    [isDark]
  );

  return (
    <DarkModeContext.Provider value={{ isDark, setIsDark, toggleDark }}>
      {children}
    </DarkModeContext.Provider>
  );
}

export function useDarkMode() {
  const context = useContext(DarkModeContext);

  if (!context) throw new Error('useTheme used outside ThemeProvider');

  return context;
}

export default DarkModeProvider;
