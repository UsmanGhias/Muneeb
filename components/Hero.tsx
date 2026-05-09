'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaEnvelope,
  FaPhone,
  FaGithub,
  FaLinkedin,
  FaChevronDown,
  FaMobileAlt,
  FaUserCircle,
} from 'react-icons/fa';
import { SiFlutter, SiDart } from 'react-icons/si';

const phrases = [
  'Flutter Developer',
  'Mobile App Developer',
  'Cross-Platform Expert',
  'UI/UX Enthusiast',
];

function useTypingEffect(phrases: string[]) {
  const [display, setDisplay] = useState('');
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[phraseIdx];
    const timeout = setTimeout(
      () => {
        if (!deleting) {
          setDisplay(current.slice(0, charIdx + 1));
          if (charIdx + 1 === current.length) {
            setTimeout(() => setDeleting(true), 1800);
          } else {
            setCharIdx((c) => c + 1);
          }
        } else {
          setDisplay(current.slice(0, charIdx - 1));
          if (charIdx - 1 === 0) {
            setDeleting(false);
            setPhraseIdx((p) => (p + 1) % phrases.length);
            setCharIdx(0);
          } else {
            setCharIdx((c) => c - 1);
          }
        }
      },
      deleting ? 60 : 100,
    );
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, phraseIdx, phrases]);

  return display;
}

const floatingBadges = [
  { icon: <SiFlutter />, label: 'Flutter', pos: 'top-4 -right-8', delay: 0 },
  { icon: <FaMobileAlt />, label: 'Android', pos: 'bottom-16 -left-10', delay: 0.5 },
  { icon: <SiDart />, label: 'Dart', pos: '-top-4 left-8', delay: 1 },
];

export default function Hero() {
  const typedText = useTypingEffect(phrases);

  const scrollToNext = () => {
    const el = document.getElementById('about');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background glow blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--accent)] opacity-10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[var(--accent2)] opacity-8 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-16">
          {/* Text Side */}
          <div className="flex-1 text-center lg:text-left">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-[var(--accent2)] font-medium text-base mb-2 tracking-wider"
            >
              Hello, I&apos;m
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-[var(--text-primary)] leading-tight mb-4"
            >
              Muhammad{' '}
              <span className="gradient-text">Muneeb</span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl font-semibold text-[var(--text-secondary)] mb-6 h-8"
            >
              <span className="text-[var(--accent)]">{typedText}</span>
              <span className="cursor-blink text-[var(--accent2)] ml-0.5">|</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-[var(--text-secondary)] text-base md:text-lg leading-relaxed max-w-xl mb-8 mx-auto lg:mx-0"
            >
              Passionate Flutter developer crafting beautiful, high-performance mobile
              applications for iOS &amp; Android from Samundri, Pakistan.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4 mb-8 justify-center lg:justify-start"
            >
              <motion.a
                href="#contact"
                onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="px-8 py-3.5 rounded-full font-semibold text-white bg-gradient-to-r from-[var(--accent)] to-[var(--accent2)] hover:shadow-[0_0_30px_rgba(108,99,255,0.6)] transition-all duration-300 text-sm"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Hire Me ✨
              </motion.a>
              <motion.a
                href="#about"
                onClick={(e) => { e.preventDefault(); document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="px-8 py-3.5 rounded-full font-semibold border border-[var(--accent)] text-[var(--accent)] hover:bg-[var(--accent)] hover:text-white hover:shadow-[0_0_20px_rgba(108,99,255,0.4)] transition-all duration-300 text-sm"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                About Me
              </motion.a>
            </motion.div>

            {/* Socials */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex gap-4 justify-center lg:justify-start"
            >
              {[
                { icon: <FaEnvelope />, href: 'mailto:muhammadmuneeb1061@gmail.com', label: 'Email' },
                { icon: <FaPhone />, href: 'tel:+923051621117', label: 'Phone' },
                { icon: <FaGithub />, href: 'https://github.com/', label: 'GitHub' },
                { icon: <FaLinkedin />, href: 'https://linkedin.com/', label: 'LinkedIn' },
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full border border-[rgba(108,99,255,0.3)] flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--accent)] hover:border-[var(--accent)] hover:shadow-[0_0_15px_rgba(108,99,255,0.3)] transition-all duration-300"
                  whileHover={{ scale: 1.2, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Image / Avatar Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative flex-shrink-0"
          >
            {/* Outer rotating ring */}
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-[rgba(108,99,255,0.3)] animate-spin-slow" />
              <div className="absolute inset-4 rounded-full border border-[rgba(0,212,255,0.2)]" />

              {/* Avatar */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute inset-8 rounded-full bg-gradient-to-br from-[var(--accent)] to-[var(--accent2)] flex items-center justify-center shadow-[0_0_60px_rgba(108,99,255,0.4)]"
              >
                <FaUserCircle className="text-white w-full h-full opacity-80 p-4" />
              </motion.div>

              {/* Floating badges */}
              {floatingBadges.map((badge, i) => (
                <motion.div
                  key={badge.label}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + i * 0.2, type: 'spring' }}
                  className={`absolute ${badge.pos} flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold text-white bg-[var(--bg-card)] border border-[rgba(108,99,255,0.3)] shadow-[0_4px_20px_rgba(108,99,255,0.2)] backdrop-blur-sm ${
                    i === 0 ? 'badge-float-1' : i === 1 ? 'badge-float-2' : 'badge-float-3'
                  }`}
                >
                  <span className="text-[var(--accent)]">{badge.icon}</span>
                  {badge.label}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          onClick={scrollToNext}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors"
        >
          <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <FaChevronDown />
          </motion.div>
        </motion.button>
      </div>
    </section>
  );
}
