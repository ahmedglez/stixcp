"use strict";

var _module$exports;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var path = require('path');

var HtmlWebpackPlugin = require('html-webpack-plugin');

var MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (_module$exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: ['babel-loader']
    }, {
      test: /\.html$/,
      use: [{
        loader: 'html-loader'
      }]
    }, {
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    }, {
      test: /\.(png|jpeg|gif|jpg)$/i,
      use: [{
        loader: 'file-loader'
      }]
    }, {
      test: /\.svg$/,
      use: [{
        loader: 'svg-url-loader',
        options: {
          limit: 10000
        }
      }]
    }, {
      test: /\.scss$/,
      use: [{
        loader: MiniCssExtractPlugin.loader
      }, 'css-loader', 'sass-loader']
    }]
  }
}, _defineProperty(_module$exports, "resolve", {
  extensions: ['*', '.js', '.jsx']
}), _defineProperty(_module$exports, "devServer", {
  port: 3005,
  "static": {
    directory: path.join(__dirname, "dist")
  }
}), _defineProperty(_module$exports, "plugins", [new HtmlWebpackPlugin({
  template: './public/index.html',
  filename: './dist/index.html'
}), new MiniCssExtractPlugin()]), _module$exports);