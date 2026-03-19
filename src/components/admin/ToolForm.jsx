import React, { useState } from 'react';
import { Input } from '../ui/Input';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';

export function ToolForm({ tool = null, onSubmit, isLoading = false }) {
  const [formData, setFormData] = useState(tool || {
    name: '',
    category: '',
    description: '',
    url: '',
    tags: '',
    priceModel: '',
    rating: 4.5,
    featured: false
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
    const tags = formData.tags.split(',').map(t => t.trim()).filter(Boolean);
    onSubmit({ ...formData, tags });
  };

  return (
    <Card className='p-8'>
      <form onSubmit={handleSubmit} className='space-y-6'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          <div>
            <label className='block text-sm font-medium text-forest-900 mb-2'>Tool Name</label>
            <Input
              name='name'
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className='block text-sm font-medium text-forest-900 mb-2'>Category</label>
            <Input
              name='category'
              value={formData.category}
              onChange={handleChange}
              placeholder='e.g., Tutoring & Explanation'
              required
            />
          </div>
        </div>

        <div>
          <label className='block text-sm font-medium text-forest-900 mb-2'>Description</label>
          <textarea
            name='description'
            value={formData.description}
            onChange={handleChange}
            rows='3'
            className='w-full px-4 py-2.5 rounded-lg border-2 border-cream-300 bg-cream-50 text-forest-900 focus:outline-none focus:border-forest-600'
            required
          />
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          <div>
            <label className='block text-sm font-medium text-forest-900 mb-2'>Website URL</label>
            <Input
              name='url'
              type='url'
              value={formData.url}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className='block text-sm font-medium text-forest-900 mb-2'>Price Model</label>
            <Input
              name='priceModel'
              value={formData.priceModel}
              onChange={handleChange}
              placeholder='e.g., Free + Premium'
              required
            />
          </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          <div>
            <label className='block text-sm font-medium text-forest-900 mb-2'>Tags (comma-separated)</label>
            <Input
              name='tags'
              value={formData.tags}
              onChange={handleChange}
              placeholder='e.g., tutoring, learning, ai'
            />
          </div>

          <div>
            <label className='block text-sm font-medium text-forest-900 mb-2'>Rating (0-5)</label>
            <Input
              name='rating'
              type='number'
              step='0.1'
              min='0'
              max='5'
              value={formData.rating}
              onChange={handleChange}
            />
          </div>
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
            Featured Tool
          </label>
        </div>

        <div className='flex gap-4'>
          <Button type='submit' disabled={isLoading}>
            {isLoading ? 'Saving...' : 'Save Tool'}
          </Button>
          <Button variant='secondary' onClick={() => window.history.back()}>
            Cancel
          </Button>
        </div>
      </form>
    </Card>
  );
}
