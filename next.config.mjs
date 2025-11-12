// C:\Users\User1\abm2\next.config.mjs

/** @type {import('next').NextConfig} */
const nextConfig = {
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