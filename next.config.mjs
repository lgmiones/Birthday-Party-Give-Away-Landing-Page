/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Image optimization is handled automatically by Vercel at request time.
  // If you self-host with `next start` instead of deploying to Vercel, run
  // `npm install sharp` so local optimization has a native encoder to use.
};

export default nextConfig;
