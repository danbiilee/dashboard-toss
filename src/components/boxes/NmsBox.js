import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const DIV = styled.div`
  display: inline-block;
  height: 100%;
  background-color: #17191b;
  margin-right: 11px;
`;
const H2 = styled.h2`
  display: flex;
  height: 53px;
  justify-content: center;
  align-items: center;
  font-size: 1.1rem;
  background-color: #1f2127;
  color: white;
`;
const NmsBox = ({ data, style, children }) => {
  console.log(typeof children);
  return (
    <DIV style={style}>
      <H2 style={style}>{data.NAME}</H2>
      {children}
    </DIV>
  );
};

NmsBox.propTypes = {
  data: PropTypes.object,
  style: PropTypes.object,
  children: PropTypes.object,
};
export default NmsBox;
