import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { LinkContainer } from 'react-router-bootstrap';

function App() {
  // Main App component
  return (
    <BrowserRouter>
      <div className="d-flex flex-column site-container">
        <header>
          <Navbar bg="dark" variant="dark">
            <Container>
              <LinkContainer to="/">
                <Navbar.Brand>amazona</Navbar.Brand>
              </LinkContainer>
            </Container>
          </Navbar>
        </header>
        {/* Main content section */}
        <main>
          {/* Define routes for the application */}
          <Container>
            <Routes>
              {/* Route for individual product pages */}
              <Route path="/product/:slug" element={<ProductPage />} />
              {/* Route for the homepage */}
              <Route path="/" element={<HomePage />} />
            </Routes>
          </Container>
        </main>
        {/* footer right here */}
        <footer>
          <div className="text-center">All rights reserved</div>
        </footer>
      </div>
    </BrowserRouter>
  );
}
// Export the App component
export default App;
