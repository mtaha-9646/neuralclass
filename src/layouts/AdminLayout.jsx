import React from 'react';
import { AdminSidebar } from '../components/admin/AdminSidebar';

export function AdminLayout({ children }) {
  return (
    <div className='flex h-screen bg-cream-50'>
      <AdminSidebar />
      <div className='flex-1 overflow-auto'>
        <div className='max-w-7xl mx-auto p-8'>
          {children}
        </div>
      </div>
    </div>
  );
}
