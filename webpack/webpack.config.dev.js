const path = require('path');
const merge = require('webpack-merge');

const commonConfig = require('./webpack.config.common');
const devServerConfig = require('./webpack.devServer');

module.exports = (params) => {
  const common = commonConfig(params);
  const devServer = devServerConfig(params);

  const dev = {
    mode: 'development',
    devtool: 'inline-source-map',
    entry: ['react-hot-loader/patch', 'webpack/hot/only-dev-server', '@babel/polyfill', params.paths.entry],
    watchOptions: {
      ignored: '/node_modules/'
    },
    devServer
  };

  return merge(common, dev);
};
