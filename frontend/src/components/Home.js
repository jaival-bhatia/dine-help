import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom';



const Home = () => {

    const [userLocation, setUserLocation] = useState(null);
    const handleLocationEnableClick = () => {
        if ('geolocation' in navigator) {
          
          navigator.geolocation.gelo((position) => {
            const { latitude, longitude } = position.coords;
            setUserLocation({ latitude, longitude });
            console.log(latitude, longitude);
           
          }, (error) => {
            console.error('Error getting location:', error);
            alert('Location access denied. Please enable location services in your browser settings.');
          });
        } else {  
          alert('Geolocation is not supported by your browser.');
        }
      };

  return (
    <>
       <div className="home-container">
       <header>
        <h1 className="heading">DineHelp</h1>
        <div className="sign-in-sign-up">
        <Link className="login" to="/login">Sign In</Link> 
        <Link className="signup" to="/signup">Sign Up</Link> 
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
       

    </div>
    <div className='Locationbtn'><button className="enable-location-button" onClick={handleLocationEnableClick}>
          Enable Location
        </button></div>
     

    </>
  )
}

export default Home
