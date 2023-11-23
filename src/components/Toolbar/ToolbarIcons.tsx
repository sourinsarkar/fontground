import { IconoirProvider } from "iconoir-react";
import { ReactNode } from 'react'

function ToolbarIcon({children}: { children: ReactNode }) {
  return (
    <IconoirProvider
      iconProps={{
        color: "#000",
        strokeWidth: 1,
        width: "1em",
        height: "1em",
      }}
    >
      {children}
    </IconoirProvider>
  );
}

export default ToolbarIcon
