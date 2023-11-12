import { IconoirProvider } from "iconoir-react";

function Test() {
  return (
    <IconoirProvider
      iconProps={{
        color: "#AAAAAA",
        strokeWidth: 1,
        width: "1.5em",
        height: "1.5em",
      }}
    >
    </IconoirProvider>
  );
}

export default Test;
