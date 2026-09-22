module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: '**', pathname: '**' }
    ]
  },
  eslint: { ignoreDuringBuilds: true }
}
