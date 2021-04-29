import React from "react";
import PropTypes from "prop-types";
import CenterName from "../../components/centerName/index";

const NonhyeonContainer = ({ style }) => {
  const Data = {
    centerName: "논현센터",
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

NonhyeonContainer.propTypes = {
  style: PropTypes.object,
};
export default NonhyeonContainer;
