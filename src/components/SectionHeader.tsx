"use client";

import { motion } from "framer-motion";

interface SectionHeaderProps {
  tag: string;
  title: string;
  highlight?: string;
  description?: string;
  align?: "center" | "left";
}

export default function SectionHeader({
  tag,
  title,
  highlight,
  description,
  align = "center",
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className={`mb-16 ${align === "center" ? "text-center" : "text-left"}`}
    >
      <span className="section-tag mb-4 block">{tag}</span>
      <h2 className="font-display text-4xl font-bold tracking-tight text-white md:text-5xl">
        {title}{" "}
        {highlight && <span className="gradient-text">{highlight}</span>}
      </h2>
      <div
        className={`mt-4 h-0.5 w-16 rounded-full bg-gradient-to-r from-indigo-400 to-sky-400 ${
          align === "center" ? "mx-auto" : ""
        }`}
      />
      {description && (
        <p className="mx-auto mt-6 max-w-2xl text-base text-slate-400">
          {description}
        </p>
      )}
    </motion.div>
  );
}
