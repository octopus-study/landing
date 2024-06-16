/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'sun9-37.userapi.com',
        port: '',
        pathname: '/impg/**',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/legal',
        destination: '/legal/docs',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
