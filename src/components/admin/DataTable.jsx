import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/Button';

export function DataTable({ items, columns, onDelete, editLink, title }) {
  if (items.length === 0) {
    return (
      <div className='text-center py-12'>
        <p className='text-forest-700 text-lg'>No {title} yet. Create one to get started!</p>
      </div>
    );
  }

  return (
    <div className='overflow-x-auto'>
      <table className='w-full border-collapse'>
        <thead>
          <tr className='border-b-2 border-cream-300'>
            {columns.map(col => (
              <th key={col} className='text-left px-4 py-3 font-bold text-forest-900'>
                {col}
              </th>
            ))}
            <th className='text-right px-4 py-3 font-bold text-forest-900'>Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, idx) => (
            <tr key={item.id} className={idx % 2 === 0 ? 'bg-cream-50' : 'bg-white'}>
              <td className='px-4 py-3 text-forest-900 font-medium'>{item.title || item.name}</td>
              <td className='px-4 py-3 text-forest-600'>{item.category || item.author}</td>
              <td className='px-4 py-3 text-forest-600'>{item.date || item.url}</td>
              <td className='px-4 py-3 text-right space-x-2'>
                <Link to={editLink(item.id)}>
                  <Button variant='ghost' size='sm'>Edit</Button>
                </Link>
                <Button
                  variant='ghost'
                  size='sm'
                  onClick={() => {
                    if (confirm('Are you sure?')) {
                      onDelete(item.id);
                    }
                  }}
                  className='text-red-600 hover:bg-red-50'
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
