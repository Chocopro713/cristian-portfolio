'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import {
  Monitor,
  ShoppingCart,
  Smartphone,
  Gauge,
  ShieldCheck,
  Settings2,
  Headphones,
} from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';

const icons = [Monitor, ShoppingCart, Smartphone, Gauge, ShieldCheck, Settings2, Headphones];

interface ServiceItem {
  title: string;
  description: string;
}

export default function Services() {
  const t = useTranslations('services');
  const items = t.raw('items') as ServiceItem[];

  return (
    <section id="services" className="py-24 relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/3 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, index) => {
            const Icon = icons[index] ?? Monitor;
            return (
              <AnimatedSection key={item.title} delay={0.1 + index * 0.05}>
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="glass-card glass-card-hover p-6 rounded-2xl h-full"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {item.description}
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
