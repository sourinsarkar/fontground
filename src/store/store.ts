import { configureStore } from "@reduxjs/toolkit";
import FontSizeReducer from "../slices/font/fontSize"
import BoldReducer from "../slices/font/bold"
import ItalicReducer from "../slices/font/italic"
import UnderlineReducer from "../slices/font/underline"
import TextAlignReducer from "../slices/font/textAlign"
import FontColorReducer from "../slices/font/fontColor"
import FontUniqueReducer from "../slices/font/fontUnique"

export const store = configureStore({
    reducer: {
        fontSize: FontSizeReducer,
        bold: BoldReducer,
        italic: ItalicReducer,
        underline: UnderlineReducer,
        textAlign: TextAlignReducer,
        fontColor: FontColorReducer,
        fontUnique: FontUniqueReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch