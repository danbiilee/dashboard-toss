import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Wrapper = styled.span`
  display: inline-block;
  min-width: ${(props) => (props.size === "lg" ? 14 : 12)}px;
  width: ${(props) => (props.size === "lg" ? 14 : 12)}px;
  height: ${(props) => (props.size === "lg" ? 14 : 12)}px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.color.statusColor(props.status)};
`;

const StatusCircle = ({ data: { status }, size }) => (
  <Wrapper status={status} size={size} />
);
StatusCircle.propTypes = {
  data: PropTypes.object,
  size: PropTypes.string,
};

export default StatusCircle;
