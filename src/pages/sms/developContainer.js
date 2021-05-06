/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import CenterName from "../../components/centerName/index";
import ServerGroup from "../../components/server/ServerGroup";

const developContainer = ({ style }) => {
  const centerStyle = {
    width: "214px",
    height: "50px",
    position: "absolute",
    left: "7px",
  };
  const { list: sidetopList } = useSelector((state) => state.sms.sidetop);
  const { list: sidebottomList } = useSelector((state) => state.sms.sidebottom);

  const data = [
    {
      type: "sidetop",
      centerName: SMS_CONFIG.sidetop.centerName,
      list: sidetopList,
      style: { ...centerStyle, top: "11px" },
    },
    {
      type: "sidebottom",
      centerName: SMS_CONFIG.sidebottom.centerName,
      list: sidebottomList,
      style: { ...centerStyle, top: "676px" },
    },
  ];

  return (
    <section className="p-abs" style={style}>
      {data.map((item, index) => (
        <div key={index}>
          <CenterName centerName={item.centerName} style={item.style} />
          <ServerGroup type={item.type} list={item.list} />
        </div>
      ))}
    </section>
  );
};

developContainer.propTypes = {
  style: PropTypes.object,
};

export default developContainer;
