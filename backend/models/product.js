import mongoose from "mongoose";
import Joi from "joi";

export const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: 2,
        maxLength: 255
    },
    description: {
        type: new mongoose.Schema({
            short: {
                type: String
            },
            long: {
                type: String
            },
        })
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

export function validate(product) {
    const schema = Joi.object({
        name: Joi.string().min(3).max(255).required(),
        price: Joi.number().greater(0).required(),
        image: Joi.string().min(3).max(3000).required(),
        tag: Joi.array().max(3),
        description: Joi.object({
            short: Joi.string().min(3).max(50),
            long: Joi.string().min(3).max(255),
        })
    })

    return schema.validate(product);
};

