'use client';

import { useTheme as useNextTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function useTheme() {
  const { theme, resolvedTheme, setTheme } = useNextTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const activeTheme = mounted ? resolvedTheme ?? theme : 'dark';
  const isDark = activeTheme === 'dark';

  const toggleTheme = () => {
    setTheme(isDark ? 'light' : 'dark');
  };

  return { theme: activeTheme, isDark, toggleTheme, mounted };
}
