import { Container } from './ui/Container';
import { CLIENTS } from '../lib/clients';

const FEATURED = [
  'HDFC Bank',
  'Kotak Bank',
  'SBI Ranchi',
  'HP',
  'ECR',
  'BCCL',
  'Carmel School',
  'Patliputra Hospital',
];

export function TrustedBy() {
  const clients = FEATURED.map((name) => CLIENTS.find((c) => c.name === name)).filter(
    (c): c is NonNullable<typeof c> => Boolean(c),
  );

  return (
    <section id="trusted-by" className="py-xxl lg:py-section" aria-labelledby="trusted-by-title">
      <Container>
        <div className="text-center mb-xl lg:mb-xxl flex flex-col gap-sm items-center">
          <span className="text-caption-up uppercase text-primary-active">
            Our work shows up here
          </span>
          <h2
            id="trusted-by-title"
            className="font-display text-[28px] sm:text-display-md md:text-display-lg lg:text-[56px] leading-[1.1] lg:leading-[1.05] text-ink"
          >
            Trusted by the institutions<br className="hidden md:inline" /> that can't afford to be down.
          </h2>
        </div>

        <ul
          className="grid grid-cols-2 md:grid-cols-4 border-t border-l border-hairline rounded-lg overflow-hidden"
          role="list"
          aria-label="Featured clients"
        >
          {clients.map((client) => (
            <li
              key={client.name}
              className="flex items-center justify-center min-h-[110px] md:min-h-[140px] px-sm md:px-md py-lg md:py-xl border-r border-b border-hairline"
            >
              <span
                className="font-display text-[18px] sm:text-[22px] md:text-display-sm text-ink text-center select-none"
                aria-label={client.name}
              >
                {client.name}
              </span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
