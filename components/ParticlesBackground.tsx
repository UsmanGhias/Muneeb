'use client';

export default function ParticlesBackground() {
  return (
    <div
      className="fixed inset-0 pointer-events-none z-0"
      aria-hidden="true"
      style={{
        background: `
          radial-gradient(ellipse at 20% 15%, rgba(108, 99, 255, 0.12), transparent 42%),
          radial-gradient(ellipse at 80% 25%, rgba(0, 212, 255, 0.08), transparent 38%),
          radial-gradient(ellipse at 60% 80%, rgba(108, 99, 255, 0.06), transparent 45%),
          var(--bg-primary)
        `,
      }}
    />
  );
}
