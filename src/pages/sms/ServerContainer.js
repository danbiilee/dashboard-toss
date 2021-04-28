import React from "react";
import PropTypes from "prop-types";

const ServerContainer = ({ style }) => {
  return (
    <section className="p-abs" style={style}>
      <div>hi</div>
    </section>
  );
};

ServerContainer.propTypes = {
  style: PropTypes.object,
};
export default ServerContainer;
