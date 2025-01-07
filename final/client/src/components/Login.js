import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../api";
import "./Auth.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted!"); // Debugging: Check if the function is called
    console.log("Email:", email, "Password:", password); // Debugging: Check form data
  
    try {
      const response = await login({ email, password }); // Call the login API
      console.log("Login response data:", response.data); // Debugging: Check the response data
  
      // Check if the login was successful
      if (response.data && response.data.success) {
        navigate("/home"); // Only navigate if login is successful
      } else {
        console.error("Login failed:", response.data.message || "Unknown error");
      }
    } catch (error) {
      console.error("Login failed:", error.response?.data || error.message);
    }
  };

  return (
    <div className="auth-container" style={{ background: '#f5f5f5', minHeight: '100vh' }}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
      <p>
        Don't have an account? <Link to="/register">Register here</Link>.
      </p>
    </div>
  );
};

export default Login;