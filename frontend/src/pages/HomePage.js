import { Link } from 'react-router-dom';
//import prod from '../data'; // Import the product data
import { useEffect, useReducer, useState } from 'react';
import axios from 'axios';
import loggerMiddleware from '../loggerMiddleware';
//import logger from 'use-reducer-logger';
// Reducer function for managing product fetching state
const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return { ...state, products: action.payload, loading: false };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

function HomePage() {
  //const [products, setProducts] = useState([]);
  // Use reducer to manage the state of products, loading, and error
  const loggedUseReducer = loggerMiddleware(useReducer);
  const [{ loading, error, products }, dispatch] = loggedUseReducer(reducer, {
    products: [],
    loading: true,
    error: '',
  });
  // Fetch product data using useEffect
  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_REQUEST' });
      try {
        // Fetch product data from the API
        const result = await axios.get('/api/products');
        // Update the state with fetched data
        dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
      } catch (err) {
        // Handle errors while fetching product data
        dispatch({ type: 'FETCH_FAIL', payload: err.message });
      }
      //setProducts(result.data);
    };
    fetchData();
  }, []);
  return (
    <div>
      <h1>list of products</h1>
      {/* Container for product list */}
      <div className="products">
        {/* Show loading message if data is being fetched */}
        {loading ? (
          <div>Loading...</div>
        ) : error ? (
          // Show error message if there was an error fetching data
          <div>{error}</div>
        ) : (
          // Map through the products and create a product card for each
          products.map((product) => (
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
          ))
        )}
      </div>
    </div>
  );
}

export default HomePage;
