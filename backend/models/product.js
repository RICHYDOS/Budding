import mongoose from "mongoose";

export const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: 2,
        maxLength: 255
    },
    description: {
        short: {
            type: String
        },
        long: {
            type: String
        },
    },
    price: {
        type: Number,
        required: true,
        min: 1,
        max: 200000
    },
    product_image: {
        type: String,
        required: true
    },
    tag: {
        type: [String],
    }

});

export const Product = mongoose.model("Product", productSchema);

