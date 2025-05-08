/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '/docs', 
  assetPrefix: '/docs', 
  images: {
    unoptimized: true,
  },
};

export default nextConfig;