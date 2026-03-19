import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '../ui/Button';

export function HeroBento() {
  return (
    <div className='min-h-screen bg-forest-950 pt-20 pb-32 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-7xl mx-auto'>
        {/* Split hero: Dark headline + featured card */}
        <div className='grid md:grid-cols-2 gap-12 mb-32 items-start'>
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className='font-display text-7xl md:text-8xl leading-tight text-cream-100 mb-8'>
              AI for<br />
              <span className='text-acid'>Education</span>
            </h1>
            <div className='w-full h-1 bg-acid mb-8'></div>
            <p className='font-mono text-sm text-cream-300 leading-relaxed max-w-lg mb-12'>
              Discover cutting-edge AI tools, strategies, and insights to transform your classroom and empower your students.
            </p>
            <div className='flex flex-col sm:flex-row gap-4'>
              <Link to='/tools'>
                <Button size='lg'>Explore Tools</Button>
              </Link>
              <Link to='/categories'>
                <Button variant='secondary' size='lg'>Read Articles</Button>
              </Link>
            </div>
          </motion.div>

          {/* Featured card with offset */}
          <motion.div
            initial={{ opacity: 0, x: 40, rotateY: -10 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className='relative'
            style={{
              perspective: '1200px',
              transformStyle: 'preserve-3d'
            }}
          >
            <div className='bg-acid text-forest-950 p-8 shadow-brutal-lg border-l-8 border-acid'>
              <div className='font-mono text-xs uppercase tracking-widest mb-6 text-forest-900 opacity-70'>
                Featured Issue
              </div>
              <h3 className='font-display text-3xl mb-4 text-forest-950'>
                ChatGPT in the Classroom
              </h3>
              <p className='font-mono text-sm text-forest-900 leading-relaxed mb-8'>
                Comprehensive guide to integrating generative AI tools with practical strategies and ethical considerations.
              </p>
              <div className='flex items-center justify-between pt-6 border-t-2 border-forest-900'>
                <span className='font-mono text-xs uppercase tracking-widest'>5 min read</span>
                <span className='text-acid-dark text-lg'>→</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats grid - large numbers, brutalist layout */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-32'>
          {[
            { number: '500+', label: 'ARTICLES' },
            { number: '50+', label: 'AI TOOLS' },
            { number: '10k+', label: 'EDUCATORS' }
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.15 }}
              className='border-l-8 border-acid pl-8 py-4'
            >
              <div className='font-display text-6xl md:text-7xl text-acid font-bold mb-4'>
                {stat.number}
              </div>
              <div className='font-mono text-xs uppercase tracking-widest text-cream-400'>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <div className='h-px bg-acid opacity-30 mb-8'></div>
      </div>
    </div>
  );
}
