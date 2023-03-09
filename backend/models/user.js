import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import config from "config";
import Joi from "joi";

export const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
        minLength: 2,
        maxLength: 255
    },
    lastname: {
        type: String,
        required: true,
        minLength: 2,
        maxLength: 255
    },
    email: {
        type: String,
        required: true,
        unique: true,
        minLength: 5,
        maxLength: 255
    },
    password: {
        type: String,
        required: true,
        minLength: 8,
        maxLength: 255
    }
});

userSchema.methods.generateAuthToken = function() {
    const token = jwt.sign({_id: this._id, email: this.email, firstname: this.firstname}, config.get('jwtPrivateKey'));
    return token;
}

export const User = mongoose.model("User", userSchema);

export function validate(user) {
    const schema = Joi.object({
        firstname: Joi.string().min(3).max(255).required(),
        lastname: Joi.string().min(3).max(255).required(),
        email: Joi.string().min(3).max(255).email().required(),
        password: Joi.string().min(8).max(255).required()
    })

    return schema.validate(user);
};
