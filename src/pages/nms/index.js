import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import TopContainer from "./TopContainer";
import EquipmentStatus from "./EquipmentStatus";
import LineStatus from "./LineStatus";
import ServiceStatus from "./ServiceStatus";
import { fetchNMS } from "../../redux/nmsSlice";

const S = {
  Background: styled.div`
    background-color: #0a0b0d;
  `,
};

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

const NMSPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchNMS({ center: "nonhyun", type: "left" }));
    // dispatch(fetchNMS({ center: "nonhyun", type: "right" }));
    // dispatch(fetchNMS({ center: "nonhyun", type: "equipment" }));
    // dispatch(fetchNMS({ center: "nonhyun", type: "line1" }));
    // dispatch(fetchNMS({ center: "nonhyun", type: "line2" }));
    // dispatch(fetchNMS({ center: "nonhyun", type: "service" }));

    // dispatch(fetchNMS({ center: "gimpo", type: "left" }));
    // dispatch(fetchNMS({ center: "gimpo", type: "right" }));
    // dispatch(fetchNMS({ center: "gimpo", type: "equipment" }));
    // dispatch(fetchNMS({ center: "gimpo", type: "line1" }));
    // dispatch(fetchNMS({ center: "gimpo", type: "line2" }));
    // dispatch(fetchNMS({ center: "gimpo", type: "service" }));
  }, [dispatch]);

  return (
    <>
      <S.Background className="bg" />
      <TopContainer style={topLayout} />
      <EquipmentStatus style={firstLayout} />
      <LineStatus style={secondLayout} />
      <ServiceStatus style={thirdLayout} />
    </>
  );
};

export default NMSPage;
