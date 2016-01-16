var path = require('path');
var CopyPlugin = require('copy-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = [{

  // Client-side JavaScript and CSS
  context: path.join(__dirname, 'client'),
  entry: './js/app.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app.js',
    sourceMapFilename: '[file].map'
  },
  module: {
    loaders: [{
      test: /\.js[x]?$/,
      loader: 'babel'
    }, {
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract('style', ['css', 'sass?sourceMap'])
    }, {
      test: /\.json/,
      loader: 'file?name=[path][name].[ext]'
    }, {
      test: /\.gif|\.jpg|\.png/,
      loader: 'file?name=[path][name].[ext]'
    }, {
      test: /\.woff|\.woff2|\.ttf|\.eot|\.svg/,
      loader: 'file?name=[path][name].[ext]'
    }]
  },
  plugins: [
    new ExtractTextPlugin('main.css'),
    new CopyPlugin([
      { from: '../index.html', to: 'dist' }
    ])
  ]
}];
