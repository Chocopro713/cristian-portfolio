import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Experience from '@/components/sections/Experience';
import Expertise from '@/components/sections/Expertise';
import Projects from '@/components/sections/Projects';
import Blog from '@/components/sections/Blog';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Expertise />
      <Projects />
      <Blog />
      <Contact />
    </>
  );
}
