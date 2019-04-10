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

  plugins.push(
    new CleanWebpackPlugin({
      verbose: params.env.isDev,
      cleanStaleWebpackAssets: false
    })
  );

  if (params.env.isDev) {
    plugins.push(new webpack.HotModuleReplacementPlugin());
    plugins.push(new webpack.NamedModulesPlugin());
  }

  plugins.push(
    new HtmlWebpackPlugin({
      template: params.files.template_html,
      title: 'brtrndb.github.io',
      filename: 'index.html',
      meta: [
        { name: 'authors', content: 'Bertrand B.' },
        { name: 'description', content: 'Personal website, resume and portfolio.' },
        { name: 'keywords', content: 'brtrndb, personal website, portfolio, resume, cv, curriculum vitae' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }
      ],
      inject: true,
      hash: !params.env.isProd,
      minify: {
        removeComments: params.env.isProd,
        collapseWhitespace: params.env.isProd,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: params.env.isProd,
        minifyCSS: params.env.isProd,
        minifyURLs: true,
        preserveLineBreaks: !params.env.isProd
      }
    })
  );

  plugins.push(new MiniCssExtractPlugin({ filename: params.output.main_style_name }));

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

  plugins.push(new CopyWebpackPlugin([{ from: params.folders.src_i18n, to: params.folders.build_i18n }]));

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
          src: params.files.favicon,
          sizes: [96, 128, 192, 256, 384, 512, 1024],
          destination: params.output.icons
        }
      ]
    })
  );

  plugins.push(
    new FaviconsWebpackPlugin({
      logo: params.files.favicon, // Your source logo
      prefix: params.output.icons, // The prefix for all image files (might be a folder or a name).
      // emitStats: false, // Emit all stats of the generated icons.
      // statsFilename: 'iconstats.json', // The name of the json containing all favicon information.
      persistentCache: false, // Generate a cache file with control hashes and don't rebuild the favicons until those hashes change.
      inject: true, // Inject the html into the html-webpack-plugin.
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

  plugins.push(
    new OfflinePlugin({
      responseStrategy: 'cache-first',
      autoUpdate: true,
      externals: ['https://fonts.googleapis.com/css?family=Roboto']
    })
  );

  return plugins;
};
