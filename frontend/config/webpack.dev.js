const path = require('path');
const merge = require('webpack-merge');

const commonConfig = require('./webpack.common');

const publicPath = '/';
const buildPath = path.resolve(__dirname, '../');

devConfig = {
  mode: 'development',
  devServer: {
		publicPath: publicPath,
    contentBase: path.resolve(buildPath, 'build'),
    port: 9000,
		inline: true,
		hot: true,	
	},
  module: {
    rules: [
      {
        test: /\.s?[ac]ss$/,
        use: [
          'style-loader',
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
  }  
};

module.exports = merge(commonConfig, devConfig);