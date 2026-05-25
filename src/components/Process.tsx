import { Container } from './ui/Container';

const STEPS = [
  {
    n: '01',
    title: 'Site visit',
    body: 'Engineers walk the floor before we quote. Same-week, usually within 48 hours.',
  },
  {
    n: '02',
    title: 'Scope & quote',
    body: 'A line-itemed BoQ, an effort estimate, OEM lead times. Assumptions written down.',
  },
  {
    n: '03',
    title: 'Deploy',
    body: 'Pre-imaged hardware, after-hours cutover, signed asset register before we leave.',
  },
  {
    n: '04',
    title: 'Sustain',
    body: 'AMC kicks in the day after go-live. On-call engineers, monthly uptime report.',
  },
];

export function Process() {
  return (
    <section
      id="how-we-work"
      className="py-xxl lg:py-section bg-surface-soft"
      aria-labelledby="process-title"
    >
      <Container>
        <div className="mb-xl lg:mb-xxl">
          <span className="text-caption-up uppercase text-primary-active">
            How we work
          </span>
          <h2
            id="process-title"
            className="mt-sm lg:mt-md font-display text-[32px] sm:text-display-md md:text-display-lg lg:text-[64px] leading-[1.1] lg:leading-[1.05] text-ink"
          >
            Four steps.<br className="hidden sm:inline" /> Same ones, every time.
          </h2>
        </div>

        <ol role="list" className="flex flex-col">
          {STEPS.map((step, i) => (
            <li
              key={step.n}
              className={`grid lg:grid-cols-12 gap-md lg:gap-xl py-lg lg:py-xl ${
                i !== STEPS.length - 1 ? 'border-b border-hairline' : ''
              } lg:items-center`}
            >
              <div className="lg:col-span-2 flex items-baseline gap-md lg:block">
                <span className="font-display text-[48px] sm:text-[64px] lg:text-[88px] leading-none text-primary-active">
                  {step.n}
                </span>
                <h3 className="font-display text-[24px] sm:text-display-sm leading-[1.1] text-ink lg:hidden">
                  {step.title}
                </h3>
              </div>
              <div className="lg:col-span-4 hidden lg:block">
                <h3 className="font-display text-display-md leading-[1.1] text-ink">
                  {step.title}
                </h3>
              </div>
              <div className="lg:col-span-6">
                <p className="text-body-md text-body">{step.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
