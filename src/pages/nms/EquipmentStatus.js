import React from "react";
import PropTypes from "prop-types";
import Title from "../../components/title/index";

const EquipmentStatus = ({ style }) => {
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
      <Title style={LeftTitleStyle} text={"장비상태"} />
      <Title style={RightTitleStyle} text={"장비상태"} />
    </section>
  );
};

EquipmentStatus.propTypes = {
  style: PropTypes.object,
};
export default EquipmentStatus;
