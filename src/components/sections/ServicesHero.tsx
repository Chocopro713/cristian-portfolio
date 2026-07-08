'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Target, HeartHandshake, Rocket, TrendingUp } from 'lucide-react';
import WhatsAppButton from '@/components/ui/WhatsAppButton';

export default function ServicesHero() {
  const t = useTranslations('homeHero');

  const valueProps = [
    { icon: Target, label: t('valueProps.goals') },
    { icon: HeartHandshake, label: t('valueProps.attention') },
    { icon: Rocket, label: t('valueProps.growth') },
    { icon: TrendingUp, label: t('valueProps.results') },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden animated-gradient pt-24"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-2 rounded-full glass-card text-sm text-blue-400 mb-6"
            >
              {t('badge')}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            >
              <span className="text-white">{t('title')}</span>{' '}
              <span className="gradient-text">{t('titleHighlight')}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl text-slate-400 mb-8 max-w-xl mx-auto lg:mx-0"
            >
              {t('subtitle')}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center lg:justify-start"
            >
              <Link
                href="#contact"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 text-center"
              >
                {t('ctaPrimary')}
              </Link>
              <WhatsAppButton label={t('whatsapp')} message={t('whatsappMessage')} />
              <Link
                href="#projects"
                className="px-8 py-4 glass-card rounded-full text-white font-semibold border border-slate-600 hover:border-blue-500/50 transition-all duration-300 text-center"
              >
                {t('ctaSecondary')}
              </Link>
            </motion.div>

            {/* Value props */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="grid grid-cols-2 gap-4 mt-12 max-w-lg mx-auto lg:mx-0"
            >
              {valueProps.map((prop) => (
                <div key={prop.label} className="flex items-center gap-2 text-left">
                  <prop.icon className="w-5 h-5 text-blue-400 flex-shrink-0" />
                  <span className="text-slate-300 text-sm">{prop.label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 flex justify-center lg:justify-end"
          >
            <div className="relative w-72 md:w-96">
              <div className="absolute -inset-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-3xl opacity-20 animate-pulse" />
              <Image
                src="/mascot.webp"
                alt="Cristian Barbosa - Desarrollo Web"
                width={800}
                height={921}
                className="relative w-full h-auto"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-slate-600 flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-2 bg-slate-400 rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
