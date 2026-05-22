import type { ReactNode } from 'react';
import { Eyebrow } from './Eyebrow';

type SectionHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: 'left' | 'center';
  tone?: 'light' | 'dark';
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  tone = 'light',
  className = '',
}: SectionHeadingProps) {
  const titleColor = tone === 'dark' ? 'text-on-dark' : 'text-ink';
  const bodyColor = tone === 'dark' ? 'text-on-dark-soft' : 'text-muted';
  const alignment = align === 'center' ? 'text-center items-center mx-auto' : 'text-left items-start';

  return (
    <div className={`flex flex-col gap-md ${alignment} max-w-[640px] ${className}`}>
      {eyebrow ? <Eyebrow tone={tone === 'dark' ? 'coral' : 'muted'}>{eyebrow}</Eyebrow> : null}
      <h2 className={`font-display text-display-md md:text-display-lg ${titleColor}`}>{title}</h2>
      {description ? (
        <p className={`text-body-md ${bodyColor} max-w-[56ch]`}>{description}</p>
      ) : null}
    </div>
  );
}
