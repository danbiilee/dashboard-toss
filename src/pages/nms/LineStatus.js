import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Title from "../../components/title/index";
import NmsBox from "../../components/boxes/NmsBox";
import UpdownGroup from "../../components/updown/UpdownGroup";

const FlexWrapper = styled.div`
  display: flex;
`;

const LEFT1 = styled.div`
  display: inline-block;
  padding: 38px 13px 13px 13px;
  width: 885px;
  height: 270px;
`;
const RIGHT1 = styled.div`
  display: inline-block;
  padding: 38px 13px 13px 13px;
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
  const LeftTitleStyle = {
    left: "13px",
    top: "12px",
  };
  const RightTitleStyle = {
    left: "898px",
    top: "12px",
  };
  const FIRSTCANTERNAME = [
    { NAME: "인터넷 회선" },
    { NAME: "본사 전용선" },
    { NAME: "DWDM" },
  ];
  const SECONDCANTERNAME = [{ NAME: "대외계" }];
  const BOX = {
    left1Style: {
      width: "273px",
    },
    right1Style: {
      width: "320px",
    },
    left2Style: {
      width: "841px",
    },
    right2Style: {
      width: "983px",
    },
  };

  // test data
  const columnDataArr = [
    {
      id: 1,
      status: "NORMAL",
      name: "장비명01 (CISCO백본)",
      up_cnt: 1,
      down_cnt: 15,
    },
    {
      id: 2,
      status: "NORMAL",
      name: "장비명01 (CISCO백본)",
      up_cnt: 1,
      down_cnt: 0,
    },
  ];
  const rowDataArr = [
    {
      id: 1,
      status: "NORMAL",
      name: "장비명01 (CISCO백본)",
      up_cnt: 1,
      down_cnt: 15,
    },
    {
      id: 2,
      status: "NORMAL",
      name: "장비명01 (CISCO백본)",
      up_cnt: 1,
      down_cnt: 0,
    },
    {
      id: 3,
      status: "NORMAL",
      name: "장비명01 (CISCO백본)",
      up_cnt: 1,
      down_cnt: 15,
    },
    {
      id: 4,
      status: "NORMAL",
      name: "장비명01 (CISCO백본)",
      up_cnt: 1,
      down_cnt: 0,
    },
  ];

  return (
    <section className="p-abs" style={style}>
      <Title style={LeftTitleStyle} text={"회선상태"} />
      <Title style={RightTitleStyle} text={"회선상태"} />
      <LEFT1>
        {FIRSTCANTERNAME.map((data, index) => {
          return (
            <NmsBox key={String(index)} data={data} style={BOX.left1Style}>
              {columnDataArr.map((data) => (
                <UpdownGroup key={data.id} data={data} display="column" />
              ))}
            </NmsBox>
          );
        })}
      </LEFT1>
      <RIGHT1>
        {FIRSTCANTERNAME.map((data, index) => {
          return (
            <NmsBox key={String(index)} data={data} style={BOX.right1Style}>
              {columnDataArr.map((data) => (
                <UpdownGroup key={data.id} data={data} display="column" />
              ))}
            </NmsBox>
          );
        })}
      </RIGHT1>
      <LEFT2>
        {SECONDCANTERNAME.map((data, index) => {
          return (
            <NmsBox key={String(index)} data={data} style={BOX.left2Style}>
              <FlexWrapper style={BOX.left2Style}>
                {rowDataArr.map((data) => (
                  <UpdownGroup key={data.id} data={data} display="row" />
                ))}
              </FlexWrapper>
            </NmsBox>
          );
        })}
      </LEFT2>
      <RIGHT2>
        {SECONDCANTERNAME.map((data, index) => {
          return (
            <NmsBox key={String(index)} data={data} style={BOX.right2Style}>
              <FlexWrapper style={BOX.right2Style}>
                {rowDataArr.map((data) => (
                  <UpdownGroup key={data.id} data={data} display="row" />
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
