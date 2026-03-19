import React from 'react';
import { Link } from 'react-router-dom';
import { AdminLayout } from '../../layouts/AdminLayout';
import { useAdminContext } from '../../context/AdminContext';
import { DataTable } from '../../components/admin/DataTable';
import { Button } from '../../components/ui/Button';

export function AdminToolsPage() {
  const { tools, deleteTool } = useAdminContext();

  return (
    <AdminLayout>
      <div className='mb-8 flex justify-between items-center'>
        <h1 className='text-4xl font-bold text-forest-900'>Manage Tools</h1>
        <Link to='/admin/tools/new'>
          <Button>Add Tool</Button>
        </Link>
      </div>

      <DataTable
        items={tools}
        columns={['Name', 'Category', 'URL']}
        onDelete={deleteTool}
        editLink={(id) => `/admin/tools/${id}`}
        title='Tools'
      />
    </AdminLayout>
  );
}
