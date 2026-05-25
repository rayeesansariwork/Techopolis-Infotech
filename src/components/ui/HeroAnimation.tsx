/**
 * Voquill-inspired hero animation — polished build.
 * Pure SVG + CSS keyframes. No external dependencies.
 */

// Each strand stack draws 2 layered paths to create the "woven silk" effect.
// d = SVG path data; speed = seconds per dashoffset loop.
const STRANDS: { d: string; speed: number; delay: number }[] = [
  // Top-left arc
  { d: 'M -20 40 C 80 60, 130 110, 200 200',  speed: 9,  delay: 0    },
  // Top
  { d: 'M 180 -20 C 220 60, 200 130, 200 200', speed: 11, delay: -2.4 },
  // Top-right arc
  { d: 'M 420 60 C 320 90, 260 140, 200 200', speed: 10, delay: -4.8 },
  // Right
  { d: 'M 440 220 C 340 220, 260 220, 200 200', speed: 13, delay: -1.3 },
  // Bottom-right arc
  { d: 'M 360 420 C 300 340, 250 260, 200 200', speed: 12, delay: -7.5 },
  // Bottom-left arc
  { d: 'M 30 360 C 90 300, 140 250, 200 200',  speed: 14, delay: -3.7 },
];

// Annulus of ambient dots — scattered around the orb at varied radii.
const DOTS: { cx: number; cy: number; r: number; delay: number }[] = [
  { cx: 130, cy: 130, r: 1.6, delay: 0    },
  { cx: 270, cy: 140, r: 1.4, delay: -0.8 },
  { cx: 300, cy: 200, r: 1.8, delay: -1.6 },
  { cx: 270, cy: 260, r: 1.3, delay: -2.4 },
  { cx: 130, cy: 260, r: 1.5, delay: -3.2 },
  { cx: 100, cy: 200, r: 1.7, delay: -4.0 },
  { cx: 200, cy: 100, r: 1.4, delay: -2.0 },
  { cx: 200, cy: 300, r: 1.5, delay: -3.0 },
];

export function HeroAnimation() {
  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
      <style>{`
        @keyframes hero-flow    { from { stroke-dashoffset: 0; } to { stroke-dashoffset: -700; } }
        @keyframes hero-pulse   { 0%, 100% { opacity: 0.55; transform: scale(1); } 50% { opacity: 1; transform: scale(1.06); } }
        @keyframes hero-breathe { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.04); } }
        @keyframes hero-twinkle { 0%, 100% { opacity: 0.15; } 50% { opacity: 0.7; } }

        .hero-strand-main  { stroke-dasharray: 120 580; animation: hero-flow var(--dur, 10s) linear infinite; animation-delay: var(--delay, 0s); }
        .hero-strand-ghost { stroke-dasharray: 80 620;  animation: hero-flow var(--dur, 10s) linear infinite; animation-delay: calc(var(--delay, 0s) - 1.2s); }
        .hero-glow         { transform-origin: 200px 200px; animation: hero-pulse 4.5s ease-in-out infinite; }
        .hero-orb          { transform-origin: 200px 200px; animation: hero-breathe 6s ease-in-out infinite; }
        .hero-dot          { animation: hero-twinkle 4s ease-in-out infinite; animation-delay: var(--delay, 0s); }

        @media (prefers-reduced-motion: reduce) {
          .hero-strand-main, .hero-strand-ghost, .hero-glow, .hero-orb, .hero-dot { animation: none; }
        }
      `}</style>

      <svg viewBox="0 0 400 400" className="w-full h-full" aria-hidden>
        <defs>
          <radialGradient id="hero-halo" cx="50%" cy="50%" r="50%">
            <stop offset="0%"   stopColor="#000000" stopOpacity="0.18" />
            <stop offset="35%"  stopColor="#000000" stopOpacity="0.08" />
            <stop offset="70%"  stopColor="#000000" stopOpacity="0.02" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0"    />
          </radialGradient>
        </defs>

        {/* Silky strands — main + ghost layer per strand */}
        <g stroke="#000000" fill="none" strokeLinecap="round">
          {STRANDS.map((s, i) => (
            <g key={i} style={{ ['--dur' as string]: `${s.speed}s`, ['--delay' as string]: `${s.delay}s` }}>
              <path className="hero-strand-main"  d={s.d} strokeWidth="1.2" opacity="0.45" />
              <path className="hero-strand-ghost" d={s.d} strokeWidth="0.6" opacity="0.22" />
            </g>
          ))}
        </g>

        {/* Ambient dots */}
        <g fill="#000000">
          {DOTS.map((d, i) => (
            <circle key={i} className="hero-dot" cx={d.cx} cy={d.cy} r={d.r} style={{ ['--delay' as string]: `${d.delay}s` }} />
          ))}
        </g>

        {/* Center halo (pulsing) */}
        <circle className="hero-glow" cx="200" cy="200" r="70" fill="url(#hero-halo)" />

        {/* Center orb (breathing) */}
        <g className="hero-orb">
          <circle cx="200" cy="200" r="26" fill="#000000" />
          {/* Techopolis spike-mark logo, centred and scaled inside the orb */}
          <g
            transform="translate(200 200) scale(1.5)"
            fill="none"
            stroke="#D8FA38"
            strokeWidth="1.4"
            strokeLinecap="round"
            aria-label="Techopolis"
          >
            <line x1="0" y1="-9" x2="0" y2="-3" />
            <line x1="0" y1="3" x2="0" y2="9" />
            <line x1="-9" y1="0" x2="-3" y2="0" />
            <line x1="3" y1="0" x2="9" y2="0" />
            <line x1="-6.4" y1="-6.4" x2="-2.5" y2="-2.5" />
            <line x1="2.5" y1="2.5" x2="6.4" y2="6.4" />
            <line x1="6.4" y1="-6.4" x2="2.5" y2="-2.5" />
            <line x1="-2.5" y1="2.5" x2="-6.4" y2="6.4" />
          </g>
        </g>
      </svg>
    </div>
  );
}
