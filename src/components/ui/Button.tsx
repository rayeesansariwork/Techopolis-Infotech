import type { ButtonHTMLAttributes, ReactNode } from 'react';

type Variant = 'primary' | 'secondary' | 'ghost' | 'on-dark';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  children: ReactNode;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
};

const base =
  'inline-flex items-center justify-center gap-xs h-10 rounded-md text-button font-medium ' +
  'transition-colors duration-250 ease-editorial select-none ' +
  'disabled:cursor-not-allowed disabled:opacity-100 ' +
  'focus-visible:outline-none focus-visible:shadow-focus-coral';

const variants: Record<Variant, string> = {
  primary:
    'bg-primary text-on-primary px-lg hover:bg-primary-active active:bg-primary-active ' +
    'disabled:bg-primary-disabled disabled:text-muted',
  secondary:
    'bg-canvas text-ink px-lg border border-hairline hover:bg-surface-soft active:bg-surface-card',
  ghost:
    'bg-transparent text-ink px-md hover:bg-surface-soft active:bg-surface-card',
  'on-dark':
    'bg-surface-dark-elevated text-on-dark px-lg border border-white/5 hover:bg-[#2c2a26] active:bg-surface-dark',
};

export function Button({
  variant = 'primary',
  children,
  className = '',
  iconLeft,
  iconRight,
  ...rest
}: ButtonProps) {
  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...rest}>
      {iconLeft ? <span className="inline-flex shrink-0">{iconLeft}</span> : null}
      <span>{children}</span>
      {iconRight ? <span className="inline-flex shrink-0">{iconRight}</span> : null}
    </button>
  );
}

type LinkButtonProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: Variant;
  children: ReactNode;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
};

export function LinkButton({
  variant = 'primary',
  children,
  className = '',
  iconLeft,
  iconRight,
  ...rest
}: LinkButtonProps) {
  return (
    <a className={`${base} ${variants[variant]} ${className}`} {...rest}>
      {iconLeft ? <span className="inline-flex shrink-0">{iconLeft}</span> : null}
      <span>{children}</span>
      {iconRight ? <span className="inline-flex shrink-0">{iconRight}</span> : null}
    </a>
  );
}
