import { getTranslations } from 'next-intl/server';
import { Github } from 'lucide-react';
import { fetchGitHubRepos, GitHubRepo } from '@/lib/github';
import AnimatedSection from '@/components/ui/AnimatedSection';
import ProjectCard from '@/components/ui/ProjectCard';

export default async function Projects() {
  const repos = await fetchGitHubRepos('Chocopro713');
  const t = await getTranslations('projects');

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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {repos.map((repo: GitHubRepo, index: number) => (
            <ProjectCard
              key={repo.id}
              repo={repo}
              index={index}
              viewOnGithub={t('viewOnGithub')}
            />
          ))}
        </div>

        <AnimatedSection>
          <div className="text-center">
            <a
              href="https://github.com/Chocopro713"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25"
            >
              <Github className="w-5 h-5" />
              {t('viewAll')}
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
