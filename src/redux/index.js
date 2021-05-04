import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import smsReducer from "./smsSlice";

export default configureStore({
  reducer: {
    sms: smsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
