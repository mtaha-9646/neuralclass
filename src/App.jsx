import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AdminProvider, useAdminContext } from './context/AdminContext';

import { HomePage } from './pages/HomePage';
import { ArticleDetailPage } from './pages/ArticleDetailPage';
import { ToolsDirectoryPage } from './pages/ToolsDirectoryPage';
import { CategoriesPage } from './pages/CategoriesPage';
import { NewsletterPage } from './pages/NewsletterPage';
import { AboutPage } from './pages/AboutPage';
import { NotFoundPage } from './pages/NotFoundPage';

import { AdminLoginPage } from './pages/admin/AdminLoginPage';
import { AdminDashboardPage } from './pages/admin/AdminDashboardPage';
import { AdminArticlesPage } from './pages/admin/AdminArticlesPage';
import { AdminArticleEditPage } from './pages/admin/AdminArticleEditPage';
import { AdminToolsPage } from './pages/admin/AdminToolsPage';

function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAdminContext();
  return isAuthenticated ? children : <Navigate to='/admin/login' />;
}

function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/article/:slug' element={<ArticleDetailPage />} />
      <Route path='/tools' element={<ToolsDirectoryPage />} />
      <Route path='/categories' element={<CategoriesPage />} />
      <Route path='/newsletter' element={<NewsletterPage />} />
      <Route path='/about' element={<AboutPage />} />

      <Route path='/admin/login' element={<AdminLoginPage />} />
      <Route
        path='/admin/dashboard'
        element={
          <ProtectedRoute>
            <AdminDashboardPage />
          </ProtectedRoute>
        }
      />
      <Route
        path='/admin/articles'
        element={
          <ProtectedRoute>
            <AdminArticlesPage />
          </ProtectedRoute>
        }
      />
      <Route
        path='/admin/articles/:id'
        element={
          <ProtectedRoute>
            <AdminArticleEditPage />
          </ProtectedRoute>
        }
      />
      <Route
        path='/admin/tools'
        element={
          <ProtectedRoute>
            <AdminToolsPage />
          </ProtectedRoute>
        }
      />

      <Route path='*' element={<NotFoundPage />} />
    </Routes>
  );
}

export function App() {
  return (
    <Router>
      <AdminProvider>
        <AppRoutes />
      </AdminProvider>
    </Router>
  );
}
