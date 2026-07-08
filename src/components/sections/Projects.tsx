import { getTranslations } from 'next-intl/server';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import ProjectCard from '@/components/ui/ProjectCard';
import { businessProjectStyles } from '@/data/businessProjects';

interface ProjectItem {
  slug: string;
  category: string;
  name: string;
  description: string;
  tags: string[];
}

export default async function Projects() {
  const t = await getTranslations('projects');
  const items = t.raw('items') as ProjectItem[];

  return (
    <section id="projects" className="py-24 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/4 right-0 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {items.map((item, index) => {
            const style = businessProjectStyles.find((s) => s.slug === item.slug);
            if (!style) return null;
            const Icon = style.icon;

            return (
              <ProjectCard
                key={item.slug}
                href={style.href}
                icon={<Icon />}
                gradient={style.gradient}
                glow={style.glow}
                category={item.category}
                name={item.name}
                description={item.description}
                tags={item.tags}
                index={index}
                viewProjectLabel={t('viewProject')}
              />
            );
          })}
        </div>

        <AnimatedSection>
          <div className="text-center">
            <p className="text-slate-300 text-lg mb-6">{t('ctaTitle')}</p>
            <Link
              href="#contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25"
            >
              {t('ctaButton')}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
