import {
  PencilIcon,
  Square2StackIcon,
  CircleStackIcon,
  CursorArrowRaysIcon,
} from "@heroicons/react/24/outline";
import { FloatButton } from "antd";

const MainToolbar = () => {
  return (
    <FloatButton.Group
      shape="square"
      placement="top"
      className="top-[10px] left-[10px] w-fit"
    >
      <FloatButton icon={<Square2StackIcon />} />
      <FloatButton icon={<CircleStackIcon />} />
      <FloatButton icon={<CursorArrowRaysIcon />} />
      <FloatButton icon={<PencilIcon />} />
    </FloatButton.Group>
  );
};

export default MainToolbar;
