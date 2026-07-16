/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    qualities: [75, 90],
    remotePatterns: [
      { protocol: "https", hostname: "5.imimg.com" },
      { protocol: "https", hostname: "4.imimg.com" },
      { protocol: "https", hostname: "m.media-amazon.com" },
      { protocol: "https", hostname: "img.magnific.com" },
      { protocol: "https", hostname: "png.pngtree.com" },
      { protocol: "https", hostname: "www.ropeservicesuk.com" },
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "plus.unsplash.com" },
      { protocol: "https", hostname: "images.pexels.com" },
      { protocol: "https", hostname: "utsplast.com" },
    ],
  },
};

module.exports = nextConfig;