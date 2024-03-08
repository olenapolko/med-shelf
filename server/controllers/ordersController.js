import createError from 'http-errors';
import { Order, joiOrderSchema } from '../models/index.js';

const createOrder = async (req, res, next) => {
  const { error } = joiOrderSchema.validate(req.body);
  if (error) {
    return next(createError(400, error.message));
  }

  try {
    const newOrder = await Order.create({ ...req.body, date: Date.now() });
    res.status(201).json(newOrder);
  } catch (error) {
    if (error.message.includes("validation failed")) {
      error.status = 400;
    }
    next(error);
  }
};

const getOrdersByEmail = async (req, res, next) => {
  const { email } = req.query;

  try {
    if (!email) {
      throw createError(400, "Email is required");
    }

    const orders = await Order.find({ "user.email": email });

    if (orders.length === 0) {
      return res
        .status(404)
        .json({ message: "No orders found with the provided email" });
    }

    res.json(orders);
  } catch (error) {
    next(error);
  }
};

export { createOrder, getOrdersByEmail };
