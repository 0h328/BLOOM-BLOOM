/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // domains: ["finale.bloombloom.s3.ap-northeast-2.amazonaws.com"],
    loader: "imgix",
    path: "https://finale.bloombloom.s3.ap-northeast-2.amazonaws.com/",
  },
  extends: "next",
  withImages: require("next-images"),
};

module.exports = nextConfig;
