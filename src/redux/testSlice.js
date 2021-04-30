import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { callAPI } from "../helpers/index";

const SLICE_NAME = "test";

const initialState = {
  isError: false,
  isLoading: false,
  list: [],
};

export const fetchData = createAsyncThunk(
  `${SLICE_NAME}/fetchData`,
  async () => {
    const url = `${API_URL}/sms/gimpo`;
    const response = await callAPI(url);
    return response;
  }
);

export const slice = createSlice({
  name: SLICE_NAME,
  initialState,
  reducers: {},
  extraReducers: {
    [fetchData.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchData.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.list = action.payload.list;
    },
    [fetchData.rejcted]: (state) => {
      state.isLoading = true;
      state.isError = true;
    },
  },
});

export default slice.reducer;
