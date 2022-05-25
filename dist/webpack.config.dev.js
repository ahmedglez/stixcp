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
      test: /\.(png|jpeg|gif)$/i,
      use: [{
        loader: 'file-loader'
      }]
    }, {
      test: /\.(scss)$/,
      use: [{
        // inject CSS to page
        loader: 'style-loader'
      }, {
        // translates CSS into CommonJS modules
        loader: 'css-loader'
      }, {
        // Run postcss actions
        loader: 'postcss-loader',
        options: {
          // `postcssOptions` is needed for postcss 8.x;
          // if you use postcss 7.x skip the key
          postcssOptions: {
            // postcss plugins, can be exported to postcss.config.js
            plugins: function plugins() {
              [require('autoprefixer')];
            }
          }
        }
      }, {
        // compiles Sass to CSS
        loader: 'sass-loader'
      }]
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
  filename: './index.html'
}), new MiniCssExtractPlugin({
  filename: 'assets/[name].css'
})]), _module$exports);