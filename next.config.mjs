/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["pbs.twimg.com", "images.sh-cdn.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // Permite cualquier dominio
      },
    ],
  },
};
// next.config.js

export default nextConfig;
