import React from "react";
import NonhyeonContainer from "./NonhyeonContainer";
import KimpoContainer from "./KimpoContainer";
import DevelopContainer from "./developContainer";

const SMSPage = () => {
  const NonhyeonLayout = {
    width: "790px",
    height: "1010px",
    top: "65px",
    left: "12px",
  };
  const KimpoLayout = {
    width: "790px",
    height: "1010px",
    top: "65px",
    left: "845px",
  };
  const DevelopLayout = {
    width: "229px",
    height: "1010px",
    top: "65px",
    left: "1680px",
  };
  return (
    <>
      <NonhyeonContainer style={NonhyeonLayout} />
      <KimpoContainer style={KimpoLayout} />
      <DevelopContainer style={DevelopLayout} />
    </>
  );
};

export default SMSPage;
