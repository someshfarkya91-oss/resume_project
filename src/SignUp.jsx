import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./SignIn.css";

function SignUp() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.placeholder.toLowerCase().replace(" ", "")]: e.target.value });
  };

  const handleSignup = () => {
    localStorage.setItem("user", JSON.stringify(user));
    alert("Account created!");
    navigate("/");
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h1 className="title">Resume Builder</h1>
        <h2>Sign Up</h2>

        <input placeholder="Name" onChange={handleChange} />
        <input placeholder="Email" onChange={handleChange} />
        <input placeholder="Password" onChange={handleChange} />

        <button className="login-btn" onClick={handleSignup}>
          Create Account
        </button>

        <p className="signup-text">
          Already have an account? <Link to="/">Sign in</Link>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
