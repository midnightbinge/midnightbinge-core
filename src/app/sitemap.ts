import { MetadataRoute } from 'next';
import { products } from '@/data/products';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://midnightbinge.com';

  const productUrls = products.map((product) => ({
    url: `${baseUrl}/range/${product.slug}`,
    lastModified: new Date(),
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
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: url === '' ? 1.0 : 0.8,
  }));

  return [...staticUrls, ...productUrls];
}
