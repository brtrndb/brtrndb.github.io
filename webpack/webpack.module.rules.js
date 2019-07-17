const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (params) => {
  const rules = [];

  rules.push({
    test: /\.jsx?$/,
    include: params.folders.src,
    exclude: [/node_modules/, params.folders.src_libs],
    enforce: 'pre',
    use: {
      loader: 'eslint-loader',
      options: {
        emitWarning: true
      }
    }
  });

  rules.push({
    test: /\.jsx?$/,
    include: params.folders.src,
    exclude: [/node_modules/, params.folders.src_libs],
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
      outputPath: (url, resourcePath, context) => {
        if (resourcePath.startsWith(params.folders.src_img_cv)) {
          return `${params.folders.build_img_cv.substring(params.folders.build.length)}/${url}`;
        }
        return `${params.folders.build_img}/${url}`;
      }
    }
  });

  rules.push({
    test: /\.(woff|woff2|eot|ttf|otf)$/,
    use: ['file-loader']
  });

  return rules;
};
