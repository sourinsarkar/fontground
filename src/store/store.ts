import { configureStore } from "@reduxjs/toolkit";
import FontSizeReducer from "../slices/font/size"
import BoldReducer from "../slices/font/bold"
import ItalicReducer from "../slices/font/italic"
import UnderlineReducer from "../slices/font/underline"
import TextAlignReducer from "../slices/font/textAlign"

export const store = configureStore({
    reducer: {
        fontSize: FontSizeReducer,
        bold: BoldReducer,
        italic: ItalicReducer,
        underline: UnderlineReducer,
        textAlign: TextAlignReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch