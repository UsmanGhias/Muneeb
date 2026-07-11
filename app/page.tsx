import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Applications from '@/components/Applications';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ParticlesBackground from '@/components/ParticlesBackground';

export default function Home() {
  return (
    <main className="relative bg-[var(--bg-primary)] min-h-screen">
      <ParticlesBackground />
      <Navbar />
      <Hero />
      <About />
      <Applications />
      <Experience />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}
