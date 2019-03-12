const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (params) => {
  const rules = [];

  rules.push({
    test: /\.(js|jsx)$/,
    include: params.paths.sources,
    exclude: ['/node_modules/', params.paths.libs],
    enforce: 'pre',
    use: {
      loader: 'eslint-loader',
      options: {
        emitWarning: true
      }
    }
  });

  rules.push({
    test: /\.(js|jsx)$/,
    include: params.paths.sources,
    exclude: ['/node_modules/', params.paths.libs],
    use: {
      loader: 'babel-loader',
      options: {
        cacheDirectory: true,
        presets: ['@babel/preset-env', '@babel/preset-react'],
        plugins: ['react-hot-loader/babel']
      }
    }
  });

  rules.push({
    test: /\.jsx?$/,
    include: /node_modules/,
    use: ['react-hot-loader/webpack']
  });

  rules.push({
    test: /\.css$/,
    use: [
      'style-loader',
      {
        loader: MiniCssExtractPlugin.loader,
        options: {
          publicPath: '../'
        }
      },
      'css-loader'
    ]
  });

  rules.push({
    test: /\.(png|svg|jpg|gif)$/,
    loader: 'file-loader',
    options: {
      name: '[name].[ext]',
      outputPath: params.output.images
    }
  });

  rules.push({
    test: /\.(woff|woff2|eot|ttf|otf)$/,
    use: ['file-loader']
  });

  return rules;
};
