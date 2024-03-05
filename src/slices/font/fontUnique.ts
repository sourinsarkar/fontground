import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface fontUniqueState {
    value: String;
}

const initialState: fontUniqueState = {value: "Arial"}

export const fontUnique = createSlice({
    name: "fontUnique",
    initialState,
    reducers: {
        setFont: (state, action: PayloadAction<String>) => {
            state.value = action.payload;
        },
    },
});

export const { setFont } = fontUnique.actions;
export default fontUnique.reducer