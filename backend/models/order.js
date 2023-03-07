import mongoose from "mongoose";
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