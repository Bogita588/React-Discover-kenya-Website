// NavigationBar.js
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './navigation.css'; // Import the CSS file
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';

const Navigation = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  // Function to handle the click on the mobile menu icon
  const handleMobileMenuClick = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        Your Logo
      </Link>
      <ul className={`nav-list ${toggleMenu ? 'mobile-menu-open' : ''}`}>
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Discover
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/search" className="nav-link">
            Search
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/counties" className="nav-link">
            Counties & Towns
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/cntyservices" className="nav-link">
            County Services
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/events" className="nav-link">
            Events
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/places" className="nav-link">
            Historical sites
          </Link>
        </li>
        {/* Add more links as needed */}
      </ul>
      <div className="kws__navbar-smallscreen">
        <GiHamburgerMenu
          color="white"
          fontSize={25}
          onClick={handleMobileMenuClick}
        />

        {toggleMenu && (
          <div className="kws__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu
              fontSize={27}
              className="overlay__close"
              onClick={handleMobileMenuClick}
            />
            <ul className="kws__navbar-smallscreen-links">
              <li className="nav-item">
                <Link to="/">Discover</Link>
              </li>
              <li className="nav-item">
                <Link to="/search">Search</Link>
              </li>
              <li className="nav-item">
                <Link to="/counties">Counties & Towns
</Link>
              </li>
              <li className="nav-item">
                <Link to="/cntyservices">County Services</Link>
              </li>
              <li className="nav-item">
                <Link to="/contact">Event</Link>
              </li>
              <Link to="/places" className="nav-link">
            Historical sites
          </Link>
              
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
