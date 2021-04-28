import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className="header">
      <ul className="header__items">
        <li className="header__item header__item--1">
          <NavLink exact to="/">
            SMS
          </NavLink>
        </li>
        <li className="header__item header__item--2">
          <NavLink to="/nms">NMS</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
