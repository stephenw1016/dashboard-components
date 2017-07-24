let webpackMerge = require('webpack-merge');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
let commonConfig = require('./webpack.common.js');
let helpers = require('./helpers');

const devConfig = {
  devtool: 'cheap-module-eval-source-map',

  module: {
    rules: [
      {
        test: /\.ts$/,
        loaders: [
          {
            loader: 'tslint-loader',
            options: {
              configFile: 'tslint.json',
              fix: true,
              emitErrors: true,
              tsConfigFile: 'tsconfig.json',
            }
          }
        ]
      }
      // {
      //   test: /\.scss$/,
      //   exclude: /node_modules/,
      //   loaders: [
      //     { loader: 'raw-loader' },
      //     { loader: 'sass-loader' }
      //   ]
      // }
    ]
  },

  output: {
    path: helpers.root('dist'),
    publicPath: 'http://localhost:8080/',
    filename: '[name].js',
    chunkFilename: '[id].chunk.js'
  },

  plugins: [
    new ExtractTextPlugin('[name].css')
  ],

  devServer: {
    historyApiFallback: true,
    stats: 'minimal'
  }
};

module.exports = webpackMerge(commonConfig, devConfig);
