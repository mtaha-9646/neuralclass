import React, { useState, useMemo } from 'react';
import { RootLayout } from '../layouts/RootLayout';
import { useAdminContext } from '../context/AdminContext';
import { ToolFilters } from '../components/tools/ToolFilters';
import { ToolGrid } from '../components/tools/ToolGrid';

export function ToolsDirectoryPage() {
  const { tools } = useAdminContext();
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const categories = tools.map(t => t.category);

  const filtered = useMemo(() => {
    return tools.filter(tool => {
      const matchesCategory = !selectedCategory || tool.category === selectedCategory;
      const matchesSearch = tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           tool.description.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [tools, selectedCategory, searchTerm]);

  return (
    <RootLayout>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20'>
        <h1 className='text-4xl font-bold text-forest-900 mb-4'>AI Tools Directory</h1>
        <p className='text-lg text-forest-700 mb-12'>
          Discover {tools.length}+ tools to enhance your teaching with AI.
        </p>

        <ToolFilters
          categories={categories}
          onCategoryChange={setSelectedCategory}
          onSearchChange={setSearchTerm}
          selectedCategory={selectedCategory}
          searchTerm={searchTerm}
        />

        <ToolGrid tools={filtered} />
      </div>
    </RootLayout>
  );
}
