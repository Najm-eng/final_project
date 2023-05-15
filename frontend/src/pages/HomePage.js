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
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
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
  // Use reducer to manage the state of products, loading, and error.
  const [currentPage, setCurrentPage] = useState(1); // Current page number
  const [productsPerPage] = useState(15);
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
  const indexOfLastProduct = currentPage * productsPerPage;
  // Calculate the index of the first product to display on the current page
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  // Slice the products array to get the products for the current page
  const totalPages = Math.ceil(products.length / productsPerPage);

  // Function to handle navigation to the next page
  const nextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  // Function to handle navigation to the previous page
  const previousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  return (
    <div>
      <Helmet>
        <title>O&N Market</title>
      </Helmet>
      <Carousel autoPlay infiniteLoop>
        <div>
          <img src="/banner/b4.jpg" alt="" />
          <p className="legend">Casual Denim Jacket</p>
        </div>
        <div>
          <img src="/banner/b7.jpg" alt="" />
          <p className="legend">Gold Plated Necklace</p>
        </div>
        <div>
          <img src="/banner/b10.jpg" alt="" />
          <p className="legend">Cozy Wool Knit Sweater</p>
        </div>
        <div>
          <img src="/banner/b18.jpg" alt="" />
          <p className="legend">Casual Summer Maxi Dress</p>
        </div>
        <div>
          <img src="/banner/b17.jpg" alt="" />
          <p className="legend">Elegant Summer Dress</p>
        </div>
      </Carousel>
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
            {currentProducts.map((product, index) => (
              <Col
                key={product.slug}
                xs={6}
                sm={6}
                md={4}
                lg={3}
                xl={2}
                className="products"
              >
                <div
                  className={`product ${
                    index === currentProducts.length - 1 ? 'product-last' : ''
                  }`}
                >
                  <Product
                    product={product}
                    imageClassName={
                      index === currentProducts.length - 1
                        ? 'product-image-fixed-height'
                        : ''
                    }
                  ></Product>
                </div>
              </Col>
            ))}
          </Row>
        )}
        <div>
          <button
            onClick={previousPage}
            disabled={currentPage === 1}
            className="custom-button"
          >
            Previous
          </button>
          <button
            onClick={nextPage}
            disabled={currentPage === totalPages}
            className="custom-button"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
