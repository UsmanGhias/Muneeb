'use client';

import { motion } from 'framer-motion';
import { FaHeart, FaArrowUp } from 'react-icons/fa';

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative py-8 border-t border-[rgba(108,99,255,0.15)]">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-[var(--text-secondary)] text-sm text-center"
        >
          © {new Date().getFullYear()}{' '}
          <span className="gradient-text font-semibold">Muhammad Muneeb</span>. Crafted with{' '}
          <FaHeart className="inline text-red-500 text-xs mx-0.5" /> in Pakistan.
        </motion.p>

        <motion.button
          onClick={scrollToTop}
          className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--accent)] to-[var(--accent2)] flex items-center justify-center text-white hover:shadow-[0_0_20px_rgba(108,99,255,0.5)] transition-all duration-300"
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Back to top"
        >
          <FaArrowUp />
        </motion.button>
      </div>
    </footer>
  );
}
