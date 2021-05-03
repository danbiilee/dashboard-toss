import React from "react";
import { createGlobalStyle } from "styled-components";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clickTab } from "../../redux/uiSlice";

const GlobalStyle = createGlobalStyle`
  .header {
    color: #425363;
    font-size: 18px;
    height: 56px;
    border-bottom: 2px solid #425363;
    z-index: 999; // 이미지 없애면 삭제 할 것
  }

  .tab {
    list-style: none;
    height: 100%;
    display: inline-flex;
    align-items: center;

    &__item {
      border: 1px solid white;
      cursor: pointer;
      
    }
    &__link {
      padding: 17px 33px;
      display: block;
      color: #333d4b;
      background-color: #425363;
      text-decoration: none;
      text-transform: uppercase;

      &.active {
        color: #fff;
        pointer-events: none;
      }
      &--1.active {
        border-top: 3px solid #79ab3d;
        background-color: red;
      }
      &--2.active {
        border-top: 3px solid #67faff;
        background-color: #0a0b0d;
      }
    }
  }
`;

const Header = () => {
  const dispatch = useDispatch();
  const currentTab = useSelector((state) => state.ui.tab);

  const handleClickTab = (e) => {
    e.preventDefault();
    const clicked = e.currentTarget.getAttribute("data-value");
    if (currentTab === clicked) return;
    dispatch(clickTab(clicked));
  };

  return (
    <>
      <GlobalStyle />
      <header className="header">
        <ul className="tab">
          <li className="tab__item" data-value={SMS} onClick={handleClickTab}>
            <NavLink
              exact
              to="/"
              className={`tab__link tab__link--1 ${currentTab}`}
            >
              {SMS}
            </NavLink>
          </li>
          <li className="tab__item" data-value={NMS} onClick={handleClickTab}>
            <NavLink
              to="/nms"
              className={`tab__link tab__link--2 ${currentTab}`}
            >
              {NMS}
            </NavLink>
          </li>
        </ul>
      </header>
    </>
  );
};

export default Header;
