import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
<<<<<<< HEAD
import { fetchData } from "../src/redux/testSlice";
import { resize } from "./helpers/index";

const App = () => {
  const str = "App123dddddddd";
  const dispatch = useDispatch();
  dispatch(fetchData());

=======
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
  const dispatch = useDispatch();
>>>>>>> d0d1070797cb19bdde3208fd97728c2b00ad76f1
  useEffect(() => {
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
<<<<<<< HEAD
  }, []);

  return (
    <div className="container temp-bg-nms">
      <h1>{str}</h1>
    </div>
=======
  }, [dispatch]);
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
>>>>>>> d0d1070797cb19bdde3208fd97728c2b00ad76f1
  );
};

export default App;
