const getAllOrdersQuery = () => ({
    type: 'GET_ALL_ORDERS',
});

const getOrderByIdQuery = (id) => ({
    type: 'GET_ORDER_BY_ID',
    payload: {
        id: id,
    }
});

module.exports = { getAllOrdersQuery, getOrderByIdQuery };

