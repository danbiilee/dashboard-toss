import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import CenterName from "../../components/centerName/index";
import ServerGroup from "../../components/server/ServerGroup";

const NonhyeonContainer = ({ style }) => {
  const centerStyle = {
    width: "770px",
    height: "50px",
    top: "11px",
    left: "7px",
    position: "absolute",
  };
  const type = "left";
  const { centerName } = SMS_CONFIG[type];
  const { list } = useSelector((state) => state.sms[type]);

  return (
    <section className="p-abs" style={style}>
      <CenterName centerName={centerName} style={centerStyle} />
      <ServerGroup type={type} list={list} />
    </section>
  );
};

NonhyeonContainer.propTypes = {
  style: PropTypes.object,
};

export default NonhyeonContainer;
