import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: 2,
        maxLength: 255
    },
    description: {
        type: String,
        minLength: 2,
        maxLength: 255
    }
});

const Product = mongoose.model("Product", productSchema);

exports.Product = Product;
exports.productSchema = productSchema;