import { useLocalStorage } from './useLocalStorage';
import { SEED_ARTICLES } from '../data/articles';
import { SEED_TOOLS } from '../data/tools';

export function useAdmin() {
  const [articles, setArticles] = useLocalStorage('nc_articles', SEED_ARTICLES);
  const [tools, setTools] = useLocalStorage('nc_tools', SEED_TOOLS);

  const addArticle = (newArticle) => {
    const article = { ...newArticle, id: '_' + Math.random().toString(36).substr(2, 9) };
    setArticles([article, ...articles]);
    return article;
  };

  const updateArticle = (id, updates) => {
    setArticles(articles.map(a => a.id === id ? { ...a, ...updates } : a));
  };

  const deleteArticle = (id) => {
    setArticles(articles.filter(a => a.id !== id));
  };

  const addTool = (newTool) => {
    const tool = { ...newTool, id: '_' + Math.random().toString(36).substr(2, 9) };
    setTools([tool, ...tools]);
    return tool;
  };

  const updateTool = (id, updates) => {
    setTools(tools.map(t => t.id === id ? { ...t, ...updates } : t));
  };

  const deleteTool = (id) => {
    setTools(tools.filter(t => t.id !== id));
  };

  return {
    articles,
    tools,
    addArticle,
    updateArticle,
    deleteArticle,
    addTool,
    updateTool,
    deleteTool
  };
}
