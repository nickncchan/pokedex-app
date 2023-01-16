/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  images: {
    domains: [
      "raw.githubusercontent.com",
      "i1.sndcdn.com",
      "archives.bulbagarden.net",
    ],
  },
};
