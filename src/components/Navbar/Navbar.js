import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/small'>Small</Link>
        </li>
        <li>
          <Link to='/big'>Big</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
