
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/equistone-corporate-website",
  trailingSlash: true,
};

export default nextConfig;
