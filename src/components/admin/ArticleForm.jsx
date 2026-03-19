import React, { useState } from 'react';
import { Input } from '../ui/Input';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';
import { CATEGORIES } from '../../data/categories';

export function ArticleForm({ article = null, onSubmit, isLoading = false }) {
  const [formData, setFormData] = useState(article || {
    title: '',
    slug: '',
    excerpt: '',
    content: '',
    category: '',
    author: '',
    image: '',
    featured: false,
    readTime: 5
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <Card className='p-8'>
      <form onSubmit={handleSubmit} className='space-y-6'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          <div>
            <label className='block text-sm font-medium text-forest-900 mb-2'>Title</label>
            <Input
              name='title'
              value={formData.title}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className='block text-sm font-medium text-forest-900 mb-2'>Slug</label>
            <Input
              name='slug'
              value={formData.slug}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div>
          <label className='block text-sm font-medium text-forest-900 mb-2'>Excerpt</label>
          <textarea
            name='excerpt'
            value={formData.excerpt}
            onChange={handleChange}
            rows='3'
            className='w-full px-4 py-2.5 rounded-lg border-2 border-cream-300 bg-cream-50 text-forest-900 focus:outline-none focus:border-forest-600'
            required
          />
        </div>

        <div>
          <label className='block text-sm font-medium text-forest-900 mb-2'>Content</label>
          <textarea
            name='content'
            value={formData.content}
            onChange={handleChange}
            rows='8'
            className='w-full px-4 py-2.5 rounded-lg border-2 border-cream-300 bg-cream-50 text-forest-900 focus:outline-none focus:border-forest-600 font-mono text-sm'
            required
          />
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          <div>
            <label className='block text-sm font-medium text-forest-900 mb-2'>Category</label>
            <select
              name='category'
              value={formData.category}
              onChange={handleChange}
              className='w-full px-4 py-2.5 rounded-lg border-2 border-cream-300 bg-cream-50 text-forest-900 focus:outline-none focus:border-forest-600'
              required
            >
              <option value=''>Select a category</option>
              {CATEGORIES.map(cat => (
                <option key={cat.id} value={cat.name}>{cat.name}</option>
              ))}
            </select>
          </div>

          <div>
            <label className='block text-sm font-medium text-forest-900 mb-2'>Author</label>
            <Input
              name='author'
              value={formData.author}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className='block text-sm font-medium text-forest-900 mb-2'>Read Time (minutes)</label>
            <Input
              name='readTime'
              type='number'
              value={formData.readTime}
              onChange={handleChange}
              min='1'
            />
          </div>
        </div>

        <div>
          <label className='block text-sm font-medium text-forest-900 mb-2'>Image URL</label>
          <Input
            name='image'
            type='url'
            value={formData.image}
            onChange={handleChange}
          />
        </div>

        <div className='flex items-center'>
          <input
            id='featured'
            name='featured'
            type='checkbox'
            checked={formData.featured}
            onChange={handleChange}
            className='h-4 w-4 rounded border-cream-300'
          />
          <label htmlFor='featured' className='ml-2 text-sm font-medium text-forest-900'>
            Featured Article
          </label>
        </div>

        <div className='flex gap-4'>
          <Button type='submit' disabled={isLoading}>
            {isLoading ? 'Saving...' : 'Save Article'}
          </Button>
          <Button variant='secondary' onClick={() => window.history.back()}>
            Cancel
          </Button>
        </div>
      </form>
    </Card>
  );
}
