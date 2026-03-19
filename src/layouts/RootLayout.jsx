import React from 'react';
import { Navbar } from '../components/navigation/Navbar';
import { Footer } from '../components/navigation/Footer';

export function RootLayout({ children }) {
  return (
    <div className='flex flex-col min-h-screen bg-forest-950 text-cream-100'>
      <Navbar />
      <main className='flex-grow'>
        {children}
      </main>
      <Footer />
    </div>
  );
}
