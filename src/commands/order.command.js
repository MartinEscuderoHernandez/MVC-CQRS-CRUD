const createOrderCommand = (orderData) => ({
    type: 'CREATE_ORDER',
    payload: {
        orderNumber: orderData.orderNumber,
        totalAmount: orderData.totalAmount
    }
});

const updateOrderCommand = (id, orderData) => ({
    type: 'UPDATE_ORDER',
    payload: {
        id,
        data: {
            orderNumber: orderData.orderNumber,
            totalAmount: orderData.totalAmount
        }
    }
});

module.exports = { createOrderCommand, updateOrderCommand };