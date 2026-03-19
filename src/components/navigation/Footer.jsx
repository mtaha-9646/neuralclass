import React from 'react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className='bg-forest-950 text-cream-100 mt-20 border-t-2 border-acid pt-12'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-12 mb-12'>
          <div>
            <h3 className='font-display text-2xl text-acid mb-4'>Neural Class</h3>
            <p className='text-cream-300 font-mono text-sm leading-relaxed'>Your daily source for AI in education insights and tools.</p>
          </div>
          <div>
            <h4 className='font-mono text-xs text-acid uppercase tracking-widest mb-6'>Resources</h4>
            <ul className='space-y-2 text-sm font-mono'>
              <li><Link to='/articles' className='text-cream-300 hover:text-acid transition-colors'>Articles</Link></li>
              <li><Link to='/tools' className='text-cream-300 hover:text-acid transition-colors'>Tools</Link></li>
              <li><Link to='/newsletter' className='text-cream-300 hover:text-acid transition-colors'>Newsletter</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-mono text-xs text-acid uppercase tracking-widest mb-6'>Company</h4>
            <ul className='space-y-2 text-sm font-mono'>
              <li><Link to='/about' className='text-cream-300 hover:text-acid transition-colors'>About Us</Link></li>
              <li><Link to='/categories' className='text-cream-300 hover:text-acid transition-colors'>Categories</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-mono text-xs text-acid uppercase tracking-widest mb-6'>Legal</h4>
            <ul className='space-y-2 text-sm font-mono'>
              <li><a href='#' className='text-cream-300 hover:text-acid transition-colors'>Privacy</a></li>
              <li><a href='#' className='text-cream-300 hover:text-acid transition-colors'>Terms</a></li>
            </ul>
          </div>
        </div>
        <div className='border-t border-acid pt-8 text-center text-xs text-cream-400 font-mono'>
          <p>&copy; 2024 Neural Class. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
