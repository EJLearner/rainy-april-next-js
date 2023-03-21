/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true
  },
  async redirects() {
    return [
      {
        source: '/tmitw-filmmakers',
        destination: '/tmitw/filmmakers',
        permanent: true
      },
      {
        source: '/tmitw-pre-production-artifacts',
        destination: '/tmitw/pre-production-artifacts',
        permanent: true
      }
    ];
  }
};

module.exports = nextConfig;
