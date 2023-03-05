import mongoose from "mongoose";
import productSchema from "./product";
export const cartSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    // product: [
    //     {
    //         type: mongoose.Schema.Types.ObjectId,
    //         ref: "Product",
    //         count: Number
    //     },
    // ],
    date_created: {
        type: Date,
        required: true,
        default: Date.now
    },
    product: {
        type: [new mongoose.Schema({
            id: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Product"
            },
            count: {
                type: Number,
                default: 1
            },
            size: {
                type: String,
                enum: ["2ND GEN", "3RD GEN", "PRO"],
                default: "PRO"
            }
        })]
    }
});

export const Cart = mongoose.model("Cart", cartSchema);