const path = require('path');
const webpack = require('webpack');

const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CircularDependencyPlugin = require('circular-dependency-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const OfflinePlugin = require('offline-plugin');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const WebpackPwaManifest = require('webpack-pwa-manifest');

module.exports = (params) => {
  const plugins = [];

  if (params.env.isProd) {
    plugins.push(new CleanWebpackPlugin([params.paths.build], { root: params.paths.root }));
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

  plugins.push(new MiniCssExtractPlugin({ filename: `style.${params.env.envNameShort}${params.env.isDed ? '.[contenthash]' : ''}.css` }));

  plugins.push(
    new CircularDependencyPlugin({
      exclude: /a\.js|node_modules/,
      failOnError: false,
      allowAsyncCycles: false,
      cwd: process.cwd()
    })
  );

  plugins.push(
    new webpack.NormalModuleReplacementPlugin(/(.*)ENV(\.*)/, (resource) => {
      resource.request = resource.request.replace(/ENV/, `${params.env.envNameShort}`);
    })
  );

  plugins.push(new CopyWebpackPlugin([{ from: path.join(params.paths.sources, 'modules/intl/i18n/'), to: path.join(params.paths.build, 'i18n') }]));

  plugins.push(
    new OfflinePlugin({
      responseStrategy: 'cache-first',
      autoUpdate: true,
      externals: ['https://fonts.googleapis.com/css?family=Roboto']
    })
  );

  plugins.push(new LodashModuleReplacementPlugin());

  plugins.push(new Dotenv({ path: params.env.envFilePath }));

  plugins.push(
    new WebpackPwaManifest({
      name: 'BrtrndB',
      short_name: 'BrtrndB',
      description: 'BrtrndB Portfolio',
      display: 'browser',
      lang: 'en-UK',
      default_locale: 'en',
      background_color: '#ffffff',
      icons: [
        {
          src: path.join(params.paths.root, 'webpack/brtrndb-icon.png'),
          sizes: [96, 128, 192, 256, 384, 512, 1024],
          destination: 'icons'
        }
      ]
    })
  );

  return plugins;
};
