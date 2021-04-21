import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Nav.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        }
        else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);
    const navBarAuth = () => {
        if (localStorage.getItem("userId")) {
            return (
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'>
                    <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                        Home
                    </Link>
                </li>
                
                <li className="nav-item">
                    <Link to={"logout"} className='nav-links' onClick={closeMobileMenu}>Logout</Link>
                </li>
                
                {/* <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Dropdown link
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <Link to={"makeappointment"} className='nav-links' onClick={closeMobileMenu}>MakeAppointment</Link>
                        <Link to={"appointments"} className='nav-links' onClick={closeMobileMenu}>Appointment</Link>
                    </div>
                </li> */}

                <li className='nav-item'>
                    <Link to={"makeappointment"} className='nav-links' onClick={closeMobileMenu}>MakeAppointment</Link>
                </li>
                <li className="nav-item active">
                    <Link to={"appointments"} className='nav-links' onClick={closeMobileMenu}>Appointment</Link>
                </li>
                <li className='nav-item'>
                    <Link to='/geolocator' className='nav-links' onClick={closeMobileMenu}>
                        Locations
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/about-us' className='nav-links' onClick={closeMobileMenu}>
                        About Us
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/contact-us' className='nav-links' onClick={closeMobileMenu}>
                        Contact Us
                    </Link>
                </li>

            </ul>
            )
        } else {
            return (
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/login' className='nav-links' onClick={closeMobileMenu}>
                                Login
                            </Link>
                        </li>
        
                        <li className='nav-item'>
                            <Link to='/register' className='nav-links' onClick={closeMobileMenu}>
                                Sign Up
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/geolocator' className='nav-links' onClick={closeMobileMenu}>
                                Locations
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/about-us' className='nav-links' onClick={closeMobileMenu}>
                                About Us
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/contact-us' className='nav-links' onClick={closeMobileMenu}>
                                Contact Us
                            </Link>
                        </li>
                        
                    </ul>
            )
        }
    }

    return (

        <nav className='navbar'>
            <div className='navbar-container'>
                <Link to='/' className='navbar-logo' onClick=
                    {closeMobileMenu}>
                    IGVC<i class="fas fa-paw"></i>
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                {navBarAuth()}
                {/* <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/login' className='nav-links' onClick={closeMobileMenu}>
                            Login
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/register' className='nav-links-mobile' onClick={closeMobileMenu}>
                            Sign Up
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/geolocator' className='nav-links' onClick={closeMobileMenu}>
                            Locations
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/about-us' className='nav-links' onClick={closeMobileMenu}>
                            About Us
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/contact-us' className='nav-links' onClick={closeMobileMenu}>
                            Contact Us
                        </Link>
                    </li>
                    
                    {button && <Button buttonStyle='btn--outline'>Check In Your Pet</Button>}
                </ul> */}
                {button && <Button buttonStyle='btn--outline'>Check In Your Pet</Button>}
            </div>

        </nav>

    );
};
export default Navbar





//wing code for logged in menu


