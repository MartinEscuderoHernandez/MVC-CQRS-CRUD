const OrderService = require('../services/order.service');

const orderQueryHandler = {
    async handle(command) {
        switch (command.type) {
            case 'GET_ALL_ORDERS':
                try {
                    return await OrderService.findAll();
                } catch (error) {
                    throw error;
                }
            case 'GET_ORDER_BY_ID':
                try {
                    return await OrderService.findById(command.payload.id);
                } catch (error) {
                    throw error;
                }
            default:
                throw new Error('Command not found')
        }
    }
}

module.exports = orderQueryHandler;