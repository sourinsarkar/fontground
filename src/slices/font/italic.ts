import { createSlice } from "@reduxjs/toolkit";

interface italicState {
    value: boolean
}

const initialState: italicState = {
    value: false,
}

export const italic = createSlice({
    name: "itatic",
    initialState,
    reducers: {
        toggleItalic: (state) => {state.value = !state.value},
    },
});

export const { toggleItalic } = italic.actions
export default italic.reducer