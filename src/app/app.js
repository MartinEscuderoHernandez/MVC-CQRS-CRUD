const express = require('express');
const errorMiddleware = require('../middlewares/error.middleware');
const orderRouter = require('../routes/order.router');

const app = express();

app.use(express.json());

app.use('/api/order', orderRouter);

app.use(errorMiddleware);

module.exports = app;

