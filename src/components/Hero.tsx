import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, ArrowDown, ArrowUpRight } from 'lucide-react';
import { Container } from './ui/Container';

// Mastercard design tokens
const MC_CREAM = '#F3F0EE';
const MC_INK = '#141413';
const MC_ORANGE = '#F37338'; // Light Signal Orange — orbital arcs and eyebrow dot only

const scrollTo = (id: string) => () => {
  const el = document.getElementById(id);
  if (el) {
    const top = el.getBoundingClientRect().top + window.scrollY - 72;
    window.scrollTo({ top, behavior: 'smooth' });
  }
};

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-32 pb-section overflow-hidden"
      style={{ backgroundColor: MC_CREAM }}
      aria-labelledby="hero-title"
    >
      <OrbitalBackground />

      <Container className="relative">
        <div className="grid gap-xxl lg:grid-cols-12 lg:gap-xxl items-center">
          {/* LEFT — editorial column */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 0.61, 0.36, 1] }}
            className="lg:col-span-7 flex flex-col gap-lg"
          >
            <h1
              id="hero-title"
              className="font-sans font-medium text-ink text-[34px] leading-[1.1] tracking-[-0.8px] sm:text-[42px] sm:tracking-[-1px] md:text-[50px] lg:text-[52px] xl:text-[58px] xl:tracking-[-1.5px]"
            >
              Software, hardware,
              <br className="hidden sm:block" />{' '}
              and <span className="whitespace-nowrap">on-site IT</span> —{' '}
              <span className="relative inline-block whitespace-nowrap">
                under one roof.
                <UnderlineSwoop />
              </span>
            </h1>

            <p className="text-[16px] md:text-[18px] leading-[1.65] max-w-[52ch] font-normal" style={{ color: '#3d3d3a' }}>
              Serving banks, PSUs, hospitals, and schools across India — we show up
              on-site, stay on-call, and keep your operations running.
            </p>

            {/* Ink Black CTAs — Mastercard 20px radius */}
            <div className="flex flex-wrap items-center gap-md pt-xs">
              <button
                onClick={scrollTo('contact')}
                className="inline-flex items-center gap-xs px-lg h-10 text-button font-medium transition-colors duration-250 hover:opacity-80 active:opacity-70"
                style={{ backgroundColor: MC_INK, color: MC_CREAM, borderRadius: '20px' }}
              >
                <span>Talk to us</span>
                <ArrowRight size={14} />
              </button>
              <button
                onClick={scrollTo('clients')}
                className="inline-flex items-center gap-xs px-lg h-10 bg-white text-button font-medium transition-colors duration-250 hover:bg-[#F3F0EE] active:bg-[#ece9e6]"
                style={{ color: MC_INK, border: `1.5px solid ${MC_INK}`, borderRadius: '20px' }}
              >
                <span>Our work</span>
                <ArrowDown size={14} />
              </button>
            </div>

            <dl className="flex flex-wrap gap-x-xl gap-y-md pt-lg text-body-sm text-muted">
              <div className="flex items-baseline gap-xs">
                <dt className="text-muted-soft">Serving</dt>
                <dd className="text-ink font-medium">PSU · Banking · Education · Healthcare</dd>
              </div>
              <div className="flex items-baseline gap-xs">
                <dt className="text-muted-soft">Coverage</dt>
                <dd className="text-ink font-medium">Pan-India, on-site &amp; remote</dd>
              </div>
            </dl>
          </motion.div>

          {/* RIGHT — Mastercard stadium media frame */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 0.61, 0.36, 1] }}
            className="lg:col-span-5"
          >
            <MastercardMediaFrame />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

function UnderlineSwoop() {
  const reduced = useReducedMotion();
  return (
    <svg
      aria-hidden
      viewBox="0 0 240 12"
      preserveAspectRatio="none"
      className="absolute left-0 -bottom-1 w-full h-[10px]"
      style={{ color: MC_ORANGE }}
    >
      <motion.path
        d="M2 8 Q60 1 120 6 T238 4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        initial={reduced ? { pathLength: 1 } : { pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.1, delay: 0.6, ease: [0.22, 0.61, 0.36, 1] }}
      />
    </svg>
  );
}

