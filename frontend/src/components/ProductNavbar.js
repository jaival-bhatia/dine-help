import React from 'react'

const ProductNavbar = ({filterItem, productList}) => {
  return (
    <>
          <nav className='navbar'>
      <div className='btn-group'>
        {productList.map((curElem)=> {
             
            return(
                <button className='btn-group__item' onClick={()=> filterItem(curElem)}>{curElem}</button>
            );
        })}
      
      </div>
    </nav> 
    </>
  )
}

export default ProductNavbar
