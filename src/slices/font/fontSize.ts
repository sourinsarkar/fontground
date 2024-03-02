import { createSlice } from "@reduxjs/toolkit";
// import type { PayloadAction } from "@reduxjs/toolkit";

interface fontSizeState {
    value: number
}

const initialState: fontSizeState = {
    value: 16,
}

export const fontSize = createSlice({
    name: "fontSize",
    initialState,
    reducers: {
        increment: (state) => {state.value += 1},
        decrement: (state) => {state.value -= 1},
    },
});

export const {increment, decrement} = fontSize.actions
export default fontSize.reducer