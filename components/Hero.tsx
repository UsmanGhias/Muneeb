'use client';

import { motion } from 'framer-motion';
import {
  FaAndroid,
  FaArrowRight,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMouse,
  FaPhone,
  FaUser,
} from 'react-icons/fa';
import { SiDart, SiFlutter } from 'react-icons/si';
import OrbitPortrait from './OrbitPortrait';

const stats = [
  { value: '3+', label: 'Years Experience', icon: '</>' },
  { value: '20+', label: 'Projects Completed', icon: '▣' },
  { value: '15+', label: 'Happy Clients', icon: '♡' },
  { value: '100%', label: 'Client Satisfaction', icon: '↗' },
];

const socials = [
  { icon: <FaEnvelope />, href: 'mailto:muhammadmuneeb1061@gmail.com', label: 'Email' },
  { icon: <FaPhone />, href: 'tel:+923051621117', label: 'Phone' },
  { icon: <FaGithub />, href: 'https://github.com/usmanghias/muneeb', label: 'GitHub' },
  { icon: <FaLinkedin />, href: 'https://linkedin.com/', label: 'LinkedIn' },
];

const badges = [
  { icon: <SiDart />, label: 'Dart', className: 'top-[15%] left-[6%] badge-float-1', iconClassName: 'text-[#35b7f3]' },
  { icon: <SiFlutter />, label: 'Flutter', className: 'top-[29%] -right-[2%] badge-float-2', iconClassName: 'text-[#36a9ff]' },
  { icon: <FaAndroid />, label: 'Android', className: 'bottom-[25%] left-[0%] badge-float-3', iconClassName: 'text-[#8de85f]' },
];

export default function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen overflow-hidden pt-28 sm:pt-32 lg:pt-24">
      <div className="hero-shell absolute inset-x-0 top-0 h-full pointer-events-none" />
      <div className="wave-lines absolute inset-x-0 bottom-0 h-48 pointer-events-none" />

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-[96rem] flex-col justify-center px-6 pb-20 pt-8 sm:px-8 lg:px-10 lg:pb-14 lg:pt-10">
        <div className="grid items-center gap-12 lg:grid-cols-[1.03fr_0.97fr] xl:gap-14 2xl:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center lg:text-left"
          >
            <div className="availability-pill mx-auto mb-7 lg:mx-0">
              <span />
              Available for work
            </div>

            <p className="mb-3 text-lg font-bold text-[var(--accent2)] xl:text-xl">Hello, I&apos;m</p>
            <h1 className="mb-3 text-6xl font-black leading-[0.95] tracking-[-0.06em] text-white sm:text-7xl xl:text-[5.8rem] 2xl:text-9xl">
              Muhammad<br />
              <span className="gradient-text">Muneeb</span>
            </h1>
            <h2 className="mb-5 text-2xl font-extrabold text-[#a33dff] xl:text-3xl">UI/UX Enthusiast</h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-white/82 lg:mx-0 xl:text-xl">
              Passionate Flutter developer crafting beautiful, high-performance mobile applications for iOS &amp; Android from <strong className="text-white">Samundri, Pakistan.</strong>
            </p>

            <div className="mb-5 flex flex-wrap justify-center gap-4 lg:justify-start">
              <motion.a
                href="#contact"
                onClick={(e) => { e.preventDefault(); scrollTo('contact'); }}
                className="primary-cta"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.96 }}
              >
                Hire Me <FaArrowRight />
              </motion.a>
              <motion.a
                href="#about"
                onClick={(e) => { e.preventDefault(); scrollTo('about'); }}
                className="secondary-cta"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.96 }}
              >
                <FaUser /> About Me
              </motion.a>
            </div>

            <div className="mb-5 flex justify-center gap-3 lg:justify-start">
              {socials.map((social) => (
                <a key={social.label} href={social.href} target={social.href.startsWith('http') ? '_blank' : undefined} rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined} aria-label={social.label} className="social-orb">
                  {social.icon}
                </a>
              ))}
            </div>

            <div className="hero-stats mx-auto grid max-w-2xl grid-cols-2 gap-0 sm:grid-cols-4 lg:mx-0">
              {stats.map((stat) => (
                <div key={stat.label} className="stat-mini">
                  <span className="stat-icon">{stat.icon}</span>
                  <strong>{stat.value}</strong>
                  <small>{stat.label}</small>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="relative lg:justify-self-end"
          >
            <OrbitPortrait badges={badges} showLocation />
          </motion.div>
        </div>

        <button onClick={() => scrollTo('about')} className="scroll-cue hidden xl:flex" aria-label="Scroll to about section">
          <span className="mouse-icon"><FaMouse /></span>
          <span>Scroll Down</span>
          <span className="chevron">⌄</span>
        </button>
      </div>
    </section>
  );
}
