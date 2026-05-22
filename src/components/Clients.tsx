import { useMemo, useState } from 'react';
import { Container } from './ui/Container';
import { ClientLogo } from './ClientLogo';
import { CATEGORIES, CLIENTS, type ClientCategory } from '../lib/clients';

// Match the MCEyebrow from Hero / Services
const MC_ORANGE = '#F37338';
const MC_INK = '#141413';

type Filter = 'all' | ClientCategory;

function MCEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="inline-flex items-center gap-[6px] text-[11px] font-bold uppercase"
      style={{ letterSpacing: '3px', color: MC_INK }}
    >
      <span style={{ color: MC_ORANGE }}>•</span>
      {children}
    </span>
  );
}

export function Clients() {
  const [filter, setFilter] = useState<Filter>('all');
  const [paused, setPaused] = useState(false);

  const visible = useMemo(
    () => (filter === 'all' ? CLIENTS : CLIENTS.filter((c) => c.category === filter)),
    [filter],
  );

  const counts = useMemo(() => {
    const c: Record<string, number> = { all: CLIENTS.length };
    for (const cl of CLIENTS) c[cl.category] = (c[cl.category] ?? 0) + 1;
    return c;
  }, []);

  // Duplicate enough times so the loop is seamless regardless of how many items are visible
  const trackItems = useMemo(() => {
    const copies = Math.max(2, Math.ceil(10 / visible.length));
    return Array.from({ length: copies }, () => visible).flat();
  }, [visible]);

  return (
    <section id="clients" className="py-section" style={{ backgroundColor: '#F3F0EE' }}>
      <Container>
        {/* ── Section header ── */}
        <div className="mb-[56px]">
          <MCEyebrow>Clients</MCEyebrow>

          {/* Single-line title — clamp shrinks it on smaller screens */}
          <h2
            className="font-sans font-medium mt-md whitespace-nowrap overflow-hidden text-ellipsis"
            style={{
              fontSize: 'clamp(28px, 3.5vw, 52px)',
              lineHeight: '1.08',
              letterSpacing: '-1.5px',
              color: MC_INK,
            }}
          >
            Trusted by{' '}
            <span style={{ color: MC_ORANGE, fontStyle: 'italic' }}>100+</span>
            {' '}institutions across India.
          </h2>

          <p
            className="font-sans mt-md max-w-[640px]"
            style={{ fontSize: '18px', lineHeight: '1.55', color: '#3d3d3a', fontWeight: 400 }}
          >
            Banks running their branch IT through us, PSUs counting on uninterrupted networks,
            schools and hospitals where the system has to just work.
          </p>
        </div>

        {/* ── Filter pills ── */}
        <div role="tablist" aria-label="Client categories" className="flex flex-wrap gap-xs mb-xl">
          <Pill label="All" count={counts.all} active={filter === 'all'} onClick={() => setFilter('all')} />
          {CATEGORIES.map((c) => (
            <Pill
              key={c.id}
              label={c.label}
              count={counts[c.id] ?? 0}
              active={filter === c.id}
              onClick={() => setFilter(c.id)}
            />
          ))}
        </div>
      </Container>

      {/* ── Marquee — full bleed, pause on hover ── */}
      <div
        className="relative overflow-hidden"
        style={{
          maskImage: 'linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)',
        }}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div
          key={filter}
          className="flex gap-md py-md"
          style={{
            width: 'max-content',
            animation: 'marquee 40s linear infinite',
            animationPlayState: paused ? 'paused' : 'running',
            willChange: 'transform',
          }}
          aria-label="Client logos, scrolling"
        >
          {trackItems.map((c, i) => (
            <ClientLogo key={`${c.name}-${i}`} client={c} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Pill({
  label,
  count,
  active,
  onClick,
}: {
  label: string;
  count: number;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      role="tab"
      aria-selected={active}
      onClick={onClick}
      className="inline-flex items-center gap-xs h-9 rounded-md px-md transition-colors duration-250"
      style={{
        fontSize: '13px',
        fontWeight: 500,
        letterSpacing: '0.2px',
        backgroundColor: active ? MC_INK : 'transparent',
        color: active ? '#F3F0EE' : '#6c6a64',
        border: `1px solid ${active ? MC_INK : 'rgba(20,20,19,0.18)'}`,
      }}
    >
      <span dangerouslySetInnerHTML={{ __html: label }} />
      <span style={{ opacity: 0.55, marginLeft: '4px' }}>{count}</span>
    </button>
  );
}
