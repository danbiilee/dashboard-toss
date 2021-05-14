import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import styled from "styled-components";
import CenterName from "../../components/centerName/index";
import StatusCircleBar from "../../components/statusCircle/StatusCircleBar";

const AbsWrapper = styled.div`
  position: absolute;
`;

const TopContainer = ({ style }) => {
  const { list: leftStatus } = useSelector((state) => state.nms.nonhyeon.left);
  const { list: rightStatus } = useSelector((state) => state.nms.kimpo.right);
  const { left } = NMS_NONHYEON_CONFIG;
  const { right } = NMS_KIMPO_CONFIG;
  const Data = [];

  if (leftStatus.length > 0 && rightStatus.length > 0) {
    Data.push({
      centerName: left[0].centerName,
      status: {
        ATTENTION: leftStatus[0].ATTENTION,
        CRITICAL: leftStatus[0].CRITICAL,
        MAINTENANCE: 0,
        NORMAL: 0,
        TROUBLE: leftStatus[0].TROUBLE,
      },
      style: {
        width: "841px",
        height: "50px",
        margin: "11px 0 0 13px",
      },
    });
    Data.push({
      centerName: right[0].centerName,
      status: {
        ATTENTION: rightStatus[0].ATTENTION,
        CRITICAL: rightStatus[0].CRITICAL,
        MAINTENANCE: 0,
        NORMAL: 0,
        TROUBLE: rightStatus[0].TROUBLE,
      },
      style: {
        width: "982px",
        height: "50px",
        margin: "11px 0 0 899px",
      },
    });
  }
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
