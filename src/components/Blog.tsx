import { Container } from './ui/Container';
import { CircuitLanes, DotGrid, NodeMesh, PulseRings } from './ui/TechDecor';
import type { ReactNode } from 'react';

type Post = {
  title: string;
  byline: string;
  categories: string[];
  excerpt?: string;
  href: string;
  graphic: ReactNode;
};

const POSTS: Post[] = [
  {
    title: 'We replaced 80 ATMs in eleven days. Here\'s what we learned.',
    byline: 'Field Operations',
    categories: ['Field notes', 'Banking'],
    href: '#blog-1',
    graphic: (
      <div className="absolute inset-0 bg-surface-card">
        <NodeMesh tone="primary" className="absolute inset-4 w-[92%] h-[92%]" />
      </div>
    ),
  },
  {
    title: 'Reading the RBI 2024 IT framework, for co-operative banks.',
    byline: 'Compliance Desk',
    categories: ['Policy', 'Banking'],
    href: '#blog-2',
    graphic: (
      <div className="absolute inset-0 bg-ink">
        <CircuitLanes tone="secondary" className="absolute inset-0 w-full h-full" />
      </div>
    ),
  },
  {
    title: 'Five years of running a 24×7 NOC: the alerts you stop ignoring.',
    byline: 'Operations',
    categories: ['Field notes'],
    href: '#blog-3',
    graphic: (
      <div className="absolute inset-0 bg-surface-soft">
        <PulseRings tone="primary" className="absolute inset-0 w-full h-full opacity-80" />
      </div>
    ),
  },
  {
    title: 'How we price an AMC, line by line.',
    byline: 'Procurement',
    categories: ['Procurement'],
    href: '#blog-4',
    graphic: (
      <div className="absolute inset-0 bg-surface-card">
        <DotGrid tone="ink" className="absolute inset-4 w-[92%] h-[92%]" />
      </div>
    ),
  },
];

export function Blog() {
  return (
    <section id="blog" className="py-xxl lg:py-section" aria-labelledby="blog-title">
      <Container>
        <div className="mb-xl lg:mb-xxl">
          <span className="text-caption-up uppercase text-primary-active">
            Field notes
          </span>
          <h2 id="blog-title" className="mt-sm lg:mt-md font-display text-[32px] sm:text-display-md md:text-display-lg lg:text-[64px] leading-[1.1] lg:leading-[1.05] text-ink">
            From the floor,<br className="hidden sm:inline" />{' '}
            the truck, the war room.
          </h2>
        </div>

        <ul className="grid md:grid-cols-2 gap-x-xl gap-y-xl lg:gap-y-xxl" role="list">
          {POSTS.map((post) => (
            <li key={post.title}>
              <article className="group flex flex-col gap-sm sm:gap-md">
                <a href={post.href} className="block">
                  <div className="relative aspect-[16/9] rounded-lg overflow-hidden transition-transform duration-450 ease-editorial group-hover:scale-[1.02]">
                    {post.graphic}
                  </div>
                </a>
                <header className="flex flex-col gap-xs">
                  <span className="text-caption-up uppercase text-primary-active">
                    {post.categories.join(' · ')}
                  </span>
                  <h3 className="font-display text-[22px] sm:text-display-sm leading-[1.2] sm:leading-[1.15]">
                    <a
                      href={post.href}
                      className="text-ink transition-colors duration-250 group-hover:text-primary-active"
                    >
                      {post.title}
                    </a>
                  </h3>
                  <span className="text-body-sm text-muted">{post.byline}</span>
                </header>
                {post.excerpt && (
                  <p className="text-body-md text-body">{post.excerpt}</p>
                )}
              </article>
            </li>
          ))}
        </ul>

        <div className="mt-xl lg:mt-xxl flex justify-center">
          <a
            href="#blog-archive"
            className="inline-flex items-center h-11 px-lg rounded-pill border-2 border-ink text-button text-ink hover:bg-ink hover:text-on-dark transition-colors duration-250"
          >
            More posts
          </a>
        </div>
      </Container>
    </section>
  );
}
