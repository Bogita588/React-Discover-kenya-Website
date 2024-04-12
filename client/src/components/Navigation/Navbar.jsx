// Navbar.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa'; // Import the menu icon
import './navigation.css'; // Import CSS for styling

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="navbar">
      <div className="navbar__left">
        <Link to="/" className="navbar__logo">
          InternKenya
        </Link>
        <Link to="/" className="navbar__link">
          Home
        </Link>
        <Link to="/internships" className="navbar__link">
          Internships
        </Link>
      </div>
      <div className="navbar__right">
        <Link to="/employers" className="navbar__link">
          For Employers
        </Link>
        <Link to="/login" className="navbar__link">
          Log In
        </Link>
        <Link to="/signup" className="navbar__link">
          Sign Up
        </Link>
      </div>
      {/* Menu icon for mobile */}
      <FaBars className="menu-icon" onClick={toggleMenu} />
      {/* Mobile menu */}
      {showMenu && (
        <div className="mobile-menu">
          <Link to="/" className="mobile-menu__link">
            Home
          </Link>
          <Link to="/internships" className="mobile-menu__link">
            Internships
          </Link>
          <Link to="/employers" className="mobile-menu__link">
            For Employers
          </Link>
          <Link to="/login" className="mobile-menu__link">
            Log In
          </Link>
          <Link to="/signup" className="mobile-menu__link">
            Sign Up
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
