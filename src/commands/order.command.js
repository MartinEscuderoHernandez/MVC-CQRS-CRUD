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

const deleteOrderCommand = (id) => ({
    type: 'DELETE_ORDER',
    payload: {
        id,
    }
});

module.exports = { createOrderCommand, updateOrderCommand, deleteOrderCommand };