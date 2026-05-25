/**
 * Tech-themed decorative SVGs that replace CC's organic blob/C-pattern motifs.
 * Each variant is self-contained and absolutely positioned by its parent.
 */

type DecorProps = {
  className?: string;
  tone?: 'primary' | 'secondary' | 'tertiary' | 'peach' | 'ink';
};

const tones = {
  primary: '#D8FA38',    // electric lime
  secondary: '#FFB6D9',  // bubblegum pink
  tertiary: '#E5FF3D',   // bright yellow
  peach: '#FFD4BC',      // warm salmon
  ink: '#000000',
} as const;

/** Concentric pulse rings — like a radar / signal */
export function PulseRings({ className = '', tone = 'primary' }: DecorProps) {
  const c = tones[tone];
  return (
    <svg
      aria-hidden
      viewBox="0 0 200 200"
      className={className}
      preserveAspectRatio="xMidYMid meet"
    >
      {[90, 70, 50, 30].map((r, i) => (
        <circle
          key={r}
          cx="100"
          cy="100"
          r={r}
          fill="none"
          stroke={c}
          strokeWidth={i === 0 ? 1.4 : 1}
          opacity={1 - i * 0.18}
        />
      ))}
      <circle cx="100" cy="100" r="6" fill={c} />
    </svg>
  );
}

/** Dot-grid square — perspective feel without 3D */
export function DotGrid({ className = '', tone = 'ink' }: DecorProps) {
  const c = tones[tone];
  const dots = [];
  for (let y = 0; y < 9; y++) {
    for (let x = 0; x < 9; x++) {
      dots.push(<circle key={`${x}-${y}`} cx={x * 20 + 10} cy={y * 20 + 10} r={1.8} fill={c} />);
    }
  }
  return (
    <svg aria-hidden viewBox="0 0 180 180" className={className}>
      <g opacity="0.6">{dots}</g>
    </svg>
  );
}

/** Network: nodes connected by lines, like a small mesh diagram */
export function NodeMesh({ className = '', tone = 'primary' }: DecorProps) {
  const c = tones[tone];
  const nodes: Array<[number, number]> = [
    [40, 40], [120, 30], [180, 70],
    [60, 110], [140, 120], [200, 140],
    [80, 180], [160, 190],
  ];
  const links: Array<[number, number]> = [
    [0, 1], [1, 2], [0, 3], [1, 3], [1, 4], [2, 4], [2, 5], [3, 4], [4, 5], [3, 6], [4, 6], [4, 7], [5, 7], [6, 7],
  ];
  return (
    <svg aria-hidden viewBox="0 0 240 220" className={className}>
      <g stroke={c} strokeWidth="1.2" opacity="0.6">
        {links.map(([a, b], i) => {
          const [x1, y1] = nodes[a];
          const [x2, y2] = nodes[b];
          return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} />;
        })}
      </g>
      {nodes.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={i % 3 === 0 ? 6 : 4} fill={c} />
      ))}
    </svg>
  );
}

/** Stacked angled bars — abstract circuit lanes */
export function CircuitLanes({ className = '', tone = 'secondary' }: DecorProps) {
  const c = tones[tone];
  return (
    <svg aria-hidden viewBox="0 0 220 220" className={className}>
      <g fill="none" stroke={c} strokeWidth="2">
        <path d="M10 60 L80 60 L110 90 L210 90" />
        <path d="M10 110 L60 110 L100 150 L210 150" opacity="0.7" />
        <path d="M10 170 L130 170 L150 190 L210 190" opacity="0.5" />
      </g>
      <g fill={c}>
        <circle cx="10" cy="60" r="4" />
        <circle cx="210" cy="90" r="4" />
        <circle cx="10" cy="110" r="3" opacity="0.7" />
        <circle cx="210" cy="150" r="3" opacity="0.7" />
        <circle cx="10" cy="170" r="3" opacity="0.5" />
        <circle cx="210" cy="190" r="3" opacity="0.5" />
      </g>
    </svg>
  );
}

/** Soft gradient blob — replaces CC's organic shapes; tech-flavored via subtle gradient */
export function GradientBlob({ className = '', tone = 'primary' }: DecorProps) {
  const c = tones[tone];
  return (
    <svg aria-hidden viewBox="0 0 240 240" className={className}>
      <defs>
        <radialGradient id={`blob-${tone}`} cx="40%" cy="40%" r="60%">
          <stop offset="0%" stopColor={c} stopOpacity="0.55" />
          <stop offset="100%" stopColor={c} stopOpacity="0" />
        </radialGradient>
      </defs>
      <ellipse cx="120" cy="120" rx="110" ry="100" fill={`url(#blob-${tone})`} />
    </svg>
  );
}

/** Rotating T-glyph ring — Techopolis "T" pattern arranged in a circle, echoes CC's "C ring" */
export function GlyphRing({ className = '', tone = 'ink' }: DecorProps) {
  const c = tones[tone];
  const count = 18;
  return (
    <svg aria-hidden viewBox="0 0 220 220" className={className}>
      <g fill={c}>
        {Array.from({ length: count }).map((_, i) => {
          const angle = (i / count) * 360;
          return (
            <g key={i} transform={`rotate(${angle} 110 110) translate(110 14)`}>
              {/* small "T" glyph */}
              <rect x="-7" y="0" width="14" height="3" />
              <rect x="-1.5" y="0" width="3" height="12" />
            </g>
          );
        })}
      </g>
    </svg>
  );
}
