'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaCalendarAlt, FaCode, FaEnvelope, FaUsers } from 'react-icons/fa';
import OrbitPortrait from './OrbitPortrait';

const stats = [
  { target: 2, label: 'Years Experience', icon: <FaCalendarAlt />, accent: 'from-[#c23bff] to-[#7537ff]' },
  { target: 4, label: 'Production Apps', icon: <FaCode />, accent: 'from-[#00d4ff] to-[#246bff]' },
  { target: 10, label: 'Happy Clients', icon: <FaUsers />, accent: 'from-[#20f2a0] to-[#00b886]' },
];

function Counter({ target, inView }: { target: number; inView: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const increment = target / 42;
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.ceil(start));
      }
    }, 35);
    return () => clearInterval(timer);
  }, [inView, target]);

  return <span>{count}</span>;
}

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-120px' });

  return (
    <section id="about" className="relative overflow-hidden py-24 lg:py-32">
      <div className="about-bg absolute inset-0 pointer-events-none" />
      <div className="wave-lines absolute inset-x-0 bottom-0 h-52 opacity-70 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-[88rem] px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <span className="section-tag">Who I Am</span>
          <h2 className="mt-6 text-5xl font-black tracking-[-0.04em] text-white md:text-7xl">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="title-line mx-auto mt-6" />
        </motion.div>

        <div ref={ref} className="grid items-center gap-12 lg:grid-cols-[0.88fr_1.12fr] xl:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -38 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative lg:justify-self-start"
          >
            <OrbitPortrait size="about" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 38 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mx-auto max-w-3xl text-center lg:text-left"
          >
            <h3 className="mb-4 text-4xl font-black tracking-[-0.03em] text-white md:text-5xl">
              Flutter Mobile <span className="gradient-text">Developer</span>
            </h3>
            <div className="mini-line mx-auto mb-6 lg:mx-0" />

            <div className="space-y-6 text-lg leading-[1.8] text-white/72 md:text-xl">
              <p>
                I&apos;m <strong className="text-[var(--accent2)]">Muhammad Muneeb</strong>, a dedicated Flutter mobile application developer with a passion for building elegant, user-friendly apps. I specialise in creating cross-platform mobile solutions that run seamlessly on both iOS and Android from a single codebase.
              </p>
              <p>
                At <strong className="text-[#c23bff]">CodCrafters</strong>, I build production Flutter apps including Noor Ul Haya, ForgeNFit, Clivora, and CODCrafters, covering Islamic lifestyle, AI fitness, and business platforms with clean architecture, offline support, and polished UI.
              </p>
            </div>

            <div className="mt-9 grid gap-5 sm:grid-cols-3">
              {stats.map((stat) => (
                <motion.div key={stat.label} whileHover={{ y: -6, scale: 1.02 }} className="about-stat-card">
                  <span className={`about-stat-icon bg-gradient-to-br ${stat.accent}`}>{stat.icon}</span>
                  <strong><Counter target={stat.target} inView={inView} />+</strong>
                  <small>{stat.label}</small>
                  <i className={`bg-gradient-to-r ${stat.accent}`} />
                </motion.div>
              ))}
            </div>

            <motion.a
              href="#contact"
              onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="about-cta mx-auto mt-10 lg:mx-0"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.96 }}
            >
              Get In Touch <span><FaEnvelope /></span>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