// Light Signal Orange orbital arcs — the Mastercard background signature
function OrbitalBackground() {
  return (
    <div aria-hidden className="absolute inset-0 pointer-events-none overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, rgba(20,20,19,0.05) 1px, transparent 0)',
          backgroundSize: '28px 28px',
          maskImage:
            'radial-gradient(ellipse 70% 60% at 50% 30%, black 40%, transparent 80%)',
        }}
      />
      {/* Right-side orbit constellation */}
      <svg
        aria-hidden
        className="absolute -top-24 -right-32 w-[640px] h-[640px] opacity-20"
        viewBox="0 0 600 600"
      >
        <circle cx="300" cy="300" r="260" fill="none" stroke={MC_ORANGE} strokeWidth="1" />
        <circle cx="300" cy="300" r="185" fill="none" stroke={MC_ORANGE} strokeWidth="0.7" />
        <circle cx="300" cy="300" r="110" fill="none" stroke={MC_ORANGE} strokeWidth="0.5" />
      </svg>
      {/* Bottom-left arc — subtle decorative background */}
      <svg
        aria-hidden
        className="absolute -bottom-56 -left-48 w-[480px] h-[480px]"
        style={{ opacity: 0.12 }}
        viewBox="0 0 400 400"
      >
        <circle cx="200" cy="200" r="170" fill="none" stroke={MC_ORANGE} strokeWidth="0.8" />
      </svg>
    </div>
  );
}

/**
 * Stadium-shaped (40px radius) dark card — Mastercard's "Hero Media Frame" pattern.
 * Contains a circular portrait with a satellite CTA docked bottom-right,
 * ghost-watermark text, and decorative orbital arcs in Light Signal Orange.
 */
function MastercardMediaFrame() {
  const reduced = useReducedMotion();

  return (
    <div className="relative">
      {/* Stadium card — 40px radius is the Mastercard hero container signature */}
      <div
        className="relative overflow-hidden"
        style={{
          borderRadius: '40px',
          backgroundColor: MC_INK,
          boxShadow: '0 24px 48px rgba(0,0,0,0.08)',
          padding: '36px 32px 32px',
          minHeight: '340px',
        }}
      >
        {/* Ghost watermark headline — cream-on-near-black */}
        <div
          aria-hidden
          className="absolute top-5 left-5 font-sans font-medium leading-none select-none pointer-events-none whitespace-nowrap"
          style={{
            fontSize: '72px',
            letterSpacing: '-2px',
            color: 'rgba(255,255,255,0.04)',
          }}
        >
          Infotech
        </div>

        {/* Orbital decorative arcs in Light Signal Orange */}
        <svg
          aria-hidden
          className="absolute inset-0 w-full h-full pointer-events-none"
          viewBox="0 0 400 380"
          preserveAspectRatio="none"
          style={{ opacity: 0.45 }}
        >
          <path
            d="M-30 310 Q90 90 250 190 T430 50"
            fill="none"
            stroke={MC_ORANGE}
            strokeWidth="1"
          />
          <path
            d="M10 360 Q140 210 310 270 T500 110"
            fill="none"
            stroke={MC_ORANGE}
            strokeWidth="0.6"
          />
        </svg>

        {/* Circular portrait + satellite CTA */}
        <div className="flex items-center justify-center" style={{ minHeight: '240px' }}>
          {/* Portrait wrapper — satellite CTA is positioned relative to this */}
          <div className="relative" style={{ width: '220px', height: '220px' }}>
            {/* The circular portrait — 220px diameter */}
            <div
              className="absolute inset-0 flex items-center justify-center overflow-hidden"
              style={{
                borderRadius: '50%',
                backgroundColor: '#252320',
                border: '1px solid rgba(255,255,255,0.07)',
              }}
            >
              <CircularNetworkDiagram reduced={!!reduced} />
            </div>

            {/* Satellite CTA — docked at the bottom-right corner of the portrait */}
            <button
              onClick={scrollTo('contact')}
              className="absolute flex items-center justify-center rounded-full bg-white transition-transform duration-250 hover:scale-110 active:scale-95"
              style={{
                width: '52px',
                height: '52px',
                bottom: '4px',
                right: '-8px',
                color: MC_INK,
                boxShadow: '0 6px 18px rgba(0,0,0,0.18)',
              }}
              aria-label="Get in touch"
            >
              <ArrowUpRight size={20} />
            </button>
          </div>
        </div>

        {/* Eyebrow + title below portrait */}
        <div className="mt-md text-center">
          <span
            className="inline-flex items-center gap-[5px] text-[10px] font-bold uppercase"
            style={{ color: MC_ORANGE, letterSpacing: '3px' }}
          >
            <span>•</span>
            <span>Mission-Critical IT</span>
          </span>
          <p
            className="mt-xxs font-sans font-medium text-[18px] leading-snug"
            style={{ color: MC_CREAM, letterSpacing: '-0.36px' }}
          >
            100+ enterprise sites, pan-India
          </p>
        </div>
      </div>

      {/* Floating annotation card */}
      <div
        className="hidden md:block absolute -bottom-6 -left-6 px-md py-sm"
        style={{
          borderRadius: '12px',
          backgroundColor: 'white',
          border: '1px solid rgba(20,20,19,0.09)',
          boxShadow: '0 4px 24px rgba(0,0,0,0.04)',
        }}
      >
        <div
          className="font-bold uppercase"
          style={{ fontSize: '10px', letterSpacing: '1.5px', color: '#696969' }}
        >
          Live
        </div>
        <div
          className="font-sans font-medium leading-tight text-ink"
          style={{ fontSize: '18px', letterSpacing: '-0.36px' }}
        >
          100+ enterprise sites
        </div>
      </div>
    </div>
  );
}

