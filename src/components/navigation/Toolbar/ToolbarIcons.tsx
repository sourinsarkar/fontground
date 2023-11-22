import { IconoirProvider } from "iconoir-react";

type ReactNode = string | number | boolean | null | undefined | ReactElement | ReactFragment | ReactPortal;

function Nav_Icon_Prop({children}: { children: ReactNode }) {
  return (
    <IconoirProvider
      iconProps={{
        color: "#000",
        strokeWidth: 2,
        width: "0.9em",
        height: "0.9em",
      }}
    >
      {children}
    </IconoirProvider>
  );
}

export default Nav_Icon_Prop
