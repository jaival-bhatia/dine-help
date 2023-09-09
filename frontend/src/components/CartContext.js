import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (productId) => {
    const updatedCart = cartItems.filter((product) => product.id !== productId);
    setCartItems(updatedCart);
  };

  const updateQuantity = (productId, newQuantity) => {
    const updatedCart = cartItems.map((product) => {
      if (product.id === productId) {
        return { ...product, quantity: newQuantity };
      }
      return product;
    });
    setCartItems(updatedCart);
  };

  const totalAmount = cartItems.reduce((total, product) => {
    return total + parseFloat(product.price) * parseFloat(product.quantity);
  }, 0);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity, totalAmount }}>
      {children}
    </CartContext.Provider>
  );
};