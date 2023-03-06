import mongoose from "mongoose";
import bcrypt from "bcrypt";
import {User} from "../models/user.js";
import express from "express";

const router = express.Router();

router.post('/', async (req, res) => {

    let user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(400).send("Invalid Email or Password");

    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword) return res.status(400).send("Invalid Email or Password");

    const token = user.generateAuthToken();
    res.send(token);

});

export default router;