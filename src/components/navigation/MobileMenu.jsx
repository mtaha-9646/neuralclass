import React from 'react';
import { Link } from 'react-router-dom';

export function MobileMenu({ items, onClose }) {
  return (
    <div className='md:hidden bg-forest-800 text-cream-50'>
      <div className='px-2 pt-2 pb-3 space-y-1'>
        {items.map(item => (
          <Link
            key={item.href}
            to={item.href}
            className='block px-3 py-2 rounded-md text-base font-medium hover:bg-forest-700'
            onClick={onClose}
          >
            {item.label}
          </Link>
        ))}
        <Link
          to='/admin/login'
          className='block px-3 py-2 rounded-md text-base font-medium hover:bg-forest-700'
          onClick={onClose}
        >
          Admin
        </Link>
      </div>
    </div>
  );
}
