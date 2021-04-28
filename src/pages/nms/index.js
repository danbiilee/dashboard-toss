import React from "react";
import styled from "styled-components";

const S = {
  LayoutImage: styled.div`
    background-image: url("../assets/images/common/toss-nms.png");
    width: 1920px;
    height: 1080px;
    opacity: 1;
    z-index: 1;
    opacity: 1;
    z-index: -1;
  `,
};

const NMSPage = () => {
  return (
    <>
      <S.LayoutImage className="bg" />)
    </>
  );
};

export default NMSPage;
