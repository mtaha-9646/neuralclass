import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/Button';
import { MobileMenu } from './MobileMenu';

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Articles', href: '/articles' },
    { label: 'Tools', href: '/tools' },
    { label: 'Categories', href: '/categories' },
    { label: 'Newsletter', href: '/newsletter' },
    { label: 'About', href: '/about' }
  ];

  return (
    <>
      <nav className='bg-forest-950 text-cream-100 border-b-2 border-acid sticky top-0 z-40 shadow-brutal-md'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex justify-between items-center h-20'>
            <Link to='/' className='flex items-center gap-2 font-display text-3xl font-bold hover:text-acid transition-colors'>
              <span>⬤ Neural Class</span>
            </Link>

            <div className='hidden md:flex items-center gap-8'>
              {navItems.map(item => (
                <Link
                  key={item.href}
                  to={item.href}
                  className='font-mono text-sm uppercase tracking-widest text-cream-300 hover:text-acid transition-colors border-b-2 border-transparent hover:border-b-2 hover:border-acid pb-1'
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div className='hidden md:flex items-center gap-4'>
              <Link to='/admin/login'>
                <Button variant='primary' size='sm'>Admin</Button>
              </Link>
            </div>

            <button
              className='md:hidden text-acid text-2xl'
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              ≡
            </button>
          </div>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <MobileMenu items={navItems} onClose={() => setIsMobileMenuOpen(false)} />
      )}
    </>
  );
}
