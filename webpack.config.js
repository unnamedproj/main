
var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'public/dist');

var APP_DIR = path.resolve(__dirname, 'app');

var config = {
  entry: APP_DIR + '/components/index.jsx',
  module: {
    loaders: [{
      test: /\.jsx$/,
      loader: 'babel',
      include: APP_DIR,
      query: {
        presets: ['es2015', 'react']
      }
    },{
      test: /\.css$/,
      loaders: [
        'style?sourceMap',
        'style-loader!css-loader',
        'style!css'
      ]
    }],
    resolve: {
        extensions: ['', '.js', '.jsx', '.css']
    }
  },
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  }
};

module.exports = config;

