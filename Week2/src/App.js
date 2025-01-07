import React,{useState} from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import './styles.css';
import Footer from './components/Footer';
import logo from './assets/Logo.jpg'; // Import the logo
import menuIcon from './assets/menu.webp';
import NewsFeed from './pages/NewsFeed';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };  
  return (
    <Router>
      <div className="App">
        <nav className="nav-bar">
          {/* Menu Icon */}
          <button className="menu-icon" onClick={toggleSidebar}>
            <img src={menuIcon} alt="Menu" />
          </button>
          {/* Logo */}
          <Link to="/">
            <img src={logo} alt="NewsApp Logo" className="nav-logo" />
          </Link>
          {/* Search Bar */}
          <div className="search-bar-nav">
            <input
              type="text"
              placeholder="Search news..."
              className="nav-search-input"
            />
            <button className="nav-search-button">Search</button>
          </div>

          {/* Navigation Links */}
          <div className="nav-links">
            <Link to="/">Home</Link>
            
            {/* Category Dropdown */}
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
        {isSidebarOpen && (
          <div className="sidebar">
            <button className="close-btn" onClick={toggleSidebar}>
              &times;
            </button>
            <Link to="/" onClick={toggleSidebar}>Home</Link>
            <Link to="/category" onClick={toggleSidebar}>Category</Link>
            <Link to="/login" onClick={toggleSidebar}>Login</Link>
            <Link to="/about" onClick={toggleSidebar}>About</Link>
            {/* Add more links here */}
          </div>
        )}
        {/* Routes */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          
          <Route path="/category/1" element={<div>Category 1 Content</div>} />
          <Route path="/category/2" element={<div>Category 2 Content</div>} />
          <Route path="/category/3" element={<div>Category 3 Content</div>} />
        </Routes>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
