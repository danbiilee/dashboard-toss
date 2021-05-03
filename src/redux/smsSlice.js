import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { callAPI } from "../helpers/index";

const SLICE_NAME = SMS;

const inititalStateOfCenter = {
  isError: false,
  isLoading: false,
  list: [],
};

const initialStateOfSlice = {
  left: inititalStateOfCenter,
  right: inititalStateOfCenter,
  sidetop: inititalStateOfCenter,
  sidebottom: inititalStateOfCenter,
};

export const fetchSMS = createAsyncThunk(
  `${SLICE_NAME}/fetchSMS`,
  async (param) => {
    const apiId = API_ID[param];
    const url = `${API_URL}/sms/${apiId}`;
    const response = await callAPI(url);
    return response;
  }
);

export const slice = createSlice({
  name: SLICE_NAME,
  initialState: initialStateOfSlice,
  reducers: {},
  extraReducers: {
    [fetchSMS.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchSMS.fulfilled]: (state, action) => {
      const { arg } = action.meta;
      state.isLoading = false;
      state[arg].list = action.payload.list;
    },
    [fetchSMS.rejcted]: (state) => {
      state.isLoading = false;
      state.isError = true;
    },
  },
});

export default slice.reducer;
