import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import styled from "styled-components";
import Header from "./components/Header/index";
import SMSPage from "./pages/sms";
import NMSPage from "./pages/nms";
import { resize } from "./helpers";

const S = {
  BackgroundImage: styled.div`
    background-image: url("../assets/images/common/toss-sms.png");
  `,
};
const App = () => {
  useEffect(() => {
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);
  return (
    <>
      <div className="container">
        <Header />
        <S.BackgroundImage className="bg" />
        <Switch>
          <Route exact path="/" component={SMSPage} />
          <Route path="/nms" component={NMSPage} />
        </Switch>
      </div>
    </>
  );
};

export default App;
