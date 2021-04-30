import React from "react";
import PropTypes from "prop-types";
import Title from "../../components/title/index";
import NmsBox from "../../components/boxes/NmsBox";
import styled from "styled-components";

const LEFT1 = styled.div`
  display: inline-block;
  padding: 38px 13px 13px 13px;
  width: 885px;
  height: 270px;
`;
const RIGHT1 = styled.div`
  display: inline-block;
  padding: 38px 13px 13px 13px;
  width: 1023px;
  height: 270px;
`;
const LEFT2 = styled.div`
  display: inline-block;
  position: absolute;
  padding: 0px 13px 13px 13px;
  width: 885px;
  height: 154px;
  top: 269px;
  left: 0px;
`;
const RIGHT2 = styled.div`
  display: inline-block;
  position: absolute;
  padding: 0px 13px 13px 13px;
  width: 1023px;
  height: 154px;
  top: 269px;
  left: 885px;
`;
const LineStatus = ({ style }) => {
  const LeftTitleStyle = {
    left: "13px",
    top: "12px",
  };
  const RightTitleStyle = {
    left: "898px",
    top: "12px",
  };
  const FIRSTCANTERNAME = [
    { NAME: "인터넷 회선" },
    { NAME: "본사 전용선" },
    { NAME: "DWDM" },
  ];
  const SECONDCANTERNAME = [{ NAME: "대외계" }];
  const BOX = {
    left1Style: {
      width: "273px",
    },
    right1Style: {
      width: "320px",
    },
    left2Style: {
      width: "841px",
    },
    right2Style: {
      width: "983px",
    },
  };
  return (
    <section className="p-abs" style={style}>
      <Title style={LeftTitleStyle} text={"회선상태"} />
      <Title style={RightTitleStyle} text={"회선상태"} />
      <LEFT1>
        {FIRSTCANTERNAME.map((data, index) => {
          return (
            <NmsBox key={String(index)} data={data} style={BOX.left1Style} />
          );
        })}
      </LEFT1>
      <RIGHT1>
        {FIRSTCANTERNAME.map((data, index) => {
          return (
            <NmsBox key={String(index)} data={data} style={BOX.right1Style} />
          );
        })}
      </RIGHT1>
      <LEFT2>
        {SECONDCANTERNAME.map((data, index) => {
          return (
            <NmsBox key={String(index)} data={data} style={BOX.left2Style} />
          );
        })}
      </LEFT2>
      <RIGHT2>
        {SECONDCANTERNAME.map((data, index) => {
          return (
            <NmsBox key={String(index)} data={data} style={BOX.right2Style} />
          );
        })}
      </RIGHT2>
    </section>
  );
};

LineStatus.propTypes = {
  style: PropTypes.object,
};
export default LineStatus;
