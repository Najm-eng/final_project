import { Link } from 'react-router-dom';
import prod from '../data'; // Import the product data
function HomePage() {
  return (
    <div>
      <h1>list of products</h1>
      {/* Container for product list */}
      <div className="products">
        {/* Map through the products and create a product card for each */}
        {prod.products.map((product) => (
          <div className="product" key={product.slug}>
            {/* Product image link */}
            <Link to={`/product/${product.slug}`}>
              <img src={product.image} alt={product.name} />
            </Link>
            {/* Product details container */}
            <div className="product-details">
              {/* Product name link */}
              <Link to={`/product/${product.slug}`}>
                <p>{product.name}</p>
              </Link>
              <p>
                <strong>${product.price}</strong>
              </p>
              <button>Add to cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
