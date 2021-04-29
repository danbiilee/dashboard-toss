import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Wrapper = styled.div`
  overflow: hidden;
  width: 123px;
  height: 30px;
  padding: 0 5px;
  margin: 2px 2px 2px 0;
  background-color: ${(props) => props.color};
  border-radius: 3px;
  color: white;
  line-height: 30px;
  font-size: 0.9rem;
  text-align: center;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const Server = ({ server: { status, serverName } }) => {
  const colorCode = {
    0: "#d43f3a", // red
    1: "#ff8417", // orange
    2: "#8c9497", // gray
    3: "#99c165", // green
  };
  const color = colorCode[status];

  return <Wrapper color={color}>{serverName}</Wrapper>;
};

Server.propTypes = {
  server: PropTypes.object,
};

export default Server;
