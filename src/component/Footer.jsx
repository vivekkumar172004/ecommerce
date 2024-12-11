import React from 'react';
import  "../styles/Footer.css";

function Footer() {
  return (
    <>
 <div className="rating">

    
 </div>
    <div className='all1'>
    <div className="stay">
          <h1 id="stay1">STAY UPTO DATE ABOUT</h1>
          <input
            id="inp"
            type="text"
            placeholder="Enter your email address"
          ></input>
          {/* <img id="email" src="/images/mail.png.jpeg"/> */}
          <h1 id="stay2">OUR LATEST OFFERS</h1>
          <input
            id="inp1"
            type="text"
            placeholder="Subscribe to newsletter"
          ></input>
        </div>
       
        <div className="lastdiv">
        <div className='all2'>
          <h1 id="shop1">SHOP.CO</h1>
          <p id="lastp">
            we have clothes that suits your style and
            <br />
          </p>
          <p id="lastp1">
            which you're proud to wear.From
            <br />
          </p>
          <p id="lastp2">womer to men</p>

          <img id="ls" src="/images/twitter.png.jpeg"/>
          <h2 id="lh2">Company</h2>
          <p id="llp">About</p>
          <p id="llp1">Features</p>
          <p id="llp2">Works</p>
          <p id="llp3">Career</p>
          <h2 id="lh3">Help</h2>
          <p id="l1">Customer Support</p>
          <p id="l2">Delivery Details</p>
          <p id="l3">Terms & Conditions</p>
          <p id="l4">Privacy Policy</p>
          <h2 id="lh4">F A Q</h2>
          <p id="cs">Account</p>
          <p id="cs1">Manage Deliveries</p>
          <p id="cs2">Orders</p>
          <p id="cs3">Payments</p>
          <h2 id="lh5">Resources</h2>

          <p id="Fb">Free eBooks</p>
          <p id="Fb1">Development Tutorial</p>
          <p id="Fb2">How to-Blog</p>
          <p id="Fb3">Youtube Playlist</p>

          <div className="hr">
            <hr class="new6"></hr>
          </div>
          <p id="Fb4">Shop.co &copy; 2000-2024. All Rights Reserved.</p>
          <img id="ms" src="/images/payments.png.jpeg" /></div>
        </div>
        </div>
     
    </>
  )
}

export default Footer