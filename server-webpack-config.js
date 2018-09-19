const nodeExternals = require('webpack-node-externals');
const StartServerPlugin = require('start-server-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const hotWebpackClient = 'webpack/hot/poll?500';

module.exports = {
  entry: [
    hotWebpackClient,
    './server/server'
  ],
  watch: true,
  watchOptions: {
    ignored: /node_modules/,
    poll: 500,
  },
  target: 'node',
  externals: [
    nodeExternals(
      {
        whitelist: [hotWebpackClient]
      }
    )
  ],
  plugins: [
    new StartServerPlugin('main.js'),
    new CleanWebpackPlugin(['dist'])
  ]
};
