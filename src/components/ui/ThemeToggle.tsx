'use client';

import { Moon, SunMedium } from 'lucide-react';
import useTheme from '@/hooks/useTheme';

export default function ThemeToggle() {
  const { isDark, toggleTheme, mounted } = useTheme();

  if (!mounted) {
    return <button aria-label="Toggle theme" className="btn-outline opacity-0 pointer-events-none" />;
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className="inline-flex items-center justify-center w-10 h-10 rounded-full glass border border-white/10 text-white/80 transition-all duration-300 hover:text-white hover:border-[#0A84FF]/40"
    >
      {isDark ? <SunMedium size={18} /> : <Moon size={18} />}
    </button>
  );
}
