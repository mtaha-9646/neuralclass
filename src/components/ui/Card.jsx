import React from 'react';
import clsx from 'clsx';

export function Card({ children, className, hover = true, ...props }) {
  return (
    <div
      className={clsx(
        'bg-forest-900 border-l-4 border-acid p-6 transition-all duration-300',
        hover && 'hover:shadow-brutal-md hover:border-l-8 cursor-pointer',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
