import { useState } from "react";

const useFontSize = (initialFontSize: number = 16) => {
    const [fontSize, setFontSize] = useState(initialFontSize);

    const increaseFontSize = () => {
        setFontSize(prevFontSize => prevFontSize + 1);
    };

    const decreaseFontSize = () => {
        if(!(fontSize === 0)) setFontSize(prevFontSize => prevFontSize - 1);
    };

    return { fontSize, increaseFontSize, decreaseFontSize };
}

export default useFontSize