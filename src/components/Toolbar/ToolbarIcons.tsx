import { IconoirProvider } from "iconoir-react";
import { ReactNode } from 'react'

function ToolbarIcons({children}: { children: ReactNode }) {
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

export default ToolbarIcons
