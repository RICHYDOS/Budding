import mongoose from "mongoose";
import bcrypt from "bcrypt";
import {User} from "../models/user.js";
import {Cart} from "../models/cart.js";
import express from "express";

const router = express.Router();

router.post('/', async (req, res) => {

    let user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(400).send("Invalid Email or Password");

    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword) return res.status(400).send("Invalid Email or Password");

    let cart = await Cart.findOne({user: user._id});

    const token = user.generateAuthToken();

    const output = {
        "_id": user._id,
        "firstname": user.firstname,
        "email": user.email,
        "cart": cart._id
    }

    res.send(output);

});

export default router;