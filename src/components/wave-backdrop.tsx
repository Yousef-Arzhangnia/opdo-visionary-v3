import heroWaves from "@/assets/hero-waves.jpg";

type Variant = "ridge" | "mirror" | "tilt" | "spectrum" | "edge" | "ghost";

const styles: Record<Variant, { transform: string; opacity: number; mix: string; mask: string }> = {
  ridge: {
    transform: "scale(1.4)",
    opacity: 0.55,
    mix: "screen",
    mask: "linear-gradient(to bottom, transparent 0%, black 30%, black 70%, transparent 100%)",
  },
  mirror: {
    transform: "scaleY(-1) scale(1.3)",
    opacity: 0.35,
    mix: "multiply",
    mask: "linear-gradient(to right, transparent 0%, black 40%, transparent 100%)",
  },
  tilt: {
    transform: "rotate(-12deg) scale(1.6)",
    opacity: 0.4,
    mix: "screen",
    mask: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
  },
  spectrum: {
    transform: "scale(1.2) translateY(-10%)",
    opacity: 0.7,
    mix: "screen",
    mask: "linear-gradient(to bottom, black 0%, transparent 80%)",
  },
  edge: {
    transform: "scaleX(-1) scale(1.3)",
    opacity: 0.3,
    mix: "multiply",
    mask: "linear-gradient(to left, transparent 0%, black 60%)",
  },
  ghost: {
    transform: "scale(1.5) rotate(180deg)",
    opacity: 0.25,
    mix: "screen",
    mask: "radial-gradient(circle at 70% 50%, black 0%, transparent 65%)",
  },
};

export function WaveBackdrop({ variant, tint = "dark" }: { variant: Variant; tint?: "dark" | "light" }) {
  const s = styles[variant];
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <img
        src={heroWaves}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
        style={{
          transform: s.transform,
          opacity: s.opacity,
          mixBlendMode: s.mix as React.CSSProperties["mixBlendMode"],
          WebkitMaskImage: s.mask,
          maskImage: s.mask,
          filter: tint === "light" ? "invert(1) contrast(1.1)" : "contrast(1.05) saturate(0.9)",
        }}
      />
    </div>
  );
}

// Optical schematic: crosshair + measurement marks. Engineer signal.
export function OpticSchematic({ tint = "dark", className = "" }: { tint?: "dark" | "light"; className?: string }) {
  const stroke = tint === "dark" ? "rgba(255,255,255,0.35)" : "rgba(20,20,20,0.4)";
  const faint = tint === "dark" ? "rgba(255,255,255,0.12)" : "rgba(20,20,20,0.15)";
  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden>
      <defs>
        <pattern id="grid-opdo" width="10" height="10" patternUnits="userSpaceOnUse">
          <path d="M 10 0 L 0 0 0 10" fill="none" stroke={faint} strokeWidth="0.3" />
        </pattern>
      </defs>
      <rect width="200" height="200" fill="url(#grid-opdo)" />
      {/* lens cross-section */}
      <ellipse cx="100" cy="100" rx="55" ry="80" fill="none" stroke={stroke} strokeWidth="0.8" />
      <ellipse cx="100" cy="100" rx="35" ry="80" fill="none" stroke={stroke} strokeWidth="0.5" />
      {/* axis */}
      <line x1="0" y1="100" x2="200" y2="100" stroke={stroke} strokeWidth="0.4" strokeDasharray="2 3" />
      {/* rays */}
      <line x1="0" y1="65" x2="200" y2="105" stroke={stroke} strokeWidth="0.4" />
      <line x1="0" y1="100" x2="200" y2="100" stroke={stroke} strokeWidth="0.4" />
      <line x1="0" y1="135" x2="200" y2="95" stroke={stroke} strokeWidth="0.4" />
      {/* focal mark */}
      <circle cx="170" cy="100" r="2" fill={stroke} />
      <text x="172" y="92" fontSize="5" fill={stroke} fontFamily="ui-monospace,monospace">f = 24.3</text>
      <text x="8" y="14" fontSize="5" fill={stroke} fontFamily="ui-monospace,monospace">λ 550nm</text>
    </svg>
  );
}