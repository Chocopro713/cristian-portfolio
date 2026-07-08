'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { useState, useEffect } from 'react';
import LanguageToggle from '@/components/ui/LanguageToggle';
import { Locale } from '@/i18n/request';

interface NavbarProps {
  currentLocale: Locale;
  variant?: 'home' | 'about';
}

export default function Navbar({ currentLocale, variant = 'home' }: NavbarProps) {
  const t = useTranslations('nav');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems =
    variant === 'home'
      ? [
          { href: '#home', label: t('home') },
          { href: '#services', label: t('services') },
          { href: '#projects', label: t('projects') },
          { href: '/sobre-mi', label: t('about') },
          { href: '#contact', label: t('contact') },
        ]
      : [
          { href: '#home', label: t('home') },
          { href: '#about', label: t('about') },
          { href: '#experience', label: t('experience') },
          { href: '#expertise', label: t('expertise') },
          { href: '#projects', label: t('projects') },
          { href: '#contact', label: t('contact') },
          { href: '/', label: t('services') },
        ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-card py-3' : 'py-5'
      }`}
    >
      <nav className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center text-xl font-bold">
          <span className="text-white">CBarbosa</span>
          <span className="gradient-text">.org</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-slate-300 hover:text-white transition-colors duration-200 text-sm font-medium"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <LanguageToggle currentLocale={currentLocale} />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{ height: isMobileMenuOpen ? 'auto' : 0 }}
        className="md:hidden overflow-hidden glass-card mx-4 mt-2 rounded-xl"
      >
        <ul className="p-4 space-y-3">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-slate-300 hover:text-white transition-colors duration-200 py-2"
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li className="pt-2">
            <LanguageToggle currentLocale={currentLocale} />
          </li>
        </ul>
      </motion.div>
    </motion.header>
  );
}
