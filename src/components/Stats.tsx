import { Container } from './ui/Container';

const STATS = [
  { value: '4', unit: 'years', label: 'On the job since 2022' },
  { value: '300', unit: '+', label: 'Active service sites' },
  { value: '50', unit: '+', label: 'Field engineers on payroll' },
  { value: '24', unit: '×7', label: 'NOC and emergency dispatch' },
];

export function Stats() {
  return (
    <section className="py-xxl lg:py-section bg-ink text-on-dark" aria-labelledby="stats-title">
      <Container>
        <h2 id="stats-title" className="sr-only">
          By the numbers
        </h2>
        <div className="mb-xl lg:mb-xxl">
          <span className="text-caption-up uppercase text-primary">
            By the numbers
          </span>
          <p className="mt-sm lg:mt-md font-display text-[28px] sm:text-display-md lg:text-display-lg text-on-dark leading-[1.1] max-w-[20ch]">
            The numbers move slowly.<br />That's the point.
          </p>
        </div>

        <ul
          role="list"
          className="grid grid-cols-2 lg:grid-cols-4 gap-x-lg sm:gap-x-xl gap-y-xl lg:gap-y-xxl pt-xl lg:pt-xxl border-t border-white/10"
        >
          {STATS.map((s) => (
            <li key={s.label} className="flex flex-col gap-xs">
              <div className="flex items-baseline gap-xxs">
                <span className="font-display text-[44px] sm:text-[56px] lg:text-[80px] leading-none text-primary">
                  {s.value}
                </span>
                <span className="font-display text-[20px] sm:text-[28px] lg:text-[36px] leading-none text-on-dark">
                  {s.unit}
                </span>
              </div>
              <span className="text-body-sm text-on-dark-soft uppercase tracking-wider">
                {s.label}
              </span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
