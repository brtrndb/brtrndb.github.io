const paramsConfig = require('./webpack/webpack.params');
const prodConfig = require('./webpack/webpack.config.prod');
const devConfig = require('./webpack/webpack.config.dev');

module.exports = (env) => {
  const params = paramsConfig(env);
  const config = params.env.isProd ? prodConfig(params) : devConfig(params);

  if (env.BUILD_DEBUG === 'true') {
    console.log(`Building for env: ${params.env.envName}.`);
    console.log('Build configuration.', params);
    console.log('Webpack configuration.', config);
  }

  return config;
};
