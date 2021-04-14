import React, {useState} from 'react';
import {Link} from "react-router-dom";

const Nav = () => {
    return (
        
    <nav className="navbar">
        <div className="navbar-container">
            <Link to = "/" className="navbar-logo">
                Home<i class="fas fa-paw"></i>
            </Link>
   
         <div>
             <ul className="navbar-nav me-auto mb-2 mb-md-0">
               <li className="nav-item active">
               <Link to = "/login" className="navbar-brand">Login</Link>
             </li>
             <li className="nav-item active">
             <Link to = "/register" className="navbar-brand">Register</Link>
            </li>
             </ul>
        </div>
        </div>
    </nav>
    
    );
};

export default Nav; 