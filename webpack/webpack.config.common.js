const path = require('path');

const rulesConfig = require('./webpack.module.rules');
const pluginsConfig = require('./webpack.plugins');

module.exports = (params) => {
  const rules = rulesConfig(params);
  const plugins = pluginsConfig(params);

  const common = {
    target: 'web',
    output: {
      path: params.folders.build,
      publicPath: '',
      filename: params.output.main_bundle_name,
      chunkFilename: params.output.chunk_bundle_name
    },
    optimization: {
      splitChunks: {
        chunks: 'all',
        minSize: 30000,
        maxSize: 0,
        minChunks: 1,
        // maxAsyncRequests: 5,
        // maxInitialRequests: 3,
        name: true,
        automaticNameDelimiter: '~',
        cacheGroups: {
          commons: {
            chunks: 'initial',
            minChunks: 2
          },
          vendors: {
            test: /node_modules/,
            priority: -10
          },
          default: {
            minChunks: 2,
            priority: -20,
            reuseExistingChunk: true
          }
        }
      }
    },
    resolve: {
      extensions: ['.js', '.jsx', '.json'],
      alias: {
        Components: path.join(params.folders.src, 'components'),
        Containers: path.join(params.folders.src, 'containers'),
        Modules: path.join(params.folders.src, 'modules'),
        Utils: path.join(params.folders.src, 'utils'),
        Tests: path.join(params.folders.src, 'tests')
      }
    },
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000,
      ignored: /node_modules/
    },
    module: {
      rules
    },
    plugins
  };

  return common;
};
