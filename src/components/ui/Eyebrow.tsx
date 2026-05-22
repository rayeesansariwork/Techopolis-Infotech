import type { ReactNode } from 'react';

type EyebrowProps = {
  children: ReactNode;
  tone?: 'muted' | 'coral';
  className?: string;
};

export function Eyebrow({ children, tone = 'muted', className = '' }: EyebrowProps) {
  const color = tone === 'coral' ? 'text-primary' : 'text-muted';
  return (
    <div className={`inline-flex items-center gap-xs ${color} ${className}`}>
      <span aria-hidden className="block h-px w-6 bg-current opacity-50" />
      <span className="text-caption-up uppercase">{children}</span>
    </div>
  );
}
