import React, { useState } from 'react';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import { Card } from '../ui/Card';

export function NewsletterCTA() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for subscribing!');
    setEmail('');
  };

  return (
    <section className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
      <Card className='bg-gradient-to-r from-forest-700 to-forest-800 text-cream-50 p-12 text-center'>
        <h2 className='text-3xl font-bold mb-4'>Stay Updated</h2>
        <p className='text-cream-100 mb-8 max-w-2xl mx-auto'>
          Get the latest AI education insights, tools, and strategies delivered to your inbox every week.
        </p>
        <form onSubmit={handleSubmit} className='flex flex-col sm:flex-row gap-4 max-w-md mx-auto'>
          <input
            type='email'
            placeholder='Enter your email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className='flex-1 px-4 py-3 rounded-lg bg-cream-50 text-forest-900 placeholder-cream-600 focus:outline-none focus:ring-2 focus:ring-cream-300'
          />
          <Button variant='secondary'>Subscribe</Button>
        </form>
      </Card>
    </section>
  );
}
