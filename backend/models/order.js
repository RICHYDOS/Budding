import mongoose from "mongoose";
import Joi from "joi";
export const orderSchema = new mongoose.Schema({
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
    date_delivered: {
        type: Date,
    },
    order_status: {
        type: String,
        enum: ["PENDING", "COMPLETED", "FAILED"],
        default: "PENDING"
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
            },
            price: {
                type: Number
            }
        })],
        required: true
    }
});

export const Order = mongoose.model("Order", orderSchema);

export function validate(order) {
    const schema = Joi.object({
        userId: Joi.string().min(3).max(500),
        date_delivered: Joi.date(),
        status: Joi.string(),
        product: Joi.array(),
        email: Joi.string().min(3).max(255).email().required(),
        password: Joi.string().min(8).max(255).required()
    })

    return schema.validate(order);
};