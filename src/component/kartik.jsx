// import React, { useEffect, useState } from "react";

// const Rahul = ({ productId }) => {
//   const [product, setProduct] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     // If no productId, don't make the fetch call
//     if (!productId) {
//       setLoading(false);
//       setError("No product ID provided");
//       return;
//     }

//     const fetchProductDetails = async () => {
//       setLoading(true);  // Start loading
//       setError(null);     // Reset previous errors

//       try {
//         console.log("Fetching product details...");
//         // Make the POST request to fetch product details by ID
//         const response = await fetch("http://localhost:1800/products/getproducts", {
//           method: "GET",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({ id: productId }), // Send productId in the body
//         });

//         // If response is not ok, throw an error
//         if (!response.ok) {
//           throw new Error(`Failed to fetch product data. Status: ${response.status}`);
//         }

//         const data = await response.json();
//         console.log("Fetched data:", data);

//         // If products are found
//         if (data.data && data.data.length > 0) {
//           setProduct(data.data[0]); // Assuming data is an array with one product object
//         } else {
//           setError("No product found for the given ID");
//         }

//         setLoading(false);  // End loading
//       } catch (err) {
//         console.error("Error fetching product:", err);
//         setError(err.message);  // Set error if request fails
//         setLoading(false);  // End loading
//       }
//     };

//     fetchProductDetails(); // Fetch data when productId changes
//   }, [productId]);  // Dependency array to re-fetch when productId changes

//   // Show loading state while fetching data
//   if (loading) return <div>Loading...</div>;

//   // Show error message if there is an issue
//   if (error) return <div>Error: {error}</div>;

//   // If the product data is found, display it
//   return (
//     <div>
//       {product ? (
//         <>
//           <h2>{product.name}</h2>
//           <p>{product.description}</p>
//           <p>Price: ${product.price}</p>
//           <p>Category: {product.tag}</p>
//         </>
//       ) : (
//         <div>No product found</div>
//       )}
//     </div>
//   );
// };

// export default Rahul;
  
import React, { useEffect, useState } from 'react';

function CheckApi() {
  const [card, setCard] = useState([]);

  useEffect(() => {
    console.log("Fetching data...");
    fetch("http://localhost:3000/products/getproductdetails")
      .then((response) => response.json())
      .then((data) => {
        console.log(data.data);
        setCard(data.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <>
      {card && card.length > 0 ? (
        card.map((product, index) => (
          <div key={product.id} className="product-card">
            <h2>{product.description}</h2>
            <img src={product.image} alt={product.description} />
            <p>Tag: {product.tag}</p>
          </div>
        ))
      ) : (
        <p>No products available.</p>
      )}
    </>
  );
}

export default CheckApi;