// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// }

// module.exports = nextConfig

module.exports = {
  images: {
    loader: 'akamai',
    path: '/',
    deviceSizes: [360, 480, 576, 768, 1200, 1920, 2048, 3840],
  },

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  }
}