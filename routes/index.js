const express = require('express');
const moneyRouter = require('./money.router');

function routerApi(app){
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/money', moneyRouter);
}

module.exports = routerApi;
