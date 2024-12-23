import {
  PencilIcon,
  Square2StackIcon,
  CircleStackIcon,
  CursorArrowRaysIcon,
} from "@heroicons/react/24/outline";
import { FloatButton } from "antd";
import { ToolEnum } from "../../../interfaces/enums/tool.enum";
import useToolProvider from "../../../providers/tool-provider/use-tool-provider";

const MainToolbar = () => {
  const { activeTool, setActiveTool } = useToolProvider();

  return (
    <FloatButton.Group
      shape="square"
      placement="top"
      className="top-[10px] left-[10px] w-fit"
    >
      <FloatButton
        icon={<CursorArrowRaysIcon />}
        onClick={() => setActiveTool(ToolEnum.Picker)}
        type={activeTool === ToolEnum.Picker ? "primary" : "default"}
      />
      <FloatButton
        icon={<Square2StackIcon />}
        onClick={() => setActiveTool(ToolEnum.Rect)}
        type={activeTool === ToolEnum.Rect ? "primary" : "default"}
      />
      <FloatButton
        icon={<CircleStackIcon />}
        onClick={() => setActiveTool(ToolEnum.Circle)}
        type={activeTool === ToolEnum.Circle ? "primary" : "default"}
      />
      <FloatButton
        icon={<PencilIcon />}
        onClick={() => setActiveTool(ToolEnum.Line)}
        type={activeTool === ToolEnum.Line ? "primary" : "default"}
      />
    </FloatButton.Group>
  );
};

export default MainToolbar;
