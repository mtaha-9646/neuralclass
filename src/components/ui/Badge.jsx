import React from 'react';
import clsx from 'clsx';

export function Badge({ children, variant = 'default', className }) {
  const variants = {
    default: 'bg-acid text-forest-950 shadow-brutal-sm',
    primary: 'bg-acid text-forest-950 shadow-brutal-md',
    secondary: 'border-2 border-acid text-acid bg-transparent',
    success: 'bg-green-500 text-white shadow-brutal-sm'
  };

  return (
    <span className={clsx('inline-block px-3 py-2 text-xs font-mono font-bold tracking-widest uppercase', variants[variant], className)}>
      {children}
    </span>
  );
}
