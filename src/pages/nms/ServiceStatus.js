import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Title from "../../components/title/index";
import NmsBox from "../../components/boxes/NmsBox";
import UpdownGroup from "../../components/updown/UpdownGroup";

const DIV1 = styled.div`
  display: inline-flex;
  padding: 38px 20px 13px 13px;
  width: 885px;
  height: 270px;
`;
const DIV2 = styled.div`
  display: inline-flex;
  flex-direction: row;
  padding: 38px 16px 13px 13px;
  width: 1023px;
  height: 270px;
`;
const LeftTitleStyle = {
  left: "13px",
  top: "12px",
};
const RightTitleStyle = {
  left: "898px",
  top: "12px",
};
const ServiceStatus = ({ style }) => {
  const { list: leftService } = useSelector(
    (state) => state.nms.nonhyeon.service
  );
  const { list: rightService } = useSelector(
    (state) => state.nms.kimpo.service
  );

  let NONHYEON = [];
  let KIMPO = [];
  leftService.map((elem) => {
    const NAME = elem.GROUP_NAME;
    const STATUS = elem.GROUP_AVAIL_STATUS;
    NONHYEON.push({ NAME, STATUS });
  });
  rightService.map((elem) => {
    const NAME = elem.GROUP_NAME;
    const STATUS = elem.GROUP_AVAIL_STATUS;
    KIMPO.push({ NAME, STATUS });
  });

  const BOX = {
    leftStyle: {
      width: `${885 / NMS_NONHYEON_CONFIG.service.length}px`,
    },
    rightStyle: {
      width: `${1023 / NMS_KIMPO_CONFIG.service.length}px`,
    },
  };

  return (
    <section className="p-abs" style={style}>
      <Title style={LeftTitleStyle} text={"L7 서비스"} />
      <Title style={RightTitleStyle} text={"L7 서비스"} />
      <DIV1>
        {leftService.map((data, index) => {
          return (
            <NmsBox
              key={String(index)}
              data={NONHYEON[index]}
              style={BOX.leftStyle}
            >
              {data.NETWORK_LIST.map((data) => (
                <UpdownGroup key={data.ID} data={data} display="column" />
              ))}
            </NmsBox>
          );
        })}
      </DIV1>
      <DIV2>
        {rightService.map((data, index) => {
          return (
            <NmsBox
              key={String(index)}
              data={KIMPO[index]}
              style={BOX.rightStyle}
            >
              {data.NETWORK_LIST.map((data) => (
                <UpdownGroup key={data.ID} data={data} display="column" />
              ))}
            </NmsBox>
          );
        })}
      </DIV2>
    </section>
  );
};

ServiceStatus.propTypes = {
  style: PropTypes.object,
};
export default ServiceStatus;
