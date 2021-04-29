import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Wrapper = styled.span`
  display: inline-block;
  width: ${(props) => (props.size === "lg" ? 14 : 12)}px;
  height: ${(props) => (props.size === "lg" ? 14 : 12)}px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const StatusCircle = ({ data, size }) => {
  // 컬러값 global config에 담아서 사용하기
  const colorCode = {
    0: "#d43f3a", // red
    1: "#ff8417", // orange
    2: "#8c9497", // gray
    3: "#99c165", // green
  };
  const color = colorCode[data.status];

  return <Wrapper color={color} size={size} />;
};

StatusCircle.propTypes = {
  data: PropTypes.object,
  size: PropTypes.string,
};

export default StatusCircle;
