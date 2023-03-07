import mongoose from "mongoose";
import express from "express";
import { Order } from "../models/order.js";
import { Product } from "../models/product.js";

const router = express.Router();

router.get('/:id', async(req, res) => {
    const order = await Order.findById(req.params.id);
    res.status(200).send(order);
});

router.post('/', async (req, res) => {
    let order = new Order({
        user: req.body.userId,
        date_delivered: req.body.date_delivered,
        order_status: req.body.status,
        product: [{
            id: req.body.productId,
            count: req.body.count,
            size: req.body.size,
            price: req.body.price
        }]
    });
    order = await order.save();
    res.status(200).send(order);
});

export default router;