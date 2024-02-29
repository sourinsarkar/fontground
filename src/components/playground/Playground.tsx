import { useContext } from "react";
import FontSizeContext from "../context/FontSizeContext";

const Playground: React.FC = () => {
  const { fontSize } = useContext(FontSizeContext);

  return (
    <h1 style={{ fontSize: fontSize }} className="sub-font">All the world's a stage, and all the men and women merely players.</h1>
  );
};

export default Playground
