'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaFilePdf, FaTimes } from 'react-icons/fa';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#applications', label: 'Apps' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navLinks.map((l) => l.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const id = href.slice(1);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#0a0a14]/95 backdrop-blur-xl shadow-[0_4px_30px_rgba(108,99,255,0.15)] border-b border-[rgba(108,99,255,0.15)]'
            : 'bg-transparent'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-5 py-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <motion.a
            href="#home"
            onClick={(e) => { e.preventDefault(); handleNavClick('#home'); }}
            className="group flex min-w-fit items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] py-2 pl-2 pr-4 text-[var(--text-primary)] shadow-[0_10px_30px_rgba(0,0,0,0.18)] backdrop-blur-md transition-colors hover:border-[rgba(0,212,255,0.35)]"
            whileHover={{ scale: 1.05 }}
          >
            <span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-[var(--accent)] to-[var(--accent2)] text-base font-black text-white shadow-[0_0_22px_rgba(0,212,255,0.32)]">
              M
            </span>
            <span className="text-lg font-black tracking-[-0.03em] sm:text-xl">
              M<span className="gradient-text">.</span>Muneeb
            </span>
          </motion.a>

          {/* Desktop Nav */}
          <ul className="hidden items-center gap-5 rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 backdrop-blur-md lg:flex xl:gap-7">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                  className={`relative text-sm font-medium transition-colors duration-200 ${
                    activeSection === link.href.slice(1)
                      ? 'text-[var(--accent)]'
                      : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                  }`}
                >
                  {link.label}
                  {activeSection === link.href.slice(1) && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-[var(--accent)] to-[var(--accent2)] rounded-full"
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>

          {/* Resume Link */}
          <motion.a
            href="/resume"
            className="hidden items-center gap-2 rounded-full border border-[rgba(0,212,255,0.35)] bg-white/[0.04] px-5 py-2 text-sm font-semibold text-white transition-all duration-300 hover:border-[var(--accent2)] hover:text-[var(--accent2)] lg:flex"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaFilePdf /> Resume
          </motion.a>

          {/* Hire Me Button */}
          <motion.a
            href="#contact"
            onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}
            className="hidden items-center gap-2 rounded-full bg-gradient-to-r from-[var(--accent)] to-[var(--accent2)] px-5 py-2 text-sm font-semibold text-white transition-all duration-300 hover:shadow-[0_0_20px_rgba(108,99,255,0.5)] lg:flex"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Hire Me
          </motion.a>

          {/* Mobile Hamburger */}
          <motion.button
            className="rounded-lg p-2 text-[var(--text-primary)] lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed bottom-0 right-0 top-0 z-40 flex w-72 flex-col gap-4 border-l border-[rgba(108,99,255,0.2)] bg-[#12121f]/98 px-8 pt-24 shadow-2xl backdrop-blur-xl"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.07 }}
                className={`text-lg font-medium py-3 border-b border-[rgba(108,99,255,0.1)] transition-colors ${
                  activeSection === link.href.slice(1)
                    ? 'text-[var(--accent)]'
                    : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                }`}
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href="/resume"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="mt-6 flex items-center justify-center gap-2 rounded-full border border-[rgba(0,212,255,0.35)] py-3 text-center font-semibold text-white"
            >
              <FaFilePdf /> Resume
            </motion.a>
            <motion.a
              href="#contact"
              onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-6 text-center py-3 rounded-full font-semibold text-white bg-gradient-to-r from-[var(--accent)] to-[var(--accent2)]"
            >
              Hire Me
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-30 bg-black/60 lg:hidden"
            onClick={() => setMobileOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
