"use client";

import Image from "next/image";
import { useState } from "react";
import type { AppProject } from "@/data/portfolio";

interface PhoneMockupProps {
  app: AppProject;
  screenshotIndex?: number;
  size?: "sm" | "md" | "lg";
  className?: string;
  showCaption?: boolean;
}

const sizes = {
  sm: { w: 160, h: 320, radius: 24, notch: 12, bezel: 6 },
  md: { w: 200, h: 400, radius: 28, notch: 14, bezel: 7 },
  lg: { w: 260, h: 520, radius: 36, notch: 16, bezel: 8 },
};

export default function PhoneMockup({
  app,
  screenshotIndex = 0,
  size = "lg",
  className = "",
  showCaption = false,
}: PhoneMockupProps) {
  const [imgError, setImgError] = useState(false);
  const s = sizes[size];
  const screenshot = app.screenshots[screenshotIndex];

  return (
    <div className={`flex flex-col items-center ${className}`}>
      <div
        className="relative overflow-hidden"
        style={{
          width: s.w + s.bezel * 2,
          height: s.h + s.bezel * 2,
          borderRadius: s.radius + s.bezel,
          background: "linear-gradient(145deg, #1e293b, #0f172a)",
          padding: s.bezel,
          boxShadow: `0 0 0 1px rgba(255,255,255,0.08), 0 20px 60px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.1)`,
        }}
      >
        {/* Side buttons */}
        <div className="absolute -left-[2px] top-20 h-8 w-[3px] rounded-l bg-slate-600" />
        <div className="absolute -left-[2px] top-32 h-12 w-[3px] rounded-l bg-slate-600" />
        <div className="absolute -right-[2px] top-24 h-16 w-[3px] rounded-r bg-slate-600" />

        <div
          className="relative h-full w-full overflow-hidden"
          style={{ borderRadius: s.radius }}
        >
          {/* Dynamic island / notch */}
          <div
            className="absolute left-1/2 top-2 z-20 -translate-x-1/2 rounded-full bg-black"
            style={{ width: s.notch * 4, height: s.notch }}
          />

          {!imgError && screenshot ? (
            <Image
              src={screenshot.src}
              alt={screenshot.alt}
              fill
              className="object-cover object-top"
              onError={() => setImgError(true)}
              sizes={`${s.w}px`}
            />
          ) : (
            <AppPreviewFallback app={app} />
          )}

          {/* Screen glare */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, rgba(255,255,255,0.06) 0%, transparent 50%, transparent 100%)",
            }}
          />
        </div>
      </div>

      {showCaption && screenshot?.caption && (
        <p className="mt-3 text-xs font-medium text-slate-400">{screenshot.caption}</p>
      )}
    </div>
  );
}

function AppPreviewFallback({ app }: { app: AppProject }) {
  return (
    <div
      className="flex h-full w-full flex-col"
      style={{
        background: `linear-gradient(160deg, ${app.accent}22 0%, #0f172a 60%)`,
      }}
    >
      <div className="flex items-center justify-between px-4 pb-2 pt-10">
        <span className="text-lg">{app.icon}</span>
        <span
          className="rounded-full px-2 py-0.5 text-[8px] font-bold uppercase tracking-wider text-white"
          style={{ background: app.accent }}
        >
          {app.category.split("·")[0]?.trim()}
        </span>
      </div>

      <div className="flex-1 px-4 pb-4">
        <p className="font-display text-sm font-bold text-white">{app.name}</p>
        <p className="mt-1 text-[9px] leading-relaxed text-white/60">{app.tagline}</p>

        <div className="mt-4 space-y-2">
          {app.features.slice(0, 4).map((f) => (
            <div
              key={f}
              className="flex items-center gap-2 rounded-lg bg-white/[0.06] px-2 py-1.5"
            >
              <div
                className="h-1.5 w-1.5 flex-shrink-0 rounded-full"
                style={{ background: app.accent }}
              />
              <span className="text-[8px] text-white/70 line-clamp-1">{f}</span>
            </div>
          ))}
        </div>
      </div>

      <div
        className="mx-4 mb-4 rounded-xl py-2 text-center text-[9px] font-semibold text-white"
        style={{ background: app.accent }}
      >
        Open App
      </div>
    </div>
  );
}
