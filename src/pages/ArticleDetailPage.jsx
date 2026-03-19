import React from 'react';
import { useParams } from 'react-router-dom';
import { RootLayout } from '../layouts/RootLayout';
import { useAdminContext } from '../context/AdminContext';
import { ArticleMeta } from '../components/articles/ArticleMeta';
import { Badge } from '../components/ui/Badge';

export function ArticleDetailPage() {
  const { slug } = useParams();
  const { articles } = useAdminContext();
  const article = articles.find(a => a.slug === slug);

  if (!article) {
    return (
      <RootLayout>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center'>
          <h1 className='text-3xl font-bold text-forest-900'>Article not found</h1>
        </div>
      </RootLayout>
    );
  }

  return (
    <RootLayout>
      <article className='max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20'>
        <img src={article.image} alt={article.title} className='w-full h-96 object-cover rounded-lg mb-8' />

        <Badge variant='primary' className='mb-4'>{article.category}</Badge>

        <h1 className='text-4xl md:text-5xl font-bold text-forest-900 mb-6'>{article.title}</h1>

        <div className='mb-8 pb-8 border-b-2 border-cream-300'>
          <ArticleMeta article={article} />
        </div>

        <div className='prose prose-forest max-w-none'>
          {article.content.split('\n').map((para, i) => (
            <p key={i} className='text-forest-800 text-lg leading-relaxed mb-6'>
              {para}
            </p>
          ))}
        </div>

        <div className='mt-12 pt-8 border-t-2 border-cream-300'>
          <p className='text-sm text-forest-600'>
            About the author: <strong className='text-forest-900'>{article.author}</strong> is a contributing writer at Neural Class.
          </p>
        </div>
      </article>
    </RootLayout>
  );
}
