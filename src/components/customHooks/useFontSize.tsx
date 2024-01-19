import { useState } from "react";

const useFontSize = (initialFontSize: number = 16) => {
    const [fontSize, setFontSize] = useState(initialFontSize);

    const increaseFontSize = () => {
        setFontSize(prevFontSize => prevFontSize + 1);
        console.log("Up clicked.")
    };
    
    const decreaseFontSize = () => {
        if(!(fontSize === 0)) setFontSize(prevFontSize => prevFontSize - 1);
        console.log("Down clicked.")
    };

    return { fontSize, increaseFontSize, decreaseFontSize };
}

export default useFontSize