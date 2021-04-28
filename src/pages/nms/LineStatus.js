import React from "react";
import PropTypes from "prop-types";

const LineStatus = ({ style }) => {
  return (
    <section className="p-abs" style={style}>
      <div>hi</div>
    </section>
  );
};

LineStatus.propTypes = {
  style: PropTypes.object,
};
export default LineStatus;
