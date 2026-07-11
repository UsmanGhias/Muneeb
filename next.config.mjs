/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "clivora.codcrafters.org" },
      { protocol: "https", hostname: "forgenfit.codcrafters.org" },
      { protocol: "https", hostname: "noor-ul-haya.codcrafters.org" },
      { protocol: "https", hostname: "codcrafters.org" },
    ],
  },
};

export default nextConfig;
