import Image from 'next/image';
import type { ReactNode } from 'react';

interface OrbitBadge {
  icon: ReactNode;
  label: string;
  className: string;
  iconClassName?: string;
}

interface OrbitPortraitProps {
  badges?: OrbitBadge[];
  showLocation?: boolean;
  size?: 'hero' | 'about';
}

export default function OrbitPortrait({ badges = [], showLocation = false, size = 'hero' }: OrbitPortraitProps) {
  const dimensions = size === 'hero'
    ? 'w-[19rem] h-[19rem] sm:w-[24rem] sm:h-[24rem] lg:w-[29rem] lg:h-[29rem] xl:w-[32rem] xl:h-[32rem] 2xl:w-[35rem] 2xl:h-[35rem]'
    : 'w-[18rem] h-[18rem] sm:w-[24rem] sm:h-[24rem] lg:w-[28rem] lg:h-[28rem] xl:w-[31rem] xl:h-[31rem]';

  return (
    <div className={`orbit-stage relative mx-auto ${dimensions}`}>
      <div className="orbit-ring orbit-ring-one" />
      <div className="orbit-ring orbit-ring-two" />
      <div className="orbit-ring orbit-ring-three" />
      <div className="orbit-dot dot-one" />
      <div className="orbit-dot dot-two" />
      <div className="orbit-dot dot-three" />
      <div className="orbit-dot dot-four" />
      <div className="portrait-glow absolute inset-[11%] rounded-full" />
      <div className="portrait-frame absolute inset-[15%] rounded-full p-[3px]">
        <div className="relative h-full w-full overflow-hidden rounded-full bg-[#070b18] shadow-[0_0_70px_rgba(32,146,255,0.42)]">
          <Image
            src="/profile.jpeg"
            alt="Muhammad Muneeb"
            fill
            className="object-cover object-[center_38%]"
            priority
            sizes={size === 'hero' ? '(max-width: 768px) 70vw, (max-width: 1280px) 34vw, 32rem' : '(max-width: 768px) 70vw, (max-width: 1280px) 32vw, 31rem'}
          />
        </div>
      </div>

      {badges.map((badge) => (
        <div key={badge.label} className={`tech-badge absolute ${badge.className}`}>
          <span className={badge.iconClassName ?? 'text-[var(--accent2)]'}>{badge.icon}</span>
          <span>{badge.label}</span>
        </div>
      ))}

      {showLocation && (
        <div className="location-card absolute bottom-[5%] right-[3%] hidden sm:flex">
          <span className="text-3xl text-[#b42dff]">⌖</span>
          <span className="text-xs leading-tight text-white/80">
            Based in<br />
            <strong className="text-[#bd55ff]">Samundri,</strong><br />
            Pakistan
          </span>
        </div>
      )}
    </div>
  );
}
