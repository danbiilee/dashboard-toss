import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const DIV = styled.div`
  display: inline-block;
  min-width: 0;
  height: 100%;
  background-color: #17191b;
  margin-right: 11px;
`;
const H2 = styled.h2`
  display: flex;
  height: 53px;
  justify-content: center;
  align-items: center;
  font-size: 12pt;
  background-color: ${(props) => statusColor(props.status)};
  // background-color: #1f2127;
  color: white;
`;
const statusColor = (props) => {
  switch (props) {
    case "CRITICAL":
    case "DOWN":
      return "#d43f3a"; // red
    case "TROUBLE":
    case "UNKNOWN":
      return "#ff8417"; // orange
    case "ATTENTION":
      return "yellow"; // yellow
    case "NORMAL":
    case "UP":
      return "#1f2127"; // green
    case "MAINTENANCE":
      return "#8c9497"; // gray
    default:
      return "#1f2127"; // 임시
  }
};
const NmsBox = ({ data, style, children }) => {
  return (
    <DIV style={style}>
      <H2 status={data.STATUS}>{data.NAME}</H2>
      {children}
    </DIV>
  );
};

NmsBox.propTypes = {
  data: PropTypes.object,
  style: PropTypes.object,
  children: PropTypes.any,
};
export default NmsBox;
