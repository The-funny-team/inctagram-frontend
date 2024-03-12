/** @type {import('next').NextConfig} */

const nextConfig = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ru'],
  },
  images: {
    remotePatterns: [
      {
        hostname: 'funny-team.s3.eu-north-1.amazonaws.com',
        pathname: '**',
        protocol: 'https',
      },
    ],
  },
  output: 'standalone',
  reactStrictMode: false,
}

module.exports = {
  ...nextConfig,
}
