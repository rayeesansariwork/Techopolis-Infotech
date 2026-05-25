import { SpikeMark } from './SpikeMark';

type LogoProps = {
  tone?: 'light' | 'dark';
  className?: string;
};

export function Logo({ tone = 'light', className = '' }: LogoProps) {
  const text = tone === 'dark' ? 'text-on-dark' : 'text-ink';
  return (
    <a
      href="#home"
      className={`inline-flex items-center gap-xs ${text} ${className}`}
      aria-label="Techopolis Infotech — home"
    >
      <SpikeMark size={36} className="text-primary" title="Techopolis mark" />
      <span className="font-display text-title-lg leading-none tracking-tight">
        Techopolis<span className="text-primary">.</span>
      </span>
      <span className="hidden sm:inline text-caption-up uppercase text-muted ml-xs border-l border-hairline pl-xs">
        Infotech
      </span>
    </a>
  );
}
