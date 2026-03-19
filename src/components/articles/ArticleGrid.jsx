import React from 'react';
import { ArticleCard } from './ArticleCard';

export function ArticleGrid({ articles, loading = false }) {
  if (loading) {
    return (
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {[...Array(6)].map((_, i) => (
          <div key={i} className='animate-pulse'>
            <div className='bg-cream-200 h-48 rounded-lg mb-4'></div>
            <div className='bg-cream-200 h-4 w-20 rounded mb-3'></div>
            <div className='bg-cream-200 h-6 rounded mb-3'></div>
            <div className='bg-cream-200 h-4 w-40 rounded'></div>
          </div>
        ))}
      </div>
    );
  }

  if (articles.length === 0) {
    return (
      <div className='text-center py-12'>
        <p className='text-forest-700 text-lg'>No articles found.</p>
      </div>
    );
  }

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
      {articles.map(article => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </div>
  );
}
