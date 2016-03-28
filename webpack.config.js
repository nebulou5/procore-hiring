var path = require('path');
var webpack = require('webpack');
var autoPrefixer = require('autoprefixer');
var nodeModules = path.resolve(__dirname, 'node_modules');
var pathToReact = path.resolve(nodeModules, 'react/dist/react.min.js');

module.exports = {
  entry: path.resolve(__dirname, 'src/components/core/app/app.js'),
  resolve: {
    react: pathToReact,
    extensions: ['', '.js']
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js' 
  },
  module: {
  
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel' 
    }, {
      test: /\.(less|css)$/,
      exclude: /node_modules/,
      loader: 'style!css!less'
    }, {
      test: /\.(png|jpg)$/,
      exclude: /node_modules/,
      loader: 'url?limit=25000'
    }, {
      test: /\.(svg|woff2|ttf|eot)$/,
      include: /node_modules\/font\-awesome\/fonts\//,
      loader: 'file'
    }]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'production')},
      '__CLIENT__': true,
      '__SERVER__': false 
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: {
        warnings: false 
      } 
    })
  ],
  postcss: function(webpack) {
    return [
      autoPrefixer()
    ];
  },
  noParse: [pathToReact]
};
