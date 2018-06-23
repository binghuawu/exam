const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const publicPath = '/';
const buildPath = path.resolve(__dirname, '../');

module.exports = {
  entry: [
    'babel-polyfill',
    'react-hot-loader/patch', //添加
    path.resolve(buildPath, 'src/index.js')
  ],
  output: {
    publicPath: publicPath,
    path: path.resolve(buildPath, 'build'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env', 'react'],
            plugins: ["react-hot-loader/babel"] //增加
          }
        }
      },
      {
        test: [/\.gif$/, /\.jpe?g$/, /\.png$/],
        loader: 'url-loader',
        options: {
          limit: 10000, //1w字节以下大小的图片会自动转成base64
        },
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: 'index.html'
    })
  ]
}