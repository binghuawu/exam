const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const commonConfig = require('./webpack.common');

devConfig = {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.s?[ac]ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader:  'postcss-loader',
            options: {
              plugins: function() {
                return [
                  require('autoprefixer'),
                  require('precss'),
                  require('postcss-flexbugs-fixes')
                ];
              }
            }
          },
          'sass-loader',
        ],
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename:        '[name].[hash].css',
      chunkFilename:   '[id].[hash].css',
    }),
    new webpack.HotModuleReplacementPlugin(), //添加
  ]
};

module.exports = merge(commonConfig, devConfig);