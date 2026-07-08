'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { MessagesSquare, PenTool, Code2, Rocket } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';

const icons = [MessagesSquare, PenTool, Code2, Rocket];

interface ProcessStep {
  title: string;
  description: string;
}

export default function Process() {
  const t = useTranslations('process');
  const steps = t.raw('steps') as ProcessStep[];

  return (
    <section id="process" className="py-24 relative">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">{t('title')}</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              {t('subtitle')}
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mt-6" />
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => {
            const Icon = icons[index] ?? MessagesSquare;
            return (
              <AnimatedSection key={step.title} delay={0.1 + index * 0.1}>
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="glass-card glass-card-hover p-6 rounded-2xl h-full relative"
                >
                  <span className="absolute top-4 right-5 text-4xl font-bold text-white/5">
                    {index + 1}
                  </span>
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
