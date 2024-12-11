import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/Cart.css";

function Cart1() {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [subtotal, setSubtotal] = useState(0);
  const discountRate = 0.2; 
  const deliveryFee = 15; 

  const navigate = useNavigate();
  
  useEffect(() => {
    const authToken = localStorage.getItem("authToken");
    if (!authToken) {
      alert('You Are Not Login Yet');
      navigate("/"); 
    }
  }, [navigate]);

  const fetchCartData = async () => {
    try {
      const response = await fetch('http://localhost:3000/addToCart/getcart', {
        headers: {
          "Authorization": `Bearer ${localStorage.getItem("authToken")}`,
          "Content-Type": "application/json"
        }
      });
      const data = await response.json();
      setCart(data.products || []); 
    } catch (error) {
      console.error('Error fetching cart data:', error);
    }
  };

  const deleteCartItem = async (_id) => {
    try {
      const response = await fetch('http://localhost:3000/addToCart/deleteCartItem', {
        method: 'DELETE',
        headers: { 
          'Authorization': `Bearer ${localStorage.getItem("authToken")}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ cartItemId: _id }),
      });
  
      if (response.ok) {
        setCart(cart.filter(item => item._id !== _id));
      } else {
        console.error('Failed to delete item');
      }
    } catch (error) {
      console.error('Error deleting cart item:', error);
    }
  };

  const incrementCart = async (cartItemId) => {
    try {
      const response = await fetch('http://localhost:3000/addToCart/increaseQuantity', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem("authToken")}`, 
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ cartItemId, quantity: 1 }),
      });
  
      if (response.ok) {
        fetchCartData();
      } else {
        console.error('Failed to increase quantity');
      }
    } catch (error) {
      console.error('Error increasing quantity:', error);
    }
  };
  
  const decrementCart = async (cartItemId, currentQuantity) => {
    if (currentQuantity <= 1) return; 
  
    try {
      const response = await fetch('http://localhost:3000/addToCart/decreaseQuantity', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem("authToken")}`, 
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ cartItemId, quantity: 1 }),
      });
  
      if (response.ok) {
        fetchCartData();
      } else {
        console.error('Failed to decrease quantity');
      }
    } catch (error) {
      console.error('Error decreasing quantity:', error);
    }
  };

  const handleCreateOrder = async () => {
    try {
      const items = cart.map((product) => ({
        product_id: product.product_id._id, 
        price: parseFloat(product.product_id.price),
        quantity: product.quantity,
        title: product.product_id.title, 
        size: product.size, 
        color: product.color, 
      }));

      const newSubtotal = cart.reduce((acc, product) => {
        return acc + parseFloat(product.product_id.price) * product.quantity;
      }, 0);
      
      const total = newSubtotal - (newSubtotal * discountRate) + deliveryFee;

      const orderData = {
        userId: "672c66ae068e9c86a5a87ed5", 
        items: items,
        subtotal: newSubtotal,
        discount: newSubtotal * discountRate,
        deliveryFee: deliveryFee,
        total: total,
        placedAt: new Date().toISOString(), 
      };

      const response = await fetch('http://localhost:3000/createOrder/createOrder', {
        method: 'POST',
        headers: {
          "Authorization": `Bearer ${localStorage.getItem("authToken")}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify(orderData)
      });

      if (response.ok) {
        alert('Order created successfully!');
        for (const product of cart) {
          await deleteCartItem(product._id);
        }
        navigate("/orders");
      } else {
        alert('Error in creating order');
      }
    } catch (error) {
      console.error('Error creating order:', error);
    }
  };

  useEffect(() => {
    fetchCartData();
  }, []);

  useEffect(() => {
    const newSubtotal = cart.reduce((acc, product) => {
      return acc + parseFloat(product.product_id.price) * product.quantity;
    }, 0);

    setSubtotal(newSubtotal);
    setTotal(newSubtotal - (newSubtotal * discountRate) + deliveryFee);
  }, [cart]);
  const handleProductClick = (productId) => {
    navigate(`/Productdetails?id=${productId}`);
};
  return (
    <>
      {/* <p className='rr'>Home Cart</p> */}
      <h1 className='rrr'></h1>
      
      {cart.length === 0 ? (
        <h2 className='empty'>Add Products Cart Is Empty.</h2> 
      ) : (
        <>
          {cart.map((product) => (
            <div className='alls' key={product._id}>
              <div className="product-item">
                <img className='rm' src={product.product_id.image} alt={product.product_id.title}onClick={() => handleProductClick(product.product_id._id)} />
                <p className='r2'>Size: {product.size}</p>
                <p className='r3'>Color: {product.color}</p>
                <h2 className='r1'>{product.product_id.title}</h2>
                <h3 className='r4'>${parseFloat(product.product_id.price).toFixed(2)}</h3>
                <div className='buttt1'>
                  <button onClick={() => decrementCart(product._id, product.quantity)}>-</button>
                  {product.quantity}
                  <button onClick={() => incrementCart(product._id)}>+</button>
                  <div className='buttt'>
                    <img onClick={() => deleteCartItem(product._id)} src="/images/dustbin.png" className='buttt' alt="Delete" />
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="order-summary">
            <h2 className='nmm'>Order Summary</h2>
            <div className="summary-row">
              <p className='nmm'>Subtotal</p>
              <p className='tot3'>${subtotal.toFixed(2)}</p>
            </div>
            <div className="summary-row">
              <p className='nmm'>Discount (20%)</p>
              <p className='tot1'>- ${(subtotal * discountRate).toFixed(2)}</p>
            </div>
            <div className="summary-row">
              <p className='nmm'>Delivery Fee</p>
              <p className='tot2'>${deliveryFee.toFixed(2)}</p>
            </div>
            <h2 className='nmm'>Total</h2>
            <h3 className='nnn'>${total.toFixed(2)}</h3>
            <div className="promo">
              </div>
            <button className="bttn" onClick={handleCreateOrder}>Go to Checkout</button>
          </div>
        </>
      )}
    </>
  );
}

export default Cart1;



