import React from 'react'
import { Link } from 'react-router-dom';

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
                      <Link to={`/ExploreNow/${id}`} className="card-tag subtle">
                  Explore Now
                </Link>
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
