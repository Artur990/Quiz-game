/** @type {import('next').NextConfig} */
nextConfig = {
  reactStrictMode: true,
}
module.exports = {
  eslint: {
    dirs: ['pages', 'utils'], // Only run ESLint on the 'pages' and 'utils' directories during production builds (next build)
  },
}
module.exports = nextConfig
