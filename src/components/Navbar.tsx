import { useEffect, useRef, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Container } from './ui/Container';
import { Logo } from './ui/Logo';

const NAV_ITEMS = [
  { id: 'what-we-do', label: 'What we do' },
  { id: 'sectors', label: 'Sectors' },
  { id: 'how-we-work', label: 'How we work' },
  { id: 'blog', label: 'Field notes' },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const drawerRef = useRef<HTMLDivElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    requestAnimationFrame(() => firstLinkRef.current?.focus());
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  // Smooth scroll is handled globally by useSmoothScroll (Lenis).
  // We just close the mobile drawer when a link is clicked.
  const closeDrawer = () => setOpen(false);

  return (
    <>
      <header className="sticky top-0 inset-x-0 z-50" style={{ backgroundColor: '#ebf4fb' }}>
        <Container as="nav" aria-label="Primary" className="py-md">
          <div className="flex items-center justify-between gap-lg">
            <Logo />

            <ul className="hidden md:flex items-center gap-lg" role="list">
              {NAV_ITEMS.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={closeDrawer}
                    className="text-nav text-ink hover:text-primary transition-colors duration-250"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#contact"
                  onClick={closeDrawer}
                  className="inline-flex items-center h-10 px-lg rounded-pill border-2 border-ink text-nav text-ink hover:bg-ink hover:text-on-dark transition-colors duration-250"
                >
                  Get a Quote
                </a>
              </li>
            </ul>

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
          {NAV_ITEMS.map((item, idx) => (
            <a
              key={item.id}
              ref={idx === 0 ? firstLinkRef : undefined}
              href={`#${item.id}`}
              onClick={closeDrawer}
              className="font-display text-display-md py-xs border-b border-hairline text-ink"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={closeDrawer}
            className="mt-md inline-flex items-center justify-center h-12 px-lg rounded-pill border-2 border-ink text-nav text-ink"
          >
            Get a Quote
          </a>
        </Container>
      </div>
    </>
  );
}
