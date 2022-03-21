/* eslint-disable unicorn/no-array-reduce,no-param-reassign,@typescript-eslint/no-shadow */

const withBundleAnalyzer = require('@next/bundle-analyzer')
const withPWA = require('next-pwa')
const withLess = require('next-with-less')
const withOptimizedImages = require('next-optimized-images')

const isProdBuild = process.env.NODE_ENV === 'production'

const baseNextConfig = {
  pwa: {
    dest: 'public',
    sw: 'service-worker.js',
  },
  sassOptions: {
    cssModules: true,
  },
}

const lessNextConfig = {
  lessLoaderOptions: {
    javascriptEnabled: true,
  },
}

const optimizedImagesNextConfig = {
  /**
   * Auto-detects:
   * - imagemin-mozjpeg
   * - imagemin-optipng
   * - webp-loader
   */
}

const compose = (plugins) => ({
  ...baseNextConfig,

  webpack: (config, options) => {
    config.module.rules.push(
      {
        test: /\.md$/,
        use: 'raw-loader',
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
    )

    return plugins.reduce((config, plugin) => {
      if (Array.isArray(plugin)) {
        const [pluginFunction, ...pluginArguments] = plugin
        plugin = pluginFunction(...pluginArguments)
      }
      if (plugin instanceof Function) {
        plugin = plugin()
      }
      if (plugin && plugin.webpack instanceof Function) {
        return plugin.webpack(config, options)
      }
      return config
    }, config)
  },

  webpackDevMiddleware(config) {
    return plugins.reduce((config, plugin) => {
      if (Array.isArray(plugin)) {
        const [pluginFunction, ...pluginArguments] = plugin
        plugin = pluginFunction(...pluginArguments)
      }
      if (plugin instanceof Function) {
        plugin = plugin()
      }
      if (plugin && plugin.webpackDevMiddleware instanceof Function) {
        return plugin.webpackDevMiddleware(config)
      }
      return config
    }, config)
  },
})

module.exports = compose([
  [withPWA],
  [withBundleAnalyzer, { enabled: process.env.ANALYZE === 'true' }],
  [withLess, lessNextConfig],
  [withOptimizedImages, optimizedImagesNextConfig],
])
