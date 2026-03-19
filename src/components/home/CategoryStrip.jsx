import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CATEGORIES } from '../../data/categories';

export function CategoryStrip() {
  return (
    <section className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20'>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className='font-display text-4xl text-cream-100 mb-12'
      >
        Browse by <span className='text-acid'>Category</span>
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className='flex flex-wrap gap-3'
      >
        {CATEGORIES.map((cat, i) => (
          <Link key={cat.id} to={`/categories#${cat.slug}`}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ scale: 1.05, y: -2 }}
              className='bg-forest-900 border-l-2 border-acid px-6 py-3 font-mono text-sm uppercase tracking-widest text-cream-100 hover:bg-acid hover:text-forest-950 hover:border-l-4 transition-all duration-300 cursor-pointer shadow-brutal-sm'
            >
              {cat.icon} {cat.name}
            </motion.div>
          </Link>
        ))}
      </motion.div>
    </section>
  );
}
