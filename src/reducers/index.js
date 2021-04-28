import { combineReducers } from "redux";
import smsPageReducer from "./smsPageReducer";
import nmsPageReducer from "./nmsPageReducer";

const rootReducer = combineReducers({
  smsPage: smsPageReducer,
  nmsPage: nmsPageReducer,
});

export default rootReducer;
