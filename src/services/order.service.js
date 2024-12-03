const { Order } = require('../models/order.model')

const OrderService = {
  create: async (data) => {
    return await Order.create(data);
  },

  findAll: async () => {
    return await Order.findAll();
  },

  findById: async (id) => {
    return await Order.findByPk(id);
  },

  update: async (dataToUpdate, id) => {
    await Order.update({ ...dataToUpdate }, { where: { id: id } })
  },

  destroy: async (id) => {
    await Order.destroy({ where: { id: id } })
  }
}

module.exports = OrderService;
