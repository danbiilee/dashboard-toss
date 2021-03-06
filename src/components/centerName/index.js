import React from "react";
import PropTypes from "prop-types";
import { useRouteMatch } from "react-router-dom";
import styled, { css } from "styled-components";

const H2 = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.3rem;
  ${(props) =>
    props.page === "sms"
      ? css`
          background-color: #f2f4f6;
          border: 1px solid #cccccc;
          border-bottom-color: #858585;
        `
      : css`
          background-color: #181a1c;
          color: white;
        `}
`;

const CenterName = ({ centerName, style }) => {
  const { path } = useRouteMatch();
  const page = path.includes("nms") ? "nms" : "sms";

  return (
    <H2 style={style} page={page}>
      {centerName}
    </H2>
  );
};

CenterName.propTypes = {
  centerName: PropTypes.string,
  style: PropTypes.object,
};

export default CenterName;
