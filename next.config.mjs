// C:\Users\User1\abm2\next.config.mjs

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Performance optimizations
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  
  // Optimize production builds
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },

  // Enable SWC minification
  swcMinify: true,

  // --- NEW: Add redirect configuration ---
  async redirects() {
    return [
      {
        source: '/fits', // The bad URL or typo
        destination: '/fitment', // The correct destination page
        permanent: true, // Use a 308 permanent redirect
      },
      {
        source: '/fitting', // Another common typo
        destination: '/fitment', 
        permanent: true,
      },
    ]
  },
};

export default nextConfig;