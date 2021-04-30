import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const DIV = styled.div`
  position: absolute;
  width: 142px;
  height: 18px;
`;
const ICON = styled.h2`
  display: inline-block;
  position: absolute;
  width: 14px;
  height: 14px;
  top: 1px;
  border-radius: 50%;
  background-color: transparent;
  border: 2px solid #67faff;
`;
const TEXT = styled.h2`
  display: inline;
  position: absolute;
  left: 24px;
  font-size: 13pt;
  color: #67faff;
`;
const Title = ({ text, style }) => {
  return (
    <DIV style={style}>
      <ICON />
      <TEXT>{text}</TEXT>
    </DIV>
  );
};

Title.propTypes = {
  text: PropTypes.string,
  style: PropTypes.object,
};
export default Title;
