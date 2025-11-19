/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/design-system' : '',
  images: {
    unoptimized: true,
  },
  transpilePackages: ['@your-org/ui', '@your-org/themes', '@your-org/icons'],
};

export default nextConfig;
