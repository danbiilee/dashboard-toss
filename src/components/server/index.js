import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { goEMSPage } from "../../helpers";

const Wrapper = styled.div`
  width: 123px;
  height: 30px;
  padding: 0 5px;
  margin: 2px 2px 2px 0;
  background-color: ${(props) => props.theme.color.statusColor(props.status)};
  border-radius: 3px;
  color: white;
  line-height: 30px;
  font-size: 0.9rem;
  text-align: center;
  ${(props) => props.theme.common.ellipsis}
  cursor: pointer;
`;

const Server = ({ server: { ID, STATUS, NAME, TIME } }) => (
  <Wrapper
    status={STATUS}
    title={TIME.slice(0, 19)}
    onClick={() => goEMSPage(ID)}
  >
    {NAME}
  </Wrapper>
);

Server.propTypes = {
  server: PropTypes.object,
};

export default Server;
