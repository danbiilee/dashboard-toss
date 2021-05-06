import React from "react";
import { render } from "react-dom";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import theme from "./helpers/theme";
import store from "./redux";
import "./scss/main.scss";
import App from "./App";

const initialApiId = {
  left: "",
  right: "",
  sidetop: "",
  sidebottom: "",
};

window.API_ID = initialApiId;

const setApiId = (config) => {
  const keys = Object.keys(initialApiId);

  keys.forEach((key) => {
    const ids = config[key].groups.map((elem) => elem.resourceId);
    API_ID[key] = ids.join(",");
  });
};

(async () => {
  const nodeEnv = process.env.NODE_ENV;
  const globalConfigPro = await fetch("./config/global.config.json");
  window.GLOBAL_CONFIG = await globalConfigPro.json();

  window.API_URL = window.GLOBAL_CONFIG.API_URL[nodeEnv];
  if (window.GLOBAL_CONFIG.isLocal)
    window.API_URL = window.GLOBAL_CONFIG.API_URL.local;

  setApiId(GLOBAL_CONFIG);

  render(
    <HashRouter>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </Provider>
    </HashRouter>,
    document.getElementById("root")
  );
})();
