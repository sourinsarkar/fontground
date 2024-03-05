import { useSelector } from "react-redux";
import type { RootState } from "../store/store";

const Playground: React.FC = () => {
  const fontSize = useSelector((state: RootState) => state.fontSize.value);
  const toBold = useSelector((state: RootState) => state.bold.value);
  const toItalic = useSelector((state: RootState) => state.italic.value);
  const toUnderline = useSelector((state: RootState) => state.underline.value);
  const toAlignText = useSelector((state: RootState) => state.textAlign.value);
  const color = useSelector((state: RootState) => state.fontColor.value); 
  const newFont = useSelector((state: RootState) => state.fontUnique.value); 

  return (
    <div className="w-full">
      <h1 className="sub-font"
      style={{ fontSize:`${fontSize}px`,
              fontWeight: toBold ? "bold" : "normal",
              fontStyle: toItalic ? "italic" : "normal",
              textDecoration: toUnderline ? "underline" : "none",
              textAlign: `${toAlignText}`,
              color: color,
              fontFamily: `${newFont}`,
              }}
              >
                All the world's a stage, and all the men and women merely players.</h1>
    </div>
  );
};

export default Playground
