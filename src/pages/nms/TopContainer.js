import React from "react";
import PropTypes from "prop-types";

const TopContainer = ({ style }) => {
  return (
    <section className="p-abs" style={style}>
      <div>hi</div>
    </section>
  );
};

TopContainer.propTypes = {
  style: PropTypes.object,
};
export default TopContainer;
