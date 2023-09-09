import React from 'react'

const Productcard = ({productData}) => {
  return (
    <>
       <section className="main-card--cointainer">
            {productData.map((curElem) => {
              const { id, name, image, description } = curElem;
    
              return (
                <>
                  <div className="card-container" key={id}>
                    <div className="card ">
                      <div className="card-body">
                        <h2 className="card-title"> {name} </h2>
                        <span className="card-description">
                          {description}
                        </span>
                      </div>
                      <img src={image} alt="images" className="card-media" />
                      <div className="clearfix"></div> 
                      <span className="card-tag  subtle">Explore Now</span>
                    </div>
                  </div>
                  
                </>
              ); 
            })}
          </section>
    </>
  )
}

export default Productcard
