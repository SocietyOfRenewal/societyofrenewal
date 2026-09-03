import type { MetadataRoute } from 'next';

const siteUrl = 'https://www.societyofrenewal.org';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    {
      url: siteUrl,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${siteUrl}/manifesto`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: `${siteUrl}/faq`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ];
}
