import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "gworks.ch",
          },
        ],
        destination: "https://www.gworks.li/:path*",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "www.gworks.ch",
          },
        ],
        destination: "https://www.gworks.li/:path*",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "gworks.at",
          },
        ],
        destination: "https://www.gworks.li/:path*",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "www.gworks.at",
          },
        ],
        destination: "https://www.gworks.li/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
