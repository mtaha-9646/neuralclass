import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';

export function FeaturedArticle({ article }) {
  if (!article) return null;

  return (
    <section className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
      <h2 className='text-3xl font-bold text-forest-900 mb-8'>Featured Article</h2>
      <Card className='overflow-hidden hover:shadow-lg transition-shadow'>
        <div className='grid grid-cols-1 md:grid-cols-2'>
          <img src={article.image} alt={article.title} className='h-80 object-cover' />
          <div className='p-8 flex flex-col justify-center'>
            <Badge variant='primary' className='w-fit mb-4'>{article.category}</Badge>
            <h3 className='text-3xl font-bold text-forest-900 mb-4'>{article.title}</h3>
            <p className='text-forest-700 mb-6'>{article.excerpt}</p>
            <div className='flex items-center gap-4 text-sm text-forest-600 mb-6'>
              <span>{article.author}</span>
              <span>•</span>
              <span>{article.readTime} min read</span>
              <span>•</span>
              <span>{article.views.toLocaleString()} views</span>
            </div>
            <Link to={`/article/${article.slug}`} className='inline-block'>
              <button className='bg-forest-700 text-cream-50 px-6 py-3 rounded-lg hover:bg-forest-800 transition-colors w-fit'>
                Read More
              </button>
            </Link>
          </div>
        </div>
      </Card>
    </section>
  );
}
