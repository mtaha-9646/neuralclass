import React from 'react';
import { motion } from 'framer-motion';

export function NewsTicker() {
  const news = [
    'ChatGPT4 release reshapes education',
    'New AI literacy standards approved',
    'Teachers save 10 hours/week with AI tools'
  ];

  return (
    <div className='bg-forest-800 text-cream-50 py-3 overflow-hidden'>
      <div className='max-w-7xl mx-auto px-4'>
        <div className='flex items-center gap-4'>
          <span className='font-bold text-sm whitespace-nowrap'>Latest News:</span>
          <motion.div
            animate={{ x: [100, -100] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className='flex gap-8'
          >
            {news.concat(news).map((item, i) => (
              <span key={i} className='whitespace-nowrap text-sm'>
                {item}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
