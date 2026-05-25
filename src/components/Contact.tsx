import { ArrowRight, Mail, Phone, MapPin } from 'lucide-react';
import { Container } from './ui/Container';

type Channel = {
  icon: typeof Mail;
  label: string;
  value: string;
  href: string;
  aside: string;
};

const CHANNELS: Channel[] = [
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 651 234 5678',
    href: 'tel:+916512345678',
    aside: 'Mon–Sat, 9:30 to 18:30. Emergencies 24×7.',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'hello@techopolis.in',
    href: 'mailto:hello@techopolis.in',
    aside: 'For RFPs, AMC enquiries, and project scoping.',
  },
  {
    icon: MapPin,
    label: 'Office',
    value: 'Main Road, Ranchi 834001',
    href: '#',
    aside: 'Walk-ins welcome. Mention you read this.',
  },
];

export function Contact() {
  return (
    <section
      id="contact-form"
      className="py-xxl lg:py-section"
      aria-labelledby="contact-title"
    >
      <Container>
        <div className="grid lg:grid-cols-12 gap-lg lg:gap-xl">
          <div className="lg:col-span-5 flex flex-col gap-sm lg:gap-md">
            <span className="text-caption-up uppercase text-primary-active">
              Get in touch
            </span>
            <h2
              id="contact-title"
              className="font-display text-[32px] sm:text-display-md md:text-display-lg lg:text-[64px] leading-[1.1] lg:leading-[1.05] text-ink"
            >
              Three ways<br className="hidden sm:inline" /> to reach us.
            </h2>
            <div className="pt-sm lg:pt-md">
              <a
                href="#contact-form"
                className="inline-flex items-center gap-xs h-12 px-xl rounded-pill bg-ink text-on-dark text-button hover:opacity-90 transition-opacity duration-250"
              >
                <span>Request a site visit</span>
                <ArrowRight size={14} />
              </a>
            </div>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <ul role="list" className="flex flex-col">
              {CHANNELS.map((c, i) => {
                const Icon = c.icon;
                return (
                  <li
                    key={c.label}
                    className={`flex items-start gap-md sm:gap-lg py-md sm:py-lg ${
                      i !== CHANNELS.length - 1 ? 'border-b border-hairline' : ''
                    }`}
                  >
                    <span
                      className="inline-flex shrink-0 items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-surface-soft text-ink"
                      aria-hidden
                    >
                      <Icon size={18} />
                    </span>
                    <div className="flex flex-col gap-xxs min-w-0">
                      <span className="text-caption-up uppercase text-muted">
                        {c.label}
                      </span>
                      <a
                        href={c.href}
                        className="font-display text-[20px] sm:text-display-sm text-ink hover:text-primary-active transition-colors duration-250 break-words"
                      >
                        {c.value}
                      </a>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
