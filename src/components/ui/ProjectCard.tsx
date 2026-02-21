'use client';

import { motion } from 'framer-motion';
import { Star, GitFork, ExternalLink } from 'lucide-react';
import { GitHubRepo, getLanguageColor } from '@/lib/github';

interface ProjectCardProps {
  repo: GitHubRepo;
  index: number;
  viewOnGithub: string;
}

export default function ProjectCard({ repo, index, viewOnGithub }: ProjectCardProps) {
  return (
    <motion.a
      href={repo.html_url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ scale: 1.02, y: -5 }}
      className="glass-card glass-card-hover p-6 rounded-2xl block group"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors mb-2">
            {repo.name}
          </h3>
          <p className="text-slate-400 text-sm line-clamp-2 min-h-[2.5rem]">
            {repo.description || 'No description available'}
          </p>
        </div>
        <ExternalLink className="w-5 h-5 text-slate-500 group-hover:text-blue-400 transition-colors flex-shrink-0 ml-4" />
      </div>

      <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-700/50">
        <div className="flex items-center gap-4">
          {repo.language && (
            <div className="flex items-center gap-2">
              <span
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: getLanguageColor(repo.language) }}
              />
              <span className="text-sm text-slate-400">{repo.language}</span>
            </div>
          )}
          <div className="flex items-center gap-1 text-slate-400 text-sm">
            <Star className="w-4 h-4" />
            {repo.stargazers_count}
          </div>
          <div className="flex items-center gap-1 text-slate-400 text-sm">
            <GitFork className="w-4 h-4" />
            {repo.forks_count}
          </div>
        </div>
      </div>

      <div className="mt-4">
        <span className="text-xs text-blue-400 group-hover:underline">
          {viewOnGithub} →
        </span>
      </div>
    </motion.a>
  );
}
