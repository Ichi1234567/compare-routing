const next = require('next');
const routes = require('./next-routing-table');
const app = next({ dir: './src', dev: isDev });
const handle = routes.getRequestHandler(app);

// With express
const express = require('express')
app.prepare().then(() => {
  express().use(handler).listen(3000)
})
