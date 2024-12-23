import { createContext, useContext } from "react";
import { ToolEnum } from "../../interfaces/enums/tool.enum";

export interface ToolProviderValue {
  activeTool: ToolEnum;
  setActiveTool: (tool: ToolEnum) => void;
}

export const defaultContextValue: ToolProviderValue = {
  activeTool: ToolEnum.Picker,
  setActiveTool: Function,
};

export const ToolContext = createContext(defaultContextValue);

export const useToolProvider = () => {
  const context = useContext(ToolContext);

  if (!context) {
    throw Error("App must be wrapped with ToolProvider");
  }

  return context;
};

export default useToolProvider;
