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
`;

const Updown = ({ data }) => {
  const criticalValue = 15; // 임시 임계치

  return (
    <Wrapper>
      <div className="box">
        <Key>UP</Key>
        <Value status={data.status} isOver={data.up_cnt >= criticalValue}>
          {data.up_cnt}
        </Value>
      </div>
      <div className="box">
        <Key>DOWN</Key>
        <Value status={data.status} isOver={data.down_cnt >= criticalValue}>
          {data.down_cnt}
        </Value>
      </div>
    </Wrapper>
  );
};

Updown.propTypes = {
  data: PropTypes.object,
};

export default Updown;
