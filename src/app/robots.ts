import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://tomvisolution.tech';

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/admin',
          '/api/',
          '/demo/private-*',
        ],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
