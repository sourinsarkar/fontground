import { configureStore } from "@reduxjs/toolkit";
import FontSizeReducer from "../slices/font/fontSize"

export const store = configureStore({
    reducer: {
        fontSize: FontSizeReducer,
    },
})