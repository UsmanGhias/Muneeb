'use client';

import { motion } from 'framer-motion';
import { FaEnvelope } from 'react-icons/fa';

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden py-24 lg:py-28">
      <div className="about-bg absolute inset-0 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-3xl px-6 lg:px-8 lg:ml-[max(2rem,calc((100%-56rem)/2))] lg:mr-auto">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mb-10 text-left"
        >
          <h2 className="text-4xl font-black tracking-[-0.04em] text-white md:text-5xl">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="title-line mt-5" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="max-w-2xl text-left"
        >
          <h3 className="mb-5 text-2xl font-bold tracking-[-0.02em] text-white md:text-3xl">
            Flutter Developer
          </h3>

          <div className="space-y-5 text-lg leading-[1.75] text-white/72">
            <p>
              I build Flutter applications that solve practical problems. My recent work includes Islamic
              lifestyle tools, fitness and nutrition software, freelancer business management, and service
              applications.
            </p>
            <p>
              I usually work across UI implementation, state management, local storage, API integration,
              testing and Play Store preparation. I care about interfaces being clear, but also about the
              code remaining understandable when a product grows.
            </p>
          </div>

          <motion.a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="about-cta mt-10 inline-flex min-w-[14rem] bg-gradient-to-r from-[var(--accent)] to-[var(--accent2)] px-6 shadow-[0_10px_28px_rgba(106,71,255,0.25)]"
            whileHover={{ scale: 1.02, y: -1 }}
            whileTap={{ scale: 0.98 }}
          >
            Get In Touch <FaEnvelope />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
