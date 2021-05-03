import React from "react";
import { createGlobalStyle } from "styled-components";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clickTab } from "../../redux/uiSlice";
import theme from "../../helpers/theme";

const GlobalStyle = createGlobalStyle`
  .header {
    color: #425363;
    font-size: 18px;
    height: 56px;
    border-bottom: ${(props) => props.theme.borderBottom};
    z-index: 999; // 이미지 없애면 삭제 할 것
    background-color: ${(props) => props.theme.background}
  }

  .tab {
    list-style: none;
    height: 100%;
    display: inline-flex;
    align-items: center;

    &__item {
      cursor: pointer;
    }
    &__link {
      padding: 17px 33px;
      display: block;
      background-color: ${(props) => props.theme.background};
      color: ${(props) => props.theme.inactiveColor};
      text-decoration: none;
      text-transform: uppercase;

      &.active {
        color: ${(props) => props.theme.activeColor};
        background-color: ${(props) => props.theme.activeBackground};
        pointer-events: none;
        border-top: ${(props) => props.theme.activeBorderTop}
      }
    }
  }
`;

const Header = () => {
  const dispatch = useDispatch();
  const currentTab = useSelector((state) => state.ui.tab);

  const handleClickTab = (e) => {
    const clicked = e.currentTarget.getAttribute("data-value");
    if (currentTab === clicked) return;
    dispatch(clickTab(clicked));
  };

  return (
    <>
      <GlobalStyle theme={theme.color.header[currentTab]} />
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
