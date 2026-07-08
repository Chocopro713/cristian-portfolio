'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

interface ProjectCardProps {
  href: string;
  icon: ReactNode;
  gradient: string;
  glow: string;
  category: string;
  name: string;
  description: string;
  tags: string[];
  index: number;
  viewProjectLabel: string;
}

export default function ProjectCard({
  href,
  icon,
  gradient,
  glow,
  category,
  name,
  description,
  tags,
  index,
  viewProjectLabel,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="h-full"
    >
      <Link
        href={href}
        className={`glass-card glass-card-hover flex h-full flex-col overflow-hidden rounded-2xl group transition-shadow duration-300 hover:shadow-2xl ${glow}`}
      >
        {/* Browser mockup preview */}
        <div className={`relative h-40 bg-gradient-to-br ${gradient} overflow-hidden`}>
          <div className="absolute top-0 left-0 right-0 flex items-center gap-1.5 px-4 py-3 bg-black/20">
            <span className="w-2.5 h-2.5 rounded-full bg-white/40" />
            <span className="w-2.5 h-2.5 rounded-full bg-white/40" />
            <span className="w-2.5 h-2.5 rounded-full bg-white/40" />
          </div>
          <div className="absolute inset-0 flex items-center justify-center text-white/90 transition-transform duration-300 group-hover:scale-110 [&_svg]:w-14 [&_svg]:h-14">
            {icon}
          </div>
        </div>

        <div className="flex flex-1 flex-col p-6">
          <span className="text-xs font-medium text-blue-400 uppercase tracking-wide mb-2">
            {category}
          </span>
          <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors mb-2">
            {name}
          </h3>
          <p className="text-slate-400 text-sm leading-relaxed mb-4">
            {description}
          </p>

          <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-slate-700/50">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full bg-slate-800/60 text-slate-300 text-xs"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-4 flex items-center gap-2 text-sm font-medium text-blue-400 group-hover:gap-3 transition-all">
            {viewProjectLabel}
            <ArrowUpRight className="w-4 h-4" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
