import mongoose from "mongoose";
import express from "express";
import { Cart } from "../models/cart.js";
import { Product } from "../models/product.js";

const router = express.Router();

router.get('/id:', async(req, res) => {
    const cart = await Cart.findById(req.params.id);
    res.status(200).send(cart);
});

router.post('/', async (req, res) => {
    const product = await Product.findById(req.body.productId);

    let cart = new Cart({
        user: req.body.userId
    });
    cart = await cart.save();
    res.send(cart);
});

router.put('/create_item/:id', auth, async (req, res) => {
    const cart = await Cart.findById(req.params.id);
    cart.product.push({
        id: req.body.productId,
        size: req.body.size
    });

});

router.put('/delete_item/:id', auth, async (req, res) => {
    const cart = await Cart.findById(req.params.id);
    cart.product.push({
        id: req.body.productId,
        size: req.body.size
    });

});


router.put('/add/:id', auth, async (req, res) => {
    const cart = await Cart.findById(req.params.id);
    if (cart.product.filter(function (e) {return e.id == req.body.productId})) {

        const item = cart.product.find(item => item.id == req.body.productId);
        const itemIndex = cart.product.indexOf(item);
        cart.product[itemIndex] = {
            id: item.id,
            count: count+1,
            size: item.size

        };
    }
    else{}

    const updated = await cart.save();

    res.send(updated);
});

router.put('/subtract/:id', auth, async (req, res) => {
    const cart = await Cart.findById(req.params.id);
    if (cart.product.filter(function (e) {return e.id == req.body.productId})) {

        const item = cart.product.find(item => item.id == req.body.productId);
        const itemIndex = cart.product.indexOf(item);
        cart.product[itemIndex] = {
            id: item.id,
            count: count-1,
            size: item.size
            
        };
    }
});




export default router;