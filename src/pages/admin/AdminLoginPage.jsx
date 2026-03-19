import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAdminContext } from '../../context/AdminContext';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { Card } from '../../components/ui/Card';

export function AdminLoginPage() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login, isAuthenticated } = useAdminContext();
  const navigate = useNavigate();

  if (isAuthenticated) {
    navigate('/admin/dashboard');
    return null;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (login(password)) {
      navigate('/admin/dashboard');
    } else {
      setError('Invalid password');
      setPassword('');
    }
  };

  return (
    <div className='min-h-screen bg-cream-50 flex items-center justify-center px-4'>
      <Card className='w-full max-w-md p-8'>
        <div className='text-center mb-8'>
          <h1 className='text-3xl font-bold text-forest-900'>Admin Panel</h1>
          <p className='text-forest-700 mt-2'>Enter your password to continue</p>
        </div>

        <form onSubmit={handleSubmit} className='space-y-6'>
          <div>
            <label className='block text-sm font-medium text-forest-900 mb-2'>Password</label>
            <Input
              type='password'
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError('');
              }}
              placeholder='Enter admin password'
              required
            />
          </div>

          {error && (
            <div className='bg-red-50 border-2 border-red-200 text-red-800 px-4 py-3 rounded-lg'>
              {error}
            </div>
          )}

          <Button type='submit' className='w-full'>
            Login
          </Button>
        </form>

        <p className='text-center text-sm text-forest-600 mt-6'>
          Default password: <code className='bg-cream-200 px-2 py-1 rounded'>admin123</code>
        </p>
      </Card>
    </div>
  );
}
