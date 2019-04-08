const path = require('path');
const merge = require('webpack-merge');
const TerserPlugin = require('terser-webpack-plugin');

const commonConfig = require('./webpack.config.common');

module.exports = (params) => {
  const common = commonConfig(params);

  const prod = {
    mode: 'production',
    devtool: false,
    entry: ['@babel/polyfill', params.files.app_entry],
    optimization: {
      minimizer: [
        new TerserPlugin({
          parallel: true,
          terserOptions: {
            output: {
              comments: false
            }
          }
        })
      ]
    }
  };

  return merge(common, prod);
};
