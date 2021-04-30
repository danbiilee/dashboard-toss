import React from "react";
import PropTypes from "prop-types";
import Title from "../../components/title/index";

const ServiceStatus = ({ style }) => {
  const LeftTitleStyle = {
    left: "13px",
    top: "12px",
  };
  const RightTitleStyle = {
    left: "898px",
    top: "12px",
  };
  return (
    <section className="p-abs" style={style}>
      <Title style={LeftTitleStyle} text={"L7 서비스"} />
      <Title style={RightTitleStyle} text={"L7 서비스"} />
    </section>
  );
};

ServiceStatus.propTypes = {
  style: PropTypes.object,
};
export default ServiceStatus;
