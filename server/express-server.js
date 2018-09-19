const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackConfig = require('../client-webpack-config');

const app = express();
const webpackCompiler = webpack(webpackConfig);

const devMiddleware = webpackDevMiddleware(webpackCompiler, {
  publicPath: '/',
});

const hotMiddleware = webpackHotMiddleware(webpackCompiler);

app.use(devMiddleware);
app.use(hotMiddleware);

const contextRequire = require.context('./routes/', true, /\.js$/);
contextRequire.keys().forEach(file => {
  const fileRouter = contextRequire(file);
  app.use('/', fileRouter.default || fileRouter);
});

module.exports = app;
