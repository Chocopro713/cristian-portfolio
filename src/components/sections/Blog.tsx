'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';

export default function Blog() {
  const t = useTranslations('blog');

  const posts = [
    {
      title: t('post1.title'),
      excerpt: t('post1.excerpt'),
      date: t('post1.date'),
      image: '/blog-1.jpg',
      category: 'Architecture',
    },
    {
      title: t('post2.title'),
      excerpt: t('post2.excerpt'),
      date: t('post2.date'),
      image: '/blog-2.jpg',
      category: 'Clean Code',
    },
    {
      title: t('post3.title'),
      excerpt: t('post3.excerpt'),
      date: t('post3.date'),
      image: '/blog-3.jpg',
      category: 'Patterns',
    },
  ];

  return (
    <section id="blog" className="py-24 relative">
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <AnimatedSection key={post.title} delay={0.1 + index * 0.1}>
              <motion.article
                whileHover={{ scale: 1.02, y: -5 }}
                className="glass-card glass-card-hover rounded-2xl overflow-hidden group cursor-pointer"
              >
                {/* Image placeholder with gradient */}
                <div className="h-48 bg-gradient-to-br from-blue-500/20 to-purple-500/20 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 to-purple-600/30 group-hover:from-blue-600/40 group-hover:to-purple-600/40 transition-all duration-300" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-blue-500/80 text-white text-xs font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 text-slate-400 text-sm mb-3">
                    <Calendar className="w-4 h-4" />
                    {post.date}
                  </div>

                  <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-slate-400 text-sm leading-relaxed line-clamp-3 mb-4">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center gap-2 text-blue-400 text-sm font-medium group-hover:gap-3 transition-all">
                    {t('readMore')}
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </motion.article>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
