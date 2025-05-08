/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '/docs',
  assetPrefix: '/docs',
  images: {
    unoptimized: true,
  },
  publicRuntimeConfig: {
    basePath: process.env.NEXT_PUBLIC_BASE_PATH || '', 
  },
};

export default nextConfig;