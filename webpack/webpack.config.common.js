const path = require('path');

const rulesConfig = require('./webpack.module.rules');
const pluginsConfig = require('./webpack.plugins');

module.exports = (params) => {
  const rules = rulesConfig(params);
  const plugins = pluginsConfig(params);

  const common = {
    target: 'web',
    output: {
      path: params.paths.build,
      publicPath: params.paths.publicPath,
      filename: params.output.filename
    },
    optimization: {
      splitChunks: {
        chunks: 'async',
        minSize: 30000,
        maxSize: 0,
        minChunks: 1,
        maxAsyncRequests: 5,
        maxInitialRequests: 3,
        automaticNameDelimiter: '~',
        name: true,
        cacheGroups: {
          vendors: {
            test: /[\\/]node_modules[\\/]/,
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
        Components: path.join(params.paths.sources, 'components'),
        Containers: path.join(params.paths.sources, 'containers'),
        Modules: path.join(params.paths.sources, 'modules'),
        Utils: path.join(params.paths.sources, 'utils'),
        Tests: path.join(params.paths.sources, 'tests')
      }
    },
    module: {
      rules
    },
    plugins
  };

  return common;
};
