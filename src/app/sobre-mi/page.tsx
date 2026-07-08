import type { Metadata } from 'next';
import { getLocale } from '@/i18n/actions';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Experience from '@/components/sections/Experience';
import Expertise from '@/components/sections/Expertise';
import Projects from '@/components/sections/Projects';
import Contact from '@/components/sections/Contact';

export const metadata: Metadata = {
  title: 'Sobre Mí | Cristian Barbosa',
  description:
    'Conoce a Cristian Barbosa: mi experiencia, mi forma de trabajar y los proyectos que he construido como desarrollador de software.',
};

export default async function SobreMi() {
  const locale = await getLocale();

  return (
    <>
      <Navbar currentLocale={locale} variant="about" />
      <main>
        <Hero />
        <About />
        <Experience />
        <Expertise />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
