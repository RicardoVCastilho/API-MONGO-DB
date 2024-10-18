const express = require ('express');
const app = express();
const mongoose = require ('mongoose');
const port = 3000;
const { orders } = require('./src/models/orders');
const { connect } = require('./src/db/connection');
const { orderModel } = require('./src/mongo/orderSchema');

app.use(express.json());

app.get('/orders', async (req, res) => {
    const orders = await orderModel.find({}).exec();
    if (orders.length === 0) {
        return res.status(404).send('No orders found');
    }
    return res.send(orders);
});

app.get('/orders/:id', async (req, res) => {
    const order = await orderModel.findById(req.params.id).exec();
    if (!order) {
        return res.status(404).send('Order not found');
    }
    return res.send(order);
}); 

app.post('/orders', async (req, res) => {
    const order = req.body;
    const newOrder = new orderModel(order);
    await newOrder.save();
    return res.send(newOrder);
});

app.put('/orders/:id', async (req, res) => {
    const order = await orderModel.findByIdAndUpdate(req.params.id, req.body, {new: true}).exec();
    if(!order) {
        return res.status(404).send('Order not found');
    }
    return res.send(order);
});

app.delete('/orders/:id', async (req,res) => {
    const order = await orderModel.findByIdAndDelete(req.params.id).exec();
    if (!order) {
        return res.status(404).send('Order not found');
    }
    return res.send(order);
});

app.listen(port, () => {
    connect()
    console.log(`Server is running on port ${port}`);
});