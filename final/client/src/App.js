import React, { useState } from "react";
import { Routes, Route, Link, Navigate, useLocation } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Register from "./components/Register";
import Login from "./components/Login";
import Footer from "./components/Footer";
import logo from "./assets/Logo.jpg";
import menuIcon from "./assets/menu.webp";
import SearchResults from "./pages/SearchResults";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  // Get the current route using useLocation
  const location = useLocation();
  
  // Check if the current route is for Login or Register
  const isAuthPage = location.pathname === "/login" || location.pathname === "/register";

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleSearch = () => {
    if (searchTerm.trim() === "") {
      alert("Please enter a search term.");
    } else {
      window.location.href = `/search?q=${encodeURIComponent(searchTerm)}`;
    }
  };

  return (
    <div className="App">
      {/* Conditionally render the navigation bar if not on the login or register page */}
      {!isAuthPage && (
        <nav className="nav-bar">
          <button className="menu-icon" onClick={toggleSidebar}>
            <img src={menuIcon} alt="Menu" />
          </button>
          <Link to="/">
            <img src={logo} alt="NewsApp Logo" className="nav-logo" />
          </Link>
          <div className="search-bar-nav">
            <input
              type="text"
              placeholder="Search news..."
              className="nav-search-input"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="nav-search-button" onClick={handleSearch}>
              Search
            </button>
          </div>
          <div className="nav-links">
            <Link to="/home">Home</Link>
            <div className="category-dropdown">
              <button className="dropdown-btn">Category</button>
              <div className="dropdown-menu">
                <button>General</button>
                <button>Technology</button>
                <button>Sports</button>
              </div>
            </div>
            <Link to="#about">About</Link>
          </div>
        </nav>
      )}

      {/* Conditionally render the sidebar */}
      {isSidebarOpen && (
        <div className="sidebar">
          <button className="close-btn" onClick={toggleSidebar}>
            &times;
          </button>
          <Link to="/home" onClick={toggleSidebar}>
            Home
          </Link>
          <Link to="/category" onClick={toggleSidebar}>
            Category
          </Link>
          <Link to="/login" onClick={toggleSidebar}>
            Log out
          </Link>
          <Link to="/about" onClick={toggleSidebar}>
            About
          </Link>
        </div>
      )}

      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/search" element={<SearchResults />} />
      </Routes>

      {/* Conditionally render the footer if not on the login or register page */}
      {!isAuthPage && <Footer />}
    </div>
  );
}

export default App;