// Circular network diagram — replaces the rectangular signal grid card
function CircularNetworkDiagram({ reduced }: { reduced: boolean }) {
  const nodes: Array<[number, number]> = [
    [50, 50], [100, 20], [150, 50], [170, 100],
    [150, 150], [100, 180], [50, 150], [30, 100],
    [100, 100],
  ];
  const links: Array<[number, number]> = [
    [0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7], [7, 0],
    [8, 0], [8, 2], [8, 4], [8, 6],
  ];
  const pulses = [
    { a: 8, b: 0, delay: 0 },
    { a: 8, b: 2, delay: 0.8 },
    { a: 8, b: 4, delay: 1.6 },
    { a: 8, b: 6, delay: 2.4 },
  ];

  return (
    <svg viewBox="0 0 200 200" className="w-4/5 h-4/5" aria-hidden>
      {links.map(([a, b], i) => {
        const [x1, y1] = nodes[a];
        const [x2, y2] = nodes[b];
        return (
          <line key={i} x1={x1} y1={y1} x2={x2} y2={y2}
            stroke="rgba(243,115,56,0.18)" strokeWidth="0.8" />
        );
      })}
      {!reduced && pulses.map((p, i) => {
        const [x1, y1] = nodes[p.a];
        const [x2, y2] = nodes[p.b];
        return (
          <motion.circle
            key={i}
            r={2}
            fill={MC_ORANGE}
            initial={{ cx: x1, cy: y1, opacity: 0 }}
            animate={{ cx: [x1, x2, x2], cy: [y1, y2, y2], opacity: [0, 1, 0] }}
            transition={{
              duration: 2,
              delay: p.delay,
              repeat: Infinity,
              repeatDelay: 1.5,
              ease: 'easeInOut',
            }}
          />
        );
      })}
      {nodes.map(([x, y], i) => (
        <circle
          key={i}
          cx={x}
          cy={y}
          r={i === 8 ? 4 : 2.5}
          fill={i === 8 ? MC_ORANGE : '#3a3530'}
          stroke={i === 8 ? 'rgba(243,115,56,0.35)' : 'rgba(160,157,150,0.3)'}
          strokeWidth="0.8"
        />
      ))}
    </svg>
  );
}
