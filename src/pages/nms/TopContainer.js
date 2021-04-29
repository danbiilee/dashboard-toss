import React from "react";
import PropTypes from "prop-types";
import CenterName from "../../components/centerName/index";

const TopContainer = ({ style }) => {
  const Data = [
    {
      centerName: "논현센터",
      style: {
        width: "841px",
        height: "50px",
        top: "11px",
        left: "13px",
        position: "absolute",
      },
    },
    {
      centerName: "김포센터",
      style: {
        width: "982px",
        height: "50px",
        top: "11px",
        left: "899px",
        position: "absolute",
      },
    },
  ];
  return (
    <section className="p-abs" style={style}>
      <CenterName data={Data[0]} style={Data[0].style} />
      <CenterName data={Data[1]} style={Data[1].style} />
    </section>
  );
};

TopContainer.propTypes = {
  style: PropTypes.object,
};
export default TopContainer;
