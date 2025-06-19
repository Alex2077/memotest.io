import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { HashLink } from 'react-router-hash-link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img
            src={`${process.env.PUBLIC_URL}/logo114.png`} 
            alt="MemoTest logo"
            height="40"
            width="40"
            className='mt-logo'
          />
          <span className='navbar-app-name'>MemoTest</span>
        </Link>
        
        <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
          <Link to="/" className="nav-link">Home</Link>
          <HashLink smooth to="#features" className="nav-link">Features</HashLink>
          <HashLink smooth to="#download" className="nav-link">Download</HashLink>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
        </div>
        
        <div className="navbar-right">
          <button className="primary-button signup-button">Login</button>
        </div>

        <div className="navbar-toggle" onClick={toggleMenu}>
          <span className={`bar ${isOpen ? 'open' : ''}`}></span>
          <span className={`bar ${isOpen ? 'open' : ''}`}></span>
          <span className={`bar ${isOpen ? 'open' : ''}`}></span>
        </div>

      </div>

    </nav>
  );
};

export default Navbar;