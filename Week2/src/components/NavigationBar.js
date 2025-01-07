import React, { useState } from 'react';
import '../styles.css';

const NavigationBar = ({ setCategory }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <nav className="nav-bar">
      <h2>NewsApp</h2>
      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#technology">Technology</a>
        <a href="#sports">Sports</a>
        <a href="#contact">Contact</a>

        {/* Category Dropdown */}
        <div
          className="category-dropdown"
          onMouseEnter={() => setShowDropdown(true)}
          onMouseLeave={() => setShowDropdown(false)}
        >
          <button className="dropdown-btn">Category</button>
          {showDropdown && (
            <div className="dropdown-menu">
              <button onClick={() => setCategory('general')}>General</button>
              <button onClick={() => setCategory('technology')}>Technology</button>
              <button onClick={() => setCategory('sports')}>Sports</button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
