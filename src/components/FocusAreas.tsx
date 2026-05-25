import { ArrowRight } from 'lucide-react';
import { Container } from './ui/Container';

type Service = {
  n: string;
  eyebrow: string;
  title: string;
  body: string;
  ctaLabel: string;
  ctaHref: string;
};

const SERVICES: Service[] = [
  {
    n: '01',
    eyebrow: 'Hardware',
    title: 'The boxes, the cables, and someone who picks up the phone.',
    body: 'Imaged before dispatch. Commissioned on-site. Warranty claims handled by our desk, not yours.',
    ctaLabel: 'Talk hardware',
    ctaHref: '#contact',
  },
  {
    n: '02',
    eyebrow: 'Software',
    title: 'Built in-house. Owned by you.',
    body: 'Custom applications, ERP, MIS, and integrations — with source code in your hands and no vendor lock-in.',
    ctaLabel: 'Scope a project',
    ctaHref: '#contact',
  },
  {
    n: '03',
    eyebrow: 'Managed services',
    title: 'An AMC contract that\'s a calendar, not a folder of receipts.',
    body: 'Multi-year coverage with a 24×7 NOC, 4-hour on-site response, and uptime reporting that gets read.',
    ctaLabel: 'Discuss AMC',
    ctaHref: '#contact',
  },
];

export function FocusAreas() {
  return (
    <section id="what-we-do" className="py-xxl lg:py-section" aria-labelledby="services-title">
      <Container>
        <div className="mb-xl lg:mb-xxl">
          <span className="text-caption-up uppercase text-primary-active">
            What we do
          </span>
          <h2
            id="services-title"
            className="mt-sm lg:mt-md font-display text-[32px] sm:text-display-md md:text-display-lg lg:text-[64px] leading-[1.1] lg:leading-[1.05] text-ink"
          >
            Hardware. Software.<br className="hidden sm:inline" />{' '}
            Plus the people who run it.
          </h2>
        </div>

        <ol role="list" className="flex flex-col">
          {SERVICES.map((s, i) => (
            <li
              key={s.n}
              className={`grid lg:grid-cols-12 gap-md lg:gap-xl py-xl lg:py-xxl items-start ${
                i !== SERVICES.length - 1 ? 'border-b border-hairline' : ''
              }`}
            >
              <div className="lg:col-span-2 flex items-baseline gap-md lg:flex-col lg:items-start lg:gap-xs">
                <span className="font-display text-[48px] sm:text-[64px] lg:text-[88px] leading-none text-primary-active">
                  {s.n}
                </span>
                <span className="text-caption-up uppercase text-muted">
                  {s.eyebrow}
                </span>
              </div>

              <div className="lg:col-span-7 lg:col-start-4 flex flex-col gap-sm lg:gap-md">
                <h3 className="font-display text-[24px] sm:text-display-md lg:text-display-lg leading-[1.15] lg:leading-[1.05] text-ink">
                  {s.title}
                </h3>
                <p className="text-body-md text-body max-w-[52ch]">{s.body}</p>
                <div className="pt-xs">
                  <a
                    href={s.ctaHref}
                    className="inline-flex items-center gap-xs h-11 px-lg rounded-pill bg-ink text-on-dark text-button hover:opacity-90 transition-opacity duration-250"
                  >
                    <span>{s.ctaLabel}</span>
                    <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
