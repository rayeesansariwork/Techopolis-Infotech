import { Linkedin, Twitter, Mail } from 'lucide-react';
import { Container } from './ui/Container';
import { Logo } from './ui/Logo';

const QUICK_LINKS = [
  { id: 'services', label: 'Services' },
  { id: 'clients', label: 'Clients' },
  { id: 'why-us', label: 'Why Us' },
  { id: 'contact', label: 'Contact' },
];

export function Footer() {
  const year = new Date().getFullYear();

  const scrollTo = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-surface-dark text-on-dark-soft pt-xxl pb-xl">
      <Container>
        <div className="grid gap-xl md:grid-cols-12 pb-xl border-b border-white/10">
          <div className="md:col-span-5 flex flex-col gap-md">
            <Logo tone="dark" />
            <p className="text-body-sm max-w-[44ch] text-on-dark-soft">
              Software and hardware infotech for institutions that can&rsquo;t afford downtime.
              Ranchi-headquartered, working Pan-India since 2010.
            </p>
            <div className="flex items-center gap-xs mt-xs">
              <SocialLink href="mailto:hello@techopolisinfotech.com" label="Email">
                <Mail size={14} />
              </SocialLink>
              <SocialLink href="#" label="LinkedIn">
                <Linkedin size={14} />
              </SocialLink>
              <SocialLink href="#" label="Twitter / X">
                <Twitter size={14} />
              </SocialLink>
            </div>
          </div>

          <div className="md:col-span-3 flex flex-col gap-sm">
            <div className="text-caption-up uppercase text-on-dark/70">Navigate</div>
            <ul className="flex flex-col gap-xs">
              {QUICK_LINKS.map((l) => (
                <li key={l.id}>
                  <a
                    href={`#${l.id}`}
                    onClick={scrollTo(l.id)}
                    className="text-body-sm hover:text-on-dark transition-colors duration-250"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4 flex flex-col gap-sm">
            <div className="text-caption-up uppercase text-on-dark/70">Reach us</div>
            <a
              href="mailto:hello@techopolisinfotech.com"
              className="text-body-sm hover:text-on-dark transition-colors"
            >
              hello@techopolisinfotech.com
            </a>
            <a href="tel:+916510000000" className="text-body-sm hover:text-on-dark transition-colors">
              +91 651 000 0000
            </a>
            <p className="text-body-sm">Main Road, Ranchi · Jharkhand 834001</p>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-md pt-lg">
          <p className="text-body-sm text-on-dark-soft">
            &copy; {year} Techopolis Infotech. All rights reserved.
          </p>
          <p className="text-caption-up uppercase tracking-[1.5px] text-on-dark/50 font-mono">
            Built in Dhanbad with 🧡.
          </p>
        </div>
      </Container>
    </footer>
  );
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      className="inline-flex items-center justify-center h-9 w-9 rounded-md bg-surface-dark-elevated text-on-dark-soft hover:text-on-dark border border-white/5 hover:border-white/15 transition-colors duration-250"
    >
      {children}
    </a>
  );
}
