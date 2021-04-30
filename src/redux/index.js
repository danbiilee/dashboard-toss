import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import testReducer from "./testSlice";

export default configureStore({
  reducer: {
    test: testReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
