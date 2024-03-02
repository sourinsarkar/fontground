import { createSlice } from "@reduxjs/toolkit";

type TextAlignState = {
  value: "left" | "center" | "right";
};

const initialState: TextAlignState = { value: "center" };

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