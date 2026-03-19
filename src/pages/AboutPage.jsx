import React from 'react';
import { RootLayout } from '../layouts/RootLayout';

export function AboutPage() {
  return (
    <RootLayout>
      <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20'>
        <h1 className='text-4xl font-bold text-forest-900 mb-8'>About Neural Class</h1>

        <div className='prose prose-forest max-w-none space-y-8'>
          <section>
            <h2 className='text-2xl font-bold text-forest-900 mb-4'>Our Mission</h2>
            <p className='text-forest-800 text-lg leading-relaxed'>
              Neural Class is dedicated to empowering educators with cutting-edge AI knowledge, practical tools, and proven strategies. We believe that AI should augment, not replace, human teachers.
            </p>
          </section>

          <section>
            <h2 className='text-2xl font-bold text-forest-900 mb-4'>What We Offer</h2>
            <ul className='list-disc list-inside space-y-3 text-forest-800 text-lg'>
              <li>In-depth articles on AI applications in education</li>
              <li>Comprehensive directory of 50+ AI tools for teachers</li>
              <li>Weekly newsletter with latest trends and insights</li>
              <li>Practical guides for classroom implementation</li>
              <li>Community insights from educators worldwide</li>
            </ul>
          </section>

          <section>
            <h2 className='text-2xl font-bold text-forest-900 mb-4'>Our Vision</h2>
            <p className='text-forest-800 text-lg leading-relaxed'>
              We envision a future where every educator has access to AI tools and knowledge needed to create personalized, engaging, and equitable learning experiences for all students.
            </p>
          </section>

          <section>
            <h2 className='text-2xl font-bold text-forest-900 mb-4'>Community</h2>
            <p className='text-forest-800 text-lg leading-relaxed'>
              Join thousands of teachers leveraging AI to transform education. Share your experiences, learn from peers, and grow together.
            </p>
          </section>
        </div>
      </div>
    </RootLayout>
  );
}
