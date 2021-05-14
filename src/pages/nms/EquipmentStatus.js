import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import Title from "../../components/title/index";
import NmsBox from "../../components/boxes/NmsBox";
import styled, { css } from "styled-components";
import StatusCircle from "../../components/statusCircle/index";

const DIV1 = styled.div`
  display: inline-flex;
  padding: 38px 20px 13px 13px;
  width: 885px;
  height: 228px;
`;
const DIV2 = styled.div`
  display: inline-flex;
  padding: 38px 16px 13px 13px;
  width: 1023px;
  height: 228px;
`;
const ERRORCNT = styled.div`
  color: white;
  font-size: 21pt;
  margin-top: 14px;
  height: 49px;
  text-align: center;
  border-bottom: 2px solid #2c2d31;
`;
const C = {
  style: {
    status: css`
      width: 50%;
      height: 60px;
      display: inline-block;
    `,
    circle: css`
      width: 100%;
      text-align: center;
      margin-top: 4px;
      height: 21px;
      display: inline-block;
    `,
    cnt: css`
      padding-top: 8px;
      text-align: center;
      font-size: 14pt;
    `,
  },
};
const CRITICAL = {
  STATUS: styled.div`
    ${C.style.status};
    border-right: 1px solid black;
  `,
  CIRCLE: styled.div`
    ${C.style.circle};
  `,
  STATUSCNT: styled.div`
    ${C.style.cnt};
    color: #d95f5f;
    border-top: 2px solid #691b1e;
  `,
};
const MAJOR = {
  STATUS: styled.div`
    ${C.style.status};
  `,
  CIRCLE: styled.div`
    ${C.style.circle};
  `,
  STATUSCNT: styled.div`
    ${C.style.cnt};
    color: #e0802b;
    border-top: 2px solid #6b3918;
  `,
};

const EquipmentStatus = ({ style }) => {
  const { list: leftStatus } = useSelector(
    (state) => state.nms.nonhyeon.equipment
  );
  const { list: rightStatus } = useSelector(
    (state) => state.nms.kimpo.equipment
  );

  const NonhyeonEquipment = NMS_NONHYEON_CONFIG.equipment;
  const kimpoEquipment = NMS_KIMPO_CONFIG.equipment;

  const LeftTitleStyle = {
    left: "13px",
    top: "12px",
  };
  const RightTitleStyle = {
    left: "898px",
    top: "12px",
  };
  const NONHYEON = [];
  const KIMPO = [];
  if (leftStatus.length > 0 && rightStatus.length > 0) {
    for (var i = 0; i < NonhyeonEquipment.length; i++) {
      NONHYEON.push({
        NAME: `${leftStatus[i].GROUP_NAME}`,
        STATUS: `${leftStatus[i].STATUS}`,
      });
    }
    for (var j = 0; j < kimpoEquipment.length; j++) {
      KIMPO.push({
        NAME: `${rightStatus[j].GROUP_NAME}`,
        STATUS: `${rightStatus[j].STATUS}`,
      });
    }
  }
  const BOX = {
    leftStyle: {
      width: `${885 / NMS_NONHYEON_CONFIG.equipment.length}px`,
    },
    rightStyle: {
      width: `${1023 / NMS_KIMPO_CONFIG.equipment.length}px`,
    },
  };
  return (
    <section className="p-abs" style={style}>
      <Title style={LeftTitleStyle} text={"장비상태"} />
      <Title style={RightTitleStyle} text={"장비상태"} />
      <DIV1>
        {NONHYEON.map((data, index) => {
          return (
            <NmsBox key={String(index)} data={data} style={BOX.leftStyle}>
              <ERRORCNT>{leftStatus[index].EQUIPMENT_COUNT}</ERRORCNT>
              <CRITICAL.STATUS>
                <CRITICAL.CIRCLE>
                  <StatusCircle
                    data={{ status: "CRITICAL" }}
                    size="sm"
                  ></StatusCircle>
                </CRITICAL.CIRCLE>
                <CRITICAL.STATUSCNT>
                  {leftStatus[index].CRITICAL}
                </CRITICAL.STATUSCNT>
              </CRITICAL.STATUS>
              <MAJOR.STATUS>
                <MAJOR.CIRCLE>
                  <StatusCircle
                    data={{ status: "TROUBLE" }}
                    size="sm"
                  ></StatusCircle>
                </MAJOR.CIRCLE>
                <MAJOR.STATUSCNT>{leftStatus[index].TROUBLE}</MAJOR.STATUSCNT>
              </MAJOR.STATUS>
            </NmsBox>
          );
        })}
      </DIV1>
      <DIV2>
        {KIMPO.map((data, index) => {
          return (
            <NmsBox key={String(index)} data={data} style={BOX.rightStyle}>
              <ERRORCNT>{rightStatus[index].EQUIPMENT_COUNT}</ERRORCNT>
              <CRITICAL.STATUS>
                <CRITICAL.CIRCLE>
                  <StatusCircle
                    data={{ status: "CRITICAL" }}
                    size="sm"
                  ></StatusCircle>
                </CRITICAL.CIRCLE>
                <CRITICAL.STATUSCNT>
                  {rightStatus[index].CRITICAL}
                </CRITICAL.STATUSCNT>
              </CRITICAL.STATUS>
              <MAJOR.STATUS>
                <MAJOR.CIRCLE>
                  <StatusCircle
                    data={{ status: "TROUBLE" }}
                    size="sm"
                  ></StatusCircle>
                </MAJOR.CIRCLE>
                <MAJOR.STATUSCNT>{rightStatus[index].TROUBLE}</MAJOR.STATUSCNT>
              </MAJOR.STATUS>
            </NmsBox>
          );
        })}
      </DIV2>
    </section>
  );
};

EquipmentStatus.propTypes = {
  style: PropTypes.object,
};
export default EquipmentStatus;
