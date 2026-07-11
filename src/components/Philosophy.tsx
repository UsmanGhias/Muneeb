"use client";

import { motion } from "framer-motion";
import {
  HiLightBulb,
  HiTemplate,
  HiColorSwatch,
  HiSparkles,
  HiLightningBolt,
  HiShieldCheck,
} from "react-icons/hi";
import SectionHeader from "./SectionHeader";
import { philosophyPoints } from "@/data/portfolio";

const icons = [
  HiLightBulb,
  HiTemplate,
  HiColorSwatch,
  HiSparkles,
  HiLightningBolt,
  HiShieldCheck,
];

export default function Philosophy() {
  return (
    <section id="philosophy" className="relative py-28">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          tag="How I Build"
          title="Development"
          highlight="Philosophy"
          description="Not a list of skills — a disciplined approach to building mobile applications that last."
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {philosophyPoints.map((point, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="group glass-card-hover p-7"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500/20 to-sky-500/10 text-indigo-400 transition-colors group-hover:from-indigo-500/30 group-hover:to-sky-500/20">
                  <Icon size={22} />
                </div>
                <h3 className="font-display mb-2 text-lg font-semibold text-white">
                  {point.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-400">
                  {point.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mt-16 max-w-3xl text-center"
        >
          <p className="font-display text-2xl font-medium leading-snug text-slate-300 md:text-3xl">
            &ldquo;Beautiful Flutter applications.{" "}
            <span className="gradient-text">Exceptional user experiences.</span>{" "}
            Professional engineering.&rdquo;
          </p>
        </motion.blockquote>
      </div>
    </section>
  );
}
