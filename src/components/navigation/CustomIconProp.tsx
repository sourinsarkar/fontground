import { IconoirProvider } from "iconoir-react";

type ReactNode = string | number | boolean | null | undefined | ReactElement | ReactFragment | ReactPortal;

function CustomIconProp({children}: { children: ReactNode }) {
  return (
    <IconoirProvider
      iconProps={{
        color: "#000",
        strokeWidth: 1.5,
        width: "1.5em",
        height: "1.5em",
      }}
    >
      {children}
    </IconoirProvider>
  );
}

export default CustomIconProp
