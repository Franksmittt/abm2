// src/app/sitemap.ts
import { MetadataRoute } from 'next'
import { ALL_PRODUCTS } from '@/data/products'
import { ALL_POSTS } from '@/data/blog-posts'
import { getAllProductSlugs } from '@/data/product-detail'
import { getAllVehicleSlugs } from '@/data/vehicle-fitment'
import { getAllServicePages } from '@/data/service-pages'

export default function sitemap(): MetadataRoute.Sitemap {
  
  // 1. Get the base URL from your layout
  const baseUrl = 'https://www.albertonbatterymart.co.za';

  // 2. Create entries for your static pages
  const staticPages = [
    '/',
    '/about',
    '/services',
    '/contact',
    '/products',
    '/products/all',
    '/faq',
    '/quote',
    '/testing',
    '/fitment',
    '/deep-cycle', // This is the old deep-cycle page, let's keep it
    '/local/alberton-central',
    '/local/meyersdal',
    '/local/new-redruth',
    '/blog',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly' as 'monthly',
    priority: route === '/' ? 1.0 : 0.9,
  }));

  // 3. Create entries for all dynamic product pages
  const productPages = ALL_PRODUCTS.map((product) => ({
    url: `${baseUrl}/products/${product.id}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly' as 'weekly',
    priority: 0.8,
  }));

  // 4. Create entries for all dynamic blog post pages
  const blogPages = ALL_POSTS.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date).toISOString(),
    changeFrequency: 'weekly' as 'weekly',
    priority: 0.7,
  }));

  // 5. Create entries for product category/type silos
  // --- FIX: Replaced [...new Set(...)] with Array.from(new Set(...)) ---
  const productTypePages = Array.from(new Set(ALL_PRODUCTS.map(p => p.category)))
    .map((category) => {
      let slug = '';
      if (category === 'Standard Automotive') slug = 'automotive';
      if (category === 'Performance AGM/EFB') slug = 'performance';
      if (category === 'Deep Cycle') slug = 'deep-cycle';
      if (category === 'Truck & Commercial') slug = 'truck-commercial';
      if (category === 'Motorcycle') slug = 'motorcycle';
      
      if (slug) {
        return {
          url: `${baseUrl}/products/type/${slug}`,
          lastModified: new Date().toISOString(),
          changeFrequency: 'monthly' as 'monthly',
          priority: 0.9,
        };
      }
      return null;
    }).filter(Boolean) as MetadataRoute.Sitemap; // Filter out any nulls

  // 6. Create entries for product brand silos
  // --- FIX: Replaced [...new Set(...)] with Array.from(new Set(...)) ---
  const productBrandPages = Array.from(new Set(ALL_PRODUCTS.map(p => p.brandName)))
    .map((brand) => ({
      url: `${baseUrl}/products/brand/${brand.toLowerCase()}`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly' as 'monthly',
      priority: 0.8,
    }));

  const productDetailPages = getAllProductSlugs().map((slug) => ({
    url: `${baseUrl}/products/${slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly' as 'monthly',
    priority: 0.8,
  }));

  const vehiclePages = getAllVehicleSlugs().map((slug) => ({
    url: `${baseUrl}/vehicles/${slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly' as 'monthly',
    priority: 0.8,
  }));

  // 7. Create entries for all service pages
  const servicePages = getAllServicePages().map((service) => ({
    url: `${baseUrl}/services/${service.serviceSlug}/${service.areaSlug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly' as 'monthly',
    priority: 0.8,
  }));

  return [
    ...staticPages,
    ...productPages,
    ...blogPages,
    ...productTypePages,
    ...productBrandPages,
    ...productDetailPages,
    ...vehiclePages,
    ...servicePages,
  ];
}