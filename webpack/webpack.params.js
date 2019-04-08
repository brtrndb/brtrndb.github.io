const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');

module.exports = (wpEnv) => {
  const isProd = wpEnv === undefined || wpEnv.NODE_ENV === undefined || wpEnv.NODE_ENV === 'prod' || wpEnv.NODE_ENV === 'production';
  const isDev = !isProd;
  const envName = isProd ? 'production' : 'development';
  const envNameShort = isProd ? 'prod' : 'dev';
  const envFilePath = path.join(__dirname, `.env.${envNameShort}`);

  const params = {
    folders: {
      root,
      src: path.join(root, 'src'),
      src_libs: path.join(root, 'src/libs'),
      src_i18n: path.join(root, 'src/modules/intl/i18n'),
      build: path.join(root, 'build'),
      build_img: path.join(root, 'build/img'),
      build_i18n: path.join(root, 'build/i18n'),
      node_modules: path.join(root, 'node_modules')
    },
    files: {
      app_entry: path.join(root, 'src/index.jsx'),
      template_html: path.join(root, 'src/index.html'),
      favicon: path.join(root, 'src/brtrndb-icon.png')
    },
    output: {
      main_bundle_name: `app.${isProd ? 'prod' : 'dev.[hash]'}.js`,
      images: '/img/',
      icons: '/img/icons/'
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
