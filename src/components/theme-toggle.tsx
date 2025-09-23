'use client';

import { IconMoon, IconSun } from '@tabler/icons-react';
// import { MoonStar, SunMedium } from "lucide-react";
import { useTheme } from './theme-provider';
import { useState, useEffect } from 'react';

export default function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  // Avoid hydration mismatch; render placeholder until mounted
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      aria-label="Toggle color theme"
      onClick={toggle}
      className="group fixed top-4 right-4 z-50 flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-200 bg-white/80 backdrop-blur transition-all hover:shadow focus-visible:ring-2 focus-visible:ring-zinc-400 focus-visible:outline-none dark:border-zinc-700 dark:bg-zinc-900/70 dark:focus-visible:ring-zinc-600"
    >
      {mounted && isDark ? (
        <IconSun className="size-5 text-amber-400 transition-transform group-hover:rotate-6" />
      ) : (
        <IconMoon className="size-5 text-zinc-700 transition-transform group-hover:-rotate-6 dark:text-zinc-300" />
      )}
    </button>
  );
}
