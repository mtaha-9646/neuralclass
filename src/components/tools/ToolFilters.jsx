import React from 'react';
import { Input } from '../ui/Input';

export function ToolFilters({ categories, onCategoryChange, onSearchChange, selectedCategory, searchTerm }) {
  const uniqueCategories = [...new Set(categories)].sort();

  return (
    <div className='space-y-6 mb-8'>
      <div>
        <label className='block text-sm font-medium text-forest-900 mb-2'>Search Tools</label>
        <Input
          placeholder='Search by name, description...'
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>

      <div>
        <label className='block text-sm font-medium text-forest-900 mb-3'>Category</label>
        <div className='flex flex-wrap gap-2'>
          <button
            onClick={() => onCategoryChange(null)}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              selectedCategory === null
                ? 'bg-forest-700 text-cream-50'
                : 'bg-cream-200 text-forest-900 hover:bg-cream-300'
            }`}
          >
            All
          </button>
          {uniqueCategories.map(cat => (
            <button
              key={cat}
              onClick={() => onCategoryChange(cat)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                selectedCategory === cat
                  ? 'bg-forest-700 text-cream-50'
                  : 'bg-cream-200 text-forest-900 hover:bg-cream-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
