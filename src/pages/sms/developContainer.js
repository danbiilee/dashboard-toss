import React from "react";
import PropTypes from "prop-types";
import CenterName from "../../components/centerName/index";

const developContainer = ({ style }) => {
  const Data = [
    {
      centerName: "개발/테스트",
      style: {
        width: "215px",
        height: "50px",
        top: "11px",
        left: "7px",
        position: "absolute",
      },
    },
    {
      centerName: "본사",
      style: {
        width: "215px",
        height: "50px",
        top: "676px",
        left: "7px",
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

developContainer.propTypes = {
  style: PropTypes.object,
};
export default developContainer;
