import mongoose from "mongoose";
import {User, validate} from "../models/user.js";
import _ from "lodash";
import {Cart} from "../models/cart.js";
import bcrypt from "bcrypt";
import express from "express";
const router = express.Router();

router.post('/', async (req, res) => {
    const result = validate(req.body);
    if (result.error) return res.status(400).send(result.error.details[0].message);

    let user = await User.findOne({ email: req.body.email });
    if (user) return res.status(400).send("User already exists");

    user = new User(_.pick(req.body, ['firstname', 'lastname', 'email', 'password']));
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
    await user.save();

    const token = user.generateAuthToken();

    let cart = new Cart({
        user: user._id
    });
    await cart.save();

    const output = {
        "user": {
            "_id": user._id,
            "firstname": user.firstname,
            "email": user.email,
            "cart": cart._id
        }
    }

    res.header('x-auth-token', token).status(200).send(output);

});

export default router;