import { useState } from "react";

const useFontSize = () => {
    const [fontSize, setFontSize] = useState(16);

    const increaseFontSize = () => {
        setFontSize(prevFontSize => prevFontSize + 1);
    };

    const decreaseFontSize = () => {
        setFontSize(prevFontSize => prevFontSize + 1);
    };

    return { fontSize, increaseFontSize, decreaseFontSize };
}

export default useFontSize