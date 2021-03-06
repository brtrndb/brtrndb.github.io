const fs = require('fs');
const path = require('path');
const packages = require('../package.json');

const root = path.join(__dirname, '..');

module.exports = (wpEnv) => {
  const isProd = wpEnv === undefined || wpEnv.NODE_ENV === undefined || wpEnv.NODE_ENV === 'prod' || wpEnv.NODE_ENV === 'production';
  const isDev = !isProd;
  const isWatch = wpEnv.WATCH === 'true';
  const envName = isProd ? 'production' : 'development';
  const envNameShort = isProd ? 'prod' : 'dev';
  const envFilePath = path.join(__dirname, `.env.${envNameShort}`);

  const params = {
    folders: {
      root,
      src: path.join(root, 'src'),
      src_libs: path.join(root, 'src/libs'),
      src_i18n: path.join(root, 'src/modules/intl/i18n'),
      src_img_cv: path.join(root, 'src/containers/Pages/ResumePage/img'),
      build: path.join(root, 'build'),
      build_i18n: path.join(root, 'build/i18n'),
      build_img: path.join(root, 'build/img'),
      build_img_cv: path.join(root, 'build/img/cv'),
      node_modules: path.join(root, 'node_modules')
    },
    files: {
      app_entry: path.join(root, 'src/index.jsx'),
      template_html: path.join(root, 'src/index.html'),
      favicon: path.join(root, 'src/brtrndb-icon.png')
    },
    output: {
      main_bundle_name: `app${isDev ? '.[hash]' : ''}.js`,
      main_style_name: `style${isDev ? '.[contenthash]' : ''}.css`,
      chunk_bundle_name: `[name]${isDev ? '.[hash]' : ''}.js`,
      images: '/img/',
      icons: '/img/icons/'
    },
    env: {
      envName,
      envNameShort,
      envFilePath,
      isProd,
      isDev,
      isWatch
    },
    packages: {
      author: packages.author.name,
      description: packages.description,
      keywords: packages.keywords
    }
  };

  return params;
};
