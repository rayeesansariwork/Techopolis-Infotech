import type { HTMLAttributes, ReactNode } from 'react';

type ContainerProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  as?: 'div' | 'section' | 'header' | 'footer' | 'main' | 'nav';
};

export function Container({ children, className = '', as: Tag = 'div', ...rest }: ContainerProps) {
  return (
    <Tag
      className={`mx-auto w-full max-w-content px-lg sm:px-xl lg:px-xxl ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  );
}
