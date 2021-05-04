import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import CenterName from "../../components/centerName/index";
import ServerGroup from "../../components/server/ServerGroup";

const KimpoContainer = ({ style }) => {
  const centerStyle = {
    width: "770px",
    height: "50px",
    top: "11px",
    left: "7px",
    position: "absolute",
  };
  const type = "right";
  const { centerName } = GLOBAL_CONFIG[type];
  const { list } = useSelector((state) => state.sms[type]);

  return (
    <section className="p-abs" style={style}>
      <CenterName centerName={centerName} style={centerStyle} />
      <ServerGroup type={type} list={list} />
    </section>
  );
};

KimpoContainer.propTypes = {
  style: PropTypes.object,
};

export default KimpoContainer;
