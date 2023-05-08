import express from 'express';
import prod from './data.js';

const app = express();

app.get('/api/products', (req, res) => {
  res.send(prod.products);
});


const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`serve at http://localhost:${port}`);
});
