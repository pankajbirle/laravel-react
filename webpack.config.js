var webpack = require('webpack');
const path = require('path'); 
const CLIENT_DIR = path.resolve(__dirname, 'client');
const DIST_DIR = path.resolve(__dirname, '../../../public/');

const loaders = [{
  test: /\.js$/,
  include: CLIENT_DIR,
  loader: 'babel-loader',
  query: {
    presets: ['es2015', 'react']
  }
}];

module.exports = [{
  name: 'client',
  target: 'web',
  context: CLIENT_DIR,
  entry: './index.js',
  output: {
    path: DIST_DIR,
    filename: 'js/bundle.js'
  },
  module: {
    loaders: loaders
  },
  resolve: {
    alias: {
      components: path.resolve(CLIENT_DIR, 'component')
    }
  },
   plugins:[
    new webpack.DefinePlugin({
      'process.env':{
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ]
}];