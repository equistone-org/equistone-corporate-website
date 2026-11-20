/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  // Dev only: let phones on the local network load the dev server (HMR, chunks)
  // allowedDevOrigins: ["192.168.*.*"],
};

export default nextConfig;
