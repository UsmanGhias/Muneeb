import Image from 'next/image';

interface OrbitPortraitProps {
  showLocation?: boolean;
  size?: 'hero' | 'about';
}

export default function OrbitPortrait({ showLocation = false, size = 'hero' }: OrbitPortraitProps) {
  const dimensions =
    size === 'hero'
      ? 'w-[17rem] h-[17rem] sm:w-[22rem] sm:h-[22rem] lg:w-[26rem] lg:h-[26rem] xl:w-[28rem] xl:h-[28rem]'
      : 'w-[16rem] h-[16rem] sm:w-[20rem] sm:h-[20rem] lg:w-[24rem] lg:h-[24rem]';

  return (
    <div className={`relative mx-auto ${dimensions}`}>
      <div className="portrait-frame absolute inset-0 rounded-full p-[2px]">
        <div className="relative h-full w-full overflow-hidden rounded-full bg-[#070b18] shadow-[0_12px_40px_rgba(0,0,0,0.35)]">
          <Image
            src="/profile.jpeg"
            alt="Muhammad Muneeb"
            fill
            className="object-cover object-[center_38%]"
            priority
            sizes={
              size === 'hero'
                ? '(max-width: 768px) 70vw, (max-width: 1280px) 34vw, 28rem'
                : '(max-width: 768px) 70vw, (max-width: 1280px) 32vw, 24rem'
            }
          />
        </div>
      </div>

      {showLocation && (
        <p className="absolute -bottom-8 left-0 right-0 text-center text-sm text-white/65">
          Based in Samundri, Pakistan
        </p>
      )}
    </div>
  );
}
