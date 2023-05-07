import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';

function App() {
  // Main App component
  return (
    <BrowserRouter>
      <div>
        <header>
          <Link to="/">amazona</Link> {/* This is a link */}
        </header>
        {/* Main content section */}
        <main>
          {/* Define routes for the application */}
          <Routes>
            {/* Route for individual product pages */}
            <Route path="/product/:slug" element={<ProductPage />} />
            {/* Route for the homepage */}
            <Route path="/" element={<HomePage />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}
// Export the App component
export default App;
