import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import CenterName from "../../components/centerName/index";
import StatusCircleBar from "../../components/statusCircle/StatusCircleBar";

const AbsWrapper = styled.div`
  position: absolute;
`;

const TopContainer = ({ style }) => {
  const { left } = NMS_NONHYEON_CONFIG;
  const { right } = NMS_KIMPO_CONFIG;
  const Data = [
    {
      centerName: left.centerName,
      status: {
        ATTENTION: 0,
        CRITICAL: 0,
        MAINTENANCE: 0,
        NORMAL: 0,
        TROUBLE: 0,
      },
      style: {
        width: "841px",
        height: "50px",
        margin: "11px 0 0 13px",
      },
    },
    {
      centerName: right.centerName,
      status: {
        ATTENTION: 0,
        CRITICAL: 0,
        MAINTENANCE: 0,
        NORMAL: 0,
        TROUBLE: 0,
      },
      style: {
        width: "982px",
        height: "50px",
        margin: "11px 0 0 899px",
      },
    },
  ];
  const statusStyle = {
    position: "absolute",
    top: "28px",
    right: "24px",
  };

  return (
    <section className="p-abs" style={style}>
      {Data.map((item, index) => (
        <AbsWrapper key={index}>
          <CenterName centerName={item.centerName} style={item.style} />
          <StatusCircleBar data={item.status} style={statusStyle} />
        </AbsWrapper>
      ))}
    </section>
  );
};

TopContainer.propTypes = {
  style: PropTypes.object,
};
export default TopContainer;
