import React from 'react';
import { RootLayout } from '../layouts/RootLayout';
import { useAdminContext } from '../context/AdminContext';
import { CATEGORIES } from '../data/categories';
import { ArticleGrid } from '../components/articles/ArticleGrid';

export function CategoriesPage() {
  const { articles } = useAdminContext();

  return (
    <RootLayout>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20'>
        <h1 className='text-4xl font-bold text-forest-900 mb-4'>Categories</h1>
        <p className='text-lg text-forest-700 mb-12'>
          Browse articles by category to find what interests you.
        </p>

        <div className='space-y-16'>
          {CATEGORIES.map(cat => {
            const catArticles = articles.filter(a => a.category === cat.name);
            return (
              <section key={cat.id} id={cat.slug}>
                <div className='mb-8'>
                  <div className='flex items-center gap-4 mb-4'>
                    <span className='text-4xl'>{cat.icon}</span>
                    <h2 className='text-3xl font-bold text-forest-900'>{cat.name}</h2>
                  </div>
                  <p className='text-forest-700'>{catArticles.length} articles in this category</p>
                </div>
                <ArticleGrid articles={catArticles} />
              </section>
            );
          })}
        </div>
      </div>
    </RootLayout>
  );
}
