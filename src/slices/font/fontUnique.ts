import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface fontUniqueState {
    value: String;
}

const initialState: fontUniqueState = {value: "Inter"}

export const fontUnique = createSlice({
    name: "fontUnique",
    initialState,
    reducers: {
        newFont: (state, action: PayloadAction<String>) => {
            state.value = action.payload;
        },
    },
});

export const { newFont } = fontUnique.actions;
export default fontUnique.reducer