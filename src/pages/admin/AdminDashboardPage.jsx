import React from 'react';
import { AdminLayout } from '../../layouts/AdminLayout';
import { useAdminContext } from '../../context/AdminContext';
import { Card } from '../../components/ui/Card';
import { Link } from 'react-router-dom';
import { Button } from '../../components/ui/Button';

export function AdminDashboardPage() {
  const { articles, tools } = useAdminContext();

  return (
    <AdminLayout>
      <h1 className='text-4xl font-bold text-forest-900 mb-8'>Dashboard</h1>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-12'>
        <Card className='p-6 text-center'>
          <div className='text-4xl font-bold text-forest-700 mb-2'>{articles.length}</div>
          <p className='text-forest-600'>Total Articles</p>
        </Card>
        <Card className='p-6 text-center'>
          <div className='text-4xl font-bold text-forest-700 mb-2'>{tools.length}</div>
          <p className='text-forest-600'>Tools Indexed</p>
        </Card>
        <Card className='p-6 text-center'>
          <div className='text-4xl font-bold text-forest-700 mb-2'>{articles.reduce((sum, a) => sum + a.views, 0).toLocaleString()}</div>
          <p className='text-forest-600'>Total Views</p>
        </Card>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        <Card className='p-6'>
          <h2 className='text-2xl font-bold text-forest-900 mb-4'>Recent Articles</h2>
          <div className='space-y-3'>
            {articles.slice(0, 5).map(article => (
              <div key={article.id} className='pb-3 border-b border-cream-200 last:border-b-0'>
                <p className='font-medium text-forest-900'>{article.title}</p>
                <p className='text-sm text-forest-600'>{article.date}</p>
              </div>
            ))}
          </div>
          <Link to='/admin/articles'>
            <Button className='mt-4'>Manage Articles</Button>
          </Link>
        </Card>

        <Card className='p-6'>
          <h2 className='text-2xl font-bold text-forest-900 mb-4'>Featured Tools</h2>
          <div className='space-y-3'>
            {tools.filter(t => t.featured).slice(0, 5).map(tool => (
              <div key={tool.id} className='pb-3 border-b border-cream-200 last:border-b-0'>
                <p className='font-medium text-forest-900'>{tool.name}</p>
                <p className='text-sm text-forest-600'>{tool.category}</p>
              </div>
            ))}
          </div>
          <Link to='/admin/tools'>
            <Button className='mt-4'>Manage Tools</Button>
          </Link>
        </Card>
      </div>
    </AdminLayout>
  );
}
