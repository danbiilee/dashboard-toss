import React from "react";
import PropTypes from "prop-types";
import CenterName from "../../components/centerName/index";

const KimpoContainer = ({ style }) => {
  const Data = {
    centerName: "김포센터",
    style: {
      width: "770px",
      height: "50px",
      top: "11px",
      left: "7px",
      position: "absolute",
    },
  };

  return (
    <section className="p-abs" style={style}>
      <CenterName data={Data} style={Data.style} />
    </section>
  );
};

KimpoContainer.propTypes = {
  style: PropTypes.object,
};
export default KimpoContainer;
