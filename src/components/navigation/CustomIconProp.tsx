import { IconoirProvider } from "iconoir-react";

type ReactNode = string | number | boolean | null | undefined | ReactElement | ReactFragment | ReactPortal;

function CustomIconProp({children}: { children: ReactNode }) {
  return (
    <IconoirProvider
      iconProps={{
        color: "#000",
        strokeWidth: 2,
        width: "1em",
        height: "1em",
      }}
    >
      {children}
    </IconoirProvider>
  );
}

export default CustomIconProp
