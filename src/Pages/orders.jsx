import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/Order.css";

function Order() {
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const response = await fetch('http://localhost:3000/createOrder/fetchOrder', {
        headers: {
          "Authorization": `Bearer ${localStorage.getItem("authToken")}`,
          "Content-Type": "application/json"
        }
      });
      const data = await response.json();
      console.log("Fetched orders data:", data);
      setOrders(data);
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };

  const cancelOrder = async (orderId) => {
    const confirmCancel = window.confirm("Confirm to cancel this order?");
    if (!confirmCancel) return;
  
    try {
      const response = await fetch(`http://localhost:3000/createOrder/cancelOrder?orderId=${orderId}`, {
        method: 'PATCH',
        headers: {
          "Authorization": `Bearer ${localStorage.getItem("authToken")}`,
          "Content-Type": "application/json"
        }
      });
  
      if (response.ok) {
        alert("The order will be cancelled.");
        console.log("Order cancelled successfully");
  
        setOrders(prevOrders =>
          prevOrders.map(order =>
            order._id === orderId ? { ...order, status: "Canceled" } : order
          )
        );
      } else {
        alert("Failed to cancel order.");
        console.error("Failed to cancel order:", response.statusText);
      }
    } catch (error) {
      alert("Error cancelling order.");
      console.error("Error cancelling order:", error);
    }
  };
  

  return (
    <div className='pura'>
      {/* <p className='rr'>Home > My Orders</p> */}
      <h1 className='rrr'>MY ORDERS</h1>

      {orders.length > 0 ? (
        <div className="order-list">
          {orders.map(({ _id, placedAt, total, status, items }) => (
            <div key={_id} className="order-item">
              <h3 className='oid'>Order ID: {_id}</h3>
              <p className='order-date'>Date: {new Date(placedAt).toLocaleDateString()}</p>
              <p className='order-total'>Total: ${total.toFixed(2)}</p>
              <p className='status'>Status: {status}</p>

              <div className="order-items">
                <h4 className='items-header'>Items:</h4>
                {items.map(({ productId, title, quantity, price, productDetails }) => (
                  <div key={productId} className="order-product">
                    {productDetails?.image && <img className='rm' src={productDetails.image} alt={title} />}

                    <h5 className='til'>Product: {title}</h5>
                    <h5 className='til1'>Quantity: {quantity}</h5>
                    <h5 className='til2'>Price: ${price.toFixed(2)}</h5>
                    {status !== "Canceled" ? (
                    <button onClick={() => cancelOrder(_id)} className="cancel" disabled={status === "Canceled"} > Cancel Order</button>
                     ) : (
                    <p className="canceled" disabled></p>
                     )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="no-orders-section">
          {/* <img className='no-orders' src="/images/notf.png" alt="No Orders" /> */}
          <button onClick={() => navigate('/')} className="createbutton">
            Create Orders
          </button>
        </div>
      )}
    </div>
  );
}

export default Order;
