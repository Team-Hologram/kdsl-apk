/** @type {import('next').NextConfig} */
const nextConfig = {
  // Allow cross-origin requests from local network devices during development
  // (e.g. testing on a phone or tablet connected to the same Wi-Fi)
  // Next.js 14 does not support wildcards — list exact IPs of dev devices
  allowedDevOrigins: ["192.168.1.2"],
};

export default nextConfig;
