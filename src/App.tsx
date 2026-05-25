import { useSmoothScroll } from './hooks/useSmoothScroll';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustedBy } from './components/TrustedBy';
import { Stats } from './components/Stats';
import { FocusAreas } from './components/FocusAreas';
import { Sectors } from './components/Sectors';
import { Process } from './components/Process';
import { Blog } from './components/Blog';
import { Contact } from './components/Contact';
import { Newsletter } from './components/Newsletter';
import { Footer } from './components/Footer';

export default function App() {
  useSmoothScroll();

  return (
    <>
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:px-md focus:py-xs focus:rounded-md focus:bg-ink focus:text-on-dark"
      >
        Skip to content
      </a>
      <Navbar />
      <main>
        <Hero />
        <TrustedBy />
        <Stats />
        <FocusAreas />
        <Sectors />
        <Process />
        <Blog />
        <Contact />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
