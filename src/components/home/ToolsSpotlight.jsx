import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';

export function ToolsSpotlight({ tools }) {
  const featured = tools.filter(t => t.featured).slice(0, 4);

  return (
    <section className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
      <div className='flex justify-between items-center mb-8'>
        <h2 className='text-3xl font-bold text-forest-900'>Featured Tools</h2>
        <Link to='/tools' className='text-forest-700 hover:text-forest-900 font-medium'>
          View All Tools →
        </Link>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
        {featured.map(tool => (
          <Card key={tool.id} className='p-6 flex flex-col'>
            <h3 className='text-xl font-bold text-forest-900 mb-2'>{tool.name}</h3>
            <Badge className='w-fit mb-4' variant='secondary'>{tool.category}</Badge>
            <p className='text-forest-700 text-sm mb-4 flex-grow'>{tool.description}</p>
            <div className='flex items-center gap-2 mb-4'>
              <span className='text-yellow-500'>★</span>
              <span className='text-sm font-medium text-forest-900'>{tool.rating}</span>
            </div>
            <a
              href={tool.url}
              target='_blank'
              rel='noopener noreferrer'
              className='text-forest-700 hover:text-forest-900 font-medium text-sm'
            >
              Learn More →
            </a>
          </Card>
        ))}
      </div>
    </section>
  );
}
