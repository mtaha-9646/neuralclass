import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Badge } from '../ui/Badge';

export function ToolCard({ tool }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a href={tool.url} target='_blank' rel='noopener noreferrer'>
      <motion.div
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        whileHover={{ y: -4 }}
        className={`
          relative p-6 h-full flex flex-col border-l-4 border-acid
          transition-all duration-300 cursor-pointer
          ${isHovered ? 'bg-acid shadow-brutal-lg' : 'bg-forest-900 shadow-brutal-sm'}
        `}
      >
        {/* Icon/Badge */}
        <div className={`
          w-10 h-10 rounded-full flex items-center justify-center font-display text-lg font-bold mb-4
          transition-colors duration-300
          ${isHovered ? 'bg-forest-950 text-acid' : 'bg-forest-800 text-acid'}
        `}>
          {tool.name[0]}
        </div>

        {/* Title */}
        <h3 className={`
          font-display text-2xl font-bold mb-3 transition-colors duration-300
          ${isHovered ? 'text-forest-950' : 'text-cream-100'}
        `}>
          {tool.name}
        </h3>

        {/* Category Badge */}
        <div className='mb-4'>
          <Badge variant={isHovered ? 'secondary' : 'primary'} className='uppercase text-xs'>
            {tool.category}
          </Badge>
        </div>

        {/* Description */}
        <p className={`
          font-mono text-sm mb-6 flex-grow transition-colors duration-300
          ${isHovered ? 'text-forest-950' : 'text-cream-400'}
        `}>
          {tool.description}
        </p>

        {/* Metadata */}
        <div className={`
          border-t border-current pt-4 flex items-center justify-between
          transition-colors duration-300
          ${isHovered ? 'border-forest-950 text-forest-950' : 'border-forest-700 text-cream-500'}
        `}>
          <div className='font-mono text-xs uppercase tracking-widest'>
            {tool.priceModel === 'Free' ? 'Free' : 'Paid'}
          </div>
          <div className='flex items-center gap-1'>
            <span className='text-lg'>★</span>
            <span className='font-bold'>{tool.rating}</span>
          </div>
        </div>

        {/* Visit link */}
        <div className={`
          mt-6 font-mono text-xs uppercase tracking-widest transition-colors duration-300
          ${isHovered ? 'text-forest-950' : 'text-acid'}
        `}>
          Visit Tool →
        </div>
      </motion.div>
    </a>
  );
}
