'use strict'

let path = require('path');

module.exports = {

  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules:[
        {
          test: /\.css$/,
          use: [
            'style-loader',
            'css-loader',
          ]
        },
        {
          test: /\.js$/,
          use: 'babel-loader',
          exclude: '/node_modules/',          
        }
    ]
  }
}
