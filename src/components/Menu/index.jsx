import React from "react";
import { NavLink } from "react-router-dom";
import "./menu.scss";
const Menu = () => {
  return (
    <nav>
      <NavLink to="/about" exact>
        About
      </NavLink>
      <NavLink to="/projects" exact>
        Projects
      </NavLink>
      <NavLink to="/solutions" exact>
        Solutions
      </NavLink>
      <NavLink to="/contact" exact>
        Contact
      </NavLink>
    </nav>
  );
};

export default Menu;
