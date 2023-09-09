import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Products from './components/Products';
import ExploreNow from './components/ExploreNow';
import Cart from './components/Cart';
import { CartProvider } from './components/CartContext';

const App = () => {
  return (
<CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/ExploreNow/:productId" element={<ExploreNow />} />
          <Route path="/Cart" element={<Cart />} />
        </Routes>
      </Router>
    </CartProvider>

  );
};

export default App;