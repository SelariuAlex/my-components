import React from "react";

function NavbarDropdown(props) {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">{props.children}</ul>
    </nav>
  );
}

export default NavbarDropdown;
