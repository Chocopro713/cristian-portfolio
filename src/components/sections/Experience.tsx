'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { TrendingUp, Zap, Shield } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';

export default function Experience() {
  const t = useTranslations('experience');

  const projects = [
    {
      icon: TrendingUp,
      title: t('project1.title'),
      description: t('project1.description'),
      impact: t('project1.impact'),
      color: 'from-green-500 to-emerald-500',
      metrics: ['25-50%', 'Efficiency', 'Optimization'],
    },
    {
      icon: Zap,
      title: t('project2.title'),
      description: t('project2.description'),
      impact: t('project2.impact'),
      color: 'from-orange-500 to-amber-500',
      metrics: ['Real-Time', 'Kafka', 'Events'],
    },
    {
      icon: Shield,
      title: t('project3.title'),
      description: t('project3.description'),
      impact: t('project3.impact'),
      color: 'from-blue-500 to-indigo-500',
      metrics: ['Secure', 'QR', 'Multi-tenant'],
    },
  ];

  return (
    <section id="experience" className="py-24 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-0 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/4 right-0 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl" />
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

        <div className="space-y-8">
          {projects.map((project, index) => (
            <AnimatedSection key={project.title} delay={0.2 + index * 0.1}>
              <motion.div
                whileHover={{ scale: 1.01 }}
                className="glass-card glass-card-hover p-8 rounded-2xl"
              >
                <div className="flex flex-col lg:flex-row gap-8 items-start">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${project.color} flex items-center justify-center flex-shrink-0`}>
                    <project.icon className="w-8 h-8 text-white" />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-4">
                      {project.title}
                    </h3>
                    <p className="text-slate-300 leading-relaxed mb-6">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-3">
                      {project.metrics.map((metric) => (
                        <span
                          key={metric}
                          className="px-4 py-2 rounded-full bg-slate-800/50 text-slate-300 text-sm font-medium"
                        >
                          {metric}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="lg:self-center">
                    <div className={`px-6 py-3 rounded-full bg-gradient-to-r ${project.color} text-white font-semibold text-sm whitespace-nowrap`}>
                      {project.impact}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
