import express from 'express';
import Product from '../models/productModel.js';
import prod from '../data.js';

const seedRouter = express.Router();

seedRouter.get('/', async (req, res) => {
  await Product.deleteMany({});
  const createdProducts = await Product.insertMany(prod.products);
  res.send({ createdProducts });
});
export default seedRouter;
