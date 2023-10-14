import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About Us</Link>
      <Link to="/all-features">All Features</Link>
      <Link to="/login">Login</Link>
    </nav>
  );
};

export default Navbar;
