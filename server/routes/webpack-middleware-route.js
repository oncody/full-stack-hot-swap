const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackConfig = require('../../client-webpack-config');

const router = express.Router();
const webpackCompiler = webpack(webpackConfig);

const devMiddleware = webpackDevMiddleware(webpackCompiler, {
  publicPath: '/',
});

const hotMiddleware = webpackHotMiddleware(webpackCompiler);

router.use(devMiddleware);
router.use(hotMiddleware);

module.exports = router;
