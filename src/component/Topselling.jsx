// import React, { useEffect, useState } from "react";
// import Card from "./Card";
// import "../styles/Topselling.css";

// function Newarrival() {
//   const [card, setCard] = useState([]);
//   const [loading, setLoading] = useState(true); 
//   useEffect(() => {
//     console.log("Fetching data...");
//     fetch("http://localhost:3000/products/create?tag=ts",
//       // {method:"GET",body:JSON.stringify({category:"ts"}),headers:{"content-type":"application/json"}}
  
//   )
//       .then((response) => response.json())
//       .then((data) => {
//         console.log("Fetched Data:", data);
//         if (data && data.data) {
//           console.log('set data',data)
//           setCard(data.data[0]);
//         } else {
//           console.error("Invalid data format received from server");
//         }
//       })
//       .catch((error) => {
//         console.error("Error fetching data:", error);
//       })
//       .finally(() => setLoading(false));  // Stop loading after fetch completes
//   }, []);

//   if (loading) {
//     return <p>Loading...</p>;
//   }

//   return (
//     <>
//    <div className="images2">
//       {card && card.length > 0 ? (
//         card.map((product,index) => {
//           return <Card  id={product.id} image={product.image} title={product.title}  rating={product.rating} price={product.price} alt={product.alt} key={index+product.title}></Card>

// })
//       ) : (
//         <p>No products available.</p>
//       )}
//       </div>
//     </>
//   );
// }

// export default Newarrival;







import React, { useEffect, useState } from "react";
import Card from "./Card";
import "../styles/Topselling.css";

function Newarrival() {
  const [card, setCard] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("Fetching data...");
    fetch("http://localhost:3000/products/create?tag=ts")
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
  );
}

export default Newarrival;
