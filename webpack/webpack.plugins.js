const path = require('path');
const webpack = require('webpack');

const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CircularDependencyPlugin = require('circular-dependency-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const OfflinePlugin = require('offline-plugin');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');

module.exports = (params) => {
  const plugins = [];

  if (params.env.isProd) {
    plugins.push(
      new CleanWebpackPlugin([params.paths.build], {
        root: params.paths.root
      })
    );
  }

  if (params.env.isDev) {
    plugins.push(new webpack.HotModuleReplacementPlugin());
    plugins.push(new webpack.NamedModulesPlugin());
  }

  plugins.push(
    new HtmlWebpackPlugin({
      template: path.join(params.paths.sources, 'index.html'),
      title: 'brtrndb.github.io',
      filename: 'index.html',
      hash: true
    })
  );

  plugins.push(
    new MiniCssExtractPlugin({
      filename: `style.${params.env.isProd ? 'prod' : 'dev.[contenthash]'}.css`
    })
  );

  plugins.push(
    new CircularDependencyPlugin({
      exclude: /a\.js|node_modules/,
      failOnError: false,
      allowAsyncCycles: false,
      cwd: process.cwd()
    })
  );

  plugins.push(
    new webpack.EnvironmentPlugin({
      'process.env.NODE_ENV': JSON.stringify(params.env.name),
      'process.env.DEBUG': JSON.stringify(params.env.isProd)
    })
  );

  plugins.push(new CopyWebpackPlugin([{ from: params.paths.libs, to: 'libs' }]));

  plugins.push(
    new webpack.NormalModuleReplacementPlugin(/(.*)ENV(\.*)/, (resource) => {
      resource.request = resource.request.replace(/ENV/, `${params.env.isProd ? 'prod' : 'dev'}`);
    })
  );

  plugins.push(
    new OfflinePlugin({
      responseStrategy: 'cache-first',
      autoUpdate: true,
      externals: ['https://fonts.googleapis.com/css?family=Roboto']
    })
  );

  plugins.push(new LodashModuleReplacementPlugin());

  return plugins;
};
