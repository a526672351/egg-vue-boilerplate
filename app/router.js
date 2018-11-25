'use strict';
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.index.index.index);
  router.get('/client', controller.index.index.client);
  router.get('/list', controller.index.index.list);
};