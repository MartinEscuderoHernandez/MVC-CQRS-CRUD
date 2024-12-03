const express = require('express');
const { createOrderCommand, updateOrderCommand, deleteOrderCommand } = require('../commands/order.command');
const orderCommandHandler = require('../handlers/order.command.handler');
const orderQueryHandler = require('../handlers/order.query.handler');
const { getAllOrdersQuery, getOrderByIdQuery } = require('../queries/order.query')

const orderRouter = express.Router();

orderRouter.post('/create', async (req, res, next) => {
    try {
        const command = createOrderCommand(req.body);

        const newOrder = await orderCommandHandler.handle(command);

        res.status(201).json({ message: 'Order created with success', newOrder });
    } catch (error) {
        next(error);
    }
});

orderRouter.get('/', async (req, res, next) => {
    try {
        const command = getAllOrdersQuery();

        const orders = await orderQueryHandler.handle(command);

        res.status(200).json({ message: 'Orders obtained with success', orders });
    } catch (error) {
        next(error);
    }
});

orderRouter.get('/:id', async (req, res, next) => {
    try {
        const command = getOrderByIdQuery(req.params.id);

        const order = await orderQueryHandler.handle(command);

        res.status(200).json({ message: 'Order obtained with success', order });
    } catch (error) {
        next(error);
    }
});

orderRouter.patch('/:id', async (req, res, next) => {
    try {
        const command = updateOrderCommand(req.params.id, req.body);

        await orderCommandHandler.handle(command);

        res.sendStatus(204);
    } catch (error) {
        next(error);
    }
});

orderRouter.delete('/:id', async (req, res, next) => {
    try {
        const command = deleteOrderCommand(req.params.id);

        await orderCommandHandler.handle(command);

        res.sendStatus(204);
    } catch (error) {
        next(error);
    }
})

module.exports = orderRouter;