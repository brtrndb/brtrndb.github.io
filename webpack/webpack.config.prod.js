const path = require('path');
const merge = require('webpack-merge');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const commonConfig = require('./webpack.config.common');

module.exports = (params) => {
  const common = commonConfig(params);

  const prod = {
    mode: 'production',
    devtool: false,
    entry: ['@babel/polyfill', params.paths.entry],
    optimization: {
      minimizer: [
        new UglifyJsPlugin({
          parallel: true,
          uglifyOptions: {
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
