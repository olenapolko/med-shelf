import { Shop } from '../models/index.js';

const getShops = async (req, res, next) => {
  try {
    const shops = await Shop.find();
    res.json(shops);
  } catch (error) {
    next(error);
  }
};

export { getShops };
