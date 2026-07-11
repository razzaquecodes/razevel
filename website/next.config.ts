import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [],
  },
  experimental: {
    optimizeCss: false,
  },
  async redirects() {
    return [
      { source: '/help', destination: '/support', permanent: true },
      { source: '/help-center', destination: '/support', permanent: true },
      { source: '/faq', destination: '/support', permanent: true },
      { source: '/worldwide-shipping', destination: '/shipping', permanent: true },
      { source: '/appointments', destination: '/bespoke', permanent: true },
      { source: '/book-appointment', destination: '/bespoke', permanent: true },
      { source: '/fabric-care', destination: '/care', permanent: true },
      { source: '/guarantee', destination: '/promise', permanent: true },
    ];
  },
};

export default nextConfig;
