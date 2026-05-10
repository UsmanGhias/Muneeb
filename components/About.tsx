'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';

const stats = [
  { target: 2, label: 'Years Experience' },
  { target: 15, label: 'Projects Done' },
  { target: 10, label: 'Happy Clients' },
];

function Counter({ target, inView }: { target: number; inView: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const increment = target / 40;
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.ceil(start));
      }
    }, 40);
    return () => clearInterval(timer);
  }, [inView, target]);

  return <span>{count}</span>;
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="relative py-24 overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-[var(--accent)] opacity-5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-tag mb-4 block">Who I Am</span>
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)]">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="mt-4 mx-auto w-20 h-1 rounded-full bg-gradient-to-r from-[var(--accent)] to-[var(--accent2)]" />
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          {/* Left: Avatar + Info Card */}
          <motion.div variants={itemVariants} className="flex flex-col items-center gap-6">
            {/* Avatar Ring */}
            <div className="relative w-56 h-56">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[var(--accent)] to-[var(--accent2)] p-1">
                <div className="w-full h-full rounded-full overflow-hidden relative">
                  <Image
                    src="https://github.com/user-attachments/assets/cf665ae6-5fe7-4134-b6f3-5b9e95f228b3"
                    alt="Muhammad Muneeb"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
              <div className="absolute -inset-3 rounded-full border-2 border-dashed border-[rgba(108,99,255,0.25)] animate-spin-slow" />
              {/* Status dot */}
              <div className="absolute bottom-3 right-3 w-5 h-5 bg-green-400 rounded-full border-2 border-[var(--bg-card)] shadow-[0_0_10px_rgba(74,222,128,0.6)]" />
            </div>

            {/* Info Card */}
            <motion.div
              whileHover={{ y: -4 }}
              className="glass-card w-full max-w-sm p-6 space-y-4 transition-all duration-300"
            >
              {[
                { icon: <FaMapMarkerAlt className="text-[var(--accent)]" />, text: 'Samundri, Pakistan' },
                { icon: <FaEnvelope className="text-[var(--accent2)]" />, text: 'muhammadmuneeb1061@gmail.com' },
                { icon: <FaPhone className="text-[var(--accent)]" />, text: '+92 305 1621117' },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-3 text-[var(--text-secondary)] text-sm">
                  <span className="text-base flex-shrink-0">{item.icon}</span>
                  <span className="truncate">{item.text}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Text */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-[var(--text-primary)]">
              Flutter Mobile <span className="gradient-text">Developer</span>
            </h3>

            <p className="text-[var(--text-secondary)] leading-relaxed">
              I&apos;m <strong className="text-[var(--text-primary)]">Muhammad Muneeb</strong>, a dedicated
              Flutter mobile application developer with a passion for building elegant, user-friendly apps.
              I specialize in creating cross-platform mobile solutions that run seamlessly on both iOS and
              Android from a single codebase.
            </p>

            <p className="text-[var(--text-secondary)] leading-relaxed">
              My journey in mobile development has equipped me with a deep understanding of the Flutter
              framework, Dart language, and modern mobile development best practices — from state
              management to API integration and smooth UI animations.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 my-8">
              {stats.map((stat) => (
                <motion.div
                  key={stat.label}
                  whileHover={{ scale: 1.05 }}
                  className="glass-card p-4 text-center cursor-default transition-all duration-300"
                >
                  <div className="text-3xl font-bold gradient-text">
                    <Counter target={stat.target} inView={inView} />
                    <span>+</span>
                  </div>
                  <p className="text-xs text-[var(--text-secondary)] mt-1 font-medium">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            <motion.a
              href="#contact"
              onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-white bg-gradient-to-r from-[var(--accent)] to-[var(--accent2)] hover:shadow-[0_0_30px_rgba(108,99,255,0.5)] transition-all duration-300 text-sm"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch ✉️
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
