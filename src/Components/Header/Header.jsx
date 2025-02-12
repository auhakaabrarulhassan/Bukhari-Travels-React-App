import React from 'react';
import { Link } from 'react-router-dom';
import "../Header/Header.css";

function Header() {
  return (
    <section>
      {/* Mobile Screen */}
      <input className="navbar-input" type="checkbox" id="menu" />
      {/* End Mobile Screen */}
      <header>
        <div className="logo">
          <div className="bukhari-logo">
            <i className="fa-solid fa-plane plane-icon" />
            <h1>
              BUKHARI<span>TRAVELS</span>
            </h1>
          </div>
        </div>
        {/* Mobile Screen */}
        <label htmlFor="menu">
          <div />
          <div />
          <div />
        </label>
        {/* End Mobile Screen */}
        <nav>
          <Link to="/">HOME</Link>
          <Link to="/aboutus">About Us</Link>
          <Link to="/packages">Packages</Link>
          <Link to="/hotels">Hotels</Link>
          <Link to="#Articles">Articles</Link>
        </nav>
      </header>
    </section>
  );
}

export default Header;
