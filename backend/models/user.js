import mongoose from "mongoose";

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

export const User = mongoose.model("User", userSchema);