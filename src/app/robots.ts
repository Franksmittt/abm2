// src/app/robots.ts
import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://www.albertonbatterymart.co.za'; // [cite: 2469-2470]

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/', // As a best practice [cite: 1345]
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}