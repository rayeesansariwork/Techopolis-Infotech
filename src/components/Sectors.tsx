import { Container } from './ui/Container';

type Sector = {
  label: string;
  title: string;
  body: string;
  examples: string;
};

const SECTORS: Sector[] = [
  {
    label: 'Banking & financial services',
    title: 'Branches that open at 9.30, every day.',
    body: 'Branch IT, hardening, and uptime that survives the next RBI audit.',
    examples: 'HDFC Bank · Kotak · SBI Ranchi',
  },
  {
    label: 'Public sector & PSU',
    title: 'GeM-route delivery, paperwork done correctly.',
    body: 'Tender response, OEM authorisations, and L1 timelines that don\'t move.',
    examples: 'ECR · BCCL · HURL',
  },
  {
    label: 'Healthcare',
    title: 'Wards don\'t stop when the network does.',
    body: 'HIS, billing, biomedical networking, and an engineer who knows the OT switch.',
    examples: 'Patliputra Hospital · Asian Jalan · SJAS',
  },
  {
    label: 'Education',
    title: 'Labs that work in the third row, too.',
    body: 'Holiday-window rollouts so the academic calendar doesn\'t shift.',
    examples: 'Carmel School · De Nobili School',
  },
];

export function Sectors() {
  return (
    <section id="sectors" className="py-xxl lg:py-section" aria-labelledby="sectors-title">
      <Container>
        <div className="mb-xl lg:mb-xxl">
          <span className="text-caption-up uppercase text-primary-active">
            Sectors we serve
          </span>
          <h2
            id="sectors-title"
            className="mt-sm lg:mt-md font-display text-[32px] sm:text-display-md md:text-display-lg lg:text-[64px] leading-[1.1] lg:leading-[1.05] text-ink"
          >
            Different industries.<br className="hidden sm:inline" />{' '}
            Same uptime expectation.
          </h2>
        </div>

        <ul
          role="list"
          className="grid md:grid-cols-2 gap-px bg-hairline border border-hairline rounded-lg overflow-hidden"
        >
          {SECTORS.map((s) => (
            <li
              key={s.label}
              className="group bg-canvas p-lg sm:p-xl lg:p-xxl flex flex-col gap-sm sm:gap-md transition-colors duration-250 hover:bg-surface-soft"
            >
              <span className="text-caption-up uppercase text-muted">
                {s.label}
              </span>
              <h3 className="font-display text-[22px] sm:text-display-sm lg:text-display-md leading-[1.15] lg:leading-[1.1] text-ink">
                {s.title}
              </h3>
              <p className="text-body-md text-body">{s.body}</p>
              <p className="mt-auto pt-sm sm:pt-md text-body-sm text-muted font-mono border-t border-hairline">
                {s.examples}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
