//import { Link } from 'react-router-dom';
//import prod from '../data'; // Import the product data
import React, { useEffect, useReducer, useState } from 'react';
import axios from 'axios';
import loggerMiddleware from '../loggerMiddleware';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Product from '../components/Product';
import { Helmet } from 'react-helmet-async';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
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
      <Helmet>
        <title>O&N Market</title>
      </Helmet>
      <h1>list of products</h1>
      {/* Container for product list */}
      <div className="products">
        {/* Show loading message if data is being fetched from ladingbox.js*/}
        {loading ? (
          <LoadingBox />
        ) : error ? (
          // Show error message if there was an error fetching data from messagebox.js
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          // Map through the products and create a product card for each
          <Row>
            {products.map((product) => (
              <Col key={product.slug} sm={6} md={4} lg={3} className="mb-3">
                <Product product={product}></Product>
              </Col>
            ))}
          </Row>
        )}
      </div>
    </div>
  );
}

export default HomePage;
