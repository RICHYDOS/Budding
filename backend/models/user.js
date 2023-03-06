import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import config from "config";

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
    const token = jwt.sign({_id: this._id, email: this.email}, config.get('jwtPrivateKey'));
    return token;
}

export const User = mongoose.model("User", userSchema);