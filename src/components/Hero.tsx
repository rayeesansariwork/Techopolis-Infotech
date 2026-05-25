import { Container } from './ui/Container';
import { GradientBlob } from './ui/TechDecor';
import { HeroAnimation } from './ui/HeroAnimation';

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden pt-lg pb-xxl lg:pt-xl lg:pb-section bg-no-repeat bg-cover bg-center"
      style={{
        backgroundImage:
          'url("https://framerusercontent.com/images/uP8ZK0XGglsyf1bRB8PM2knqXk.png?width=1512&height=900")',
      }}
      aria-labelledby="hero-title"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-32 lg:h-48"
        style={{
          background:
            'linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,0.85) 60%, #ffffff 100%)',
        }}
      />
      <Container>
        <div className="grid lg:grid-cols-12 gap-lg lg:gap-xl items-center">
          <div className="lg:col-span-5 flex flex-col gap-md lg:gap-lg">
            {/* <div className="inline-flex items-center gap-sm w-fit px-md h-8 rounded-pill bg-ink/[0.06] backdrop-blur-sm border border-ink/10"> */}
              {/* <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-primary-active" /> */}
              {/* <span className="text-caption-up uppercase text-ink/80">
                Techopolis Infotech · since 2022
              </span> */}
            {/* </div> */}
            <h2
              id="hero-title"
              className="font-display text-[36px] sm:text-[52px] md:text-[60px] lg:text-[72px] xl:text-[84px] leading-[1.05] tracking-[-1px] sm:tracking-[-1.5px] text-ink"
            >
              Technology that<br className="hidden sm:inline" /> keeps you running.
            </h2>
            <p className="text-body-md lg:text-title-md text-body max-w-[42ch]">
              Hardware, software, and on-site support for banks, PSUs, hospitals,
              and schools across eastern India. Show up early. Stay on the call.
            </p>
            <div className="flex flex-wrap items-center gap-sm sm:gap-md pt-xs">
              <a
                href="#contact"
                className="inline-flex items-center h-11 px-lg rounded-pill bg-ink text-on-dark text-button hover:opacity-90 transition-opacity duration-250"
              >
                Talk to us
              </a>
              <a
                href="#what-we-do"
                className="inline-flex items-center h-11 px-lg rounded-pill border-2 border-ink text-button text-ink hover:bg-ink hover:text-on-dark transition-colors duration-250"
              >
                What we do
              </a>
            </div>
          </div>

          <div className="lg:col-span-7 relative">
            <div className="relative aspect-square sm:aspect-[5/4] w-full max-w-[420px] sm:max-w-none mx-auto">
              <GradientBlob
                tone="primary"
                className="absolute -top-6 -right-6 w-[55%] h-[55%]"
              />
              <GradientBlob
                tone="secondary"
                className="absolute bottom-0 -left-8 w-[45%] h-[45%]"
              />

              <div className="absolute inset-x-[10%] inset-y-[8%] overflow-visible">
                <HeroAnimation />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
