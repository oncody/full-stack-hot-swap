const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: [
    'webpack-hot-middleware/client?reload=true',
    './client/client.js'
  ],
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({template: './client/index.html'})
  ]
};
