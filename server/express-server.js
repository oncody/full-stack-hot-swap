const express = require('express');
const app = express();
const contextRequire = require.context('./routes/', true, /\.js$/);
contextRequire.keys().forEach(file => {
  const fileRouter = contextRequire(file);
  app.use('/', fileRouter.default || fileRouter);
});

module.exports = app;
