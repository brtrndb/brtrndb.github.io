const path = require('path');
const merge = require('webpack-merge');

const commonConfig = require('./webpack.config.common');

module.exports = (params) => {
  const common = commonConfig(params);

  const prod = {
    mode: 'production',
    devtool: false,
    entry: ['@babel/polyfill', params.paths.entry]
  };

  return merge(common, prod);
};
