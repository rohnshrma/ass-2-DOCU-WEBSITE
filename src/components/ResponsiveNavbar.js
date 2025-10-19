import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ResponsiveNavbar.css';

const ResponsiveNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // TODO: Maybe add animation for menu close on route change
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          TravisComponentLib
        </Link>
        
        <div className="navbar-menu">
          <div className="navbar-links">
            <Link to="/" className="navbar-link">Home</Link>
            <Link to="/docs" className="navbar-link">Documentation</Link>
          </div>
          
          <div className="navbar-mobile-menu" onClick={toggleMenu}>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </div>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="navbar-mobile-links">
          <Link to="/" className="navbar-mobile-link" onClick={() => setIsMenuOpen(false)}>
            Home
          </Link>
          <Link to="/docs" className="navbar-mobile-link" onClick={() => setIsMenuOpen(false)}>
            Documentation
          </Link>
        </div>
      )}
    </nav>
  );
};

export default ResponsiveNavbar;

