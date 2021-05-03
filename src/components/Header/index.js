import React from "react";
import { createGlobalStyle } from "styled-components";
import { NavLink, useLocation } from "react-router-dom";
import theme from "../../helpers/theme";
import Clock from "./Clock";

const GlobalStyle = createGlobalStyle`
  .header {
    color: #425363;
    font-size: 18px;
    height: 56px;
    border-bottom: ${({ theme }) => theme.borderBottom};
    z-index: 999; // 이미지 없애면 삭제 할 것
    background-color: ${({ theme }) => theme.background};
    display: flex;
    justify-content: space-between;
    align-items: center;

    &__logo {
      background-image: ${({ tab }) => `url(${IMAGE_PATH}/logo-${tab}.png)`};
      width: 194px;
      height: 28px;
    }
    &__clock {
      color: ${({ theme }) => theme.clockColor};
      transform: translateX(-30px);
    }
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
      background-color: ${({ theme }) => theme.background};
      color: ${({ theme }) => theme.inactiveColor};
      text-decoration: none;
      text-transform: uppercase;

      &.active {
        color: ${({ theme }) => theme.activeColor};
        background-color: ${({ theme }) => theme.activeBackground};
        border-top: ${({ theme }) => theme.activeBorderTop};
        pointer-events: none;
      }
    }
  }
`;

const Header = () => {
  const location = useLocation();
  const currentTab = location.pathname === `/${NMS}` ? NMS : SMS;

  const handleClickTab = (e) => {
    const clicked = e.currentTarget.getAttribute("data-value");
    if (currentTab === clicked) return;
  };

  const ClockStyle = {
    fontSize: "17pt",
  };

  return (
    <>
      <GlobalStyle theme={theme.common.header[currentTab]} tab={currentTab} />
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
        <div className="header__logo" />
        <div className="header__clock">
          <Clock style={ClockStyle} />
        </div>
      </header>
    </>
  );
};

export default Header;
