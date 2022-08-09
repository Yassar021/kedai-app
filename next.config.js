/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['localhost:8000.com', 'localhost'],
  },
}

module.exports = nextConfig
