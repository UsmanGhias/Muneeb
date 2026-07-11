import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Applications from "@/components/Applications";
import Expertise from "@/components/Expertise";
import Philosophy from "@/components/Philosophy";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BackgroundEffects from "@/components/BackgroundEffects";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[var(--bg-primary)]">
      <BackgroundEffects />
      <Navbar />
      <Hero />
      <Applications />
      <Expertise />
      <Philosophy />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
