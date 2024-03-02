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

const initialState2: fontSizeState = {
    value: 16,
}

export const fontSize2 = createSlice({
    name: "fontSize2",
    initialState: initialState2,
    reducers: {
        increment2: (state) => {state.value += 2},
        decrement2: (state) => {state.value -= 2},
    },
});

export const {increment: increment2, decrement: decrement2} = fontSize.actions
export default {fontSize: fontSize.reducer, fontSize2: fontSize2.reducer}