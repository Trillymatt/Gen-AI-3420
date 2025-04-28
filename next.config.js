/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  webpack: (config) => {
    config.resolve.fallback = { fs: false, net: false, tls: false };
    return config;
  },
  // Add AWS Amplify specific configurations
  images: {
    domains: ['localhost'],
  },
  // Enable static exports for Amplify
  trailingSlash: true,
  // Add environment variables support
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  },
};

module.exports = nextConfig; 