import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import './Button.css'



function HeroSection(){
    const login = 'login';
    // const adminlogin = 'adminlogin'; this code will be 
    //attached to the admin login button in then nav menu
    const geolocator = 'geolocator'
    return(
        <div className='hero-container'>
            <video src='/video-3.mp4' autoPlay loop muted />
            <h1>INTERGALACTIC VETERINARY CLINIC</h1>
            <p>Give your pet the care it needs with the love it deserves.</p>
            <div className='hero-btns'>
            <Button className='btns' buttonStyle='btn--outline'
            buttonSize='btn--large' link = {login}
            >
                CHECK IN YOUR PET 
            </Button>
            <Button className='btns' buttonStyle='btn--primary'
            buttonSize='btn--large' link = {geolocator}
            >
            FIND LOCATION NEAR YOU <i className='fas fa-rocket' />
            </Button>
            </div>
        </div>
    )
}

export default HeroSection