import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import styled from "styled-components";
import Header from "./components/header/index";
import SMSPage from "./pages/sms";
import NMSPage from "./pages/nms";
import { resize } from "./helpers";

const S = {
  BackgroundImage: styled.div`
    /* background-image: url("../assets/images/sms.png"); */
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
          {/* 라우트 컴포넌트 수정하기 */}
          <Route exact path="/" component={SMSPage} />
          <Route className="nms" path="/nms" component={NMSPage} />
        </Switch>
      </div>
    </>
  );
};

export default App;
