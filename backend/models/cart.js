import mongoose from "mongoose";
import Joi from "joi";
export const cartSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
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

export function validate(cart) {
    const schema = Joi.object({
        userId: Joi.string().min(3).max(500).required(),
        productId: Joi.string().min(3).max(500),
        size: Joi.string()
    })

    return schema.validate(cart);
};
