import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import StatusCircle from "../statusCircle";
import Updown from ".";
import { goEMSPage } from "../../helpers";

const Wrapper = styled.section`
  flex: 1;
  ${(props) =>
    props.display === "column"
      ? css`
          margin: 17px 17px 24px 17px;
        `
      : css`
          width: 20%;
          margin: 17px 17px 0 0;
          &:first-of-type {
            margin-left: 17px;
          }
        `}
  .title {
    ${(props) => props.theme.common.flexAlignCenter}
    margin-bottom: 7px;
    p {
      width: 95%;
      margin-left: 5px;
      color: white;
      font-size: 14px;
      ${(props) => props.theme.common.ellipsis}
      cursor: pointer;
    }
  }
`;

const UpdownGroup = ({ data, display, style }) => (
  <Wrapper display={display} style={style}>
    <div className="title">
      <StatusCircle data={{ status: data.AVAIL_STATUS }} size="sm" />
      <p onClick={() => goEMSPage(data.ID)}>{data.NAME}</p>
    </div>
    <Updown data={data} />
  </Wrapper>
);

UpdownGroup.propTypes = {
  data: PropTypes.object,
  display: PropTypes.string,
  style: PropTypes.object,
};

export default UpdownGroup;
