import mongoose from "mongoose";
import {User, validate} from "../models/user.js";
import _ from "lodash";
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

    res.header('x-auth-token', token).status(200).send(_.pick(user, ['_id', 'firstname', 'email']));

});

export default router;