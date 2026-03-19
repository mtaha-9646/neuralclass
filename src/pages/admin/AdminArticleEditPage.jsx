import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { AdminLayout } from '../../layouts/AdminLayout';
import { useAdminContext } from '../../context/AdminContext';
import { ArticleForm } from '../../components/admin/ArticleForm';

export function AdminArticleEditPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { articles, addArticle, updateArticle } = useAdminContext();

  const article = id && id !== 'new' ? articles.find(a => a.id === id) : null;

  const handleSubmit = (formData) => {
    if (article) {
      updateArticle(article.id, formData);
    } else {
      addArticle(formData);
    }
    navigate('/admin/articles');
  };

  return (
    <AdminLayout>
      <h1 className='text-4xl font-bold text-forest-900 mb-8'>
        {article ? 'Edit Article' : 'Create Article'}
      </h1>
      <ArticleForm
        article={article}
        onSubmit={handleSubmit}
      />
    </AdminLayout>
  );
}
