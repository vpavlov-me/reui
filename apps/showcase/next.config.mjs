/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/reui' : '',
  images: {
    unoptimized: true,
  },
  transpilePackages: ['@your-org/ui', '@your-org/icons', '@your-org/themes'],
};

export default nextConfig;
