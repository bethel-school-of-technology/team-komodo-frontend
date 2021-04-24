import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
    return(
        <div className='cards'>
            <h1>New Developments</h1>
            <div className='cards__container'>
            <div className='cards__wrapper'>
             <ul className='cards__items'>
                 <CardItem 
                 src='img-1.jpg'
                 text= 'New land conquered means more expansion for The Intergalatic Veterinary Clinic. We are now servicing 300 Solor systems, 780 plants, and 32 galaxies. Check to see if there is a location near you. '
                 lable='Locations'
                 path='/Geolocator'
                 />
                 <CardItem
                 src='img-2.jpg'
                 text= 'New Improvements. Now with Section 304:20A being passed there is no longer an age limit with the acceptance of pets. Register today and be secure in knowing your loved one is always covered.'
                 lable='Register'
                 path='/register'
                 />
                  <CardItem
                 src='img-3.jpg'
                 text= 'New to our services? Contact us to get in touch with one of our 10,000+ professionals.  '
                 lable='Contact Us'
                 path='/contact-us'
                 />
             </ul>
            </div>
            </div>
        </div>

    );
}

export default Cards