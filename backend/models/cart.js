import mongoose from "mongoose";
import productSchema from "./product";
const cartSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    product: new mongoose.Schema({
        products: {
            type: [productSchema]
        },
        product_count: {
            type: [Number]
        }
    }),
    date_created: {
        type: Date,
        required: true,
        default: Date.now
    }
});

const Cart = mongoose.model("Cart", cartSchema);

exports.Cart = Cart;