import { getLocale } from '@/i18n/actions';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Experience from '@/components/sections/Experience';
import Expertise from '@/components/sections/Expertise';
import Projects from '@/components/sections/Projects';
import Contact from '@/components/sections/Contact';

export default async function Home() {
  const locale = await getLocale();

  return (
    <>
      <Navbar currentLocale={locale} />
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
