import React, { useEffect, useState } from 'react';
import "../styles/Prof.css";
import { Link, useNavigate } from 'react-router-dom';

function Prof() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      navigate('/');
    }
  }, [navigate]);

  const handleLogin = async () => {
    if (!username || !password) {
      alert('Please fill in all fields.');
      return;
    }

    const emailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    if (!emailPattern.test(username)) {
      alert('Please enter a valid Gmail address (e.g., user@gmail.com).');
      return;
    }

    if (password.length < 8) {
      alert('Password must be at least 8 characters long.');
      return;
    }

    const apiUrl = 'http://localhost:3000/login/login'; 
    try {
      const res = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: username, password }),
      });

      if (!res.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await res.json();

      
      if (data.success) {
        alert(data.message); 
        localStorage.setItem('authToken', data.token); 
        setTimeout(() => {
          navigate('/'); 
        }, 1000);
      } else {
        alert(data.message); 
      }
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
      alert('Error during login. Please try again.');
    }
  };

  return (
    <>
      <button className='login1'>Login</button>
      <Link to="/Signup"><button className='signup1'>Sign up</button></Link>

      <div className='sg1'>
        <h1>Sign in Page</h1>
        <button className='sg2'>Continue With Google</button>
        <div className='sg3'></div>
        <h6 className='or'>OR</h6>
        <div className='sg4'></div>
      </div>

      <div className='user'>
        <h4 className='user1'>Username or Email Address</h4>
        <input 
          className='user2' 
          type='text' 
          placeholder='username or email address' 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
        />
        <h4 className='user11'>Password</h4>
        <input 
          className='user3' 
          type='password' 
          placeholder='password' 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
        />
      </div>
      
      <div className='btsn'>
        <button className='btsn1' onClick={handleLogin}>Sign In</button>
      </div>
      
      <div className='imgn'>
        <h1 className='imgs1'>Shop.co</h1>
        <img src="/images/log.png.jpeg" width="700px" height="730px" alt="" />
      </div>
    </>
  );
}

export default Prof;
