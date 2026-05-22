import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Container } from './ui/Container';
import { softwareServices, hardwareServices, type Service } from '../lib/services';
import type { LucideIcon } from 'lucide-react';

// Mastercard design tokens (match Hero.tsx)
const MC_CREAM = '#F3F0EE';
const MC_INK = '#141413';
const MC_ORANGE = '#F37338';

const scrollTo = (id: string) => () => {
  const el = document.getElementById(id);
  if (el) {
    const top = el.getBoundingClientRect().top + window.scrollY - 72;
    window.scrollTo({ top, behavior: 'smooth' });
  }
};

export function Services() {
  return (
    <section id="services" className="py-section relative" style={{ backgroundColor: MC_CREAM }}>
      <Container>

        {/* ── Section header ─────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-8%' }}
          transition={{ duration: 0.65, ease: [0.22, 0.61, 0.36, 1] }}
          className="mb-[80px] max-w-[700px]"
        >
          <MCEyebrow>What we do</MCEyebrow>

          <h2
            className="font-sans font-medium mt-md mb-md"
            style={{
              fontSize: 'clamp(36px, 4vw, 52px)',
              lineHeight: '1.08',
              letterSpacing: '-1.5px',
              color: MC_INK,
            }}
          >
            One partner for the{' '}
            <span style={{ color: MC_ORANGE }}>software</span>{' '}
            and{' '}
            <span style={{ color: MC_ORANGE }}>hardware</span>{' '}
            that runs your operation.
          </h2>

          <p
            className="font-sans"
            style={{ fontSize: '18px', lineHeight: '1.55', color: '#3d3d3a', fontWeight: 400 }}
          >
            Two practices, one delivery org. We design, build, deploy, and support — without
            handing you off between three vendors.
          </p>
        </motion.div>

        {/* ── SOFTWARE portrait group ─────────────────────────── */}
        <PortraitGroup
          watermark="Software"
          groupLabel=""
          services={softwareServices}
          tone="light"
        />

        {/* ── HARDWARE portrait group ─────────────────────────── */}
        <PortraitGroup
          watermark="Hardware"
          groupLabel=""
          services={hardwareServices}
          tone="dark"
          className="mt-[96px]"
        />

      </Container>
    </section>
  );
}

// ─── Portrait Group ──────────────────────────────────────────────────────────

type PortraitGroupProps = {
  watermark: string;
  groupLabel: string;
  services: Service[];
  tone: 'light' | 'dark';
  className?: string;
};

