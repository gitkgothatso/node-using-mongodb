import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const ProductSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    describtion: {
        type: String,
        required: true
    },
    category: { type: String},
    price: {type: Number},
    created_at: {type: Date,default: Date.now}

});