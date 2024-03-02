import { configureStore } from "@reduxjs/toolkit";
import FontSizeReducer from "../slices/font/fontSize"

export const store = configureStore({
    reducer: {
        fontSize: FontSizeReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch