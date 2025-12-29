import React from 'react';
import haloLogo from './assets/halo.png';



const Navbar = ({ showHamburger, menuOpen, setMenuOpen }) => {
  return (
    <nav className="navbar">
      <div className="nav-content">
        <div className="nav-brand">
          <img src={haloLogo} alt="Trading Bot Logo" className="logo-img" />
        </div>

        {showHamburger ? (
          <div className="hamburger-container">
            <button
              className={`hamburger-btn ${menuOpen ? 'active' : ''}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        ) : (
          <div className="nav-links">
            <button className="nav-btn">Home</button>
            <button className="nav-btn">About</button>
            <button className="nav-btn">Products</button>
            <button className="nav-btn">Contact</button>
          </div>
        )}
      </div>

      {showHamburger && menuOpen && (
        <div className="mobile-menu">
          <button className="nav-btn">Home</button>
          <button className="nav-btn">About</button>
          <button className="nav-btn">Products</button>
          <button className="nav-btn">Contact</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
