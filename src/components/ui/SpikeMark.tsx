type SpikeMarkProps = {
  size?: number;
  className?: string;
  title?: string;
};

/**
 * Small radial-spike glyph used as the brand wordmark prefix.
 * Eight short lines radiating from a center — anthropic-inspired but distinct (8-spoke).
 */
export function SpikeMark({ size = 16, className = '', title = 'Techopolis mark' }: SpikeMarkProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      className={className}
      role="img"
      aria-label={title}
    >
      <line x1="12" y1="3" x2="12" y2="9" />
      <line x1="12" y1="15" x2="12" y2="21" />
      <line x1="3" y1="12" x2="9" y2="12" />
      <line x1="15" y1="12" x2="21" y2="12" />
      <line x1="5.6" y1="5.6" x2="9.5" y2="9.5" />
      <line x1="14.5" y1="14.5" x2="18.4" y2="18.4" />
      <line x1="18.4" y1="5.6" x2="14.5" y2="9.5" />
      <line x1="9.5" y1="14.5" x2="5.6" y2="18.4" />
    </svg>
  );
}
