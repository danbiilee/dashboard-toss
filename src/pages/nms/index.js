import React from "react";
import styled from "styled-components";
import TopContainer from "./TopContainer";
import EquipmentStatus from "./EquipmentStatus";
import LineStatus from "./LineStatus";
import ServiceStatus from "./ServiceStatus";

const S = {
  BackgroundImage: styled.div`
    background-image: url("../assets/images/nms.png");
  `,
};
const NMSPage = () => {
  const topLayout = {
    width: "1898px",
    height: "70px",
    top: "65px",
    left: "12px",
  };
  const firstLayout = {
    width: "1908px",
    height: "227px",
    top: "134px",
    left: "12px",
  };
  const secondLayout = {
    width: "1908px",
    height: "419px",
    top: "365px",
    left: "12px",
  };
  const thirdLayout = {
    width: "1908px",
    height: "255px",
    top: "795px",
    left: "12px",
  };
  return (
    <>
      <S.BackgroundImage className="bg" />
      <TopContainer style={topLayout} />
      <EquipmentStatus style={firstLayout} />
      <LineStatus style={secondLayout} />
      <ServiceStatus style={thirdLayout} />
    </>
  );
};

export default NMSPage;
