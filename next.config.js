/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'out', // 👈 force Next.js to use /out instead of .next
  images: { unoptimized: true },
};

module.exports = nextConfig;
