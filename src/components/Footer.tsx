"use client";

import { motion } from "framer-motion";
import { HiArrowUp, HiHeart } from "react-icons/hi";
import { SiFlutter } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 sm:flex-row">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-2 sm:items-start"
        >
          <p className="flex items-center gap-2 text-sm text-slate-500">
            <SiFlutter className="text-sky-400" />
            © {new Date().getFullYear()}{" "}
            <span className="gradient-text font-semibold">Muhammad Muneeb</span>
          </p>
          <p className="flex items-center gap-1 text-xs text-slate-600">
            Crafted with{" "}
            <HiHeart className="text-red-500" size={12} /> in Pakistan
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-xs text-slate-600"
        >
          Beautiful Flutter applications · Exceptional user experiences ·
          Professional engineering
        </motion.p>

        <motion.button
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          whileHover={{ y: -2 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-sky-500 text-white shadow-[0_0_20px_rgba(129,140,248,0.3)] transition-shadow hover:shadow-[0_0_30px_rgba(129,140,248,0.5)]"
          aria-label="Back to top"
        >
          <HiArrowUp size={18} />
        </motion.button>
      </div>
    </footer>
  );
}
