/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // domains: ["finale.bloombloom.s3.ap-northeast-2.amazonaws.com"],
    loader: "imgix",
    path: "https://finale.bloombloom.s3.ap-northeast-2.amazonaws.com/",
  },
};

module.exports = nextConfig;
