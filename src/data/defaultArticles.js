export const DEFAULT_ARTICLE_STRUCTURE = {
  id: '',
  title: '',
  slug: '',
  excerpt: '',
  content: '',
  category: '',
  author: '',
  date: new Date().toISOString().split('T')[0],
  image: 'https://images.unsplash.com/photo-1516321318423-f06f70d504d0?w=800&h=400&fit=crop',
  featured: false,
  views: 0,
  readTime: 5
};

export const generateId = () => '_' + Math.random().toString(36).substr(2, 9);

export const createArticle = (data) => ({
  ...DEFAULT_ARTICLE_STRUCTURE,
  ...data,
  id: data.id || generateId()
});
