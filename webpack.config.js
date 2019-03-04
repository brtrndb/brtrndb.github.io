const paramsConfig = require('./webpack/webpack.params');
const prodConfig = require('./webpack/webpack.config.prod');
const devConfig = require('./webpack/webpack.config.dev');

module.exports = (env) => {
  const params = paramsConfig(env);
  const config = params.env.isProd ? prodConfig(params) : devConfig(params);

  console.log(`Building for env: ${params.env.name}.`);
  console.log(config);

  return config;
};
