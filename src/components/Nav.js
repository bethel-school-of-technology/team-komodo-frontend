import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar(){
 const [click, setClick] = useState(false);
  
 const handleClick = () => setClick(!click);
 const closeMobileMenu = () => setClick(false); 
  
return (
        
    <nav className="navbar">
        <div className="navbar-container">
            <Link to = "/" className="navbar-logo">
                IGVC<i class="fas fa-paw"></i>
            </Link>
            <div className='menu-icon' onCLick={handleClick}>
              <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
         {/* {navBarAuth()} */}
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