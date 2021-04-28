import React from "react";
import { render } from "react-dom";
import { HashRouter } from "react-router-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./reducers";
import "./scss/main.scss";
import App from "./App";
(async () => {
  const nodeEnv = process.env.NODE_ENV;
  const store = createStore(rootReducer);
  const globalConfigPro = await fetch("./config/global.config.json");
  window.GLOBAL_CONFIG = await globalConfigPro.json();

  window.API_URL = window.GLOBAL_CONFIG.API_URL[nodeEnv];
  if (window.GLOBAL_CONFIG.isLocal)
    window.API_URL = window.GLOBAL_CONFIG.API_URL.local;

  render(
    <HashRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </HashRouter>,
    document.getElementById("root")
  );
})();
