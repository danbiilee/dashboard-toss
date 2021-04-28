import React from "react";
import TopContainer from "./TopContainer";
import ServerContainer from "./ServerContainer";

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
      <TopContainer style={topLayout} />
      <ServerContainer style={centerLayout} />
    </>
  );
};

export default SMSPage;
