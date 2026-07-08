import { getLocale } from '@/i18n/actions';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ServicesHero from '@/components/sections/ServicesHero';
import Services from '@/components/sections/Services';
import Projects from '@/components/sections/Projects';
import Process from '@/components/sections/Process';
import Contact from '@/components/sections/Contact';

export default async function Home() {
  const locale = await getLocale();

  return (
    <>
      <Navbar currentLocale={locale} variant="home" />
      <main>
        <ServicesHero />
        <Services />
        <Projects />
        <Process />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
