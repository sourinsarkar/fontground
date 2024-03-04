import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface fontColorState {
  value: string;
}

const initialState: fontColorState = { value: "#0055ff" };

export const fontColor = createSlice({
  name: "fontColor",
  initialState,
  reducers: {
    setColor: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { setColor } = fontColor.actions;
export default fontColor.reducer;
