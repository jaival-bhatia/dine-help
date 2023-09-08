import React from 'react'
import './Products.css'

const Products = () => {
  return (
    <>
   <header>
        <h1 className="heading">DineHelp Products</h1>
        <div className="search-bar">
          <input type="text" placeholder="Search Products" className="search-input" />
          <button className="search-button">
            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
              <path
                d="M20 19L15.4083 14.65M17.8889 9C17.8889 13.4183 14.1082 17 9.44444 17C4.78071 17 1 13.4183 1 9C1 4.58172 4.78071 1 9.44444 1C14.1082 1 17.8889 4.58172 17.8889 9Z"
                stroke="#414243"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
      </header>
      <nav className='navbar'>
      <div className='btn-group'>
                <button className='btn-group__item'>Vegetables</button>
                <button className='btn-group__item'>Fruits</button>
                <button className='btn-group__item'>Dairy</button> 
                <button className='btn-group__item'>Cereals</button>
                <button className='btn-group__item'>Meat</button>
      
      </div>
    </nav>
      <div className="card-container" >
                    <div className="card ">
                      <div className="card-body">
                        <span className="card-number card-circle subtle">1</span>
                        <span className="card-author subtle"> Vegetable</span>
                        <h2 className="card-title"> Potato </h2>
                        <span className="card-description subtle">
                          tender...
                        </span>
                       
                      </div>
                      
    
                      <span className="card-tag  subtle">Order Now</span>
                    </div>
                  </div>
    </>
  )
}

export default Products;