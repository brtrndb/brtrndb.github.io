const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');

const commonConfig = require('./webpack.config.common');
const devServerConfig = require('./webpack.devServer');

module.exports = (params) => {
  const common = commonConfig(params);
  const devServer = devServerConfig(params);

  const plugins = [];
  plugins.push(new webpack.HotModuleReplacementPlugin());
  plugins.push(new webpack.NamedModulesPlugin());

  const dev = {
    mode: 'development',
    devtool: 'inline-source-map',
    entry: ['react-hot-loader/patch', 'webpack/hot/only-dev-server', '@babel/polyfill', params.files.app_entry],
    watchOptions: {
      ignored: /node_modules/
    },
    devServer,
    plugins
  };

  return merge(common, dev);
};
