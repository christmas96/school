const HtmlWebpackPlugin = require('html-webpack-plugin');

const path = require('path');
const webpack = require('webpack');

const env = require('../scripts/env');

const rules = require('./rules.js');
const vendor = require('./vendor.js');

console.info('\x1b[36m', 'ENV variables', '\x1b[0m');
console.log('\x1b[1m', env, '\x1b[0m', '\n');

module.exports = {
  mode: process.env.NODE_ENV,

  devtool: 'source-map',

  context: process.cwd(),

  stats: 'minimal',

  entry: {
    vendor,
    app: ['babel-polyfill', './src/index.tsx'],
  },

  output: {
    path: path.resolve(process.cwd(), path.join(__dirname, 'build')),
    publicPath: '/',
  },

  module: {
    rules,
  },

  resolve: {
    modules: ['node_modules', 'src'],
    extensions: ['.ts', '.tsx', '.js'],
  },

  plugins: [
    new webpack.DefinePlugin({
      CONFIG: JSON.stringify(env),
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
    }),
    new HtmlWebpackPlugin({
      env,
      inject: true,
      template: 'src/index.ejs',
    }),
  ],
};
