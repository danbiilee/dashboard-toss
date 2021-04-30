import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import StatusCircle from "../statusCircle";
import Updown from ".";

const Wrapper = styled.section`
  width: ${(props) => (props.display === "column" ? "100%" : "208px")};
  padding: 17px 0 0 ${(props) => (props.display === "column" ? "15px" : "12px")};
  margin-bottom: 7px;
  .title {
    ${(props) => props.theme.common.flexAlignCenter}
    margin-bottom: 7px;
    p {
      max-width: 210px;
      margin-left: 5px;
      color: white;
      font-size: 14px;
      ${(props) => props.theme.common.ellipsis}
    }
  }
`;

const UpdownGroup = ({ data, display }) => {
  return (
    <Wrapper display={display}>
      <div className="title">
        <StatusCircle data={data} size="sm" />
        <p>{data.name}</p>
      </div>
      <Updown data={data} />
    </Wrapper>
  );
};

UpdownGroup.propTypes = {
  data: PropTypes.object,
  display: PropTypes.string,
};

export default UpdownGroup;
