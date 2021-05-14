import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { callAPI } from "../helpers/index";

const SLICE_NAME = NMS;

const inititalStateOfCenter = {
  isError: false,
  isLoading: false,
  list: [],
};

const initialStateOfSlice = {
  nonhyeon: {
    left: inititalStateOfCenter,
    equipment: inititalStateOfCenter,
    line1: inititalStateOfCenter,
    line2: inititalStateOfCenter,
    service: inititalStateOfCenter,
  },
  kimpo: {
    right: inititalStateOfCenter,
    equipment: inititalStateOfCenter,
    line1: inititalStateOfCenter,
    line2: inititalStateOfCenter,
    service: inititalStateOfCenter,
  },
};

export const fetchNMS = createAsyncThunk(
  `${SLICE_NAME}/fetchNMS`,
  async (param) => {
    const { center, type, apiname } = param;
    const apiId = API_ID.nms[center][type];
    let url = `${API_URL}/${NMS}/${apiname}/${apiId}`;
    if (apiname !== "status")
      url = `${API_URL}/${NMS}/${apiname}/${apiId}/${type}`;
    const response = await callAPI(url);
    return response;
  }
);

export const slice = createSlice({
  name: SLICE_NAME,
  initialState: initialStateOfSlice,
  reducers: {},
  extraReducers: {
    [fetchNMS.pending]: (state, action) => {
      const { center, type } = action.meta.arg;

      state[center][type].isLoading = true;
    },

    [fetchNMS.fulfilled]: (state, action) => {
      const { center, type } = action.meta.arg;

      state[center][type].isLoading = false;
      state[center][type].list = action.payload.list;
    },

    [fetchNMS.rejected]: (state, action) => {
      const { center, type } = action.meta.arg;

      state[center][type].isLoading = false;
      state[center][type].isError = true;
    },
  },
});

export default slice.reducer;
