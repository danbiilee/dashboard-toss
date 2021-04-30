import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Wrapper = styled.div`
  overflow: hidden;
  width: 123px;
  height: 30px;
  padding: 0 5px;
  margin: 2px 2px 2px 0;
  background-color: ${(props) => props.theme.color.statusColor[props.status]};
  border-radius: 3px;
  color: white;
  line-height: 30px;
  font-size: 0.9rem;
  text-align: center;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const Server = ({ server: { status, serverName } }) => (
  <Wrapper status={status}>{serverName}</Wrapper>
);

Server.propTypes = {
  server: PropTypes.object,
};

export default Server;
