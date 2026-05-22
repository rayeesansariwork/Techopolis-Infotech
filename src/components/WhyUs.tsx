import { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Container } from './ui/Container';
import { SectionHeading } from './ui/SectionHeading';
import { useInView } from '../hooks/useInView';

type Stat = {
  value: number;
  suffix?: string;
  label: string;
  caption: string;
};

const STATS: Stat[] = [
  { value: 100, suffix: '+', label: 'Enterprise clients', caption: 'PSU · Banking · Edu · Healthcare' },
  { value: 15, suffix: '+', label: 'Years on the ground', caption: 'Since the early days of branch IT' },
  { value: 24, suffix: '/ 7', label: 'Support coverage', caption: 'Helpdesk, on-call, and AMC programs' },
  { value: 9, suffix: ' states', label: 'Pan-India reach', caption: 'Resident engineers + field partners' },
];

function CountUp({ to, suffix = '', start }: { to: number; suffix?: string; start: boolean }) {
  const reduced = useReducedMotion();
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!start) return;
    if (reduced) {
      setN(to);
      return;
    }
    const duration = 1400;
    const t0 = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - t0) / duration);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(eased * to));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [start, to, reduced]);

  return (
    <span>
      {n}
      <span className="text-primary">{suffix}</span>
    </span>
  );
}

export function WhyUs() {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <section id="why-us" className="py-section bg-surface-soft">
      <Container>
        <div className="grid lg:grid-cols-12 gap-xl items-end mb-xxl">
          <div className="lg:col-span-7">
            <SectionHeading
              eyebrow="Why teams keep us"
              title={
                <>
                  Built like a partner.{' '}
                  <span className="text-muted">Not a vendor on a quarterly contract.</span>
                </>
              }
              description="The reason our clients renew isn&rsquo;t a marketing line. It&rsquo;s an engineer who answers the phone at 11pm and a quiet rollout the auditors don&rsquo;t notice."
            />
          </div>
          <ul className="lg:col-span-5 grid grid-cols-2 gap-md text-body-sm">
            {[
              'Single accountable team for software + hardware',
              'Audit-ready documentation by default',
              'Resident engineers at high-criticality sites',
              'Procurement, deployment &amp; AMC under one SOW',
            ].map((t) => (
              <li key={t} className="flex gap-xs text-body">
                <span className="text-primary mt-1">—</span>
                <span dangerouslySetInnerHTML={{ __html: t }} />
              </li>
            ))}
          </ul>
        </div>

        <div ref={ref} className="grid grid-cols-2 lg:grid-cols-4 gap-md">
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : undefined}
              transition={{ duration: 0.55, delay: i * 0.08, ease: [0.22, 0.61, 0.36, 1] }}
              className="rounded-lg bg-canvas border border-hairline p-lg flex flex-col gap-xs"
            >
              <div className="font-display text-[40px] md:text-[48px] leading-none tracking-[-1px] text-ink">
                <CountUp to={s.value} suffix={s.suffix} start={inView} />
              </div>
              <div className="text-title-sm text-ink">{s.label}</div>
              <div className="text-body-sm text-muted">{s.caption}</div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
