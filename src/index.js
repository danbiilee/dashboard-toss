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
  sms: {
    left: "",
    right: "",
    sidetop: "",
    sidebottom: "",
  },
  nms: {},
};

window.API_ID = initialApiId;

const setApiId = (type, config) => {
  const keys = Object.keys(initialApiId[type]);

  keys.forEach((key) => {
    const ids = config[key].groups.map((elem) => elem.resourceId);
    API_ID[type][key] = ids.join(",");
  });
};

(async () => {
  const nodeEnv = process.env.NODE_ENV;
  const globalConfigPro = await fetch("./config/global.config.json");
  const smsConfigPro = await fetch("./config/sms.config.json");
  const nmsNonhyeonConfigPro = await fetch("./config/nms.nonhyeon.config.json");
  const nmsKimpoConfigPro = await fetch("./config/nms.kimpo.config.json");

  window.GLOBAL_CONFIG = await globalConfigPro.json();
  window.SMS_CONFIG = await smsConfigPro.json();
  window.NMS_NONHYEON_CONFIG = await nmsNonhyeonConfigPro.json();
  window.NMS_KIMPO_CONFIG = await nmsKimpoConfigPro.json();

  window.API_URL = window.GLOBAL_CONFIG.API_URL[nodeEnv];
  if (window.GLOBAL_CONFIG.isLocal)
    window.API_URL = window.GLOBAL_CONFIG.API_URL.local;

  setApiId(SMS, SMS_CONFIG);

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
