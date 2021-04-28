import React from "react";
import styled from "styled-components";
import TopContainer from "./TopContainer";
import ServerContainer from "./ServerContainer";

const S = {
  BackgroundImage: styled.div`
    background-image: url("../../assets/images/sms.png");
  `,
};
const SMSPage = () => {
  const topLayout = {
    width: "1898px",
    height: "70px",
    top: "65px",
    left: "12px",
  };
  const centerLayout = {
    width: "1898px",
    height: "942px",
    top: "134px",
    left: "12px",
  };
  return (
    <>
      <S.BackgroundImage className="bg" />
      <TopContainer style={topLayout} />
      <ServerContainer style={centerLayout} />
    </>
  );
};

export default SMSPage;
