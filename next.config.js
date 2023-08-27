/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['cdn.imagin.studio'],
  },
  env: {
    apiUrl: process.env.API_URL,
  },
}

module.exports = nextConfig
