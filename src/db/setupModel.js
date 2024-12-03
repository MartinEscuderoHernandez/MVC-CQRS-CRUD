const { Order, orderSchema } = require('../models/order.model');

const setupModel = (sequelize) => {
  Order.init(orderSchema, Order.config(sequelize));
};

module.exports = setupModel;