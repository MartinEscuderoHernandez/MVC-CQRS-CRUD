const OrderService = require('../services/order.service')

const orderCommandHandler = {
    async handle(command) {
        switch (command.type) {
            case 'CREATE_ORDER':
                try {
                    return await OrderService.create(command.payload);
                } catch (error) {
                    throw error;
                }
            case 'UPDATE_ORDER':
                try {
                    const { id, data } = command.payload;
                    await OrderService.update(data, id);
                    break;
                } catch (error) {
                    throw error;
                }
            case 'DELETE_ORDER':
                try {
                    await OrderService.destroy(command.payload.id);
                    break;
                } catch (error) {
                    throw error;
                }

            default:
                throw new Error('Command not found')
        }
    }
}

module.exports = orderCommandHandler;