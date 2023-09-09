import React, { useEffect, useState } from 'react';
import { useCart } from './CartContext';
import './Cart.css';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, totalAmount } = useCart();
  const [quantityMap, setQuantityMap] = useState({});

  useEffect(() => {
    const initialQuantityMap = {};
    cartItems.forEach((item) => {
      initialQuantityMap[item.id] = item.quantity;
    });
    setQuantityMap(initialQuantityMap);
  }, [cartItems]);

  const handleRemove = (productId) => {
    removeFromCart(productId);
  };

  const handleQuantityChange = (event, productId) => {
    const newQuantity = parseInt(event.target.value);
    setQuantityMap((prevQuantityMap) => ({
      ...prevQuantityMap,
      [productId]: newQuantity,
    }));

    updateQuantity(productId, newQuantity);
  };

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <>
          <p>Your cart is empty.</p>
          <Link to="/Products">
            <button className="add-more-button">Add Items</button>
          </Link>
        </>
      ) : (
        <>
          {cartItems.map((item) => (
            <div className="cart-item" key={item.id}>
              <div className="cart-item-image">
                <img src={item.image} alt={item.name} />
              </div>
              <div className="cart-item-details">
                <h3>{item.name}</h3>
                <p>Price: ${parseFloat(item.price).toFixed(2)}</p> {/* Convert to number and format with 2 decimal places */}
                <p>Quantity: {quantityMap[item.id]}</p>
                <input
                  type="number"
                  min="1"
                  value={quantityMap[item.id]}
                  onChange={(e) => handleQuantityChange(e, item.id)}
                />
                <button onClick={() => handleRemove(item.id)} className="remove-button">
                  Remove
                </button>
              </div>
            </div>
          ))}
          <div className="cart-total">
            <p>Total: ${totalAmount.toFixed(2)}</p> {/* Format totalAmount with 2 decimal places */}
            <button className="buy-button">Buy Now</button>
            <Link to="/Products">
              <button className="add-more-button">Add More Items</button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;