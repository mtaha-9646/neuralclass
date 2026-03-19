import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Badge } from '../ui/Badge';

export function ArticleGridBroken({ articles = [] }) {
  if (articles.length === 0) return null;

  // Split articles into groups for broken layout
  const featuredArticle = articles[0];
  const secondaryArticles = articles.slice(1, 3);
  const smallArticles = articles.slice(3, 6);
  const rightArticle = articles[6];

  return (
    <section className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20'>
      {/* Section label */}
      <div className='font-mono text-xs uppercase tracking-widest text-acid mb-12 border-t border-forest-900 pt-8'>
        Latest Articles
      </div>

      {/* Broken grid container */}
      <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-max'>
        {/* Large featured - spans 2 cols, rotated left */}
        {featuredArticle && (
          <motion.div
            initial={{ opacity: 0, y: 40, rotate: -2 }}
            whileInView={{ opacity: 1, y: 0, rotate: 2 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className='md:col-span-2 lg:col-span-2 lg:row-span-2'
            style={{ transform: 'rotate(2deg)' }}
          >
            <Link to={`/article/${featuredArticle.slug}`}>
              <div className='group bg-gradient-to-br from-forest-900 to-forest-950 border-l-4 border-acid shadow-brutal-lg hover:shadow-brutal-lg transition-all duration-300 overflow-hidden h-full flex flex-col cursor-pointer'>
                {/* Image */}
                <div className='relative overflow-hidden bg-forest-800 flex-1 min-h-64'>
                  {featuredArticle.image && (
                    <img
                      src={featuredArticle.image}
                      alt={featuredArticle.title}
                      className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-300'
                    />
                  )}
                  <div className='absolute inset-0 bg-gradient-to-t from-forest-950 via-transparent to-transparent opacity-60'></div>
                </div>

                {/* Content */}
                <div className='p-6 flex flex-col flex-1'>
                  <Badge variant='primary' className='w-fit mb-4'>
                    {featuredArticle.category}
                  </Badge>
                  <h3 className='font-display text-2xl md:text-3xl text-cream-100 mb-4 leading-tight line-clamp-3'>
                    {featuredArticle.title}
                  </h3>
                  <p className='text-cream-300 text-sm mb-auto leading-relaxed line-clamp-2'>
                    {featuredArticle.excerpt}
                  </p>

                  {/* Meta */}
                  <div className='flex items-center justify-between pt-4 mt-4 border-t border-forest-700'>
                    <span className='font-mono text-xs uppercase tracking-widest text-cream-400'>
                      {featuredArticle.readTime} min read
                    </span>
                    <span className='text-acid text-lg group-hover:translate-x-1 transition-transform'>→</span>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        )}

        {/* Secondary medium articles - straight, stacked */}
        <div className='md:col-span-1 lg:col-span-1 flex flex-col gap-6 lg:row-span-2'>
          {secondaryArticles.map((article, idx) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className='group'
            >
              <Link to={`/article/${article.slug}`}>
                <div className='bg-gradient-to-br from-forest-900 to-forest-950 border-l-4 border-forest-700 shadow-brutal-sm hover:border-acid hover:shadow-brutal-md transition-all duration-300 overflow-hidden h-full flex flex-col cursor-pointer'>
                  {/* Image */}
                  <div className='relative overflow-hidden bg-forest-800 h-40'>
                    {article.image && (
                      <img
                        src={article.image}
                        alt={article.title}
                        className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-300'
                      />
                    )}
                  </div>

                  {/* Content */}
                  <div className='p-4 flex flex-col flex-1'>
                    <Badge variant='primary' className='w-fit mb-3 text-xs'>
                      {article.category}
                    </Badge>
                    <h3 className='font-display text-lg text-cream-100 mb-2 leading-tight line-clamp-2'>
                      {article.title}
                    </h3>

                    {/* Meta */}
                    <div className='font-mono text-xs uppercase tracking-widest text-cream-400 mt-auto pt-3 border-t border-forest-700'>
                      {article.readTime} min
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Small stacked articles - right side */}
        <div className='md:col-span-1 lg:col-span-1 flex flex-col gap-6 lg:row-span-2'>
          {smallArticles.map((article, idx) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 40, rotate: -1 }}
              whileInView={{ opacity: 1, y: 0, rotate: idx % 2 === 0 ? -1 : 1 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              style={{ transform: `rotate(${idx % 2 === 0 ? -1 : 1}deg)` }}
            >
              <Link to={`/article/${article.slug}`}>
                <div className='group bg-gradient-to-br from-forest-900 to-forest-950 border-l-4 border-forest-700 shadow-brutal-sm hover:border-acid hover:shadow-brutal-md transition-all duration-300 overflow-hidden h-24 flex cursor-pointer'>
                  {/* Image side */}
                  <div className='relative overflow-hidden bg-forest-800 w-24 flex-shrink-0'>
                    {article.image && (
                      <img
                        src={article.image}
                        alt={article.title}
                        className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-300'
                      />
                    )}
                  </div>

                  {/* Content side */}
                  <div className='p-3 flex flex-col flex-1 justify-between'>
                    <div>
                      <Badge variant='primary' className='text-xs inline-flex mb-2'>
                        {article.category.split(' ')[0]}
                      </Badge>
                      <h3 className='font-display text-sm text-cream-100 leading-tight line-clamp-2'>
                        {article.title}
                      </h3>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Right medium article - angled */}
        {rightArticle && (
          <motion.div
            initial={{ opacity: 0, y: 40, rotate: 1.5 }}
            whileInView={{ opacity: 1, y: 0, rotate: 1.5 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className='md:col-span-1 lg:col-span-1 lg:row-span-1'
            style={{ transform: 'rotate(1.5deg)', marginTop: '40px' }}
          >
            <Link to={`/article/${rightArticle.slug}`}>
              <div className='group bg-gradient-to-br from-forest-900 to-forest-950 border-l-4 border-forest-700 shadow-brutal-sm hover:border-acid hover:shadow-brutal-md transition-all duration-300 overflow-hidden flex flex-col cursor-pointer h-full'>
                {/* Image */}
                <div className='relative overflow-hidden bg-forest-800 h-40'>
                  {rightArticle.image && (
                    <img
                      src={rightArticle.image}
                      alt={rightArticle.title}
                      className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-300'
                    />
                  )}
                </div>

                {/* Content */}
                <div className='p-4 flex flex-col flex-1'>
                  <Badge variant='primary' className='w-fit mb-3 text-xs'>
                    {rightArticle.category}
                  </Badge>
                  <h3 className='font-display text-lg text-cream-100 mb-2 leading-tight line-clamp-2'>
                    {rightArticle.title}
                  </h3>
                  <p className='text-cream-300 text-xs mb-auto line-clamp-2'>
                    {rightArticle.excerpt}
                  </p>

                  {/* Meta */}
                  <div className='font-mono text-xs uppercase tracking-widest text-cream-400 mt-auto pt-3 border-t border-forest-700'>
                    {rightArticle.readTime} min
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
}
