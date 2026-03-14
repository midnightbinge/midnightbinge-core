import { MetadataRoute } from 'next';
import { products } from '@/data/products';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://midnightbinge.com';
  
  // Use a static release date instead of dynamic new Date() to avoid 
  // sending "everything changed" signals to search engines on every crawl.
  const releaseDate = new Date('2026-03-14');

  const productUrls = products.map((product) => ({
    url: `${baseUrl}/range/${product.slug}`,
    lastModified: releaseDate,
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  const staticUrls = [
    '',
    '/range',
    '/story',
    '/whats-inside',
    '/gifts',
    '/contact',
    '/privacy',
    '/terms',
  ].map((url) => ({
    url: `${baseUrl}${url}`,
    lastModified: releaseDate,
    changeFrequency: 'monthly' as const,
    priority: url === '' ? 1.0 : 0.8,
  }));

  return [...staticUrls, ...productUrls];
}
