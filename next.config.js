/** @type {import('next').NextConfig} */
// const nextConfig = {};
module.exports = {
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.dummyjson.com',
      },
    ]
  },
};
// module.exports = nextConfig;
