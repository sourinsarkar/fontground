import { createSlice } from "@reduxjs/toolkit";

interface boldState {
    value: boolean
}

const initialState: boldState = {
    value: false,
}

export const bold = createSlice({
    name: "bold",
    initialState,
    reducers: {
        toggleBold: (state) => {state.value = !state.value},
    },
});

export const { toggleBold } = bold.actions
export default bold.reducer