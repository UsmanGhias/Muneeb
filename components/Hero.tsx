'use client';

import { motion } from 'framer-motion';
import { FaArrowRight, FaEnvelope, FaGithub, FaLinkedin, FaPhone, FaUser } from 'react-icons/fa';
import OrbitPortrait from './OrbitPortrait';

const linkedInUrl = process.env.NEXT_PUBLIC_LINKEDIN_URL?.trim() || '';

const socials = [
  { icon: <FaEnvelope />, href: 'mailto:muhammadmuneeb1061@gmail.com', label: 'Email' },
  { icon: <FaPhone />, href: 'tel:+923051621117', label: 'Phone' },
  { icon: <FaGithub />, href: 'https://github.com/usmanghias/muneeb', label: 'GitHub' },
  ...(linkedInUrl
    ? [{ icon: <FaLinkedin />, href: linkedInUrl, label: 'LinkedIn' }]
    : []),
];

const metrics = [
  { value: '4', label: 'Production-grade Flutter apps' },
  { value: '2023–Present', label: 'Flutter Developer at CodCrafters' },
  { value: 'Android & iOS', label: 'Cross-platform development' },
];

export default function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen overflow-hidden pt-28 sm:pt-32 lg:pt-24">
      <div className="hero-shell absolute inset-x-0 top-0 h-full pointer-events-none" />

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-6xl flex-col justify-center px-6 pb-20 pt-8 sm:px-8 lg:px-10 lg:pb-16 lg:pt-10">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] xl:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
            className="text-center lg:text-left"
          >
            <div className="availability-pill mx-auto mb-6 lg:mx-0">
              <span />
              Available for work
            </div>

            <p className="mb-2 text-base font-semibold text-[var(--accent2)]">Hello, I&apos;m</p>
            <h1 className="mb-3 text-5xl font-black leading-[0.98] tracking-[-0.05em] text-white sm:text-6xl xl:text-7xl">
              Muhammad
              <br />
              <span className="gradient-text">Muneeb</span>
            </h1>
            <h2 className="mb-2 text-xl font-bold text-white/90 sm:text-2xl">Flutter Developer</h2>
            <p className="mb-5 text-base text-white/70">Building mobile applications since 2021.</p>
            <p className="mx-auto mb-4 max-w-xl text-base leading-relaxed text-white/75 lg:mx-0">
              I develop Android and iOS applications with Flutter, focusing on maintainable architecture,
              offline functionality and reliable API integration.
            </p>
            <p className="mx-auto mb-8 max-w-xl text-base leading-relaxed text-white/75 lg:mx-0">
              At CodCrafters, I work on Noor Ul Haya, ForgeNFit, Clivora and the CODCrafters mobile application.
            </p>

            <div className="mb-6 flex flex-wrap justify-center gap-3 lg:justify-start">
              <motion.a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo('contact');
                }}
                className="primary-cta"
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
              >
                Hire Me <FaArrowRight />
              </motion.a>
              <motion.a
                href="#about"
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo('about');
                }}
                className="secondary-cta"
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
              >
                <FaUser /> About Me
              </motion.a>
            </div>

            <div className="mb-8 flex justify-center gap-3 lg:justify-start">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  aria-label={social.label}
                  className="social-orb"
                >
                  {social.icon}
                </a>
              ))}
            </div>

            <div className="hero-metrics mx-auto max-w-xl lg:mx-0">
              {metrics.map((metric) => (
                <div key={metric.label} className="hero-metric">
                  <strong>{metric.value}</strong>
                  <small>{metric.label}</small>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.12 }}
            className="relative pb-10 lg:justify-self-end lg:pb-0"
          >
            <OrbitPortrait showLocation />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
