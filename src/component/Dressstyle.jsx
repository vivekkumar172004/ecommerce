import React from "react";
import "../styles/Footer.css";
import { Link } from "react-router-dom";
function Dressstyle({ image, alt }) {
  console.log(image);
  return (
    <>
      <div className="dress">
        <h1 className="headdress">BROWSE BY STYLE</h1>
        <div className="grid2">
          <div className="one">
            <Link to="/Casual" className="ren">
              <img
                id="w1"
                src="/images/casual.png.jpeg"
                height="300px"
                alt={alt}
              ></img>
            </Link>
          </div>
          <div className="twos">
            <Link to="/Formals">
              <img
                id="w2"
                src="/images/formal.png.jpeg"
                height="300px"
                width="600px"
                alt={alt}
              ></img>
            </Link>
          </div>
        </div>
        <div className="grid3">
          <div className="twos2">
            <Link to="/Party">
              <img
                id="w3"
                src="/images/party.png.jpeg"
                height="300px"
                width="600px"
                alt={alt}
              ></img>
            </Link>
          </div>
          <div className="twos3">
            <Link to="/Gym">
              <img
                id="w4"
                src="/images/gym.png.jpeg"
                height="300px"
                alt={alt}
              ></img>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dressstyle;
