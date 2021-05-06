import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import CenterName from "../../components/centerName/index";
import StatusCircleBar from "../../components/statusCircle/StatusCircleBar";

const AbsWrapper = styled.div`
  position: absolute;
`;

const TopContainer = ({ style }) => {
  const { NMS_CENTERNAME } = window.GLOBAL_CONFIG;
  const Data = [
    {
      centerName: NMS_CENTERNAME[0].centerName,
      style: {
        width: "841px",
        height: "50px",
        margin: "11px 0 0 13px",
      },
    },
    {
      centerName: NMS_CENTERNAME[1].centerName,
      style: {
        width: "982px",
        height: "50px",
        margin: "11px 0 0 899px",
      },
    },
  ];
  const statusData = {
    data: [
      { id: 1, status: 0, value: 39 },
      { id: 2, status: 1, value: 142 },
      { id: 3, status: 2, value: 5 },
    ],
    style: {
      position: "absolute",
      top: "28px",
      right: "24px",
    },
  };

  return (
    <section className="p-abs" style={style}>
      {Data.map((data, index) => (
        <AbsWrapper key={index}>
          <CenterName data={data} style={data.style} />
          <StatusCircleBar datas={statusData.data} style={statusData.style} />
        </AbsWrapper>
      ))}
    </section>
  );
};

TopContainer.propTypes = {
  style: PropTypes.object,
};
export default TopContainer;
