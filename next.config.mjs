/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { hostname: "image.tmdb.org" },
      { hostname: "**.supabase.co" }
    ]
  }
};
export default nextConfig;
