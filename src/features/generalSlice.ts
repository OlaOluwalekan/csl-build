import { createSlice } from "@reduxjs/toolkit";
import { generalInitialState } from "../types/general.interface";

const initialState: generalInitialState = {
  navIsOpen: false,
};

const generalSlice = createSlice({
  name: "general",
  initialState,
  reducers: {
    toggleNav: (state, { payload }) => {
      state.navIsOpen = payload;
    },
  },
});

export const { toggleNav } = generalSlice.actions;

export default generalSlice.reducer;
