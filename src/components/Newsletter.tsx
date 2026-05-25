import { ArrowRight } from 'lucide-react';
import { Container } from './ui/Container';
import { GradientBlob, GlyphRing } from './ui/TechDecor';

export function Newsletter() {
  return (
    <section className="py-xl lg:py-xxl">
      <Container>
        <div className="grid lg:grid-cols-12 gap-lg lg:gap-xl items-center bg-secondary rounded-xl p-lg sm:p-xl lg:p-xxl">
          <div className="lg:col-span-7 flex flex-col gap-sm lg:gap-md">
            <span className="text-caption-up uppercase text-ink/70">
              The Techopolis brief
            </span>
            <h2 className="font-display text-[28px] sm:text-display-md lg:text-display-lg text-ink leading-[1.1] lg:leading-[1.05]">
              One email a month.<br className="hidden sm:inline" /> Field notes, no fluff.
            </h2>
            <div className="pt-xs">
              <a
                href="#subscribe"
                className="inline-flex items-center gap-xs h-11 px-lg rounded-pill bg-ink text-on-dark text-button hover:opacity-90 transition-opacity duration-250"
              >
                <span>Subscribe</span>
                <ArrowRight size={14} />
              </a>
            </div>
          </div>

          <div className="lg:col-span-4 lg:col-start-9 relative hidden sm:block">
            <div className="relative aspect-square w-full max-w-[260px] lg:max-w-[300px] mx-auto">
              <GradientBlob tone="primary" className="absolute inset-0 w-full h-full" />
              <GlyphRing
                tone="ink"
                className="absolute inset-[15%] w-[70%] h-[70%] animate-[spin_50s_linear_infinite]"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
