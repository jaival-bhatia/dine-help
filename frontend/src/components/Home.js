import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom';
const Home = () => {
  
  return (
    <>
       <div className="home-container">
       <header>
        <h1 className="heading">DineHelp</h1>
        <div className="sign-in-sign-up">
        <a className='Login' href=''>Log In</a>
        <a className='signup' href=''>Sign Up</a>
        </div>
      </header>
   <div className='Slogan-box'>
  <img className="background-image" src="/images/HomePage.png" alt="" />
  
    <h1 className='Slogancontent'>Welcome to DineHelp,<br /> Your one-stop destination for <br /> 
a culinary journey like no other.</h1>
 <div className='logo'><img src="/images/logo.png" alt="logo" /></div>

   </div>
   
    </div>
        <div className='Endlink'> 
        
        <Link className="exp-products"to="/Products"><h1> <i class="fa-solid fa-shop"></i> Explore The Market!</h1></Link></div>
       
    </>
  )
}

export default Home
