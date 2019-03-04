module.exports = (params) => {
  const devServer = {
    contentBase: params.paths.build,
    port: 8080,
    hot: true,
    quiet: false,
    inline: true,
    historyApiFallback: true,
    disableHostCheck: true,
    stats: {
      // Copied from `'minimal'`: https://github.com/webpack/webpack/blob/master/lib/Stats.js#L1394-L1401
      all: false,
      modules: true,
      maxModules: 0,
      errors: true,
      warnings: true,
      // Additional options.
      builtAt: true,
      colors: true,
      performance: true,
      hash: true,
      timings: true,
      version: true
    }
    //    writeToDisk: true,
  };

  return devServer;
};
