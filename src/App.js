import React from "react";
import Home from "./Pages/Home.jsx";
import Navbar from "./component/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Onsale from "./Pages/Onsale.jsx";
import Brands from "./Pages/Brands.jsx";
import Prof from "./Pages/Prof.jsx";
import Uper from "./Pages/Uper.jsx";
import Cart1 from "./Pages/Cart1.jsx";
import Signup from "./Pages/Signup.jsx";
import Productdetails from "./component/ProductDetails.jsx";
import Order from "./Pages/orders.jsx"
import Formals from "./Pages/Formals.jsx";
import Party from "./Pages/Party.jsx";
import Gym from "./Pages/Gym.jsx";
import Casual from "./Pages/Casual.jsx"
// import Parent from "./Pages/parent.jsx"
function App() {
  return (
    <>
        {/* <div className="App">
            <Parent />
        </div> */}
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Shop" element={<Home />} />
          <Route path="Onsale" element={<Onsale />} />
          <Route path="Newarrival" element={<Uper />} />
          <Route path="Brands" element={<Brands />} />
          <Route path="Cart" element={<Cart1 />} />
          <Route path="Prof" element={<Prof />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/Loginpage" element={<Prof />} />
          <Route path="/Productdetails" element={<Productdetails />} />
          <Route path="/orders" element={<Order />} />
          <Route path="/Formals" element={<Formals />} />
          <Route path="/Party" element={<Party />} />
          <Route path="/Gym" element={<Gym />} />
          <Route path="/Casual" element={<Casual />} />
       </Routes>
      </Router>
    </>
  );
}

export default App;
