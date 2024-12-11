import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../styles/Prof.css";

function Signup() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [name, setName] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const navigate = useNavigate();

  const handleSignup = async () => {
    if (!email || !password || !name) {
      setError("All fields are required!");
      return;
    }
    const emailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    if (!emailPattern.test(email)) {
      alert("Please enter a valid Gmail address (e.g., user@gmail.com).");
      return;
    }

    if (password.length < 8) {
      alert("Password must be at least 8 characters long.");
      return;
    }
    setLoading(true);
    setError();

    try {
      const response = await fetch("http://localhost:3000/User/createUser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password, name }),
      });

      const data = await response.json();
      console.log(data);

      if (response.ok && data.success) {
        console.log("Signup successful!");
        navigate("/");
      } else {
        console.log("backend", data);
        alert(data.message);
        navigate("/Loginpage");

      }
    } catch (err) {
      setError("An error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Link to="/Loginpage">
        <button className="login1">Login</button>
      </Link>

      <div className="sg1">
        <h1 className="sg">Sign Up Page</h1>
        <button className="sg2">Continue With Google</button>
        <div className="sg3"></div>
        <h6 className="or">OR</h6>
        <div className="sg4"></div>
      </div>

      <div className="user">
        <h4 className="user1">User Name</h4>
        <input
          className="user12"
          type="text"
          placeholder="User Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <h4 className="user1">Email Address</h4>
        <input
          className="user2"
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <h4 className="user11">Password</h4>
        <input
          className="user3"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <div className="error">{error}</div>}
      </div>

      <div className="btsn">
        <button className="btsn1" onClick={handleSignup} disabled={loading}>
          {loading ? "Signing Up..." : "Sign Up"}
        </button>
        <h3 className="user11">
          Do You Have an account? <Link to="/Loginpage">Sign in</Link>
        </h3>
      </div>

      <div className="imgn">
        <h1 className="imgs1"></h1>
        <img src="/images/log.png.jpeg" width="700px" height="730px" alt="" />
      </div>
    </>
  );
}

export default Signup;
