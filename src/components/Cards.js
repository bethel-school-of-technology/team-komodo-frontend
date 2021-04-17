import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
    return(
        <div className='cards'>
            <h1>We will put some textual content here</h1>
            <div className='cards__container'>
            <div className='cards__wrapper'>
             <ul className='cards__items'>
                 {/* <CardItem  
                 SO this will be where we attach the images with textual content - hans lets 
                 draw super poorly draw news articles and put funny text!!!!!!!!
                 /> */}
             </ul>
            </div>
            </div>
        </div>

    );
}

export default Cards