import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/Navbar.css";

function Banner() {
  return (
    <>
      <div className='sncont'>
        <h1 className='find'>FIND CLOTHES</h1>
        <h1 className='that'>THAT MATCHES </h1>
        <h1 className='your'>YOUR STYLES</h1>
        <p className='browse'>
          Browse through our diverse range of meticulously crafted garments, designed
        </p>
        <p className='bring'>
          to bring out your individuality and cater to your sense of style.
        </p>

        <Link to="/Brands">
          <button className='btn'>Shop Now</button>
        </Link>

        <div className='inter'>
          <h1 className='national'>200+</h1>
          <h3 className='bb'>International Brands</h3>
        </div>

        <div className='quality'>
          <h1 className='two'>2,000+</h1>
          <h3 className='high'>High-Quality Products </h3>
        </div>

        <div className='bbb'>
          <h2 className='three'>30,000+</h2>
          <h3 className='happy'>Happy Customers</h3>
        </div>

        <div className='mans'>
          <h1 className='man'>
            <img src='/images/wild.png' height='550px' alt="Wild" />
          </h1>
        </div>
      </div>

      <div className='brands'>
        <h1 className='brand'>
          <img src='/images/brands.png.jpeg' height='122px' alt="Brands" />
        </h1>
      </div>

      <div>
        <h1 className='heading'>NEW ARRIVALS</h1>
      </div>
    </>
  );
}

export default Banner;
