import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import Title from "../../components/title/index";
import NmsBox from "../../components/boxes/NmsBox";
import UpdownGroup from "../../components/updown/UpdownGroup";

const FlexWrapper = styled.div`
  display: flex;
`;

const LEFT1 = styled.div`
  display: inline-flex;
  padding: 38px 20px 13px 13px;
  width: 885px;
  height: 270px;
`;
const RIGHT1 = styled.div`
  display: inline-flex;
  padding: 38px 16px 13px 13px;
  width: 1023px;
  height: 270px;
`;
const LEFT2 = styled.div`
  display: inline-block;
  position: absolute;
  padding: 0px 13px 13px 13px;
  width: 885px;
  height: 154px;
  top: 269px;
  left: 0px;
`;
const RIGHT2 = styled.div`
  display: inline-block;
  position: absolute;
  padding: 0px 13px 13px 13px;
  width: 1023px;
  height: 154px;
  top: 269px;
  left: 885px;
`;

const LineStatus = ({ style }) => {
  const { list: leftline1 } = useSelector((state) => state.nms.nonhyeon.line1);
  const { list: rightline1 } = useSelector((state) => state.nms.kimpo.line1);
  const { list: leftline2 } = useSelector((state) => state.nms.nonhyeon.line2);
  const { list: rightline2 } = useSelector((state) => state.nms.kimpo.line2);

  const LeftTitleStyle = {
    left: "13px",
    top: "12px",
  };
  const RightTitleStyle = {
    left: "898px",
    top: "12px",
  };

  let LEFTCENTERNAME = [];
  let RIGHTCENTERNAME = [];
  let LEFTCENTERNAME2 = [];
  let RIGHTCENTERNAME2 = [];
  leftline1.map((elem) => {
    const NAME = elem.GROUP_NAME;
    const STATUS = elem.GROUP_AVAIL_STATUS;
    LEFTCENTERNAME.push({ NAME, STATUS });
  });
  rightline1.map((elem) => {
    const NAME = elem.GROUP_NAME;
    const STATUS = elem.GROUP_AVAIL_STATUS;
    RIGHTCENTERNAME.push({ NAME, STATUS });
  });
  leftline2.map((elem) => {
    const NAME = elem.GROUP_NAME;
    const STATUS = elem.GROUP_AVAIL_STATUS;
    LEFTCENTERNAME2.push({ NAME, STATUS });
  });
  rightline2.map((elem) => {
    const NAME = elem.GROUP_NAME;
    const STATUS = elem.GROUP_AVAIL_STATUS;
    RIGHTCENTERNAME2.push({ NAME, STATUS });
  });

  const BOX = {
    left1Style: {
      width: `${885 / NMS_NONHYEON_CONFIG.line1.length}px`,
    },
    right1Style: {
      width: `${1023 / NMS_KIMPO_CONFIG.line1.length}px`,
    },
    left2Style: {
      width: `${842 / NMS_NONHYEON_CONFIG.line2.length}px`,
    },
    right2Style: {
      width: `${983 / NMS_KIMPO_CONFIG.line2.length}px`,
    },
  };

  return (
    <section className="p-abs" style={style}>
      <Title style={LeftTitleStyle} text={"회선상태"} />
      <Title style={RightTitleStyle} text={"회선상태"} />
      <LEFT1>
        {leftline1.map((data, index) => {
          return (
            <NmsBox
              key={String(index)}
              data={LEFTCENTERNAME[index]}
              style={BOX.left1Style}
            >
              {data.NETWORK_LIST.map((data) => (
                <UpdownGroup key={data.ID} data={data} display="column" />
              ))}
            </NmsBox>
          );
        })}
      </LEFT1>
      <RIGHT1>
        {rightline1.map((data, index) => {
          return (
            <NmsBox
              key={String(index)}
              data={RIGHTCENTERNAME[index]}
              style={BOX.right1Style}
            >
              {data.NETWORK_LIST.map((data) => (
                <UpdownGroup key={data.ID} data={data} display="column" />
              ))}
            </NmsBox>
          );
        })}
      </RIGHT1>
      <LEFT2>
        {leftline2.map((data, index) => {
          return (
            <NmsBox
              key={String(index)}
              data={LEFTCENTERNAME2[index]}
              style={BOX.left2Style}
            >
              <FlexWrapper style={BOX.left2Style}>
                {data.NETWORK_LIST.map((data) => (
                  <UpdownGroup key={data.ID} data={data} display="row" />
                ))}
              </FlexWrapper>
            </NmsBox>
          );
        })}
      </LEFT2>
      <RIGHT2>
        {rightline2.map((data, index) => {
          return (
            <NmsBox
              key={String(index)}
              data={RIGHTCENTERNAME2[index]}
              style={BOX.right2Style}
            >
              <FlexWrapper style={BOX.right2Style}>
                {data.NETWORK_LIST.map((data) => (
                  <UpdownGroup key={data.ID} data={data} display="row" />
                ))}
              </FlexWrapper>
            </NmsBox>
          );
        })}
      </RIGHT2>
    </section>
  );
};

LineStatus.propTypes = {
  style: PropTypes.object,
};
export default LineStatus;
