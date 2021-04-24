import React from 'react';
import '../App.css'
import HeroSection from './HeroSection';
import Cards from './Cards';
import './Button.css'

function Home () {
    return (
        <div>
           <HeroSection />
           <Cards />
         </div>    
    );
};

export default Home;