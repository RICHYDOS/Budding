import mongoose from "mongoose";
import {User} from "../models/user.js";
import _ from "lodash";
import express from "express";
const router = express.Router();


router.post('/', async (req, res) => {

    let user = await User.findOne({ email: req.body.email });
    if (user) return res.status(400).send("User already exists");

    user = new User(_.pick(req.body, ['firstname', 'lastname', 'email', 'password']));
    await user.save();

    res.status(200).send(_.pick(user, ['_id', 'email']));

});

export default router;