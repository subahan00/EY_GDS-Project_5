import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../api"; // Import the register function from api.js
import "./Auth.css";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = formData;
  const navigate = useNavigate();

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log("Form data:", formData); // Debugging: Log form data

    try {
      const response = await register(formData); // Call the register API
      console.log("Registration successful:", response.data);

      // Redirect to the login page after successful registration
      navigate("/login");
    } catch (error) {
      console.error("Registration failed:", error.response?.data || error.message);
    }
  };

  return (
    <div className="auth-container" style={{ background: '#f5f5f5', minHeight: '100vh' }}> {/* Custom background */}
      <h2>Register</h2>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="name"
          value={name}
          onChange={onChange}
          placeholder="Name"
          required
        />
        <input
          type="email"
          name="email"
          value={email}
          onChange={onChange}
          placeholder="Email"
          required
        />
        <input
          type="password"
          name="password"
          value={password}
          onChange={onChange}
          placeholder="Password"
          required
        />
        <button type="submit">Register</button>
      </form>
      <p>
        Already have an account? <Link to="/login">Login here</Link>.
      </p>
    </div>
  );
};

export default Register;
