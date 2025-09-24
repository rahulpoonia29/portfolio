import { IconMoon, IconSun } from '@tabler/icons-react';
import { useTheme } from './theme-provider';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const isDark = theme === 'dark';

  const toggle = () => setTheme(isDark ? 'light' : 'dark');

  // Sizes chosen to align with Tailwind spacing (w-14, h-8, p-1 => knob moves ~24px)
  const knobX = isDark ? 24 : 0;

  // If not mounted yet, render a simple inert button to avoid hydration mismatch
  if (!mounted) {
    return (
      <button
        type="button"
        aria-label="Toggle color theme"
        disabled
        className="fixed top-4 right-4 z-50 flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-200 bg-white/80 dark:border-zinc-700 dark:bg-zinc-900/70"
      >
        <IconMoon className="h-5 w-5 text-zinc-700 dark:text-zinc-300" />
      </button>
    );
  }

  return (
    <button
      type="button"
      aria-label="Toggle color theme"
      aria-pressed={isDark}
      onClick={toggle}
      className="group focus-visible:ring-ring fixed top-4 right-4 z-50 flex items-center rounded-full p-1 focus-visible:ring-2 focus-visible:outline-none"
    >
      {/* Track: uses shadcn-like tokens (bg-muted / bg-primary variants). Tweak to match your design tokens */}
      <div
        className={`relative flex h-8 w-14 items-center rounded-full p-1 transition-colors ${isDark ? 'bg-primary/10 dark:bg-primary/30' : 'bg-muted/10 dark:bg-muted/20'} border-border border`}
      >
        {/* Knob: motion div translates horizontally */}
        <motion.div
          initial={false}
          animate={{ x: knobX }}
          transition={{ type: 'spring', stiffness: 700, damping: 30 }}
          className="bg-background absolute top-1 left-1 flex h-6 w-6 items-center justify-center rounded-full shadow-sm"
        >
          {/* Icon crossfade inside knob */}
          <AnimatePresence mode="wait">
            {isDark ? (
              <motion.span
                key="sun"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.18 }}
                className="text-amber-400"
              >
                <IconSun className="h-4 w-4" />
              </motion.span>
            ) : (
              <motion.span
                key="moon"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.18 }}
                className="text-zinc-700 dark:text-zinc-300"
              >
                <IconMoon className="h-4 w-4" />
              </motion.span>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Optional ambient icons to hint state (subtle, decorative) */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-between px-2 text-xs opacity-0 transition-opacity group-hover:opacity-100">
          <IconMoon className="h-3 w-3 text-zinc-400" />
          <IconSun className="h-3 w-3 text-amber-300" />
        </div>
      </div>
    </button>
  );
}
