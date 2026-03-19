import React from 'react';
import clsx from 'clsx';

export function Input({ className, ...props }) {
  return (
    <input
      className={clsx(
        'w-full px-4 py-2.5 rounded-lg border-2 border-cream-300 bg-cream-50',
        'text-forest-900 placeholder-cream-600',
        'focus:outline-none focus:border-forest-600 focus:ring-2 focus:ring-forest-100',
        'transition-all duration-200',
        className
      )}
      {...props}
    />
  );
}
