import { useEffect, useRef, useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { Container } from './ui/Container';
import { Button } from './ui/Button';
import { Logo } from './ui/Logo';
import { useScrollSpy } from '../hooks/useScrollSpy';

const NAV_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'services', label: 'Services' },
  { id: 'clients', label: 'Clients' },
  { id: 'why-us', label: 'Why Us' },
  { id: 'contact', label: 'Contact' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const drawerRef = useRef<HTMLDivElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);
  const active = useScrollSpy(NAV_ITEMS.map((i) => i.id));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body + focus trap in drawer
  useEffect(() => {
    if (!open) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
      if (e.key === 'Tab' && drawerRef.current) {
        const focusables = drawerRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled])',
        );
        if (focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    window.addEventListener('keydown', onKey);
    // Focus first interactive in drawer
    requestAnimationFrame(() => firstLinkRef.current?.focus());

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  const handleNav = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    setOpen(false);
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-250 ease-editorial ${
          scrolled
            ? 'bg-canvas/85 backdrop-blur-md border-b border-hairline'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <Container as="nav" aria-label="Primary">
          <div className="flex items-center justify-between h-16">
            <Logo />

            <ul className="hidden md:flex items-center gap-xs" role="list">
              {NAV_ITEMS.map((item) => {
                const isActive = active === item.id;
                return (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      onClick={handleNav(item.id)}
                      aria-current={isActive ? 'page' : undefined}
                      className={`relative inline-flex items-center px-md h-9 text-nav rounded-md transition-colors duration-250 ${
                        isActive ? 'text-ink' : 'text-muted hover:text-ink'
                      }`}
                    >
                      {item.label}
                      <span
                        aria-hidden
                        className={`absolute left-md right-md -bottom-0.5 h-px bg-primary transition-opacity duration-250 ${
                          isActive ? 'opacity-100' : 'opacity-0'
                        }`}
                      />
                    </a>
                  </li>
                );
              })}
            </ul>

            <div className="hidden md:block">
              <Button
                variant="primary"
                iconRight={<ArrowRight size={14} />}
                onClick={handleNav('contact') as unknown as React.MouseEventHandler<HTMLButtonElement>}
              >
                Talk to us
              </Button>
            </div>

            <button
              type="button"
              className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-md text-ink hover:bg-surface-soft"
              aria-expanded={open}
              aria-controls="mobile-drawer"
              aria-label={open ? 'Close menu' : 'Open menu'}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </Container>
      </header>

      {/* Mobile drawer */}
      <div
        id="mobile-drawer"
        ref={drawerRef}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        className={`md:hidden fixed inset-0 z-40 bg-canvas transition-opacity duration-250 ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="h-16" />
        <Container className="py-xl flex flex-col gap-md">
          {NAV_ITEMS.map((item, idx) => {
            const isActive = active === item.id;
            return (
              <a
                key={item.id}
                ref={idx === 0 ? firstLinkRef : undefined}
                href={`#${item.id}`}
                onClick={handleNav(item.id)}
                aria-current={isActive ? 'page' : undefined}
                className={`font-display text-display-md py-xs border-b border-hairline ${
                  isActive ? 'text-ink' : 'text-muted'
                }`}
              >
                {item.label}
              </a>
            );
          })}
          <div className="pt-md">
            <Button
              variant="primary"
              className="w-full"
              iconRight={<ArrowRight size={14} />}
              onClick={handleNav('contact') as unknown as React.MouseEventHandler<HTMLButtonElement>}
            >
              Talk to us
            </Button>
          </div>
        </Container>
      </div>
    </>
  );
}
