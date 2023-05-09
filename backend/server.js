import express from 'express';
import prod from './data.js';

const app = express();

app.get('/api/products', (req, res) => {
  res.send(prod.products);
});

app.get('/api/products/slug/:slug', (req, res) => {
  const product = prod.products.find((x) => x.slug === req.params.slug);
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: 'Product Not Found' });
  }
  //res.send(prod.products);
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`serve at http://localhost:${port}`);
});
