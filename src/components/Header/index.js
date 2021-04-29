import React from "react";
import { NavLink } from "react-router-dom";
import Clock from "./Clock";

const Header = () => {
  const ClockStyle = {
    fontSize: "17pt",
    left: "1660px",
    marginTop: "15px",
  };
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
      <Clock style={ClockStyle} />
    </nav>
  );
};

export default Header;
