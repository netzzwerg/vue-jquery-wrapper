var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './index.js',
  output: {
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /round-slider\/.+\.js$/,
        loader: 'imports-loader?jQuery=jquery2,$=jquery2,this=>window'
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  }
};