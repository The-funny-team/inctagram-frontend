/** @type {import('next').NextConfig} */

const nextConfig = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ru'],
  },
  images: {
    remotePatterns: [
      {
        hostname: 'ft-bucket.storage.yandexcloud.net',
        pathname: '**',
        protocol: 'https',
      },
      {
        hostname: 'storage.yandexcloud.net',
        pathname: '/users-inctagram/**',
        port: '',
        protocol: 'https',
      },
      {
        hostname: 'staging-it-incubator.s3.eu-central-1.amazonaws.com',
        pathname: '/trainee-instagram-api/**',
        port: '',
        protocol: 'https',
      },
      {
        hostname: 'staging-it-incubator.s3.eu-central-1.amazonaws.com',
        pathname: '/trainee-instagram-api/Image/**',
        port: '',
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
