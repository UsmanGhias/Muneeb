'use client';

import { motion } from 'framer-motion';
import { FaArrowUp } from 'react-icons/fa';

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative border-t border-[rgba(108,99,255,0.12)] py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-xl text-center text-sm leading-relaxed text-[var(--text-secondary)] sm:text-left"
        >
          Designed and developed by Muhammad Muneeb using Next.js, TypeScript and Tailwind CSS.
          <br />
          <span className="mt-1 inline-block">© {new Date().getFullYear()}</span>
        </motion.p>

        <motion.button
          onClick={scrollToTop}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[var(--accent)] to-[var(--accent2)] text-white transition-all duration-300"
          whileHover={{ scale: 1.05, y: -1 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Back to top"
        >
          <FaArrowUp />
        </motion.button>
      </div>
    </footer>
  );
}
