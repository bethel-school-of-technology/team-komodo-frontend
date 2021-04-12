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
    <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
        <div className="container-fluid">
            <Link to = "/" className="navbar-brand">Home</Link>
   
         {navBarAuth()}
        </div>
    </nav>
    );
};

export default Nav; 