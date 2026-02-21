'use client';

import { useTransition } from 'react';
import { useRouter } from 'next/navigation';
import { setLocale } from '@/i18n/actions';
import { Locale } from '@/i18n/request';
import { motion } from 'framer-motion';

interface LanguageToggleProps {
  currentLocale: Locale;
}

export default function LanguageToggle({ currentLocale }: LanguageToggleProps) {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const toggleLocale = () => {
    const newLocale = currentLocale === 'en' ? 'es' : 'en';
    startTransition(async () => {
      await setLocale(newLocale);
      router.refresh();
    });
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggleLocale}
      disabled={isPending}
      className="relative flex items-center gap-2 px-3 py-1.5 rounded-full glass-card border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 text-sm font-medium"
      aria-label="Toggle language"
    >
      <span className={`transition-opacity ${currentLocale === 'en' ? 'text-blue-400' : 'text-slate-400'}`}>
        EN
      </span>
      <span className="text-slate-600">/</span>
      <span className={`transition-opacity ${currentLocale === 'es' ? 'text-blue-400' : 'text-slate-400'}`}>
        ES
      </span>
      {isPending && (
        <span className="absolute -right-1 -top-1 w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
      )}
    </motion.button>
  );
}
