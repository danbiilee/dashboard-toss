import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import StatusCircleBar from "../statusCircle/StatusCircleBar";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  ${(props) =>
    props.isDevelop
      ? css`
          justify-content: center;
          margin-bottom: 13px;
        `
      : css`
          margin-bottom: 8px;
        `}
  h3 {
    margin-right: 27px;
  }
`;

const GroupName = ({ groupName, statuses, isDevelop }) => (
  <Wrapper isDevelop={isDevelop}>
    {groupName && <h3>{groupName}</h3>}
    <StatusCircleBar datas={statuses} />
  </Wrapper>
);

GroupName.propTypes = {
  groupName: PropTypes.string,
  statuses: PropTypes.array,
  isDevelop: PropTypes.bool,
};

export default GroupName;
