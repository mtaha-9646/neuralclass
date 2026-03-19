import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Badge } from '../ui/Badge';

export function ArticleCard({ article }) {
  return (
    <Link to={`/article/${article.slug}`}>
      <motion.div
        whileHover={{ y: -4 }}
        className='relative bg-forest-900 border-l-4 border-acid p-0 overflow-hidden group cursor-pointer hover:shadow-brutal-lg transition-all duration-300'
      >
        {/* Image */}
        <div className='relative h-48 overflow-hidden'>
          <img
            src={article.image}
            alt={article.title}
            className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-300'
          />
          {/* Issue number overlay */}
          <div className='absolute top-4 right-4 bg-acid text-forest-950 px-3 py-2 font-mono text-xs font-bold shadow-brutal-md'>
            #{article.id}
          </div>
        </div>

        {/* Content */}
        <div className='p-6 flex flex-col flex-grow relative z-10'>
          <Badge variant='primary' className='w-fit mb-4'>{article.category}</Badge>
          <h3 className='font-display text-2xl text-cream-100 mb-4 leading-tight group-hover:text-acid transition-colors line-clamp-3'>
            {article.title}
          </h3>
          <p className='font-mono text-sm text-cream-400 mb-6 flex-grow line-clamp-2'>{article.excerpt}</p>

          {/* Footer with metadata */}
          <div className='border-t border-forest-700 pt-4 flex items-center justify-between text-xs font-mono text-cream-500'>
            <span>{article.author}</span>
            <span className='text-acid'>{article.readTime}m</span>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
