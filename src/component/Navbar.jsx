import React, { useEffect, useState } from 'react';
import "../styles/Navbar.css";
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('authToken'); 
    setIsLoggedIn(false);
    navigate('/loginpage');
  };

  const handleOrderClick = () => {
    navigate('/orders');
  };

  return (
    <div className='nav'>
      <h1 className='head'>Shop.co</h1>
      <Link to="Shop" className="Shop">Shop</Link>
      <Link to="Onsale" className="Onsale">OnSale</Link> 
      <Link to="Newarrival" className="Newarrival">Newarrival</Link>
      <Link to="Brands" className="Brands">Brands</Link>
      <div className='search'>
        <input type="text" placeholder="  search for product" />
      </div>
      <Link to='Cart' className='Cart'>
        <img src='/images/cart.png.jpeg' width="20" height="20" alt="Cart" />
      </Link>
      
      {isLoggedIn && (
        <img 
          src='/images/o1.png'onClick={handleOrderClick}width="40" height="30" className="order"alt="Order"/>
      )}
      
      {isLoggedIn ? (
        <button onClick={handleLogout} className="prof1">Logout</button>
      ) : (
        <Link to='signup' className='Prof'>
          <img src='/images/profile.png.jpeg' width="20" height="20" alt="Profile" />
        </Link>
      )}
    </div>   
  );
}

export default Navbar;











