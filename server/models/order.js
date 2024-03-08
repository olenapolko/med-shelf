import Joi from 'joi';
import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const joiOrderSchema = Joi.object({
  shop: Joi.string().required(),
  user: Joi
    .object({
      name: Joi.string().required(),
      email: Joi.string().email().required(),
      phone: Joi.string().required(),
      address: Joi.string().required(),
    })
    .required(),
  items: Joi.array().min(1).required(),
  totalPrice: Joi.number().min(1).required(),
  date: Joi.date(),
});

const orderSchema = new Schema({
  shop: String,
  user: { name: String, email: String, phone: String, address: String },
  items: Array,
  totalPrice: String,
  date: Date,
});

const Order = model("Order", orderSchema);

export { Order, joiOrderSchema };
