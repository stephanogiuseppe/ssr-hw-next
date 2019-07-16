require('dotenv').config()

const webpackConfig = require('./webpack.config')

module.exports = {
  useFileSystemPublicRoutes: false,

  webpack: (config) => {
    config.plugins = config.plugins || []
    config.plugins = [ ... config.plugins, ... webpackConfig.plugins ]
    return config
  }
}