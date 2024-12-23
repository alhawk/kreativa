import { ConfigProvider } from "antd";
import MainToolbar from "./components/toolbars/main-toolbar/MainToolbar";
import Drawer from "./components/drawer/Drawer";
import ToolProvider from "./providers/tool-provider/ToolProvider";

const App = () => {
  return (
    <div className="h-screen bg-gray-50">
      <ToolProvider>
        <ConfigProvider>
          <MainToolbar />

          <Drawer />
        </ConfigProvider>
      </ToolProvider>
    </div>
  );
};

export default App;
