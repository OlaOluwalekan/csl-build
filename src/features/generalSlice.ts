import { createSlice } from "@reduxjs/toolkit";
import { generalInitialState } from "../types/store.interface";

const initialState: generalInitialState = {
  navIsOpen: false,
};

const generalSlice = createSlice({
  name: "general",
  initialState,
  reducers: {},
});

export default generalSlice.reducer;
