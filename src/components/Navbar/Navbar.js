import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li className="navbar__item">
          <Link to="/">Home</Link>
        </li>
        <li className="navbar__item">
          <Link to="/small">Small</Link>
        </li>
        <li className="navbar__item">
          <Link to="/big">Big</Link>
        </li>
        <li className="navbar__item">
          <Link to="/lib">Lib</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
