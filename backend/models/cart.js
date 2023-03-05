import mongoose from "mongoose";
import productSchema from "./product";
const cartSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    product: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Product",
            count: Number
        }
    ],
    date_created: {
        type: Date,
        required: true,
        default: Date.now
    }
});

const Cart = mongoose.model("Cart", cartSchema);

exports.Cart = Cart;