import React, { useEffect } from 'react';
import {Link} from "react-router-dom";
import Login from './Login';
import Logout from './Logout';
import Register from './Register';

const Nav = () => {
    useEffect(()=>{
        navBarAuth();
    },[])
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
    return (
        
    <nav className="navbar">
        <div className="navbar-container">
            <Link to = "/" className="navbar-logo">
                Home<i class="fas fa-paw"></i>
            </Link>
   

        </div>
         <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
           <Link to ='/' className='nav-links' onClick={closeMobileMenu}> 
             Home
           </Link>
           <Link to ='/login' className='nav-links' onClick={closeMobileMenu}> 
             Login
           </Link>
            <Link to ='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}> 
             Sign Up
           </Link>
            <Link to ='/locations' className='nav-links' onClick={closeMobileMenu}> 
             Locations
           </Link>
          <Link to ='/about-us' className='nav-links' onClick={closeMobileMenu}> 
             About Us
           </Link>
           <Link to ='/contact-us' className='nav-links' onClick={closeMobileMenu}> 
             Contact Us
           </Link>
           </li>
          </ul>
    </nav>
    
    );
};
 export default Navbar