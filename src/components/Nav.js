import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Nav.css';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false); 
        }
        else{
            setButton(true);
        }
    };

    useEffect(() => {
         showButton();
    }, []);

    window.addEventListener('resize', showButton);

   
    return (
      
        <nav className='navbar'>
            <div className='navbar-container'>
                <Link to = '/' className='navbar-logo' onClick= 
                {closeMobileMenu}>
                    IGVC<i class="fas fa-paw"></i>
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} /> 
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className='nav-item'>
               <Link to ='/' className='nav-links' onClick={closeMobileMenu}> 
                 Home
               </Link>
               </li>
               <li className='nav-item'>
               <Link to ='/login' className='nav-links' onClick={closeMobileMenu}> 
                 Login
               </Link>
               </li>
               <li className='nav-item'>
                <Link to ='/register' className='nav-links-mobile' onClick={closeMobileMenu}> 
                 Sign Up
               </Link>
               </li>
               <li className='nav-item'>
                <Link to ='/geolocator' className='nav-links' onClick={closeMobileMenu}> 
                 Locations
               </Link>
               </li>
               <li className='nav-item'>
              <Link to ='/about-us' className='nav-links' onClick={closeMobileMenu}> 
                 About Us
               </Link>
               </li>
               <li className='nav-item'> 
               <Link to ='/contact-us' className='nav-links' onClick={closeMobileMenu}> 
                 Contact Us
               </Link>
               </li>
              </ul>
              {button && <Button buttonStyle='btn--outline'>Check In Your Pet</Button>}
            </div>
             
        </nav>
     
        );
    };
     export default Navbar
    
    
    
    
    
    //wing code for logged in menu
    
        const navBarAuth =() =>{
        if(localStorage.getItem("userId")){
            return (
                <div>
                    <ul className="navbar-nav me-auto mb-2 mb-md-0">
                    <li className="nav-item active">
                    <Link to ={"appointments"} className="navbar-brand">Appointment</Link>
                    </li>
                    <li className="nav-item active">
                    <Link to ={"makeappointment"} className="navbar-brand">MakeAppointment</Link>
                    </li>
                    <li className="nav-item active">
                    <Link to = {"logout"} className="navbar-brand">Logout</Link>
                    </li>
                    
                    </ul>
                </div>
            )
        }else{ 
            return(
                <div>
                    <ul className="navbar-nav me-auto mb-2 mb-md-0">
                    <li className="nav-item active">
                    <Link to = {"login"} className="navbar-brand">Login</Link>
                    </li>
                    <li className="nav-item active">
                    <Link to ={"register"} className="navbar-brand">Register</Link>
                    </li>
                    
                    </ul>
                </div>
            )
            
        }
    }
