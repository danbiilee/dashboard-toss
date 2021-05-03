import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import NonhyeonContainer from "./NonhyeonContainer";
import KimpoContainer from "./KimpoContainer";
import DevelopContainer from "./developContainer";
import { fetchSMS } from "../../redux/smsSlice";

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

const SMSPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSMS("left"));
    dispatch(fetchSMS("right"));
    dispatch(fetchSMS("sidetop"));
    dispatch(fetchSMS("sidebottom"));
  }, [dispatch]);

  return (
    <>
      <NonhyeonContainer style={NonhyeonLayout} />
      <KimpoContainer style={KimpoLayout} />
      <DevelopContainer style={DevelopLayout} />
    </>
  );
};

export default SMSPage;
