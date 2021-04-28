import React from "react";
import { render } from "react-dom";
<<<<<<< HEAD
import { Provider } from "react-redux";
import store from "./redux";
import "./scss/main.scss";
import App from "./App";

=======
import { HashRouter } from "react-router-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./reducers";
import "./scss/main.scss";
import App from "./App";
>>>>>>> d0d1070797cb19bdde3208fd97728c2b00ad76f1
(async () => {
  const nodeEnv = process.env.NODE_ENV;
  const store = createStore(rootReducer);
  const globalConfigPro = await fetch("./config/global.config.json");
  window.GLOBAL_CONFIG = await globalConfigPro.json();

  window.API_URL = window.GLOBAL_CONFIG.API_URL[nodeEnv];
  if (window.GLOBAL_CONFIG.isLocal)
    window.API_URL = window.GLOBAL_CONFIG.API_URL.local;

  render(
<<<<<<< HEAD
    <Provider store={store}>
      <App />
    </Provider>,
=======
    <HashRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </HashRouter>,
>>>>>>> d0d1070797cb19bdde3208fd97728c2b00ad76f1
    document.getElementById("root")
  );
})();
