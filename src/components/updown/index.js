import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  .box {
    flex: 1 1 50%;
    display: flex;
    &:not(:last-of-type) {
      margin-right: 3px;
    }
    & > div {
      width: 50%;
      height: 30px;
    }
  }
`;

const Key = styled.div`
  ${(props) => props.theme.common.flexCenter};
  border: 1px solid #292b2e;
  background-color: #232528;
  color: white;
  font: normal 10px sans-serif;
`;

const Value = styled.div`
  ${(props) => props.theme.common.flexCenter};
  border: 1px solid #292b2e;
  border-left: 0;
  background-color: #101116;
  color: ${(props) =>
    props.isOver ? props.theme.color.statusColor(props.status) : "#66e7ff"};
  font-size: 15px;
  p {
    ${(props) => props.theme.common.ellipsis}
  }
`;

const Updown = ({ data }) => {
  const criticalValue = 0;

  return (
    <Wrapper>
      <div className="box">
        <Key>UP</Key>
        <Value>
          <p>{data.UP}</p>
        </Value>
      </div>
      <div className="box">
        <Key>DOWN</Key>
        <Value status="DOWN" isOver={data.DOWN > criticalValue}>
          <p>{data.DOWN}</p>
        </Value>
      </div>
    </Wrapper>
  );
};

Updown.propTypes = {
  data: PropTypes.object,
};

export default Updown;
