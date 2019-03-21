const path = require('path');

const root = path.join(__dirname, '..');

module.exports = (env) => {
  const isProd = env === undefined || env.NODE_ENV === undefined || env.NODE_ENV === 'prod' || env.NODE_ENV === 'production';
  const isDev = !isProd;
  const buildPath = 'build';

  const params = {
    paths: {
      root,
      build: path.join(root, buildPath),
      sources: path.join(root, 'src'),
      libs: path.join(root, 'src/libs'),
      entry: path.join(root, 'src/index.jsx'),
      publicPath: ''
    },
    output: {
      filename: `bundle.${isProd ? 'prod' : 'dev.[hash]'}.js`,
      images: '/img/'
    },
    env: {
      name: env === undefined || env.NODE_ENV === undefined ? 'production' : env.NODE_ENV,
      isDev,
      isProd
    }
  };

  return params;
};
