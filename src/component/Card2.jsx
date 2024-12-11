import React from 'react';
import "../styles/card.css"
function Card2( { image, title, rating, price, alt} ) {
    console.log(image)
    return (
        <>
 
                    <div className="shirt9">
                    <img className="ra9"  src={image} alt={alt}></img>
                    <div className='shirt8'>
                    <h4 className="aman9">{title}</h4>
                    <img className="stars9" src={rating} alt={alt}></img>
                    <h5 className="harsh9">{price}</h5> 
                  </div>
                  </div>

        </>
        
        
    )
};

export default Card2;
