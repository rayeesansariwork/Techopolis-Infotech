import { Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { Container } from './ui/Container';
import { Logo } from './ui/Logo';

const FOOTER_LINKS = {
  services: [
    { label: 'Hardware', href: '#what-we-do' },
    { label: 'Software', href: '#what-we-do' },
    { label: 'Managed services', href: '#what-we-do' },
    { label: 'How we work', href: '#how-we-work' },
  ],
  sectors: [
    { label: 'Banking & financial', href: '#sectors' },
    { label: 'Public sector & PSU', href: '#sectors' },
    { label: 'Healthcare', href: '#sectors' },
    { label: 'Education', href: '#sectors' },
  ],
  company: [
    { label: 'Field notes', href: '#blog' },
    { label: 'Careers', href: '#careers' },
    { label: 'Privacy', href: '#privacy' },
    { label: 'Terms', href: '#terms' },
  ],
};

export function Footer() {
  return (
    <footer id="contact" className="px-sm sm:px-md md:px-lg pb-md sm:pb-lg">
      <Container className="bg-ink text-on-dark rounded-xl px-lg py-xl sm:px-xl sm:py-xxl">
        <div className="grid lg:grid-cols-12 gap-xl">
          <div className="lg:col-span-4 flex flex-col gap-md sm:gap-lg">
            <div className="text-on-dark">
              <Logo tone="dark" />
            </div>
            <p className="text-body-md text-on-dark-soft max-w-[36ch]">
              Hardware, software, and on-site support for institutions across
              eastern India. Operating since 2022 out of Ranchi.
            </p>
            <a
              href="#contact-form"
              className="inline-flex items-center justify-center h-12 px-xl rounded-pill bg-primary text-on-primary text-button hover:bg-primary-active transition-colors w-fit"
            >
              Start a conversation
            </a>
          </div>

          <div className="grid grid-cols-2 gap-lg sm:gap-xl lg:contents">
            <div className="lg:col-span-2">
              <h3 className="text-caption-up uppercase text-on-dark-soft mb-md">
                Services
              </h3>
              <ul className="flex flex-col gap-xs">
                {FOOTER_LINKS.services.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-on-dark hover:text-primary transition-colors duration-250"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-2">
              <h3 className="text-caption-up uppercase text-on-dark-soft mb-md">
                Sectors
              </h3>
              <ul className="flex flex-col gap-xs">
                {FOOTER_LINKS.sectors.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-on-dark hover:text-primary transition-colors duration-250"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col gap-lg">
            <div>
              <h3 className="text-caption-up uppercase text-on-dark-soft mb-md">
                Reach us
              </h3>
              <address className="not-italic flex flex-col gap-sm text-body-md text-on-dark leading-relaxed">
                <span className="flex items-start gap-sm">
                  <MapPin size={16} className="mt-[3px] shrink-0 text-on-dark-soft" />
                  <span>
                    Techopolis Infotech<br />
                    Main Road, Ranchi 834001<br />
                    Jharkhand, India
                  </span>
                </span>
                <a
                  href="mailto:hello@techopolis.in"
                  className="flex items-center gap-sm hover:text-primary transition-colors"
                >
                  <Mail size={16} className="text-on-dark-soft" />
                  hello@techopolis.in
                </a>
                <a
                  href="tel:+916512345678"
                  className="flex items-center gap-sm hover:text-primary transition-colors"
                >
                  <Phone size={16} className="text-on-dark-soft" />
                  +91 651 234 5678
                </a>
              </address>
            </div>

            <div>
              <h3 className="text-caption-up uppercase text-on-dark-soft mb-md">
                Company
              </h3>
              <ul className="flex flex-col gap-xs">
                {FOOTER_LINKS.company.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-on-dark hover:text-primary transition-colors duration-250"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <nav aria-label="Social">
              <ul className="flex items-center gap-md">
                <li>
                  <a
                    href="https://www.linkedin.com"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-white/10 text-on-dark hover:bg-surface-dark-elevated transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={16} />
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="mt-xxl pt-lg border-t border-white/10 flex flex-col md:flex-row md:items-center md:justify-between gap-md">
          <p className="text-body-sm text-on-dark-soft">
            &copy; {new Date().getFullYear()} Techopolis Infotech Pvt. Ltd. All rights reserved.
          </p>
          <p className="text-body-sm text-on-dark-soft">
            CIN: U72200JH2022PTC000000 · GSTIN: 20XXXXXXXXXXXX
          </p>
        </div>
      </Container>
    </footer>
  );
}
