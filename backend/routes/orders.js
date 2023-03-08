import mongoose from "mongoose";
import express from "express";
import { Order } from "../models/order.js";
import { Product } from "../models/product.js";
import {auth} from "../middleware/auth.js";

const router = express.Router();

router.get('/:id', auth, async(req, res) => {
    const order = await Order.findById(req.params.id);
    res.status(200).send(order);
});

router.post('/', auth, async (req, res) => {
    let order = new Order({
        user: req.body.userId,
        date_delivered: req.body.date_delivered,
        order_status: req.body.status,
        product: [{
            id: req.body.product.productId,
            count: req.body.product.count,
            size: req.body.product.size,
            price: req.body.product.price
        }]
    });
    order = await order.save();
    res.status(200).send(order);
});

export default router;