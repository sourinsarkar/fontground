import { useSelector } from "react-redux";
import type { RootState } from "../store/store";

const Playground: React.FC = () => {
  const fontSize = useSelector((state: RootState) => state.fontSize.value);
  const toBold = useSelector((state: RootState) => state.bold.value);
  const toItalic = useSelector((state: RootState) => state.italic.value);

  return (
    <h1 className="sub-font"
    style={{ fontSize:`${fontSize}px`,
             fontWeight: toBold ? "bold" : "normal",
             fontStyle: toItalic ? "italic" : "normal",
             }}
             >
              All the world's a stage, and all the men and women merely players.</h1>
  );
};

export default Playground
