import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit"

interface pageBackgroundState {
    value: string;
}

const initialState: pageBackgroundState = {
    value: "Inter"
}

export const pageBackground = createSlice({
    name: "pageBackground",
    initialState,
    reducers: {
        pageBg: (state, action: PayloadAction<string>) => {
            state.value = action.payload 
        },
    },
});

export const  { pageBg } = pageBackground.actions;
export default pageBackground.reducer