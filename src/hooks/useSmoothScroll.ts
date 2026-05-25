import { useEffect } from 'react';
import Lenis from 'lenis';

/**
 * Initializes Lenis smooth scrolling. Respects prefers-reduced-motion —
 * if the user has it enabled, Lenis is not started and native scroll is used.
 *
 * Anchor links (e.g. `<a href="#contact">`) are intercepted and routed through
 * Lenis so the scroll-to is animated with the same easing as wheel/touch.
 */
export function useSmoothScroll() {
  useEffect(() => {
    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;
    if (prefersReduced) return;

    const lenis = new Lenis({
      duration: 1.25,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
    });

    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    // Route in-page anchor clicks through Lenis for matching easing.
    const onAnchorClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement | null)?.closest(
        'a[href^="#"]',
      ) as HTMLAnchorElement | null;
      if (!target) return;
      const hash = target.getAttribute('href');
      if (!hash || hash === '#') return;
      const id = hash.slice(1);
      const el = document.getElementById(id);
      if (!el) return;
      e.preventDefault();
      lenis.scrollTo(el, { offset: -80 });
    };

    document.addEventListener('click', onAnchorClick);

    return () => {
      document.removeEventListener('click', onAnchorClick);
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);
}
