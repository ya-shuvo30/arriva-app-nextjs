/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export', // Enables static HTML export
  images: {
    remotePatterns: [],
  },
};

export default nextConfig;
