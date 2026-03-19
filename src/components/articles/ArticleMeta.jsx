import React from 'react';

export function ArticleMeta({ article }) {
  return (
    <div className='flex flex-wrap items-center gap-4 text-sm text-forest-600'>
      <span className='font-medium text-forest-900'>{article.author}</span>
      <span>•</span>
      <span>{new Date(article.date).toLocaleDateString()}</span>
      <span>•</span>
      <span>{article.readTime} min read</span>
      <span>•</span>
      <span>{article.views.toLocaleString()} views</span>
    </div>
  );
}
