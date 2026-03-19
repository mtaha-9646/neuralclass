import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAdminContext } from '../../context/AdminContext';
import { Button } from '../ui/Button';

export function AdminSidebar() {
  const location = useLocation();
  const { logout } = useAdminContext();

  const isActive = (path) => location.pathname === path;

  const links = [
    { label: 'Dashboard', href: '/admin/dashboard' },
    { label: 'Articles', href: '/admin/articles' },
    { label: 'Tools', href: '/admin/tools' }
  ];

  return (
    <div className='w-64 bg-forest-900 text-cream-50 p-6 flex flex-col'>
      <Link to='/' className='font-bold text-xl mb-8 flex items-center space-x-2 hover:text-cream-100'>
        <span>🧠</span>
        <span>Neural Class</span>
      </Link>

      <nav className='flex-grow space-y-2'>
        {links.map(link => (
          <Link
            key={link.href}
            to={link.href}
            className={`block px-4 py-3 rounded-lg transition-colors ${
              isActive(link.href)
                ? 'bg-forest-700 text-cream-50'
                : 'text-cream-200 hover:bg-forest-800'
            }`}
          >
            {link.label}
          </Link>
        ))}
      </nav>

      <Button
        variant='secondary'
        size='sm'
        onClick={logout}
        className='w-full'
      >
        Logout
      </Button>
    </div>
  );
}
