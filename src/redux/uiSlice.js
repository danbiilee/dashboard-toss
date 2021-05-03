import { createSlice } from "@reduxjs/toolkit";

const SLICE_NAME = "ui";

const initialState = {
  tab: SMS,
};

export const slice = createSlice({
  name: SLICE_NAME,
  initialState,
  reducers: {
    clickTab: (state, action) => {
      state.tab = action.payload;
    },
  },
});

export const { clickTab } = slice.actions;

export default slice.reducer;
