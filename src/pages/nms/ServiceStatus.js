import React from "react";
import PropTypes from "prop-types";

const ServiceStatus = ({ style }) => {
  return (
    <section className="p-abs" style={style}>
      <div>hi</div>
    </section>
  );
};

ServiceStatus.propTypes = {
  style: PropTypes.object,
};
export default ServiceStatus;
