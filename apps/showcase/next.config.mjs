import { createRequire } from 'module';
const require = createRequire(import.meta.url);

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/reui' : '',
  images: {
    unoptimized: true,
  },
  transpilePackages: ['@reluna-ui/ui', '@reluna-ui/icons', '@reluna-ui/themes'],
  webpack: (config) => {
    // Fix react-hook-form ESM/CJS resolution issue
    config.resolve.alias = {
      ...config.resolve.alias,
      'react-hook-form': require.resolve('react-hook-form'),
    };
    return config;
  },
};

export default nextConfig;
