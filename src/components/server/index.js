import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Wrapper = styled.div`
  min-width: 123px;
  height: 30px;
  margin: 2px 2px 2px 0;
  background-color: ${(props) => props.color};
  border-radius: 3px;
  color: white;
  text-align: center;
  line-height: 30px;
  font-size: 0.9rem;
`;

const Server = ({ server }) => {
  const colorCode = {
    0: "#d43f3a", // red
    1: "#ff8417", // orange
    2: "#8c9497", // gray
    3: "#99c165", // green
  };
  const color = colorCode[server.status];

  return <Wrapper color={color}>{server.serverName}</Wrapper>;
};

Server.propTypes = {
  server: PropTypes.object,
};

export default Server;
