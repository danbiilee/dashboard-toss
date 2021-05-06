import React from "react";
import { render } from "react-dom";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import theme from "./helpers/theme";
import store from "./redux";
import "./scss/main.scss";
import App from "./App";

window.API_ID = {
  left: "",
  right: "",
  sidetop: "",
  sidebottom: "",
};

const formatConfig = (config) => {
  const left = config.left.groups.map((elem) => elem.resourceId);
  const right = config.right.groups.map((elem) => elem.resourceId);
  const sidetop = config.sidetop.groups.map((elem) => elem.resourceId);
  const sidebottom = config.sidebottom.groups.map((elem) => elem.resourceId);
  window.API_ID.left = left.join(",");
  window.API_ID.right = right.join(",");
  window.API_ID.sidetop = sidetop.join(",");
  window.API_ID.sidebottom = sidebottom.join(",");
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

  formatConfig(window.GLOBAL_CONFIG);

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
