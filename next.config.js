/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // For Next.js 14+, use the built-in asset handling
  webpack: (config) => {
    config.module.rules.push({
      test: /\.pdf$/,
      type: 'asset/resource',
      generator: {
        filename: 'static/files/[name].[hash][ext]'
      }
    });
    return config;
  },
};

module.exports = nextConfig;