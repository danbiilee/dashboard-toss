import React from "react";
import PropTypes from "prop-types";
import Title from "../../components/title/index";
import NmsBox from "../../components/boxes/NmsBox";
import styled from "styled-components";

const DIV1 = styled.div`
  display: inline-block;
  padding: 38px 13px 13px 13px;
  width: 885px;
  height: 270px;
`;
const DIV2 = styled.div`
  display: inline-block;
  padding: 38px 13px 13px 13px;
  width: 1023px;
  height: 270px;
`;
const ServiceStatus = ({ style }) => {
  const LeftTitleStyle = {
    left: "13px",
    top: "12px",
  };
  const RightTitleStyle = {
    left: "898px",
    top: "12px",
  };
  const NONHYEON = [
    { NAME: "채널-DMZ L7" },
    { NAME: "채널-INT L7" },
    { NAME: "서비스망-L7" },
    { NAME: "콜센터-L7" },
  ];
  const KIMPO = [
    { NAME: "채널-DMZ L7" },
    { NAME: "채널-INT L7" },
    { NAME: "서비스망-L7" },
    { NAME: "콜센터-L7" },
    { NAME: "개발-L7" },
  ];
  const BOX = {
    leftStyle: {
      width: "202px",
    },
    rightStyle: {
      width: "187px",
    },
  };
  return (
    <section className="p-abs" style={style}>
      <Title style={LeftTitleStyle} text={"L7 서비스"} />
      <Title style={RightTitleStyle} text={"L7 서비스"} />
      <DIV1>
        {NONHYEON.map((data, index) => {
          return (
            <NmsBox key={String(index)} data={data} style={BOX.leftStyle} />
          );
        })}
      </DIV1>
      <DIV2>
        {KIMPO.map((data, index) => {
          return (
            <NmsBox key={String(index)} data={data} style={BOX.rightStyle} />
          );
        })}
      </DIV2>
    </section>
  );
};

ServiceStatus.propTypes = {
  style: PropTypes.object,
};
export default ServiceStatus;
