import React from "react";
import PropTypes from "prop-types";
import Title from "../../components/title/index";
import NmsBox from "../../components/boxes/NmsBox";
import styled, { css } from "styled-components";
import StatusCircle from "../../components/statusCircle/index";

const DIV1 = styled.div`
  display: inline-block;
  padding: 38px 13px 13px 13px;
  width: 885px;
  height: 228px;
`;
const DIV2 = styled.div`
  display: inline-block;
  padding: 38px 13px 13px 13px;
  width: 1023px;
  height: 228px;
`;
const ERRORCNT = styled.div`
  color: white;
  font-size: 21pt;
  margin-top: 14px;
  height: 49px;
  text-align: center;
  border-bottom: 2px solid gray;
`;
const C = {
  style: {
    status: css`
      width: 65px;
      height: 60px;
      display: inline-block;
    `,
    circle: css`
      width: 13px;
      height: 21px;
      display: inline-block;
      margin: 3px 24px 0px 28px;
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
  const LeftTitleStyle = {
    left: "13px",
    top: "12px",
  };
  const RightTitleStyle = {
    left: "898px",
    top: "12px",
  };
  const NONHYEON = [
    { NAME: "보안구간", STATUS: 0 },
    { NAME: "채널계", STATUS: 1 },
    { NAME: "대외계", STATUS: 1 },
    { NAME: "서비스망", STATUS: 1 },
    { NAME: "관리망", STATUS: 1 },
    { NAME: "콜센터", STATUS: 0 },
  ];
  const KIMPO = [
    { NAME: "보안구간", STATUS: 1 },
    { NAME: "채널계", STATUS: 1 },
    { NAME: "대외계", STATUS: 1 },
    { NAME: "서비스망", STATUS: 2 },
    { NAME: "관리망", STATUS: 0 },
    { NAME: "콜센터", STATUS: 0 },
    { NAME: "개발망", STATSU: 1 },
  ];
  const BOX = {
    style: {
      width: "131px",
    },
  };
  return (
    <section className="p-abs" style={style}>
      <Title style={LeftTitleStyle} text={"장비상태"} />
      <Title style={RightTitleStyle} text={"장비상태"} />
      <DIV1>
        {NONHYEON.map((data, index) => {
          return (
            <NmsBox key={String(index)} data={data} style={BOX.style}>
              <ERRORCNT>160</ERRORCNT>
              <CRITICAL.STATUS>
                <CRITICAL.CIRCLE>
                  <StatusCircle
                    data={{ status: 0 }}
                    size={"nms"}
                  ></StatusCircle>
                </CRITICAL.CIRCLE>
                <CRITICAL.STATUSCNT>1</CRITICAL.STATUSCNT>
              </CRITICAL.STATUS>
              <MAJOR.STATUS>
                <MAJOR.CIRCLE>
                  <StatusCircle
                    data={{ status: 1 }}
                    size={"nms"}
                  ></StatusCircle>
                </MAJOR.CIRCLE>
                <MAJOR.STATUSCNT>15</MAJOR.STATUSCNT>
              </MAJOR.STATUS>
            </NmsBox>
          );
        })}
      </DIV1>
      <DIV2>
        {KIMPO.map((data, index) => {
          return (
            <NmsBox key={String(index)} data={data} style={BOX.style}>
              <ERRORCNT>160</ERRORCNT>
              <CRITICAL.STATUS>
                <CRITICAL.CIRCLE>
                  <StatusCircle
                    data={{ status: 0 }}
                    size={"nms"}
                  ></StatusCircle>
                </CRITICAL.CIRCLE>
                <CRITICAL.STATUSCNT>1</CRITICAL.STATUSCNT>
              </CRITICAL.STATUS>
              <MAJOR.STATUS>
                <MAJOR.CIRCLE>
                  <StatusCircle
                    data={{ status: 1 }}
                    size={"nms"}
                  ></StatusCircle>
                </MAJOR.CIRCLE>
                <MAJOR.STATUSCNT>15</MAJOR.STATUSCNT>
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
