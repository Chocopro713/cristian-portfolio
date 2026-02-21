'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Target, Code2, Network } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';

export default function About() {
  const t = useTranslations('about');

  const focuses = [
    {
      icon: Target,
      title: t('focus1'),
      description: t('focus1Desc'),
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Code2,
      title: t('focus2'),
      description: t('focus2Desc'),
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Network,
      title: t('focus3'),
      description: t('focus3Desc'),
      color: 'from-cyan-500 to-teal-500',
    },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">{t('title')}</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="max-w-4xl mx-auto text-center mb-16">
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed">
              {t('description')}
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8">
          {focuses.map((focus, index) => (
            <AnimatedSection key={focus.title} delay={0.3 + index * 0.1}>
              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                className="glass-card glass-card-hover p-8 rounded-2xl h-full"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${focus.color} flex items-center justify-center mb-6`}>
                  <focus.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {focus.title}
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  {focus.description}
                </p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
