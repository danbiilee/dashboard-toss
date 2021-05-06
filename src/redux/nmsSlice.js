import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { callAPI } from "../helpers/index";

const SLICE_NAME = NMS;

const inititalStateOfCenter = {
  isError: false,
  isLoading: false,
  list: [],
};

const initialStateOfSlice = {
  nonhyun: {
    left: inititalStateOfCenter,
    right: inititalStateOfCenter,
    equipment: inititalStateOfCenter,
    line1: inititalStateOfCenter,
    line2: inititalStateOfCenter,
    service: inititalStateOfCenter,
  },
  gimpo: {
    left: inititalStateOfCenter,
    right: inititalStateOfCenter,
    equipment: inititalStateOfCenter,
    line1: inititalStateOfCenter,
    line2: inititalStateOfCenter,
    service: inititalStateOfCenter,
  },
};

/**
1. 인터넷 회선
http://192.168.10.65:9005/dashboard_toss/nms/priority/123,45

1.대외
http://192.168.10.65:9005/dashboard_toss/nms/priority/
 */
export const fetchNMS = createAsyncThunk(
  `${SLICE_NAME}/fetchNMS`,
  async (/*param*/) => {
    // console.log("param", param);
    // const apiId = API_ID[param];
    const apiId = "";
    const url = `${API_URL}/${NMS}/priority/${apiId}`;
    const response = await callAPI(url);
    return response;
  }
);

export const slice = createSlice({
  name: SLICE_NAME,
  initialState: initialStateOfSlice,
  reducers: {},
  extraReducers: {
    [fetchNMS.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchNMS.fulfilled]: (state, action) => {
      const { center, type } = action.meta.arg;
      state[center][type].isLoading = false;
      state[center][type].list = action.payload.list;
    },
    [fetchNMS.rejcted]: (state) => {
      state.isLoading = false;
      state.isError = true;
    },
  },
});

export default slice.reducer;
