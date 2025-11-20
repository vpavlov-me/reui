/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/reui' : '',
  images: {
    unoptimized: true,
  },
  transpilePackages: ['@reluna-ui/ui', '@reluna-ui/icons', '@reluna-ui/themes'],
};

export default nextConfig;
