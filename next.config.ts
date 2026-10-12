import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  // 301 redirect manager (PRD §12): purane URLs yahan add karein
  async redirects() {
    return [
      { source: "/services/:slug", destination: "/service/:slug", permanent: true },
      { source: "/gigs/:slug", destination: "/gig/:slug", permanent: true },
    ];
  },
};

export default nextConfig;
