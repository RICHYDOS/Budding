import mongoose from "mongoose";
import Joi from "joi";
export const cartSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    products: {
        type: [new mongoose.Schema({
            product: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Product"
            },
            count: {
                type: Number,
                default: 1,
                min: 0
            },
            size: {
                type: String,
                enum: ["2ND GEN", "3RD GEN", "PRO"],
                default: "PRO"
            }
        })]
    }
}, {timestamps: true});

export const Cart = mongoose.model("Cart", cartSchema);

export function validate(cart) {
    const schema = Joi.object({
        userId: Joi.string().min(3).max(500),
        productId: Joi.string().min(3).max(500),
        size: Joi.string()
    })

    return schema.validate(cart);
};
