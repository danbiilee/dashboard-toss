import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchData } from "../src/redux/testSlice";
import { resize } from "./helpers/index";

const App = () => {
  const str = "App123dddddddd";
  const dispatch = useDispatch();
  dispatch(fetchData());

  useEffect(() => {
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <div className="container temp-bg-nms">
      <h1>{str}</h1>
    </div>
  );
};

export default App;
