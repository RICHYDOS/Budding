import mongoose from "mongoose";
import express from "express";
import { Product, validate } from "../models/product.js";

const router = express.Router();

router.get('/', async (req, res) => {
    const products = await Product.find().sort({name:1});
    if(!products) return res.status(400).send("No Products available");
    res.status(200).send(products);
});

router.get('/id:', async(req, res) => {
    const product = await Product.findById(req.params.id);
    if(!product) return res.status(400).send("No Product with this Id");
    res.status(200).send(product);
});

// For Developer Purposes
router.post('/', async (req, res) => {
    const result = validate(req.body);
    if (result.error) return res.status(400).send(result.error.details[0].message);

    let product = new Product({
        name: req.body.name,
        price: req.body.price,
        description: {
            short: req.body.description.short, 
            long: req.body.description.long
        },
        product_image: req.body.image,
        tag: req.body.tag
    });
    product = await product.save();
    res.send(product);
});

export default router;