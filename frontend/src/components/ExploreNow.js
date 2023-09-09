import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Product from './ProductAPI';
import './Explorepage.css';
import { useCart } from './CartContext';

const ExploreNow = () => {
  const { productId } = useParams();
  const { cart, addToCart } = useCart();
  const [productdata, setProductData] = useState(null);

  useEffect(() => {
    const selectedProduct = Product.find((item) => item.id === parseInt(productId));
    setProductData(selectedProduct);
    if (selectedProduct) {
      setProductData(selectedProduct);
    } else {
      console.error(`Product with ID ${productId} not found.`);
    }
  }, [productId]);

  const handleAddToCart = () => {
    addToCart(productdata);
    alert(`Added "${productdata.name}" to the cart.`);
  };

  return (
    <>
      {productdata ? (
        <div className="card2">
          <div className="card-header2">
            {productdata.name}
            <Link to="/Cart" className="view-cart-button">
              <i className="fa-solid fa-cart-shopping"></i>
            </Link>
          </div>
          <div className="card-body2">
            <img src={productdata.image} alt={productdata.name} className="product-image" />
            <div className="product-name">{productdata.name}</div>
            <div className="product-category">{productdata.category}</div>
            <div className="product-price">{productdata.price}</div>
            <div className="product-description">{productdata.description}</div>
            <div className="product-shelf-life">Shelf Life: {productdata.shelfLife}</div>
            <div className="product-details">
              <strong>Product Details:</strong> {productdata.details}
            </div>
            <button className="add-to-cart-button" onClick={handleAddToCart}>
              Add to Cart
            </button>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default ExploreNow;