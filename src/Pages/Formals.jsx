import React, { useEffect, useState } from "react";
import Card from "../component/Card";
import "../styles/Topselling.css";
import Footer from "../component/Footer";

function Formals() {
  const [card, setCard] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("Fetching data...");
    fetch("http://localhost:3000/products/create?tag=fm")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log("Fetched Data:", data);
        
        if (Array.isArray(data)) {
          setCard(data);
        } else {
          console.error("Invalid data format received from server", data);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <>
    <div className="images2">
      {card && card.length > 0 ? (
        card.map((product) => (
          <Card 
            id={product._id} 
            image={product.image}
            title={product.title}
            rating={product.rating}
            price={product.price}
            key={product._id} 
          />
        ))
      ) : (
        <p>No products available.</p>
      )}

    </div>
    <Footer/>

    </>
  );
}

export default Formals;
