import React, { useState } from "react";
import { ToolEnum } from "../../interfaces/enums/tool.enum";
import { ToolContext } from "./use-tool-provider";

const ToolProvider = ({ children }: { children: React.ReactNode }) => {
  const [activeTool, setActiveTool] = useState<ToolEnum>(ToolEnum.Picker);

  return (
    <ToolContext.Provider
      value={{
        activeTool,
        setActiveTool,
      }}
    >
      {children}
    </ToolContext.Provider>
  );
};

export default ToolProvider;
