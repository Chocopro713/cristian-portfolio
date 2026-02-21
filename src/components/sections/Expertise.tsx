'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { 
  Layers, 
  GitBranch, 
  Box, 
  Radio, 
  Lock, 
  Gauge 
} from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';

export default function Expertise() {
  const t = useTranslations('expertise');
  const tStack = useTranslations('techStack');

  const expertiseAreas = [
    {
      icon: Layers,
      title: t('cleanArch.title'),
      description: t('cleanArch.description'),
    },
    {
      icon: GitBranch,
      title: t('ddd.title'),
      description: t('ddd.description'),
    },
    {
      icon: Box,
      title: t('microservices.title'),
      description: t('microservices.description'),
    },
    {
      icon: Radio,
      title: t('eventDriven.title'),
      description: t('eventDriven.description'),
    },
    {
      icon: Lock,
      title: t('secureApi.title'),
      description: t('secureApi.description'),
    },
    {
      icon: Gauge,
      title: t('performance.title'),
      description: t('performance.description'),
    },
  ];

  const techStack = {
    backend: {
      title: tStack('backend'),
      items: ['.NET', 'C#', 'Node.js', 'Python'],
      color: 'from-blue-500 to-cyan-500',
    },
    frontend: {
      title: tStack('frontend'),
      items: ['Angular', 'MAUI', 'Xamarin'],
      color: 'from-purple-500 to-pink-500',
    },
    databases: {
      title: tStack('databases'),
      items: ['SQL Server', 'PostgreSQL', 'Oracle'],
      color: 'from-green-500 to-emerald-500',
    },
    devops: {
      title: tStack('devops'),
      items: ['Docker', 'Kafka', 'Git', 'SonarQube'],
      color: 'from-orange-500 to-amber-500',
    },
  };

  return (
    <section id="expertise" className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Expertise Cards */}
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {expertiseAreas.map((area, index) => (
            <AnimatedSection key={area.title} delay={0.1 + index * 0.05}>
              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                className="glass-card glass-card-hover p-6 rounded-2xl h-full group"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 flex items-center justify-center mb-4 group-hover:from-blue-500/30 group-hover:to-purple-500/30 transition-all duration-300">
                  <area.icon className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {area.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {area.description}
                </p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        {/* Tech Stack */}
        <AnimatedSection>
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="gradient-text">{tStack('title')}</span>
            </h3>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Object.values(techStack).map((category, index) => (
            <AnimatedSection key={category.title} delay={0.2 + index * 0.1}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="glass-card p-6 rounded-2xl"
              >
                <div className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${category.color} text-white text-sm font-semibold mb-4`}>
                  {category.title}
                </div>
                <div className="space-y-3">
                  {category.items.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 text-slate-300"
                    >
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.color}`} />
                      {item}
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
