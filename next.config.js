/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export', // Enables static HTML export
  
  // GitHub Pages deployment - will be overridden by custom domain
  // Remove basePath and assetPrefix when using custom domain
  // basePath: '/arriva-app-nextjs',
  // assetPrefix: '/arriva-app-nextjs/',
  
  images: {
    unoptimized: true, // Required for static export
    remotePatterns: [],
  },
  
  // Ensure trailing slashes for better static hosting compatibility
  trailingSlash: true,
};

export default nextConfig;
