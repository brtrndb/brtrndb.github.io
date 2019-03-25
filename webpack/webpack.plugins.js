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
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

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
      fingerprints: false,
      icons: [
        {
          src: path.join(params.paths.sources, 'brtrndb-icon.png'),
          sizes: [96, 128, 192, 256, 384, 512, 1024],
          destination: 'icons'
        }
      ]
    })
  );

  plugins.push(
    new FaviconsWebpackPlugin({
      logo: path.join(params.paths.sources, 'brtrndb-icon.png'), // Your source logo
      prefix: 'icons/', // The prefix for all image files (might be a folder or a name).
      // emitStats: false, // Emit all stats of the generated icons.
      // statsFilename: 'iconstats.json', // The name of the json containing all favicon information.
      persistentCache: false, // Generate a cache file with control hashes and don't rebuild the favicons until those hashes change.
      inject: false, // Inject the html into the html-webpack-plugin.
      // background: '#ffffff', // favicon background color (see https://github.com/haydenbleasel/favicons#usage).
      // title: 'Webpack App', // favicon app title (see https://github.com/haydenbleasel/favicons#usage).
      icons: {
        // which icons should be generated (see https://github.com/haydenbleasel/favicons#usage).
        android: false,
        appleIcon: false,
        appleStartup: false,
        coast: false,
        favicons: true,
        firefox: false,
        opengraph: false,
        twitter: false,
        yandex: false,
        windows: false
      }
    })
  );

  return plugins;
};
