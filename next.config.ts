import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
   images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ik.imagekit.io',
        // port: '',
        // pathname: '/my-bucket/**',
        // search: '',
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        // port: '',
        // pathname: '',
        // search: '',
      },
    ],
  },
};

export default nextConfig;
