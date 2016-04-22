var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './src/index.ts',
  resolve: {
    extensions: ['', '.js', '.ts']
  },
  module: {
    loaders: [
      {
        test: /\.ts?$/,
        exclude: /node_modules/,
        loaders: ['ts-loader']
      }
    ]
  },
  tslint: {
    emitErrors: true,
    failOnHint: true
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js'
  }
};
