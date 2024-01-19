import Toolbar from "../Toolbar/Toolbar";
import FontSizeContext from "../contexts/FontSizeContext";
import useFontSize from "../customHooks/useFontSize";
import Playground from "../playground/Playground";

const ParentComponent: React.FC = () => {
    const fontSizeState = useFontSize();

    return (
        <FontSizeContext.Provider value={fontSizeState}>
            <Toolbar />
            <Playground />
        </FontSizeContext.Provider>
    );
}

export default ParentComponent