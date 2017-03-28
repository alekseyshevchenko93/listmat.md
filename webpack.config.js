var Webpack = require('webpack');
var development = process.env.NODE_ENV !== 'production';
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');

var config = {
  devtool: development ? 'eval' : null,

  entry: './src/app.js',

  output: {
    path: __dirname + '/public',
    filename: 'bundle.js',
    publicPath: '/'
  },

  resolve: {
    modules: ['node_modules'],
    descriptionFiles: ['package.json'],
  },

  module: {
    rules: [{
      test: /\.html$/,
      exclude: /node_modules/,
      use: ['html-loader']
    }, {
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    }, {
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'autoprefixer-loader', 'sass-loader']
    }, {
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['es2015']
        }
      }
    }, {
      test: /\.(jpe?g|png|svg|gif)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 15000,
          name: 'images/[name].[ext]'
        }
      }
    }, {
      test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: 'url-loader',
      options: {
        limit: 1500
      }
    }, {
      test: /\.(ttf|eot|svg|svg)/,
      loader: 'url-loader',
      options: {
        limit: 1500
      }
    }]
  },

  plugins: [
    new Webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    }),
    new Webpack.HotModuleReplacementPlugin()
  ],

  devServer: {
    contentBase: './public',
    hot: true,
    historyApiFallback: true
  }

}

module.exports = config;
