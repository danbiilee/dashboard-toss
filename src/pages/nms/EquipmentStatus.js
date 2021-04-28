import React from "react";
import PropTypes from "prop-types";

const EquipmentStatus = ({ style }) => {
  return (
    <section className="p-abs" style={style}>
      <div>hi</div>
    </section>
  );
};

EquipmentStatus.propTypes = {
  style: PropTypes.object,
};
export default EquipmentStatus;
