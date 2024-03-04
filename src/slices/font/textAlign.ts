import { createSlice } from "@reduxjs/toolkit";

type textAlignState = {
  value: "left" | "center" | "right";
};

const initialState: textAlignState = { value: "center" };

export const textAlign = createSlice({
  name: "textAlign",
  initialState,
  reducers: {
    alignLeft: (state) => {state.value = "left";},
    alignCenter: (state) => {state.value = "center";},
    alignRight: (state) => {state.value = "right";},
  },
});

export const { alignLeft, alignCenter, alignRight } = textAlign.actions;
export default textAlign.reducer;