import React, { createContext, useState, useCallback } from 'react';
import { useAdmin } from '../hooks/useAdmin';

export const AdminContext = createContext();

export function AdminProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return sessionStorage.getItem('admin_auth') === 'true';
  });

  const admin = useAdmin();

  const login = useCallback((password) => {
    const correctPassword = import.meta.env.VITE_ADMIN_PASSWORD || 'admin123';
    if (password === correctPassword) {
      sessionStorage.setItem('admin_auth', 'true');
      setIsAuthenticated(true);
      return true;
    }
    return false;
  }, []);

  const logout = useCallback(() => {
    sessionStorage.removeItem('admin_auth');
    setIsAuthenticated(false);
  }, []);

  return (
    <AdminContext.Provider value={{ isAuthenticated, login, logout, ...admin }}>
      {children}
    </AdminContext.Provider>
  );
}

export function useAdminContext() {
  const context = React.useContext(AdminContext);
  if (!context) {
    throw new Error('useAdminContext must be used within AdminProvider');
  }
  return context;
}
