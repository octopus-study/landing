/** @type {import('next').NextConfig} */
const nextConfig = {
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
