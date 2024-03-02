import { createSlice } from "@reduxjs/toolkit";

interface underlineState {
    value: boolean,
}

const initialState: underlineState = {
    value: false,
}

export const underline = createSlice ({
    name: "underline",
    initialState,
    reducers: {
        toggleUnderline: (state) => {state.value = !state.value},
    },
});

export const { toggleUnderline } = underline.actions
export default underline.reducer