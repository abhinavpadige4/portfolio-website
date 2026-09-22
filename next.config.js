module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['lh3.googleusercontent.com', 'avatars.githubusercontent.com'],
    formats: ['image/avif', 'image/webp']
  },
  experimental: {
    appDir: false
  },
  eslint: {
    ignoreDuringBuilds: false
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production'
  },
  headers: async () => [
    {
      source: '/api/:path*',
      headers: [
        { key: 'Cache-Control', value: 'public, max-age=3600' }
      ]
    },
    {
      source: '/resume.pdf',
      headers: [
        { key: 'Cache-Control', value: 'public, max-age=86400' }
      ]
    }
  ]
};
