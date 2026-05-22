import type { Client } from '../lib/clients';

type ClientLogoProps = {
  client: Client;
  tone?: 'light' | 'dark';
};

/**
 * Text-based dummy logo plate. Rectangular card with a hairline border,
 * a small typeset "mark" (initials) at left, and the full client name at right.
 * Grayscale by default; subtle coral mark and ink-name on hover.
 */
export function ClientLogo({ client, tone = 'light' }: ClientLogoProps) {
  const isDark = tone === 'dark';
  return (
    <div
      className={`group inline-flex items-center gap-md min-w-[220px] h-[72px] px-lg rounded-lg border transition-colors duration-250 ease-editorial ${
        isDark
          ? 'bg-surface-dark-soft border-white/5 hover:border-white/15'
          : 'bg-canvas border-hairline hover:border-ink/30'
      }`}
      aria-label={client.name}
    >
      <span
        className={`font-display text-title-lg leading-none transition-colors duration-250 ${
          isDark
            ? 'text-on-dark-soft group-hover:text-primary'
            : 'text-muted-soft group-hover:text-primary'
        }`}
      >
        {client.initials}
      </span>
      <span
        aria-hidden
        className={`h-7 w-px ${isDark ? 'bg-white/10' : 'bg-hairline'}`}
      />
      <span
        className={`text-title-sm transition-colors duration-250 whitespace-nowrap ${
          isDark
            ? 'text-on-dark-soft group-hover:text-on-dark'
            : 'text-muted group-hover:text-ink'
        }`}
      >
        {client.name}
      </span>
    </div>
  );
}
