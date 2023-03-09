import mongoose from "mongoose";
import express from "express";
import { Cart, validate } from "../models/cart.js";
import { User } from "../models/user.js";
import {Product} from "../models/product.js"
import {auth} from "../middleware/auth.js";

const router = express.Router();

router.get('/:id', async(req, res) => {
    const cart = await Cart.findById(req.params.id).populate({path: 'products',
    populate: {
        path: 'product',
        model: 'Product',
    }});

    if (!cart) {
        return res.status(400).send("Invalid Cart ID");
    };
    res.status(200).send(cart);
});

router.post('/', async (req, res) => {
    const result = validate(req.body);
    if (result.error) return res.status(400).send(result.error.details[0].message);

    let user = await User.findById(req.body.userId);
    if(!user) return res.status(400).send("User Does Not Exist");
    
    let cart = new Cart({
        user: req.body.userId
    });
    cart = await cart.save();
    res.status(200).send(cart);
});

router.put('/clear_cart/:id', async(req, res) => {
    const cart = await Cart.findById(req.params.id);
    if (!cart) return res.status(400).send("Invalid Cart ID");
    cart.products = [];
    await cart.save();
    res.status(200).send("Cart Cleared");
});

router.put('/create_item/:id', async (req, res) => {
    const result = validate(req.body);
    if (result.error) return res.status(400).send(result.error.details[0].message);

    const cart = await Cart.findById(req.params.id);
    if (!cart) return res.status(400).send("Invalid Cart");

    const product = await Product.findById(req.body.productId);
    if (!product) return res.status(400).send("Invalid Product");

    cart.products.push({
        product: req.body.productId,
        size: req.body.size
    });

    const updated = await cart.save();
    res.send(updated);
});

router.put('/remove_item/:id', async (req, res) => {
    const result = validate(req.body);
    if (result.error) return res.status(400).send(result.error.details[0].message);

    const cart = await Cart.findById(req.params.id);
    if (!cart) return res.status(400).send("Invalid Cart");

    const product = await Product.findById(req.body.productId);
    if (!product) return res.status(400).send("Invalid Product");

    const item = cart.product.find(item => item.id == req.body.productId);

    if (item) {

        const item = cart.products.find(item => item.id == req.body.productId);
        const itemIndex = cart.products.indexOf(item);
        cart.products.splice(itemIndex, 1);
    }
    else{
        res.status(400).send("That Product is not in this Cart");
    }

    const updated = await cart.save();
    res.send(updated);
});

router.put('/add_item/:id', async (req, res) => {
    const cart = await Cart.findById(req.params.id);
    if (!cart) return res.status(400).send("Invalid Cart");

    const product = await Product.findById(req.body.productId);
    if (!product) return res.status(400).send("Invalid Product");

    const item = cart.products.find(item => item.id == req.body.productId);

    if (item) {
        const itemIndex = cart.product.indexOf(item);
        cart.products[itemIndex] = {
            id: item.id,
            count: item.count+1,
            size: item.size
        };
    }
    else{
        return res.status(400).send("That Product is not in this Cart");
    }

    const updated = await cart.save();

    res.status(200).send(updated);
});

router.put('/subtract_item/:id', async (req, res) => {
    const cart = await Cart.findById(req.params.id);
    if (!cart) return res.status(400).send("Invalid Cart");

    const product = await Product.findById(req.body.productId);
    if (!product) return res.status(400).send("Invalid Product");

    const item = cart.products.find(item => item.id == req.body.productId);
    if (item) {
        const itemIndex = cart.product.indexOf(item);
        if (!(item.count == 0)) {
            cart.products[itemIndex] = {
                id: item.id,
                count: item.count-1,
                size: item.size
            };
        }
        else{
            return res.send("Count cannot be less than 0")
        }
    }
    const updated = await cart.save();
    res.send(updated);

});

export default router;