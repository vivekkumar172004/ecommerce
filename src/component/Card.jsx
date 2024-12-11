import React from 'react';
import '../styles/card.css';
import { Link } from 'react-router-dom';
function Card( { id,image,title, rating, price, alt} ) {
    console.log("image")
    return (
        <>
       { console.log(id)}
              <Link to={`/ProductDetails?id=${id}`}>
            <div className="shirt1">
                <img className="ra" src={image} alt={alt}></img>
                <div>
                    <h4 className="aman">{title}</h4>
                    <img className="stars" src={rating} alt={alt}></img>
                    <h5 className="harsh">${price}</h5>
                  </div>
            </div>
            </Link>
            
        </>
        
    )
};

export default Card;










