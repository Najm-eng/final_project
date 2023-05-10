import express from 'express';
import Product from '../models/productModel.js';
import prod from '../data.js';
import User from '../models/userModel.js';

const seedRouter = express.Router();

seedRouter.get('/', async (req, res) => {
  await Product.deleteMany({});
  const createdProducts = await Product.insertMany(prod.products);

  await User.deleteMany({});
  const createdUsers = await User.insertMany(prod.users);
  res.send({ createdProducts, createdUsers });
});
export default seedRouter;
