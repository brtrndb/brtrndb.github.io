const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');

module.exports = (wpEnv) => {
  const isProd = wpEnv === undefined || wpEnv.NODE_ENV === undefined || wpEnv.NODE_ENV === 'prod' || wpEnv.NODE_ENV === 'production';
  const isDev = !isProd;
  const envName = isProd ? 'production' : 'development';
  const envNameShort = isProd ? 'prod' : 'dev';
  const envFilePath = path.join(__dirname, `./.env.${envNameShort}`);

  const params = {
    paths: {
      root,
      build: path.join(root, 'build'),
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
      envName,
      envNameShort,
      envFilePath,
      isDev,
      isProd
    }
  };

  return params;
};
