import { useMemo } from "react";

/**
 * Animated topographic wave field for the hero background.
 * Pure SVG + CSS — slow, subtle drift; no JS animation loop.
 */
export function HeroWaves() {
  const lines = useMemo(() => {
    const count = 60;
    const width = 1600;
    const height = 900;
    const step = height / (count - 1);
    return Array.from({ length: count }, (_, i) => {
      const baseY = i * step;
      // amplitude grows toward the middle of the canvas
      const t = i / (count - 1);
      const amp = 60 + Math.sin(t * Math.PI) * 90;
      const freq = 1.2 + Math.sin(t * Math.PI * 2) * 0.4;
      const phase = t * Math.PI * 2;
      const segments = 80;
      let d = "";
      for (let s = 0; s <= segments; s++) {
        const x = (s / segments) * width;
        const y =
          baseY +
          Math.sin((s / segments) * Math.PI * 2 * freq + phase) * amp * 0.5 +
          Math.sin((s / segments) * Math.PI * 4 * freq + phase * 1.3) * amp * 0.25;
        d += `${s === 0 ? "M" : "L"}${x.toFixed(1)} ${y.toFixed(1)} `;
      }
      return {
        d,
        // stagger drift speed and direction
        duration: 40 + (i % 7) * 6,
        delay: -((i * 1.7) % 30),
        direction: i % 2 === 0 ? "normal" : "reverse",
        stroke: `url(#waveGrad)`,
        opacity: 0.18 + 0.5 * Math.sin(t * Math.PI),
      };
    });
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <svg
        viewBox="0 0 1600 900"
        preserveAspectRatio="xMidYMid slice"
        className="h-full w-full"
        aria-hidden
      >
        <defs>
          <linearGradient id="waveGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#1a2b4a" />
            <stop offset="45%" stopColor="#7a5a8a" />
            <stop offset="100%" stopColor="#e8855a" />
          </linearGradient>
          <radialGradient id="waveGlow" cx="65%" cy="55%" r="55%">
            <stop offset="0%" stopColor="#e8855a" stopOpacity="0.35" />
            <stop offset="60%" stopColor="#1a2b4a" stopOpacity="0" />
          </radialGradient>
        </defs>

        <rect width="1600" height="900" fill="#0a0f1c" />
        <rect width="1600" height="900" fill="url(#waveGlow)" />

        <g fill="none" strokeWidth="1.1" strokeLinecap="round">
          {lines.map((l, i) => (
            <path
              key={i}
              d={l.d}
              stroke={l.stroke}
              opacity={l.opacity}
              style={{
                animation: `heroWaveDrift ${l.duration}s ease-in-out ${l.delay}s infinite alternate`,
                animationDirection: l.direction,
                transformOrigin: "center",
                willChange: "transform",
              }}
            />
          ))}
        </g>
      </svg>

      <style>{`
        @keyframes heroWaveDrift {
          0%   { transform: translate3d(-2%, -0.6%, 0) scaleY(1); }
          50%  { transform: translate3d(1.5%, 0.8%, 0) scaleY(1.03); }
          100% { transform: translate3d(2.5%, -0.4%, 0) scaleY(0.98); }
        }
        @media (prefers-reduced-motion: reduce) {
          [style*="heroWaveDrift"] { animation: none !important; }
        }
      `}</style>
    </div>
  );
}