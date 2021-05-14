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
    // 프리티어의 폐해 ㅈㅅ&ㅅㅂ 누가 탭 설정좀...
    // 논현
    dispatch(fetchNMS({ center: "nonhyeon", type: "left", apiname: "status" }));
    dispatch(
      fetchNMS({ center: "nonhyeon", type: "equipment", apiname: "status" })
    );
    dispatch(
      fetchNMS({ center: "nonhyeon", type: "line1", apiname: "priority" })
    );
    dispatch(
      fetchNMS({ center: "nonhyeon", type: "line2", apiname: "priority" })
    );
    dispatch(
      fetchNMS({ center: "nonhyeon", type: "service", apiname: "priority" })
    );

    // 김포
    dispatch(fetchNMS({ center: "kimpo", type: "right", apiname: "status" }));
    dispatch(
      fetchNMS({ center: "kimpo", type: "equipment", apiname: "status" })
    );
    dispatch(fetchNMS({ center: "kimpo", type: "line1", apiname: "priority" }));
    dispatch(fetchNMS({ center: "kimpo", type: "line2", apiname: "priority" }));
    dispatch(
      fetchNMS({ center: "kimpo", type: "service", apiname: "priority" })
    );
    const id = setInterval(() => {
      dispatch(
        fetchNMS({ center: "nonhyeon", type: "left", apiname: "status" })
      );
      dispatch(
        fetchNMS({ center: "nonhyeon", type: "equipment", apiname: "status" })
      );
      dispatch(
        fetchNMS({ center: "nonhyeon", type: "line1", apiname: "priority" })
      );
      dispatch(
        fetchNMS({ center: "nonhyeon", type: "line2", apiname: "priority" })
      );
      dispatch(
        fetchNMS({ center: "nonhyeon", type: "service", apiname: "priority" })
      );

      // 김포
      dispatch(fetchNMS({ center: "kimpo", type: "right", apiname: "status" }));
      dispatch(
        fetchNMS({ center: "kimpo", type: "equipment", apiname: "status" })
      );
      dispatch(
        fetchNMS({ center: "kimpo", type: "line1", apiname: "priority" })
      );
      dispatch(
        fetchNMS({ center: "kimpo", type: "line2", apiname: "priority" })
      );
      dispatch(
        fetchNMS({ center: "kimpo", type: "service", apiname: "priority" })
      );
    }, GLOBAL_CONFIG.setInterval * 1000);
    return () => clearInterval(id);
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
