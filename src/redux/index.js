import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import smsReducer from "./smsSlice";
import nmsReducer from "./nmsSlice";

export default configureStore({
  reducer: {
    sms: smsReducer,
    nms: nmsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
