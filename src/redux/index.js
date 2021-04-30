import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import testReducer from "./testSlice";
import uiReducer from "./uiSlice";

export default configureStore({
  reducer: {
    test: testReducer,
    ui: uiReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
