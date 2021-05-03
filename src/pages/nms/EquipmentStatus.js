import React from "react";
import PropTypes from "prop-types";
import Title from "../../components/title/index";
import NmsBox from "../../components/boxes/NmsBox";
import styled from "styled-components";

const DIV1 = styled.div`
  display: inline-block;
  padding: 38px 13px 13px 13px;
  width: 885px;
  height: 228px;
`;
const DIV2 = styled.div`
  display: inline-block;
  padding: 38px 13px 13px 13px;
  width: 1023px;
  height: 228px;
`;

const EquipmentStatus = ({ style }) => {
  const LeftTitleStyle = {
    left: "13px",
    top: "12px",
  };
  const RightTitleStyle = {
    left: "898px",
    top: "12px",
  };
  const NONHYEON = [
    { NAME: "보안구간" },
    { NAME: "채널계" },
    { NAME: "대외계" },
    { NAME: "서비스망" },
    { NAME: "관리망" },
    { NAME: "콜센터" },
  ];
  const KIMPO = [
    { NAME: "보안구간" },
    { NAME: "채널계" },
    { NAME: "대외계" },
    { NAME: "서비스망" },
    { NAME: "관리망" },
    { NAME: "콜센터" },
    { NAME: "개발망" },
  ];
  const BOX = {
    style: {
      width: "131px",
    },
  };
  return (
    <section className="p-abs" style={style}>
      <Title style={LeftTitleStyle} text={"장비상태"} />
      <Title style={RightTitleStyle} text={"장비상태"} />
      <DIV1>
        {NONHYEON.map((data, index) => {
          return <NmsBox key={String(index)} data={data} style={BOX.style} />;
        })}
      </DIV1>
      <DIV2>
        {KIMPO.map((data, index) => {
          return <NmsBox key={String(index)} data={data} style={BOX.style} />;
        })}
      </DIV2>
    </section>
  );
};

EquipmentStatus.propTypes = {
  style: PropTypes.object,
};
export default EquipmentStatus;
