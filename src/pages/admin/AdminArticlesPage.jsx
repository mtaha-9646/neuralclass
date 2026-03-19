import React from 'react';
import { Link } from 'react-router-dom';
import { AdminLayout } from '../../layouts/AdminLayout';
import { useAdminContext } from '../../context/AdminContext';
import { DataTable } from '../../components/admin/DataTable';
import { Button } from '../../components/ui/Button';

export function AdminArticlesPage() {
  const { articles, deleteArticle } = useAdminContext();

  return (
    <AdminLayout>
      <div className='mb-8 flex justify-between items-center'>
        <h1 className='text-4xl font-bold text-forest-900'>Manage Articles</h1>
        <Link to='/admin/articles/new'>
          <Button>Create Article</Button>
        </Link>
      </div>

      <DataTable
        items={articles}
        columns={['Title', 'Category', 'Date']}
        onDelete={deleteArticle}
        editLink={(id) => `/admin/articles/${id}`}
        title='Articles'
      />
    </AdminLayout>
  );
}
