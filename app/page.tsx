import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Applications from '@/components/Applications';
import Experience from '@/components/Experience';
import HowIWork from '@/components/HowIWork';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ParticlesBackground from '@/components/ParticlesBackground';

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[var(--bg-primary)]">
      <ParticlesBackground />
      <Navbar />
      <Hero />
      <About />
      <Applications />
      <Experience />
      <HowIWork />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}
