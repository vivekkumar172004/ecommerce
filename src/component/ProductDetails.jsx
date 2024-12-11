
import React, { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import "../styles/Onsale.css";
import Like from "../component/Like";
import Footer from "../component/Footer";

function ProductDetails() {
  const [searchParams] = useSearchParams();
  const product_Id = searchParams.get('id');
  const [productDetails, setProductDetails] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [isAddingToCart, setIsAddingToCart] = useState(false); // New loading state
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:3000/products/getSingleProduct?id=${product_Id}`)
      .then((response) => {
        if (!response.ok) throw new Error("Network response was not ok");
        return response.json();
      })
      .then((data) => setProductDetails(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, [product_Id]);

  if (!productDetails) {
    return <div>Loading...</div>;
  }

  const handleIncrement = () => setQuantity(quantity + 1);
  const handleDecrement = () => setQuantity(quantity > 1 ? quantity - 1 : quantity);

  const handleAddToCart = async () => {
    const token = localStorage.getItem("authToken");
    if (!token) {
      alert("Please log in to add products to the cart.");
      navigate('/Loginpage');
      return;
    }

    setIsAddingToCart(true); // Set loading state to true when starting the request

    try {
      const cartItem = {
        product_id: product_Id,
        color: productDetails.color || "default_color",
        size: productDetails.size || "default_size",
        quantity
      };

      const response = await fetch("http://localhost:3000/addToCart/addToCart", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify(cartItem),
      });

      if (response.ok) {
        alert("Product added to cart successfully!");
        navigate('/cart'); // Redirect to cart page
      } else {
        alert("Failed to add product to cart.");
      }
    } catch (error) {
      console.error("Error adding product to cart:", error);
    } finally {
      setIsAddingToCart(false); // Reset loading state after the request completes
    }
  };

  return (
    <>
      <div className="div0">
        <br />
        <div className="hhhl">
          <p>{productDetails.mainheading}</p>
        </div>
        <img className="gtshirt0" src={productDetails.image1} alt="" />
        <img className="gtshirt20" src={productDetails.image2} alt="" />
      </div>

      <div>
        <img className="gtshirt30" src={productDetails.image3} alt="" />
      </div>

      <div className="full0">
        <img className="paw0" src={productDetails.image4} alt="" />
      </div>

      <div>
        <h1 className="heading0">{productDetails.heading1}</h1>
      </div>

      <div>
        <img className="rating0" src={productDetails.image5} alt="" />
      </div>

      <h1 className="price0">${productDetails.price1}</h1>
      <p className="price20">${productDetails.price2}</p>
      <p className="para0">{productDetails.para1}</p>
      <p className="color0">{productDetails.heading2}</p>
      <img className="color20" src={productDetails.image6} alt="" />

      <div className="outerdiv0">
        <button className="minus0" onClick={handleDecrement}>-</button>
        <span>{quantity}</span>
        <button className="plus0" onClick={handleIncrement}>+</button>
      </div>

      <button className="button30" onClick={handleAddToCart} disabled={isAddingToCart}>
        {isAddingToCart ? 'Adding to Cart...' : 'Add to Cart'}
      </button>

      <p className="details0">{productDetails.para2}</p>
      <div className="hr0" />
      <p className="txt0">{productDetails.para3}</p>
      <p className="txt0">{productDetails.para4}</p>

      <div className="hr0" />
      <h3 className="might0">
        <center>{productDetails.heading3}</center>
      </h3>

      <Like />
      <Footer />
    </>
  );
}

export default ProductDetails;




