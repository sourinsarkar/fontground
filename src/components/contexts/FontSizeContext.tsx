import { createContext } from "react"

const FontSizeContext = createContext({
    fontSize: 16,
    increaseFontSize: () => {},
    decreaseFontSize: () => {},
});

export default FontSizeContext