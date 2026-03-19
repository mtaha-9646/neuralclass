import React from 'react';
import { useAdminContext } from '../context/AdminContext';
import { RootLayout } from '../layouts/RootLayout';
import { NewsTicker } from '../components/home/NewsTicker';
import { HeroBento } from '../components/home/HeroBento';
import { FeaturedArticle } from '../components/home/FeaturedArticle';
import { CategoryStrip } from '../components/home/CategoryStrip';
import { ToolsSpotlight } from '../components/home/ToolsSpotlight';
import { NewsletterCTA } from '../components/home/NewsletterCTA';

export function HomePage() {
  const { articles, tools } = useAdminContext();
  const featured = articles.find(a => a.featured);

  return (
    <RootLayout>
      <NewsTicker />
      <HeroBento />
      {featured && <FeaturedArticle article={featured} />}
      <CategoryStrip />
      <ToolsSpotlight tools={tools} />
      <NewsletterCTA />
    </RootLayout>
  );
}
