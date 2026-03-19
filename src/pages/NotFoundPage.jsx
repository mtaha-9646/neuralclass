import React from 'react';
import { Link } from 'react-router-dom';
import { RootLayout } from '../layouts/RootLayout';
import { Button } from '../components/ui/Button';

export function NotFoundPage() {
  return (
    <RootLayout>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-40 text-center'>
        <h1 className='text-6xl font-bold text-forest-900 mb-4'>404</h1>
        <p className='text-2xl text-forest-700 mb-8'>Page not found</p>
        <p className='text-forest-600 mb-12 max-w-md mx-auto'>
          Sorry, we couldn't find the page you're looking for. Let's get you back on track.
        </p>
        <Link to='/'>
          <Button size='lg'>Back to Home</Button>
        </Link>
      </div>
    </RootLayout>
  );
}
