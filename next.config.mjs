/** @type {import('next').NextConfig} */
const nextConfig = {
  rewrites: async () => [
    {
      source: '/dashboard/:path*',
      destination: '/private/dashboard/:path*',
    },
    {
      source: '/profile/:path*',
      destination: '/private/profile/:path*',
    },
    {
      source: '/applications/:path*',
      destination: '/private/applications/:path*',
    },
  ],
};

export default nextConfig;
