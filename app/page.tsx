import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Hero from '@/components/sections/hero';
import About from '@/components/sections/about';
import MiniStats from '@/components/sections/mini-stats';
import Projects from '@/components/sections/projects';
import HowIHelp from '@/components/sections/how-i-help';
import Contact from '@/components/sections/contact';

export default function HomePage() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <MiniStats />
      <Projects />
      <HowIHelp />
      <Contact />
      <Footer />
    </div>
  );
}
