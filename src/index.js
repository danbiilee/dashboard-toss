import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./redux";
import "./scss/main.scss";
import App from "./App";

(async () => {
  const nodeEnv = process.env.NODE_ENV;
  const globalConfigPro = await fetch("./config/global.config.json");
  window.GLOBAL_CONFIG = await globalConfigPro.json();

  window.API_URL = window.GLOBAL_CONFIG.API_URL[nodeEnv];
  if (window.GLOBAL_CONFIG.isLocal)
    window.API_URL = window.GLOBAL_CONFIG.API_URL.local;

  render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById("root")
  );
})();
