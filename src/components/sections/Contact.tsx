'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, Github, Linkedin, Send, MapPin, Loader2, CheckCircle, XCircle } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export default function Contact() {
  const t = useTranslations('contact');
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    website: '', // Honeypot field
  });
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errors, setErrors] = useState<FormErrors>({});
  const [serverError, setServerError] = useState('');

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = t('errors.nameRequired');
    } else if (formData.name.trim().length < 2) {
      newErrors.name = t('errors.nameMin');
    }

    if (!formData.email.trim()) {
      newErrors.email = t('errors.emailRequired');
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = t('errors.emailInvalid');
    }

    if (!formData.message.trim()) {
      newErrors.message = t('errors.messageRequired');
    } else if (formData.message.trim().length < 10) {
      newErrors.message = t('errors.messageMin');
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setStatus('loading');
    setServerError('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      setStatus('success');
      setFormData({ name: '', email: '', message: '', website: '' });
      
      // Reset to idle after 5 seconds
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      setStatus('error');
      setServerError(error instanceof Error ? error.message : 'An unexpected error occurred');
      
      // Reset to idle after 5 seconds
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: t('email'),
      value: 'Cristianbr7@live.com',
      href: 'mailto:Cristianbr7@live.com',
    },
    {
      icon: Phone,
      label: t('phone'),
      value: '+57 3046317065',
      href: 'tel:+573046317065',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Colombia',
      href: '#',
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/Chocopro713',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com',
    },
  ];

  return (
    <section id="contact" className="py-24 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl" />
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

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <AnimatedSection delay={0.2}>
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-white mb-6">
                {t('connect')}
              </h3>

              <div className="space-y-6">
                {contactInfo.map((item) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    whileHover={{ x: 10 }}
                    className="flex items-center gap-4 glass-card p-4 rounded-xl hover:border-blue-500/50 transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 flex items-center justify-center group-hover:from-blue-500/30 group-hover:to-purple-500/30 transition-all duration-300">
                      <item.icon className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <p className="text-slate-400 text-sm">{item.label}</p>
                      <p className="text-white font-medium">{item.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>

              <div className="pt-6">
                <p className="text-slate-400 mb-4">{t('social')}</p>
                <div className="flex gap-4">
                  {socialLinks.map((link) => (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-12 h-12 rounded-xl glass-card flex items-center justify-center text-slate-400 hover:text-white hover:border-blue-500/50 transition-all duration-300"
                      aria-label={link.label}
                    >
                      <link.icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Contact Form */}
          <AnimatedSection delay={0.3}>
            <form onSubmit={handleSubmit} className="glass-card p-8 rounded-2xl space-y-6">
              {/* Honeypot field - hidden from users */}
              <input
                type="text"
                name="website"
                value={formData.website}
                onChange={handleChange}
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />

              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-slate-300 mb-2"
                >
                  {t('name')}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  disabled={status === 'loading'}
                  className={`w-full px-4 py-3 rounded-xl bg-slate-800/50 border ${
                    errors.name ? 'border-red-500' : 'border-slate-700'
                  } text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors disabled:opacity-50`}
                  placeholder="John Doe"
                />
                <AnimatePresence>
                  {errors.name && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="text-red-400 text-sm mt-1"
                    >
                      {errors.name}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-slate-300 mb-2"
                >
                  {t('email')}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={status === 'loading'}
                  className={`w-full px-4 py-3 rounded-xl bg-slate-800/50 border ${
                    errors.email ? 'border-red-500' : 'border-slate-700'
                  } text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors disabled:opacity-50`}
                  placeholder={t('emailPlaceholder')}
                />
                <AnimatePresence>
                  {errors.email && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="text-red-400 text-sm mt-1"
                    >
                      {errors.email}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-slate-300 mb-2"
                >
                  {t('message')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  disabled={status === 'loading'}
                  className={`w-full px-4 py-3 rounded-xl bg-slate-800/50 border ${
                    errors.message ? 'border-red-500' : 'border-slate-700'
                  } text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors resize-none disabled:opacity-50`}
                  placeholder={t('messagePlaceholder')}
                />
                <AnimatePresence>
                  {errors.message && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="text-red-400 text-sm mt-1"
                    >
                      {errors.message}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>

              {/* Status Messages */}
              <AnimatePresence>
                {status === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex items-center gap-3 p-4 bg-green-500/10 border border-green-500/30 rounded-xl text-green-400"
                  >
                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
                    <p>{t('successMessage')}</p>
                  </motion.div>
                )}

                {status === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex items-center gap-3 p-4 bg-red-500/10 border border-red-500/30 rounded-xl text-red-400"
                  >
                    <XCircle className="w-5 h-5 flex-shrink-0" />
                    <p>{serverError || t('errorMessage')}</p>
                  </motion.div>
                )}
              </AnimatePresence>

              <motion.button
                type="submit"
                disabled={status === 'loading'}
                whileHover={{ scale: status === 'loading' ? 1 : 1.02 }}
                whileTap={{ scale: status === 'loading' ? 1 : 0.98 }}
                className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl text-white font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    {t('sending')}
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    {t('sendMessage')}
                  </>
                )}
              </motion.button>
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
