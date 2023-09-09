import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../components/Home';
import Products from '../components/Products';
import ExploreNow from '../components/ExploreNow';
import Cart from '../components/Cart';
import { CartProvider } from '../components/CartContext';
import Login from '../pages/Login/Login';
import Signup from '../pages/Signup/Signup';

export default function AppRoutes() {
  return (
    <CartProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/ExploreNow/:productId" element={<ExploreNow />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path='/signup' element={<Signup />} />
        </Routes>
    </CartProvider>
  );
}
