import mongoose from "mongoose";
import express from "express";
import { Product } from "../models/product.js";

const router = express.Router();

router.get('/', async (req, res) => {
    const products = await Product.find().sort({name:1});
    res.status(200).send(products);
});

router.get('/id:', async(req, res) => {
    const product = await Product.findById(req.params.id);
    res.status(200).send(product);
});

// For Developer Purposes
router.post('/', async (req, res) => {
    let product = new Product({
        name: req.body.name,
        price: req.body.price,
        description: {short: req.body.short, long: req.body.long},
        product_image: req.body.image,
        tag: req.body.tag
    });
    product = await product.save();
    res.send(product);
});

export default router;