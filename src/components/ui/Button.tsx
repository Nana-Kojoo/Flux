import Link from 'next/link';
import type { ButtonHTMLAttributes, ReactNode } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';
type ButtonSize = 'md' | 'lg';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  href?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary: 'bg-brand-black text-brand-white hover:bg-brand-gray-800',
  secondary: 'border border-brand-black text-brand-black hover:bg-brand-black hover:text-brand-white',
  ghost: 'text-brand-black hover:bg-brand-gray-100',
};

const sizeClasses: Record<ButtonSize, string> = {
  md: 'px-5 py-3 text-sm',
  lg: 'px-7 py-4 text-sm',
};

function getClasses(variant: ButtonVariant, size: ButtonSize, className?: string) {
  return [
    'inline-flex items-center justify-center gap-2 font-display font-semibold transition duration-200',
    variantClasses[variant],
    sizeClasses[size],
    className,
  ]
    .filter(Boolean)
    .join(' ');
}

export function Button({ children, href, variant = 'primary', size = 'md', className, ...props }: ButtonProps) {
  const classes = getClasses(variant, size, className);

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
