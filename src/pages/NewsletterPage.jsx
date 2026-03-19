import React from 'react';
import { RootLayout } from '../layouts/RootLayout';
import { NEWSLETTERS } from '../data/newsletters';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';

export function NewsletterPage() {
  return (
    <RootLayout>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20'>
        <h1 className='text-4xl font-bold text-forest-900 mb-4'>Newsletter Archives</h1>
        <p className='text-lg text-forest-700 mb-12'>
          Catch up on past newsletters and subscribe to get the latest insights.
        </p>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          {NEWSLETTERS.map(newsletter => (
            <Card key={newsletter.id} className='p-6'>
              <Badge variant='secondary' className='mb-3'>{newsletter.issue}</Badge>
              <h3 className='text-2xl font-bold text-forest-900 mb-2'>{newsletter.title}</h3>
              <p className='text-forest-700 mb-4'>{newsletter.preview}</p>
              <p className='text-sm text-forest-600 mb-4'>{new Date(newsletter.date).toLocaleDateString()}</p>
              <button className='bg-forest-700 text-cream-50 px-4 py-2 rounded-lg hover:bg-forest-800 transition-colors'>
                Read Issue
              </button>
            </Card>
          ))}
        </div>
      </div>
    </RootLayout>
  );
}
