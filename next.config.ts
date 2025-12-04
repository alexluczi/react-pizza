import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
      },
      {
        protocol: 'https',
        hostname: 'ichkocheheute.de',
      },
      {
        protocol: 'https',
        hostname: 'www.stadlermade.com',
      },
      {
        protocol: 'https',
        hostname: 'eightforestlane.com',
      },
      {
        protocol: 'https',
        hostname: 'thestayathomechef.com',
      },
      {
        protocol: 'https',
        hostname: 'italianfoodforever.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.stocksnap.io',
      },
    ],
  },
};

export default nextConfig;
