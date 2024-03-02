import { configureStore } from "@reduxjs/toolkit";
import FontSizeReducer from "../slices/font/size"
import BoldReducer from "../slices/font/bold"
import ItalicReducer from "../slices/font/italic"

export const store = configureStore({
    reducer: {
        fontSize: FontSizeReducer,
        bold: BoldReducer,
        italic: ItalicReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch