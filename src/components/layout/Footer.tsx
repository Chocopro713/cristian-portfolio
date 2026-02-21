'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

export default function Footer() {
  const t = useTranslations('footer');
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 border-t border-slate-800">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <Link href="/" className="text-2xl font-bold gradient-text">
              Cristian Barbosa
            </Link>
            <p className="text-slate-400 text-sm mt-2">
              Senior Full Stack Engineer
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex items-center gap-4"
          >
            <a
              href="https://github.com/Chocopro713"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-slate-400 hover:text-white hover:border-blue-500/50 transition-all duration-300"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-slate-400 hover:text-white hover:border-blue-500/50 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:Cristianbr7@live.com"
              className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-slate-400 hover:text-white hover:border-blue-500/50 transition-all duration-300"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-8 pt-8 border-t border-slate-800 text-center"
        >
          <p className="text-slate-400 text-sm flex items-center justify-center gap-1">
            © {currentYear} Cristian Barbosa. {t('rights')}
            <span className="mx-2">|</span>
            {t('madeWith')} <Heart size={14} className="text-red-500 fill-red-500 mx-1" /> 
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
