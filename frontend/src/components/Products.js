import React, { useState, useEffect } from 'react';
import './Products.css';
import Product from './ProductAPI'; 
import Productcard from './Productcard';
import ProductNavbar from './ProductNavbar';
import { Link } from 'react-router-dom';

const Products = () => {
  const [productData, setProductData] = useState(Product);
  const [productList, setProductList] = useState([]);
  const [searchInput, setSearchInput] = useState('');

  useEffect(() => {
    const uniqueCategories = [...new Set(productData.map((product) => product.category))];
    const updatedProductList = ['All', ...uniqueCategories];
    setProductList(updatedProductList);
  }, [productData]);

  const filterItem = (category) => {
    let updatedList = Product;
    if (category === 'All') {
      setProductData(Product);
      setSearchInput(''); 
    }
    else if (category !== 'All') {
      updatedList = Product.filter((product) => product.category === category);
    }

   
    if (searchInput) {
      updatedList = updatedList.filter((product) =>
        product.name.toLowerCase().includes(searchInput.toLowerCase())
      );
    }

    setProductData(updatedList);
  };

  const handleSearchButtonClick = () => {
    filterItem('All'); 
  };

  const handleSearchInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  return (
    <>
      <header>
        <h1 className="heading">DineHelp Products</h1>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search Products"
            className="search-input"
            value={searchInput}
            onChange={handleSearchInputChange}
          />
          <button className="search-button" onClick={handleSearchButtonClick}>
            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
              <path
                d="M20 19L15.4083 14.65M17.8889 9C17.8889 13.4183 14.1082 17 9.44444 17C4.78071 17 1 13.4183 1 9C1 4.58172 4.78071 1 9.44444 1C14.1082 1 17.8889 4.58172 17.8889 9Z"
                stroke="#414243"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
        <Link to="/">
              <button className='Home-icon'><i class="fa-solid fa-house"></i></button>
            </Link>
      </header>
      <>
        <ProductNavbar filterItem={filterItem} productList={productList} />
        <Productcard productData={productData} />
      </>
    </>
  );
};

export default Products;





