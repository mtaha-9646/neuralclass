import React from 'react';
import clsx from 'clsx';

export function Button({ 
  children, 
  variant = 'primary', 
  size = 'md',
  className,
  ...props 
}) {
  const baseStyles = 'font-mono font-bold uppercase tracking-widest transition-all duration-200 focus:outline-none hover:shadow-brutal-md active:shadow-brutal-sm';

  const variants = {
    primary: 'bg-acid text-forest-950 shadow-brutal-sm hover:translate-x-1 hover:translate-y-1',
    secondary: 'border-2 border-acid text-acid bg-transparent shadow-brutal-sm hover:translate-x-1 hover:translate-y-1',
    outline: 'border-2 border-cream-100 text-cream-100 hover:border-acid hover:text-acid',
    ghost: 'text-cream-100 hover:text-acid transition-colors'
  };

  const sizes = {
    sm: 'px-4 py-2 text-xs',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base'
  };

  return (
    <button
      className={clsx(
        baseStyles,
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