function PortraitGroup({ watermark, groupLabel, services, tone, className = '' }: PortraitGroupProps) {
  const isDark = tone === 'dark';

  return (
    <div className={`relative ${className}`}>
      {/* Ghost watermark headline — cream-on-cream, layered behind cards */}
      <div
        aria-hidden
        className="absolute left-0 top-[-10px] font-sans font-medium leading-none select-none pointer-events-none whitespace-nowrap overflow-hidden"
        style={{
          fontSize: 'clamp(80px, 12vw, 144px)',
          letterSpacing: '-3px',
          color: isDark ? 'rgba(20,20,19,0.05)' : '#E4DFDA',
          zIndex: 0,
        }}
      >
        {watermark}
      </div>

      {/* Group eyebrow */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-6%' }}
        transition={{ duration: 0.55, ease: [0.22, 0.61, 0.36, 1] }}
        className="relative mb-xl"
        style={{ zIndex: 1 }}
      >
        <MCEyebrow muted>{groupLabel}</MCEyebrow>
      </motion.div>

      {/* Orbital connector arc + portrait cards */}
      <div className="relative" style={{ zIndex: 1 }}>
        <OrbitalArc isDark={isDark} count={services.length} />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-lg gap-y-xl">
          {services.map((s, i) => (
            <PortraitCard key={s.title} service={s} tone={tone} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Portrait Card ───────────────────────────────────────────────────────────
// Mastercard Section 4: "Service / Solution Portrait Card" pattern

function PortraitCard({
  service,
  tone,
  index,
}: {
  service: Service;
  tone: 'light' | 'dark';
  index: number;
}) {
  const Icon: LucideIcon = service.icon;
  const isDark = tone === 'dark';

  const portraitBg = isDark ? MC_INK : '#F9F7F4';
  const portraitBorder = isDark ? 'rgba(255,255,255,0.08)' : 'rgba(20,20,19,0.10)';
  const iconColor = isDark ? MC_CREAM : MC_INK;

  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-6%' }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 0.61, 0.36, 1] }}
      className="flex flex-col items-center text-center"
    >
      {/* Circular portrait */}
      <div className="relative">
        <div
          className="flex items-center justify-center mx-auto"
          style={{
            width: 'clamp(76px, 7.6vw, 104px)',
            height: 'clamp(76px, 7.6vw, 104px)',
            borderRadius: '50%',
            backgroundColor: portraitBg,
            border: `1px solid ${portraitBorder}`,
            boxShadow: '0 12px 28px rgba(0,0,0,0.08)',
          }}
        >
          <Icon
            size={24}
            strokeWidth={1.3}
            style={{ color: iconColor, opacity: isDark ? 0.9 : 0.75 }}
          />
        </div>

        {/* Satellite CTA — white circle docked bottom-right, ~40% outside portrait */}
        <button
          onClick={scrollTo('contact')}
          className="absolute flex items-center justify-center rounded-full bg-white transition-transform duration-250 hover:scale-110 active:scale-95"
          style={{
            width: '30px',
            height: '30px',
            bottom: '0px',
            right: '-6px',
            color: MC_INK,
            boxShadow: '0 4px 16px rgba(0,0,0,0.10)',
          }}
          aria-label={`Learn more about ${service.title}`}
        >
          <ArrowUpRight size={13} />
        </button>
      </div>

      {/* Eyebrow below portrait */}
      <div className="mt-md">
        <span
          className="inline-flex items-center gap-[5px] font-bold uppercase"
          style={{ fontSize: '11px', letterSpacing: '3px', color: MC_ORANGE }}
        >
          {/* <span>•</span>
          <span>{isDark ? 'Infrastructure' : 'Solutions'}</span> */}
        </span>
      </div>

      {/* Title — H3 style from Mastercard: 24px / weight 500 / -2% tracking */}
      <h3
        className="font-sans font-medium mt-xs"
        style={{
          fontSize: '18px',
          lineHeight: '1.25',
          letterSpacing: '-0.36px',
          color: MC_INK,
        }}
        dangerouslySetInnerHTML={{ __html: service.title }}
      />

      {/* Description */}
      <p
        className="mt-xs font-sans"
        style={{ fontSize: '14px', lineHeight: '1.55', color: '#6c6a64', fontWeight: 400 }}
      >
        {service.description}
      </p>

      {/* Bullet chips — Mastercard pill style */}
      <ul className="mt-sm flex flex-wrap justify-center gap-xs">
        {service.bullets.map((b) => (
          <li
            key={b}
            className="font-sans"
            style={{
              fontSize: '12px',
              fontWeight: 500,
              padding: '3px 10px',
              borderRadius: '20px',
              backgroundColor: 'white',
              color: MC_INK,
              border: `1px solid rgba(20,20,19,0.12)`,
              letterSpacing: '0.1px',
            }}
          >
            {b}
          </li>
        ))}
      </ul>
    </motion.article>
  );
}

// ─── Orbital Connector Arc ───────────────────────────────────────────────────
// Thin Light Signal Orange arc connecting the portrait cards — Mastercard's
// "orbit and trajectory" motif. Absolutely positioned, full-width, behind cards.

function OrbitalArc({ isDark, count }: { isDark: boolean; count: number }) {
  const reduced = useReducedMotion();
  if (reduced || count < 2) return null;

  return (
    <svg
      aria-hidden
      className="absolute pointer-events-none"
      style={{
        top: 'clamp(40px, 5vw, 55px)',
        left: '0',
        width: '100%',
        height: '40px',
        overflow: 'visible',
        zIndex: 0,
      }}
      viewBox="0 0 1000 40"
      preserveAspectRatio="none"
    >
      {/* Main connecting arc */}
      <path
        d="M 60 20 Q 250 0 500 20 T 940 20"
        fill="none"
        stroke={MC_ORANGE}
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity={isDark ? 0.5 : 0.65}
      />
      {/* Shadow arc — slightly offset for depth */}
      <path
        d="M 80 24 Q 270 8 500 24 T 920 24"
        fill="none"
        stroke={MC_ORANGE}
        strokeWidth="0.6"
        strokeLinecap="round"
        opacity={isDark ? 0.25 : 0.35}
      />
    </svg>
  );
}

// ─── Eyebrow ─────────────────────────────────────────────────────────────────

function MCEyebrow({ children, muted }: { children: React.ReactNode; muted?: boolean }) {
  return (
    <span
      className="inline-flex items-center gap-[6px] font-bold uppercase"
      style={{
        fontSize: '11px',
        letterSpacing: '3px',
        color: muted ? '#696969' : MC_INK,
      }}
    >
      {/* <span style={{ color: MC_ORANGE }}>•</span> */}
      {children}
    </span>
  );
}
