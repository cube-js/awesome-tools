const withPlugins = require('next-compose-plugins')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})
const withOptimizedImages = require('next-optimized-images')

module.exports = withPlugins([
  [withBundleAnalyzer({
    enabled: process.env.ANALYZE === 'true',
  })],
  [withOptimizedImages, {
    images: {
      limit: -1,
    },
  }],
  {
    images: {
      disableStaticImages: true,
    },
  },
]);