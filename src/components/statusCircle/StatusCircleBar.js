import React from "react";
import PropTypes from "prop-types";
import { useRouteMatch } from "react-router-dom";
import styled from "styled-components";
import StatusCircle from "./index";

const BarWrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: transparent;
  color: ${(props) => (props.page === "sms" ? "inherit" : "white")};
`;

const ItemWrapper = styled.div`
  display: flex;
  align-items: center;
  &:not(:last-of-type)::after {
    content: "|";
    margin: 0 0.5em;
    color: #d6d8de;
  }
  .value {
    margin-left: 0.2em;
  }
`;

const StatusCircleBar = ({ datas, style }) => {
  const { path } = useRouteMatch();
  const page = path.includes("nms") ? "nms" : "sms";

  return (
    <BarWrapper style={style} page={page}>
      {datas.map((data) => (
        <Item key={data.id} data={data} />
      ))}
    </BarWrapper>
  );
};

const Item = ({ data }) => (
  <ItemWrapper>
    <StatusCircle data={data} size="lg" />
    <span className="value">{data.value}</span>
  </ItemWrapper>
);

StatusCircleBar.propTypes = {
  datas: PropTypes.array,
  style: PropTypes.object,
};

Item.propTypes = {
  data: PropTypes.object,
};

export default StatusCircleBar;
