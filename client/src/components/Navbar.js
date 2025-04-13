// components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">Qurbani Service</Link>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/booking">Book Now</Link>
        <Link to="/about">About Us</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;