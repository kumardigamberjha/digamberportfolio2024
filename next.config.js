// next.config.js
const withVideos = require('next-videos');
module.exports = withVideos({
  webpack(config, { isServer }) {
    // Extend webpack configuration
    config.module.rules.push({
      test: /\.(mp4|webm|ogg|swf)$/,
      use: {
        loader: 'file-loader',
        options: {
          publicPath: '/_next/static/videos/',
          outputPath: 'static/videos/',
        },
      },
    });
    return config;
  },
});
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['assets.aceternity.com'],
  },
};