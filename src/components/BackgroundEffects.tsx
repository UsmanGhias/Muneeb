"use client";

import { motion } from "framer-motion";

export default function BackgroundEffects() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="noise-overlay absolute inset-0 opacity-50" />
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-30" />

      <motion.div
        className="absolute -left-32 top-1/4 h-[500px] w-[500px] rounded-full bg-indigo-600/10 blur-[120px]"
        animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -right-32 top-1/2 h-[400px] w-[400px] rounded-full bg-sky-500/8 blur-[100px]"
        animate={{ x: [0, -30, 0], y: [0, 40, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 left-1/2 h-[300px] w-[600px] -translate-x-1/2 rounded-full bg-violet-600/6 blur-[100px]"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(129,140,248,0.12), transparent)",
        }}
      />
    </div>
  );
}
